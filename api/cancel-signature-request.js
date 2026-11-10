
 // NHE Signatures: authenticated cancellation of a pending request.
 // Deploy as api/cancel-signature-request.js.
 module.exports = async function handler(req, res) {
   res.setHeader('Cache-Control', 'no-store');
   if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
   try {
     const base = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
     const publicKey = process.env.SUPABASE_PUBLISHABLE_KEY;
     const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
     if (!base || !publicKey || !serviceKey) return res.status(500).json({ error: 'Server configuration incomplete' });
     const token = /^Bearer (.+)$/.exec(req.headers.authorization || '')?.[1];
     if (!token) return res.status(401).json({ error: 'Employee sign-in required' });
     const requestId = req.body?.requestId;
     if (typeof requestId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(requestId)) {
       return res.status(400).json({ error: 'Valid request ID required' });
     }
     const authResponse = await fetch(base + '/auth/v1/user', {
       headers: { apikey: publicKey, Authorization: 'Bearer ' + token }
     });
     if (!authResponse.ok) return res.status(401).json({ error: 'Employee session expired' });
     const user = await authResponse.json();
     if (!user?.id) return res.status(401).json({ error: 'Employee session invalid' });
     const headers = { apikey: serviceKey, Authorization: 'Bearer ' + serviceKey };
     const profileResponse = await fetch(base + '/rest/v1/profiles?id=eq.' + encodeURIComponent(user.id) + '&select=role', { headers });
     if (!profileResponse.ok) throw new Error('Unable to verify employee role');
     const profiles = await profileResponse.json();
     if (!['admin', 'office', 'technician'].includes(profiles?.[0]?.role)) return res.status(403).json({ error: 'Not authorized' });
     // Conditional, atomic update: only a pending request can be cancelled.
     // The signing RPC also requires pending, so a cancelled link cannot be claimed.
     const response = await fetch(base + '/rest/v1/signature_requests?id=eq.' + encodeURIComponent(requestId) + '&status=eq.pending', {
       method: 'PATCH',
       headers: { ...headers, 'Content-Type': 'application/json', Prefer: 'return=representation' },
       body: JSON.stringify({ status: 'cancelled' })
     });
     if (!response.ok) throw new Error('Unable to cancel request (HTTP ' + response.status + ')');
     const changed = await response.json();
     if (!Array.isArray(changed) || changed.length !== 1) {
       return res.status(409).json({ error: 'Request is no longer pending. It may already be signed, cancelled, or processing. Refresh the job to see its status.' });
     }
     return res.status(200).json({ success: true, status: 'cancelled' });
   } catch (error) {
     return res.status(500).json({ error: error?.message || 'Cancellation failed' });
   }
 };
