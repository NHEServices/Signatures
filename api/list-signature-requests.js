
{// NHE Signatures: authenticated, read-only status list.
 // Place this file at api/list-signature-requests.js in the GitHub repository.
}
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const url = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
    const publicKey = process.env.SUPABASE_PUBLISHABLE_KEY;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !publicKey || !serviceKey) {
      return res.status(500).json({
        error: 'Server configuration incomplete'
      });
    }

    const token = /^Bearer (.+)$/.exec(
      req.headers.authorization || ''
    )?.[1];

    if (!token) {
      return res.status(401).json({
        error: 'Employee sign-in required'
      });
    }

    const userResponse = await fetch(url + '/auth/v1/user', {
      headers: {
        apikey: publicKey,
        Authorization: 'Bearer ' + token
      }
    });

    if (!userResponse.ok) {
      return res.status(401).json({
        error: 'Employee session expired'
      });
    }

    const user = await userResponse.json();

    const headers = {
      apikey: serviceKey,
      Authorization: 'Bearer ' + serviceKey
    };

    const profileResponse = await fetch(
      url + '/rest/v1/profiles?id=eq.' +
      encodeURIComponent(user.id) +
      '&select=role',
      { headers }
    );

    if (!profileResponse.ok) {
      throw new Error('Unable to verify employee role');
    }

    const profiles = await profileResponse.json();

    if (!['admin', 'office', 'technician'].includes(profiles?.[0]?.role)) {
      return res.status(403).json({
        error: 'Not authorized'
      });
    }

    const params = new URLSearchParams({
      select: 'id,customer_name,customer_email,form_type,document_data,status,created_at,expires_at',
      order: 'created_at.desc',
      limit: '500'
    });

    const response = await fetch(
      url + '/rest/v1/signature_requests?' + params,
      { headers }
    );

    if (!response.ok) {
      throw new Error('Unable to load signature requests');
    }

    const rows = await response.json();

    return res.status(200).json({
      requests: rows
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Unable to load requests'
    });
  }
};
