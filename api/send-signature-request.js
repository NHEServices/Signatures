
const crypto = require('node:crypto');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const url = (process.env.SUPABASE_URL || '').replace(/\/$/, '');
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    if (!url || !key || !serviceKey || !resendKey) {
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
        apikey: key,
        Authorization: 'Bearer ' + token
      }
    });

    if (!userResponse.ok) {
      return res.status(401).json({
        error: 'Invalid employee session'
      });
    }

    const user = await userResponse.json();

    const headers = {
      apikey: serviceKey,
      Authorization: 'Bearer ' + serviceKey,
      'Content-Type': 'application/json'
    };

    const profileResponse = await fetch(
      url + '/rest/v1/profiles?id=eq.' +
      encodeURIComponent(user.id) +
      '&select=role',
      { headers }
    );

    if (!profileResponse.ok) {
      throw new Error('Employee profile lookup failed');
    }

    const profiles = await profileResponse.json();

    if (!['admin', 'office', 'technician'].includes(profiles?.[0]?.role)) {
      return res.status(403).json({
        error: 'Employee not authorized'
      });
    }

    const body = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : (req.body || {});

    const email = String(body.customerEmail || '')
      .trim()
      .toLowerCase();

    const name = String(body.customerName || '').trim();
    const formType = body.formType;

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254
    ) {
      return res.status(400).json({
        error: 'Valid customer email required'
      });
    }

    if (
      !name ||
      name.length > 150 ||
      !['auth', 'completion'].includes(formType)
    ) {
      return res.status(400).json({
        error: 'Invalid customer or form'
      });
    }

    const rawToken = crypto.randomBytes(32).toString('hex');

    const tokenHash = crypto
      .createHash('sha256')
      .update(rawToken)
      .digest('hex');

    const expiresAt = new Date(
      Date.now() + 72 * 60 * 60 * 1000
    ).toISOString();

    const data = {
      customer: name,
      jobNo: String(body.jobNo || '').slice(0, 100),
      address: String(body.address || '').slice(0, 250),
      city: String(body.city || '').slice(0, 150),
      insurer: String(body.insurer || '').slice(0, 150),
      claim: String(body.claim || '').slice(0, 100),
      loss: String(body.loss || '').slice(0, 30),
      tech: String(body.tech || '').slice(0, 150),
      formType
    };

    if (!data.address.trim()) {
      return res.status(400).json({
        error: 'Property address required'
      });
    }

    const record = {
      token_hash: tokenHash,
      customer_email: email,
      customer_name: name,
      form_type: formType,
      document_data: data,
      created_by: user.id,
      expires_at: expiresAt,
      status: 'pending'
    };

    const save = await fetch(
      url + '/rest/v1/signature_requests',
      {
        method: 'POST',
        headers: {
          ...headers,
          Prefer: 'return=representation'
        },
        body: JSON.stringify(record)
      }
    );

    const saved = await save.json().catch(() => null);

    if (!save.ok || !saved?.[0]?.id) {
      return res.status(500).json({
        error: 'Could not save signature request'
      });
    }

    // Always use the approved NHE production domain.
    const link =
      'https://nhesignatures.vercel.app/sign.html?token=' +
      rawToken;

    const formName = formType === 'auth'
      ? 'Work Authorization and Assignment of Claim'
      : 'Job Completion Form';

    const message = {
      from: 'NHE Signatures <signatures@nheservices.com>',
      to: [email],
      subject: 'NHE Services - Document for Your Signature',
      text: `Hello ${name},

NHE Services has prepared a ${formName} for your review and electronic signature.

Review and sign: ${link}

This link expires in 72 hours.

If you were not expecting this request, contact NHE Services directly.

NHE Services`
    };

    const response = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + resendKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      }
    );

    if (!response.ok) {
      await fetch(
        url + '/rest/v1/signature_requests?id=eq.' +
        saved[0].id,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({
            status: 'email_failed'
          })
        }
      );

      return res.status(502).json({
        error: 'Customer email was not accepted'
      });
    }

    return res.status(200).json({
      ok: true,
      requestId: saved[0].id,
      expiresAt
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Signature request failed: ' + error.message
    });
  }
};
