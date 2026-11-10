const crypto = require('node:crypto');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const base = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
    const publicKey = process.env.SUPABASE_PUBLISHABLE_KEY;
    const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!base || !publicKey || !secret) return res.status(500).json({ error: 'Server configuration incomplete' });
    const accessToken = /^Bearer (.+)$/.exec(req.headers.authorization || '')?.[1];
    if (!accessToken) return res.status(401).json({ error: 'Sign in required' });
    const authResponse = await fetch(base + '/auth/v1/user', {
      headers: { apikey: publicKey, Authorization: 'Bearer ' + accessToken }
    });
    if (!authResponse.ok) return res.status(401).json({ error: 'Employee session expired' });
    const user = await authResponse.json();
    if (!user?.id) return res.status(401).json({ error: 'Invalid employee session' });
    const headers = { apikey: secret, Authorization: 'Bearer ' + secret };
    const profileResponse = await fetch(base + '/rest/v1/profiles?id=eq.' + encodeURIComponent(user.id) + '&select=role', { headers });
    if (!profileResponse.ok) throw new Error('Could not verify administrator role');
    const profiles = await profileResponse.json();
    if (profiles?.[0]?.role !== 'admin') return res.status(403).json({ error: 'Administrator access required' });

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const action = body.action;
    const table = base + '/rest/v1/authorized_signatures';
    const activeUrl = table + '?is_active=eq.true';
    const jsonHeaders = { ...headers, 'Content-Type': 'application/json' };
    if (action === 'status') {
      const response = await fetch(activeUrl + '&select=representative_name,authorized_at&limit=1', { headers });
      if (!response.ok) throw new Error('Could not read signature status');
      const active = (await response.json())[0];
      return res.status(200).json({ active: !!active, representativeName: active?.representative_name || null, authorizedAt: active?.authorized_at || null });
    }
    if (action === 'disable') {
      const response = await fetch(activeUrl, { method: 'PATCH', headers: jsonHeaders, body: JSON.stringify({ is_active: false }) });
      if (!response.ok) throw new Error('Could not disable signature');
      return res.status(200).json({ ok: true });
    }
    if (action !== 'save') return res.status(400).json({ error: 'Unknown action' });
    const name = String(body.representativeName || '').trim();
    if (!name || name.length > 150 || body.consent !== true) return res.status(400).json({ error: 'Name and explicit signature authorization required' });
    const imageData = String(body.imageData || '');
    const match = /^data:image\/png;base64,([A-Za-z0-9+/]+={0,2})$/.exec(imageData);
    if (!match || imageData.length > 350000) return res.status(400).json({ error: 'Invalid or oversized PNG signature' });
    const bytes = Buffer.from(match[1], 'base64');
    if (bytes.length < 100 || bytes.length > 250000 || bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
      return res.status(400).json({ error: 'Invalid signature image' });
    }
    const storagePath = user.id + '/' + crypto.randomUUID() + '.png';
    const upload = await fetch(base + '/storage/v1/object/authorized-signatures/' + storagePath, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'image/png', 'x-upsert': 'false' },
      body: bytes
    });
    if (!upload.ok) throw new Error('Private signature image upload failed; verify the authorized-signatures bucket exists');
    const record = {
      representative_name: name,
      storage_path: storagePath,
      is_active: false,
      authorized_by: user.id,
      authorized_at: new Date().toISOString()
    };
    const insert = await fetch(table, { method: 'POST', headers: { ...jsonHeaders, Prefer: 'return=representation' }, body: JSON.stringify(record) });
    const inserted = await insert.json().catch(() => null);
    if (!insert.ok || !inserted?.[0]?.id) {
      await fetch(base + '/storage/v1/object/authorized-signatures/' + storagePath, { method: 'DELETE', headers }).catch(() => {});
      throw new Error('Signature record could not be saved');
    }
    const deactivate = await fetch(activeUrl, { method: 'PATCH', headers: jsonHeaders, body: JSON.stringify({ is_active: false }) });
    if (!deactivate.ok) throw new Error('Signature stored but previous signature could not be deactivated; contact administrator');
    const activate = await fetch(table + '?id=eq.' + encodeURIComponent(inserted[0].id), {
      method: 'PATCH', headers: { ...jsonHeaders, Prefer: 'return=representation' }, body: JSON.stringify({ is_active: true })
    });
    if (!activate.ok) throw new Error('Signature stored but could not be activated; contact administrator');
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Authorized signature operation failed: ' + error.message });
  }
};
