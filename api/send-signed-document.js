// Vercel serverless function: private signed PDF -> fixed NHE office recipients.
// Never expose RESEND_API_KEY in browser code or GitHub.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({error:'Method not allowed'}); }
  try {
    const token = /^Bearer (.+)$/.exec(req.headers.authorization || '')?.[1];
    if (!token) return res.status(401).json({error:'Employee sign-in required'});
    const {documentId} = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    if (typeof documentId !== 'string' || !/^[0-9a-f-]{36}$/i.test(documentId)) return res.status(400).json({error:'Invalid document ID'});
    const url = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/$/, '');
    const key = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    if (!url || !key || !resendKey) return res.status(500).json({error:'Server email configuration is incomplete'});
    const authHeaders = {'apikey':key,'Authorization':'Bearer '+token};
    const userResp = await fetch(url+'/auth/v1/user',{headers:authHeaders});
    if (!userResp.ok) return res.status(401).json({error:'Employee session is invalid or expired'});
    const user = await userResp.json();
    if (!user.id) return res.status(401).json({error:'Employee authentication failed'});
    const profileResp = await fetch(url+'/rest/v1/profiles?id=eq.'+encodeURIComponent(user.id)+'&select=role',{headers:authHeaders});
    if (!profileResp.ok) return res.status(403).json({error:'Employee profile could not be verified'});
    const profiles = await profileResp.json();
    if (!['admin','office','technician'].includes(profiles?.[0]?.role)) return res.status(403).json({error:'Employee is not authorized'});
    const docResp = await fetch(url+'/rest/v1/signed_documents?id=eq.'+encodeURIComponent(documentId)+'&select=id,storage_path,customer_name,form_name,filename,uploaded_by',{headers:authHeaders});
    if (!docResp.ok) return res.status(403).json({error:'Signed document is not accessible'});
    const docs = await docResp.json();
    const doc = docs?.[0];
    if (!doc || typeof doc.storage_path !== 'string') return res.status(404).json({error:'Signed document not found or not authorized'});
    // A technician can send only documents uploaded under their own account.
    if (profiles[0].role === 'technician' && doc.uploaded_by !== user.id) return res.status(403).json({error:'Not authorized to send this document'});
    const pdfResp = await fetch(url+'/storage/v1/object/authenticated/signed-documents/'+doc.storage_path.split('/').map(encodeURIComponent).join('/'),{headers:authHeaders});
    if (!pdfResp.ok) return res.status(403).json({error:'Private signed PDF could not be accessed'});
    const bytes = Buffer.from(await pdfResp.arrayBuffer());
    if (!bytes.length || bytes.length > 15*1024*1024) return res.status(400).json({error:'PDF missing or too large to email'});
    const clean = value => String(value || '').replace(/[\r\n<>]/g,' ').slice(0,100);
    const filename = (String(doc.filename || 'NHE-Signed-Form.pdf').replace(/[^a-zA-Z0-9._-]/g,'_')).slice(0,150);
    const payload = {
      from:'NHE Signatures <signatures@nheservices.com>',
      to:['avery@nheservices.com','stephen@nheservices.com'],
      subject:'NHE Signed Form - '+clean(doc.customer_name || 'Customer'),
      text:'A signed NHE test document was saved.\n\nCustomer: '+clean(doc.customer_name)+'\nDocument: '+clean(doc.form_name)+'\n\nAttached is the signed PDF.\n\nNHE Signatures (test system)',
      attachments:[{filename,content:bytes.toString('base64')}]
    };
    const mailResp = await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Authorization':'Bearer '+resendKey,'Content-Type':'application/json'},body:JSON.stringify(payload)});
    const mailResult = await mailResp.json().catch(()=>({}));
    if (!mailResp.ok) return res.status(502).json({error:'Resend rejected the email: '+String(mailResult.message || mailResp.status)});
    return res.status(200).json({ok:true,messageId:mailResult.id});
  } catch (err) {
    return res.status(500).json({error:'Unable to send office email: '+String(err?.message || err)});
  }
};
