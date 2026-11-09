
const crypto = require('node:crypto');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const url = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      return res.status(500).json({ error: 'Server configuration incomplete' });
    }

    const body = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : (req.body || {});

    const token = body.token;

    if (typeof token !== 'string' || !/^[0-9a-f]{64}$/i.test(token)) {
      return res.status(400).json({ error: 'Invalid signing link' });
    }

    const hash = crypto.createHash('sha256').update(token).digest('hex');

    const response = await fetch(
      url + '/rest/v1/signature_requests?token_hash=eq.' +
      encodeURIComponent(hash) +
      '&select=id,customer_name,form_type,document_data,status,expires_at',
      {
        headers: {
          apikey: key,
          Authorization: 'Bearer ' + key
        }
      }
    );

    if (!response.ok) {
      return res.status(500).json({ error: 'Unable to retrieve signing request' });
    }

    const records = await response.json();
    const request = records?.[0];

    if (!request || request.status !== 'pending') {
      return res.status(404).json({
        error: 'This signing link is invalid or no longer available'
      });
    }

    if (new Date(request.expires_at).getTime() <= Date.now()) {
      return res.status(410).json({ error: 'This signing link has expired' });
    }

    return res.status(200).json({
      customerName: request.customer_name,
      formType: request.form_type,
      documentData: request.document_data
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Unable to load signing request'
    });
  }
};
