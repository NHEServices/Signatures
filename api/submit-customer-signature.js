
const crypto = require('node:crypto');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('node:fs/promises');
const path = require('node:path');

const OFFICE = ['avery@nheservices.com', 'stephen@nheservices.com'];

const clean = (v, n = 150) =>
  String(v ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, n);

const jsonHeaders = key => ({
  apikey: key,
  Authorization: 'Bearer ' + key,
  'Content-Type': 'application/json'
});

const objectPath = p =>
  p.split('/').map(encodeURIComponent).join('/');

function pngSignature(data) {
  if (typeof data !== 'string' || data.length > 350000)
    throw new Error('Invalid signature size');

  const match =
    /^data:image\/png;base64,([A-Za-z0-9+/]+={0,2})$/.exec(data);

  if (!match) throw new Error('Signature must be PNG');

  const bytes = Buffer.from(match[1], 'base64');

  if (
    bytes.length < 100 ||
    bytes.length > 250000 ||
    bytes.subarray(0, 8).toString('hex') !==
      '89504e470d0a1a0a'
  ) {
    throw new Error('Invalid signature image');
  }

  return bytes;
}

async function requireOk(response, message) {
  if (!response.ok) {
    throw new Error(
      message + ' (HTTP ' + response.status + ')'
    );
  }
  return response;
}

function drawText(
  page,
  font,
  value,
  x,
  top,
  width,
  fontSize = 10
) {
  let str = [...clean(value, 500)].map(ch => {
    try {
      font.encodeText(ch);
      return ch;
    } catch {
      return '?';
    }
  }).join('');

  if (!str) return;

  let size = fontSize;

  while (
    size > 6 &&
    font.widthOfTextAtSize(str, size) > width
  ) {
    size -= 0.25;
  }

  while (
    str &&
    font.widthOfTextAtSize(str, size) > width
  ) {
    str = str.slice(0, -1);
  }

  if (str) {
    page.drawText(str, {
      x,
      y: page.getHeight() - top,
      size,
      font,
      color: rgb(0.04, 0.08, 0.12)
    });
  }
}

function drawSignature(
  page,
  image,
  x,
  baselineTop,
  maxW,
  maxH
) {
  const scale = Math.min(
    maxW / image.width,
    maxH / image.height
  );

  page.drawImage(image, {
    x,
    y: page.getHeight() - baselineTop,
    width: image.width * scale,
    height: image.height * scale
  });
}

async function buildPdf(
  request,
  customerPng,
  repPng,
  repName,
  signerName,
  signedAt
) {
  const templateName =
    request.form_type === 'auth'
      ? 'nhe-work-authorization.pdf'
      : 'nhe-job-completion.pdf';

  const template = await fs.readFile(
    path.join(process.cwd(), templateName)
  );

  const pdf = await PDFDocument.load(template);

  if (pdf.getPageCount() !== 1) {
    throw new Error('Unexpected NHE form layout');
  }

  const page = pdf.getPage(0);
  const font = await pdf.embedFont(
    StandardFonts.Helvetica
  );

  const data = request.document_data || {};

  const customer = await pdf.embedPng(customerPng);
  const representative = await pdf.embedPng(repPng);

  const date = new Date(signedAt).toLocaleDateString(
    'en-US',
    { timeZone: 'America/New_York' }
  );

  if (request.form_type === 'auth') {
    const loss = clean(data.loss, 30);
    const parts = loss.split('-');

    drawText(
      page, font, data.claim,
      83, 247, 162
    );

    drawText(
      page,
      font,
      parts.length === 3
        ? `${parts[1]}/${parts[2]}/${parts[0]}`
        : loss,
      347, 247, 155
    );

    drawText(
      page,
      font,
      [data.address, data.city]
        .filter(Boolean)
        .join(', '),
      121, 355, 390
    );

    drawText(
      page, font, data.insurer,
      39, 439, 410
    );

    // Customer's signature
    drawSignature(
      page, customer,
      245, 625, 160, 19
    );

    // Customer's printed name
    drawText(
      page, font, signerName,
      39, 625, 195, 9
    );

    // Customer's date
    drawText(
      page, font, date,
      435, 625, 120, 9
    );

    // NHE representative's signature
    // Corrected to the second signing line
    drawSignature(
      page, representative,
      245, 665, 160, 19
    );

    // NHE representative's printed name
    drawText(
      page, font, repName,
      39, 665, 195, 9
    );

    // NHE representative's date
    drawText(
      page, font, date,
      435, 665, 120, 9
    );

  } else {
    // JOB COMPLETION FORM

    drawText(
      page, font, data.customer,
      123, 249, 392
    );

    drawText(
      page, font, data.address,
      137, 265, 375
    );

    const location = clean(data.city, 150);

    const parts = location
      .split(',')
      .map(s => s.trim());

    const city =
      parts.length > 1
        ? parts[0]
        : location;

    const region =
      parts.length > 1
        ? parts.slice(1).join(',').trim()
        : '';

    const match =
      /^([A-Za-z]{2}|[A-Za-z ]+?)\s+(\d{5}(?:-\d{4})?)$/.exec(
        region
      );

    drawText(
      page, font, city,
      112, 279, 125, 9
    );

    if (match) {
      drawText(
        page, font, match[1],
        310, 279, 42, 9
      );

      drawText(
        page, font, match[2],
        409, 279, 95, 9
      );
    } else {
      drawText(
        page, font, region,
        310, 279, 194, 9
      );
    }

    drawText(
      page, font, data.insurer,
      200, 298, 305
    );

    drawText(
      page, font, data.claim,
      135, 314, 370
    );

    // Customer's printed name
    drawText(
      page, font, signerName,
      165, 611, 280, 10
    );

    // Customer's date
    // Moved right to avoid overlapping "Date:"
    drawText(
      page, font, date,
      487, 611, 50, 9
    );

    // Customer's handwritten signature
    drawSignature(
      page, customer,
      153, 646, 300, 19
    );

    // NHE representative's signature
    drawSignature(
      page, representative,
      113, 695, 328, 19
    );

    // NHE representative's date
    drawText(
      page, font, date,
      465, 688, 100, 10
    );
  }

  pdf.setTitle(
    'NHE Services Signed ' +
    (request.form_type === 'auth'
      ? 'Work Authorization'
      : 'Job Completion')
  );

  pdf.setSubject(
    'Customer electronically signed on ' + signedAt
  );

  return Buffer.from(await pdf.save());
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  const base = (
    process.env.SUPABASE_URL || ''
  ).replace(/\/$/, '');

  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  const resend =
    process.env.RESEND_API_KEY;

  if (!base || !key || !resend) {
    return res.status(500).json({
      error: 'Server configuration incomplete'
    });
  }

  const headers = jsonHeaders(key);

  let request = null;
  let uploaded = false;

  try {
    const body =
      typeof req.body === 'string'
        ? JSON.parse(req.body)
        : req.body || {};

    if (
      typeof body.token !== 'string' ||
      !/^[a-f0-9]{64}$/i.test(body.token)
    ) {
      return res.status(400).json({
        error: 'Invalid signing link'
      });
    }

    if (body.consent !== true) {
      return res.status(400).json({
        error: 'Electronic signing consent required'
      });
    }

    const signerName = clean(body.signerName);

    if (!signerName) {
      return res.status(400).json({
        error: 'Printed name required'
      });
    }

    const customerPng = pngSignature(
      body.signatureData
    );

    const hash = crypto
      .createHash('sha256')
      .update(body.token)
      .digest('hex');

    const claimed = await requireOk(
      await fetch(
        base +
        '/rest/v1/rpc/claim_signature_request',
        {
          method: 'POST',
          headers,
          body: JSON.stringify({
            p_token_hash: hash
          })
        }
      ),
      'Could not reserve signing request'
    );

    request = (await claimed.json())?.[0];

    if (!request) {
      return res.status(409).json({
        error:
          'This signing link is expired, completed, or already being processed'
      });
    }

    if (
      !['auth', 'completion'].includes(
        request.form_type
      )
    ) {
      throw new Error('Unsupported form');
    }

    const sigResponse = await requireOk(
      await fetch(
        base +
        '/rest/v1/authorized_signatures' +
        '?is_active=eq.true' +
        '&select=storage_path,representative_name' +
        '&limit=1',
        { headers }
      ),
      'Could not load NHE authorization'
    );

    const sig = (await sigResponse.json())?.[0];

    if (!sig?.storage_path) {
      throw new Error(
        'No active NHE authorized signature'
      );
    }

    const repResponse = await requireOk(
      await fetch(
        base +
        '/storage/v1/object/' +
        'authorized-signatures/' +
        objectPath(sig.storage_path),
        { headers }
      ),
      'Could not retrieve NHE signature'
    );

    const repPng = Buffer.from(
      await repResponse.arrayBuffer()
    );

    const signedAt = new Date().toISOString();

    const pdf = await buildPdf(
      request,
      customerPng,
      repPng,
      sig.representative_name,
      signerName,
      signedAt
    );

    if (pdf.length > 15 * 1024 * 1024) {
      throw new Error(
        'Completed PDF exceeds email size limit'
      );
    }

    const data = request.document_data || {};

    const formName =
      request.form_type === 'auth'
        ? 'Work Authorization and Assignment of Claim'
        : 'Job Completion Form';

    const filename =
      `NHE_${
        request.form_type === 'auth'
          ? 'Work_Authorization'
          : 'Job_Completion'
      }_${request.id}.pdf`;

    const storagePath =
      request.created_by +
      '/remote/' +
      request.id +
      '/' +
      filename;

    await requireOk(
      await fetch(
        base +
        '/storage/v1/object/' +
        'signed-documents/' +
        objectPath(storagePath),
        {
          method: 'POST',
          headers: {
            apikey: key,
            Authorization: 'Bearer ' + key,
            'Content-Type': 'application/pdf',
            'x-upsert': 'false'
          },
          body: pdf
        }
      ),
      'Could not store signed PDF'
    );

    uploaded = true;

    const record = {
      storage_path: storagePath,
      filename,
      customer_name: request.customer_name,
      job_number:
        clean(data.jobNo, 100) || null,
      claim_number:
        clean(data.claim, 100) || null,
      property_address:
        [data.address, data.city]
          .filter(Boolean)
          .join(', ')
          .slice(0, 400) || null,
      form_type: request.form_type,
      form_name: formName,
      signed_at: signedAt,
      uploaded_by: request.created_by,
      email_status: 'pending'
    };

    const inserted = await fetch(
      base + '/rest/v1/signed_documents',
      {
        method: 'POST',
        headers: {
          ...headers,
          Prefer: 'return=representation'
        },
        body: JSON.stringify(record)
      }
    );

    if (!inserted.ok) {
      throw new Error(
        'Signed document record could not be created'
      );
    }

    const doc = (await inserted.json())?.[0];

    if (!doc?.id) {
      throw new Error(
        'Signed document ID unavailable'
      );
    }

    await requireOk(
      await fetch(
        base +
        '/rest/v1/signature_requests?id=eq.' +
        request.id +
        '&status=eq.processing',
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({
            status: 'completed',
            completed_at: signedAt
          })
        }
      ),
      'Could not finalize signing request'
    );

    const recipients = [
      ...new Set([
        ...OFFICE,
        request.customer_email.toLowerCase()
      ])
    ];

    const mail = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + resend,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from:
            'NHE Signatures <signatures@nheservices.com>',
          to: recipients,
          subject:
            'NHE Services - Your Signed ' +
            formName,
          text:
            `Attached is the completed ${formName} ` +
            `for ${request.customer_name}.\n\n` +
            'NHE Services',
          attachments: [{
            filename,
            content: pdf.toString('base64')
          }]
        })
      }
    );

    const mailBody = await mail
      .json()
      .catch(() => ({}));

    const emailUpdate = mail.ok
      ? {
          email_status: 'sent',
          email_sent_at:
            new Date().toISOString(),
          email_message_id:
            mailBody.id || null,
          email_error: null
        }
      : {
          email_status: 'failed',
          email_error: clean(
            mailBody.message ||
            'Email provider rejected message',
            500
          )
        };

    await fetch(
      base +
      '/rest/v1/signed_documents?id=eq.' +
      doc.id,
      {
        method: 'PATCH',
        headers,
        body: JSON.stringify(emailUpdate)
      }
    );

    return res.status(200).json({
      ok: true,
      documentId: doc.id,
      emailSent: mail.ok,
      message: mail.ok
        ? 'Document signed and emailed successfully.'
        : 'Document signed and saved, but email delivery needs office attention.'
    });

  } catch (error) {
    if (request && !uploaded) {
      await fetch(
        base +
        '/rest/v1/signature_requests?id=eq.' +
        request.id +
        '&status=eq.processing',
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({
            status: 'pending'
          })
        }
      ).catch(() => {});
    }

    return res.status(500).json({
      error:
        'Unable to complete signature. Please contact NHE Services if the problem continues.'
    });
  }
};
