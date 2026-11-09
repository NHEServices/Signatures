<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>NHE Services | Forms & Signatures</title><style>
:root{font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;color:#193047;background:#f3f6fa}*{box-sizing:border-box}body{margin:0}header{background:#142d43;color:white;padding:19px max(20px,calc((100vw - 1060px)/2));display:flex;justify-content:space-between;align-items:center;gap:12px}.brand{font-size:22px;font-weight:800}.sub{font-size:12px;opacity:.75}main{max-width:1060px;margin:28px auto;padding:0 18px}.card{background:white;border:1px solid #dfe7ee;border-radius:14px;padding:22px;margin-bottom:18px;box-shadow:0 3px 12px #152d4308}h1{font-size:26px;margin:0 0 6px}h2{font-size:19px;margin:0 0 14px}p{line-height:1.5}.muted{color:#647588}.actions{display:flex;flex-wrap:wrap;gap:9px}.btn{border:0;border-radius:9px;background:#175b86;color:white;padding:12px 16px;font:inherit;font-weight:650;cursor:pointer}.btn.alt{background:#e8eff5;color:#173b57}.btn.warn{background:#a23a36}.btn:disabled{opacity:.5;cursor:not-allowed}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}label{display:block;font-size:13px;font-weight:700;margin-bottom:6px}input,select{width:100%;padding:11px;border:1px solid #cbd7e1;border-radius:8px;font:inherit;background:white}input:focus,select:focus{outline:2px solid #77b7d8}.field{margin-bottom:14px}.hidden{display:none!important}.tag{display:inline-block;background:#e7f3ed;color:#1a6648;border-radius:50px;padding:5px 10px;font-size:12px}.document{background:#fff;border:1px solid #d8e0e7;padding:26px;line-height:1.6;color:#182b3c}.document h2{text-align:center;margin:0 0 20px}.document p{font-size:14px}.signature{width:100%;height:125px;border:2px dashed #b6c8d5;border-radius:8px;touch-action:none;background:#fff;display:block}.sigbox{margin:17px 0;padding:12px;border:1px solid #e0e8ee;border-radius:9px}.sigbox label{margin-bottom:9px}.document .sigbox{break-inside:avoid;page-break-inside:avoid}.document .sigbox img{break-inside:avoid;page-break-inside:avoid}.listrow{padding:14px 0;border-top:1px solid #e8edf2;display:flex;justify-content:space-between;align-items:center;gap:12px}.notice{padding:12px;background:#fff4dd;border-left:4px solid #d29a27;border-radius:6px;font-size:13px}.success{padding:12px;background:#e7f6ec;border-left:4px solid #28965d;border-radius:6px}.pill{font-size:12px;color:#53687c}.toolbar{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}.small{font-size:12px}.readonly{background:#f6f8fa}.printonly{display:none}.footer{font-size:12px;color:#6b7c8a;padding-bottom:25px}@media(max-width:640px){.grid{grid-template-columns:1fr}.card{padding:16px}.document{padding:14px}header{padding:16px}}@media print{body{background:white}header,.noprint,.toolbar,.sigbox button,.footer{display:none!important}main{margin:0;max-width:none;padding:0}.card{box-shadow:none;border:0;padding:0}.document{border:0;padding:0}.printonly{display:block}.signature{border:0;height:90px}.sigbox{border:0;padding:5px 0}.document p{font-size:12px}h1{display:none}}
</style></head><body><header><div><div class="brand">NHE Services</div><div class="sub">Forms & Signatures · Cloud draft test</div></div><span class="tag">Test version</span></header><main><section id="login" class="card"><h1>Employee Sign In</h1><p class="muted">Sign in using your NHE Signatures account.</p><div class="field"><label for="loginEmail">Email</label><input id="loginEmail" type="email" autocomplete="username"></div><div class="field"><label for="loginPassword">Password</label><input id="loginPassword" type="password" autocomplete="current-password"></div><div class="actions"><button class="btn" id="loginButton" onclick="signIn()">Sign In</button></div><p id="loginMessage" class="muted" role="status"></p></section><div id="sessionBar" class="card hidden noprint"><span id="signedInAs"></span> <button class="btn alt" style="float:right" onclick="signOut()">Sign Out</button></div><div id="appShell" class="hidden">
<section id="home"><div class="card"><h1>Customer Documents</h1><p class="muted">Create a job, prepare your NHE form, and let the customer review and sign.</p><div class="actions"><button class="btn" onclick="newJob()">+ Create New Job</button><button class="btn alt" onclick="show('jobs')">View Saved Jobs</button><button class="btn alt hidden" id="authorizedSignatureNav" onclick="openAuthorizedSignature()">Manage Authorized Signature</button></div></div><div class="card"><h2>Included Forms</h2><p>✓ Work Authorization and Assignment of Claim</p><p>✓ Job Completion Form</p><div class="notice">Test version: signed PDFs can be automatically saved to private cloud storage after database setup. Use fictional customer information and test signatures only.</div></div></section>
<section id="authorizedSignature" class="hidden"><div class="card noprint"><h1>Authorized NHE Signature</h1><p class="muted">Administrator setup only. This signature is not yet applied to outgoing documents.</p><p id="authorizedSignatureStatus" class="notice" role="status">Checking signature status…</p><div class="field"><label for="authorizedRepresentativeName">Authorized representative's printed name</label><input id="authorizedRepresentativeName" maxlength="150" autocomplete="name" placeholder="Your full name"></div><div class="field"><label>Draw your signature</label><canvas class="signature" id="authorizedSignatureCanvas" width="760" height="180" aria-label="Draw your signature here"></canvas></div><div class="toolbar"><button class="btn alt" onclick="clearAuthorizedSignature()">Clear Drawing</button></div><div class="field" style="margin-top:16px"><label style="font-weight:normal"><input type="checkbox" id="authorizedSignatureConsent" style="width:auto;margin-right:8px">I am the person named above. I authorize NHE Services to securely retain this signature for future use on NHE documents that I approve. I understand that saving it now does not apply it to any document.</label></div><div class="toolbar"><button class="btn" id="saveAuthorizedSignatureButton" onclick="saveAuthorizedSignature()">Save Authorized Signature</button><button class="btn warn" id="disableAuthorizedSignatureButton" onclick="disableAuthorizedSignature()" disabled>Disable Stored Signature</button><button class="btn alt" onclick="show('home')">Back</button></div></div></section>
<section id="editor" class="hidden"><div class="card noprint"><h1 id="editorTitle">New Job</h1><p class="muted">A technician can fill in the details before presenting the document to the customer.</p><div class="grid"><div class="field"><label>Customer / property owner name</label><input id="customer" autocomplete="name"></div><div class="field"><label>Job number (optional)</label><input id="jobNo"></div><div class="field"><label>Property address</label><input id="address" autocomplete="street-address"></div><div class="field"><label>City, state, ZIP</label><input id="city"></div><div class="field"><label>Insurance company</label><input id="insurer"></div><div class="field"><label>Claim number</label><input id="claim"></div><div class="field"><label>Date of loss</label><input id="loss" type="date"></div><div class="field"><label>Technician / NHE representative name</label><input id="tech"></div><div class="field"><label>Document to prepare</label><select id="formType"><option value="auth">Work Authorization and Assignment of Claim</option><option value="completion">Job Completion Form</option></select></div></div><div class="toolbar"><button class="btn" onclick="prepare()">Review Document →</button><button class="btn alt" onclick="openRemoteOptions()">Send for Signature</button><button class="btn alt" onclick="saveDraft()">Save Job Draft to Cloud</button><button class="btn alt" onclick="show('home')">Cancel</button></div></div></section>
 <section id="remoteOptions" class="hidden"><div class="card noprint"><h1>Send for Signature</h1><p id="remoteCustomerSummary" class="pill"></p><div class="notice"><strong>TEST ONLY:</strong> The emailed link opens a document-review page. Customers cannot sign or submit remotely yet. Send only to an email address you control, using fictional job details.</div><div class="field" style="margin-top:16px"><label for="remoteCustomerEmail">Test recipient email address</label><input id="remoteCustomerEmail" type="email" autocomplete="off" placeholder="your-test-email@example.com"></div><div class="toolbar"><button class="btn" id="sendRemoteEmailButton" onclick="sendRemoteEmailTest()">Send Test Review Link</button><button class="btn alt" onclick="show('editor')">Back to Job</button></div><p id="remoteEmailStatus" class="muted" role="status" aria-live="polite"></p></div></section>
 <section id="review" class="hidden"><div class="card"><div class="noprint"><h1>Review & Sign</h1><p class="muted">Please read the full agreement before signing. The wording below follows the supplied NHE documents.</p></div><div class="document" id="document"></div><div id="signatureInputs" class="noprint"></div><div id="signatureStatus" class="notice noprint" role="status">Signatures required: customer and NHE technician/representative. The second property owner is optional.</div><div class="toolbar noprint"><button class="btn" onclick="complete()">Complete & Save Signed Document</button><button class="btn alt" onclick="show('editor')">Edit Details</button></div></div></section>
<section id="jobs" class="hidden"><div class="card"><h1>Saved Jobs</h1><p class="muted">Search cloud-saved signed PDFs below. Cloud drafts remain available to administrators.</p><div class="field"><label for="documentSearch">Search signed documents (customer, job, claim)</label><input id="documentSearch" placeholder="Type customer, job number, or claim number" oninput="filterCloudDocuments()"></div><div id="cloudDocumentList"><p class="muted">Loading signed documents…</p></div><h2>Cloud job drafts (administrators)</h2><div id="cloudJobList"><p class="muted">Loading cloud drafts…</p></div><h2>Local prototype records</h2><div id="jobList"></div><div class="toolbar"><button class="btn" onclick="newJob()">+ New Job</button><button class="btn alt" onclick="exportData()">Export Local Backup (JSON)</button><button class="btn alt" onclick="show('home')">Back</button></div></div></section>
<section id="done" class="hidden"><div class="card noprint"><h1>Document Signed <span class="tag">Test version</span></h1><div class="success">A local copy is saved on this device. The app will also attempt to save the original-format PDF to private cloud storage automatically. Confirm the cloud status below before relying on it.</div><p><b>Office backup recipients planned:</b><br>avery@nheservices.com<br>stephen@nheservices.com</p><div class="notice">Automatic office email delivery is attempted after a successful cloud save. Confirm the email status below. Cloud PDF upload and email are for fictional test documents only.</div><p id="cloudPdfStatus" class="muted" role="status">Waiting to save PDF to cloud storage…</p><p id="officeEmailStatus" class="muted" role="status">Office email not attempted yet.</p><div class="toolbar"><button class="btn" onclick="downloadSignedPdf()">Download Original NHE Form PDF</button><button class="btn alt" id="cloudPdfButton" onclick="uploadSignedPdf()">Retry Cloud PDF Save</button><button class="btn alt" id="officeEmailButton" onclick="retryOfficeEmail()">Retry Office Email</button><button class="btn alt" onclick="emailDraft()">Open Office Email Draft</button><button class="btn alt" onclick="show('jobs')">Saved Jobs</button><button class="btn alt" onclick="newJob()">New Job</button></div></div><div class="card"><div class="document" id="finishedDocument"></div></div></section>
<div class="footer noprint">NHE Services · Test version. Cloud PDF saving requires SQL setup and verification. Remote signing is not active yet. Email delivery must be tested and verified. Not approved for real customer data.</div></div></main><script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script><script src="https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js"></script><script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script><script>
const fields=['customer','jobNo','address','city','insurer','claim','loss','tech','formType'];let current={},signatures={},currentId=null,completed=null;const key='nhe-signatures-prototype-v1';const $=id=>document.getElementById(id);const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const val=k=>esc(current[k]||'—');const date=()=>new Date().toLocaleString();const records=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return []}};const store=r=>localStorage.setItem(key,JSON.stringify(r));function show(s){['home','editor','remoteOptions','review','jobs','done','authorizedSignature'].forEach(id=>$(id).classList.toggle('hidden',id!==s));if(s==='jobs'){renderJobs();void renderCloudJobs();void renderCloudDocuments();}window.scrollTo(0,0)}function newJob(){cloudJobId=null;currentId=null;completed=null;latestUploadedDocumentId=null;signatures={};fields.forEach(k=>$(k).value=k==='formType'?'auth':'');$('editorTitle').textContent='Create New Job';show('editor')}function collect(){fields.forEach(k=>current[k]=$(k).value.trim());return current}function openRemoteOptions(){collect();if(!current.customer||!current.address){alert('Enter a customer name and property address first.');return;}$('remoteCustomerSummary').textContent=current.customer+' · '+(current.formType==='completion'?'Job Completion Form':'Work Authorization and Assignment of Claim');$('remoteEmailStatus').textContent='';show('remoteOptions')}async function sendRemoteEmailTest(){
  const status=$('remoteEmailStatus'),button=$('sendRemoteEmailButton');
  const email=$('remoteCustomerEmail').value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status.textContent='Enter a valid test email address.';return;}
  if(!sb||!employeeRole){status.textContent='Please sign in as an authorized NHE employee.';return;}
  if(!confirm('TEST ONLY: This sends a review link that does not allow signing. Use fictional job details and an email address you control. Continue?'))return;
  button.disabled=true;status.textContent='Sending test review link…';
  try{
    const {data:{session},error}=await sb.auth.getSession();
    if(error||!session?.access_token)throw new Error('Employee session expired. Please sign in again.');
    const response=await fetch('/api/send-signature-request',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+session.access_token},
      body:JSON.stringify({customerEmail:email,customerName:current.customer,formType:current.formType,jobNo:current.jobNo,address:current.address,city:current.city,insurer:current.insurer,claim:current.claim,loss:current.loss,tech:current.tech})
    });
    const result=await response.json().catch(()=>({}));
    if(!response.ok)throw new Error(result.error||'Email request failed (HTTP '+response.status+').');
    status.textContent='Resend accepted the test email. Check the test inbox (including spam). The link is for document review only.';
  }catch(e){status.textContent='Test email NOT confirmed: '+(e?.message||String(e));}
  finally{button.disabled=false;}
}
function saveDraft(){return saveCloudDraft()}function saveLocalDraft(){collect();if(!current.customer){alert('Enter a customer name first.');return}const list=records(),id=currentId||('job-'+Date.now());currentId=id;const index=list.findIndex(x=>x.id===id);const entry={id,data:{...current},updated:date(),status:'Draft',documents:index>=0?list[index].documents:[]};if(index>=0)list[index]=entry;else list.unshift(entry);store(list);alert('Job draft saved on this device.');show('jobs')}function newDoc(){const c=val('customer'),a=val('address'),i=val('insurer'),cl=val('claim');if(current.formType==='auth')return `<h2>Work Authorization and Assignment of Claim</h2><p><b>Claim #:</b> ${cl} &nbsp;&nbsp; <b>Date of Loss:</b> ${val('loss')}</p><p>We, the undersigned party, hereby authorize and direct (NHE Services aka National Home Enhancements, Inc.) to proceed with the applicable content related work such as packing, pack-out, cleaning, deodorizing, storage, and pack-in of our property items not classified as Total Loss Inventory. The cost of these services shall be determined in accordance with Xactimate pricing for content-related work, including but not limited to packing, pack-out, cleaning, deodorization, restoration, storage, and pack-in.</p><p><b>Property Address:</b> ${a}, ${val('city')}</p><p style="text-align:center"><b>Notice to Insurance Company – Assignment of Claim – Covenant of Payment</b></p><p>We authorize and instruct our adjuster(s) and/or insurance company (Listed Below) <b>${i}</b> who may be liable for this loss in whole or part, that we hereby make irrevocable assignment of claim proceeds to (NHE Services) and to attach this form to the proof of loss thereby making (NHE Services), an interested party to this claim, and to name (NHE Services) as a payee in all settlement checks and drafts in payment of repairs for pack, pack out, clean, deodorize, restore, storage, and pack in. (NHE Services) is hereby appointed attorney in fact to endorse and deposit in its accounts any insurance check or draft relating to said claim for contents pack, pack out, clean, deodorize, restore, storage, and pack in. By signing below, I acknowledge responsibility for payment for services provided and will complete any necessary documents requested by contractor/agent to complete the job. This document serves as a binding agreement between the owner(s) and NHE Services for the performance of services as detailed above.</p><p><b>Undersigned acknowledges reading the terms.</b></p>`;return `<h2>Job Completion Form</h2><p><b>Name:</b> ${c}<br><b>Address:</b> ${a}<br><b>City, State, ZIP:</b> ${val('city')}<br><b>Insurance Company:</b> ${i}<br><b>Claim #:</b> ${cl}</p><p>All work at the above address has been completed and final payment/deductible is due in full. I/We authorize the payment of the scope of work from the approved insurance estimate to be paid directly and in full by the insurance carrier to NHE Services. I/We will be responsible for any/all collection fees due to non-payment of account in full.</p><p style="text-align:center"><b>Please Remit Payment to:</b><br>NHE Services<br>PO BOX 243 Bremen, GA 30110</p>`}
const roles=()=>current.formType==='auth'?[['owner1','Property Owner / Authorized Party (1)',''],['owner2','Property Owner / Authorized Party (2) — optional',''],['rep','NHE Services Authorized Representative',current.tech]]:[['owner1','Customer Signature',current.customer],['rep','NHE Services Technician',current.tech]];function sigHtml(sigs){return roles().map(([id,label,def])=>{const sig=sigs[id];return `<div class="sigbox"><b>${esc(label)}</b><p class="small">Printed name: ${esc(sig?.name||def||'—')} &nbsp; Date: ${esc(sig?.when||'—')}</p>${sig?.image?`<img alt="Signature of ${esc(sig.name)}" style="width:280px;max-width:100%;height:90px;object-fit:contain" src="${sig.image}">`:'<div style="height:65px;border-bottom:1px solid #888"></div>'}</div>`}).join('')}function prepare(){collect();if(!current.customer||!current.address){alert('Customer name and property address are required.');return}signatures={};$('document').innerHTML=newDoc()+`<div id="liveSignatures"></div>`;$('signatureInputs').innerHTML=roles().map(([id,label,def])=>`<div class="sigbox"><label>${esc(label)}</label><div class="field"><label>Printed name</label><input id="name-${id}" value="${esc(def||current.customer)}"></div><canvas class="signature" id="canvas-${id}" width="760" height="180"></canvas><div class="toolbar"><button class="btn alt" onclick="clearSig('${id}')">Clear signature</button></div></div>`).join('');roles().forEach(([id])=>bindCanvas(id));refreshPreview();show('review')}function refreshPreview(){$('liveSignatures').innerHTML=sigHtml(signatures);const missing=[];if(!signatures.owner1?.image)missing.push('customer');if(!signatures.rep?.image)missing.push('NHE technician/representative');const el=$('signatureStatus');if(el){el.className=missing.length?'notice noprint':'success noprint';el.textContent=missing.length?'Before saving, please sign: '+missing.join(' and ')+'. (The second property owner is optional.)':'All required signatures are present. You can now complete and save.'}}function bindCanvas(id){const canvas=$('canvas-'+id),ctx=canvas.getContext('2d');ctx.strokeStyle='#18334c';ctx.lineWidth=2.7;ctx.lineCap='round';let drawing=false;function point(e){const r=canvas.getBoundingClientRect();return {x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}}canvas.addEventListener('pointerdown',e=>{e.preventDefault();drawing=true;canvas.setPointerCapture(e.pointerId);const p=point(e);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+.1,p.y+.1);ctx.stroke()});canvas.addEventListener('pointermove',e=>{if(!drawing)return;e.preventDefault();const p=point(e);ctx.lineTo(p.x,p.y);ctx.stroke()});const end=()=>{if(!drawing)return;drawing=false;signatures[id]={image:canvas.toDataURL('image/png'),name:$('name-'+id).value.trim(),when:date()};refreshPreview()};canvas.addEventListener('pointerup',end);canvas.addEventListener('pointercancel',end)}function clearSig(id){const c=$('canvas-'+id);c.getContext('2d').clearRect(0,0,c.width,c.height);delete signatures[id];refreshPreview()}function complete(){if(!signatures.owner1?.image||!signatures.rep?.image){const id=!signatures.owner1?.image?'owner1':'rep';alert('Please add the '+(id==='owner1'?'customer':'NHE technician/representative')+' signature in the signature box before saving.');$('canvas-'+id).scrollIntoView({behavior:'smooth',block:'center'});return}if(!confirm('Confirm that all signers have reviewed the agreement and consented to sign electronically. Save this document?'))return;const id=currentId||('job-'+Date.now());currentId=id;const list=records(),idx=list.findIndex(x=>x.id===id);const doc={type:current.formType,formName:current.formType==='auth'?'Work Authorization and Assignment of Claim':'Job Completion Form',signedAt:date(),data:{...current},signatures:JSON.parse(JSON.stringify(signatures))};const entry={id,data:{...current},updated:date(),status:'Signed',documents:idx>=0?[...list[idx].documents,doc]:[doc]};if(idx>=0)list[idx]=entry;else list.unshift(entry);try{store(list)}catch(e){alert('Storage is full or unavailable. The signed record was NOT saved. Please use Print / Save as PDF and keep a separate copy.')}completed=doc;latestUploadedDocumentId=null;renderCompleted();show('done');void uploadSignedPdf()}function renderCompleted(){if(!completed)return;current={...completed.data};$('finishedDocument').innerHTML=newDoc()+'<div class="signature-page">'+sigHtml(completed.signatures)+'</div>'+`<p class="small">Signed record created: ${esc(completed.signedAt)}<br>Local prototype record — no verified identity, independent audit log, or tamper-evident certificate.</p>`}function renderJobs(){const list=records();$('jobList').innerHTML=list.length?list.map(x=>`<div class="listrow"><div><b>${esc(x.data.customer)}</b><div class="pill">${esc(x.data.address)} · ${esc(x.data.claim||'No claim #')} · ${esc(x.status)}</div><div class="pill">${x.documents?.length||0} signed document(s)</div></div><div class="actions"><button class="btn alt" onclick="editJob('${x.id}')">Open</button>${x.documents?.length?`<button class="btn" onclick="openDoc('${x.id}')">Signed PDF</button>`:''}</div></div>`).join(''):'<p class="muted">No saved jobs yet.</p>'}function editJob(id){cloudJobId=null;const x=records().find(x=>x.id===id);if(!x)return;currentId=id;fields.forEach(k=>$(k).value=x.data[k]|| (k==='formType'?'auth':''));$('editorTitle').textContent='Edit Job';show('editor')}function openDoc(id){const x=records().find(x=>x.id===id);if(!x?.documents?.length)return;currentId=id;completed=x.documents[x.documents.length-1];latestUploadedDocumentId=null;renderCompleted();show('done')}function exportData(){const blob=new Blob([JSON.stringify(records(),null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='NHE_Local_Backup_'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}// Test-only PDF upload. The local signed record remains unchanged if upload fails.
// One-page letter PDF shared by download and private-cloud upload.
// Render the COMPLETE document into one canvas and fit it within a single PDF page.
async function createOnePagePdf(){
  if(!completed)throw new Error('Open a signed test document first.');
  // Both documents use their original company PDF as the background.
  if(completed.type === 'completion')return createCompletionPdf();
  if(completed.type !== 'auth')throw new Error('Unknown form type.');
  if(!window.PDFLib)throw new Error('PDF library did not load. Refresh and try again.');
  const response=await fetch('/nhe-work-authorization.pdf',{cache:'no-store'});
  if(!response.ok)throw new Error('Original NHE PDF template not found (HTTP '+response.status+'). Upload nhe-work-authorization.pdf to the GitHub main branch.');
  const template=await response.arrayBuffer();
  const pdf=await PDFLib.PDFDocument.load(template);
  const page=pdf.getPages()[0];
  if(pdf.getPages().length!==1)throw new Error('Original template must have exactly one page.');
  const font=await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
  const {rgb}=PDFLib;
  const black=rgb(0.04,0.08,0.12);
  const d=completed.data||{};
  const sigs=completed.signatures||{};
  // Original paper PDF uses a letter-size page (612 x 792 points).
  // Coordinates are measured directly from its printed blanks.
  const write=(value,x,top,maxWidth,size=10)=>{
    const str=String(value??'').trim();if(!str)return;
    let fs=size;
    while(fs>6 && font.widthOfTextAtSize(str,fs)>maxWidth)fs-=0.25;
    page.drawText(str,{x,y:792-top,size:fs,font,color:black,maxWidth});
  };
  const shortDate=v=>{if(!v)return '';const parts=String(v).split('-');return parts.length===3?parts[1]+'/'+parts[2]+'/'+parts[0]:String(v);};
  write(d.claim,83,247,162,10);
  write(shortDate(d.loss),347,247,155,10);
  write([d.address,d.city].filter(Boolean).join(', '),121,355,390,10);
  write(d.insurer,39,439,410,10);
  const signerDate=when=>{
    if(!when)return '';
    const dt=new Date(when);
    return isNaN(dt.getTime())?String(when).split(',')[0]:dt.toLocaleDateString('en-US');
  };
  // Cover the template's printed "x" markers, leaving the signature areas clean.
  page.drawRectangle({x:224,y:792-638,width:12,height:16,color:rgb(1,1,1)});
  page.drawRectangle({x:224,y:792-679,width:12,height:16,color:rgb(1,1,1)});
  const stamp=async(id,baselineTop,defaultName)=>{
    const s=sigs[id];if(!s?.image)return;
    // Names and dates sit above the printed labels, not on top of them.
    write(s.name||defaultName||'',39,baselineTop,136,9);
    write(signerDate(s.when),435,baselineTop,105,9);
    try{
      // Trim the unused transparent margins from the signature canvas.
      // Otherwise pdf-lib scales the entire 760x180 canvas and the ink
      // ends up tiny or in the wrong part of the form.
      const source=new Image();
      source.src=s.image;
      await new Promise((resolve,reject)=>{if(source.complete&&source.naturalWidth)return resolve();source.onload=resolve;source.onerror=()=>reject(new Error('Signature image could not be loaded'));});
      const canvas=document.createElement('canvas');canvas.width=source.naturalWidth;canvas.height=source.naturalHeight;
      const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(source,0,0);
      const pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data;
      let minX=canvas.width,minY=canvas.height,maxX=-1,maxY=-1;
      for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++){
        const n=(y*canvas.width+x)*4;
        if(pixels[n+3]>35 && (pixels[n]<235||pixels[n+1]<235||pixels[n+2]<235)){
          minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);
        }
      }
      if(maxX<minX)throw new Error('Signature contains no visible ink');
      const pad=3;
      const left=Math.max(0,minX-pad),top=Math.max(0,minY-pad);
      const cropped=document.createElement('canvas');cropped.width=Math.min(canvas.width-left,maxX-minX+1+2*pad);cropped.height=Math.min(canvas.height-top,maxY-minY+1+2*pad);
      cropped.getContext('2d').drawImage(canvas,left,top,cropped.width,cropped.height,0,0,cropped.width,cropped.height);
      const data=cropped.toDataURL('image/png').split(',')[1];
      const bytes=Uint8Array.from(atob(data),c=>c.charCodeAt(0));
      const img=await pdf.embedPng(bytes);
      const maxW=160,maxH=19;
      const ratio=Math.min(maxW/img.width,maxH/img.height);
      const w=img.width*ratio,h=img.height*ratio;
      // Position above the preprinted labels, not through them.
      const inkBottom=baselineTop-7;
      page.drawImage(img,{x:245,y:792-inkBottom-h,width:w,height:h});
    }catch(e){throw new Error('Unable to place '+id+' signature: '+e.message);}
  };
  await stamp('owner1',625,d.customer);
  await stamp('owner2',666,d.customer);
  await stamp('rep',706,d.tech);
  return new Blob([await pdf.save()],{type:'application/pdf'});
}
// Original one-page NHE Job Completion Form. Separate coordinates preserve the
// already-approved Work Authorization layout above.
async function createCompletionPdf(){
  if(!window.PDFLib)throw new Error('PDF library did not load. Refresh and try again.');
  const response=await fetch('/nhe-job-completion.pdf',{cache:'no-store'});
  if(!response.ok)throw new Error('Job Completion template not found (HTTP '+response.status+'). Upload nhe-job-completion.pdf to the GitHub main branch.');
  const pdf=await PDFLib.PDFDocument.load(await response.arrayBuffer());
  if(pdf.getPageCount()!==1)throw new Error('Job Completion template must have exactly one page.');
  const page=pdf.getPage(0),{rgb}=PDFLib;
  const font=await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
  const d=completed.data||{},sigs=completed.signatures||{};
  const height=page.getHeight(),black=rgb(.04,.08,.12);
  const write=(value,x,baselineTop,maxWidth,size=10)=>{
    const str=String(value??'').trim();if(!str)return;
    let fs=size;
    while(fs>6 && font.widthOfTextAtSize(str,fs)>maxWidth)fs-=.25;
    page.drawText(str,{x,y:height-baselineTop,size:fs,font,color:black,maxWidth});
  };
  const dateOf=when=>{
    if(!when)return '';
    const dt=new Date(when);
    return isNaN(dt.getTime())?String(when).split(',')[0]:dt.toLocaleDateString('en-US');
  };
  // The source form's blanks are at the top of the letter-size page.
  write(d.customer,123,249,392,10);
  write(d.address,137,265,375,10);
  // City, state and ZIP share one preprinted row.
  const location=String(d.city||'').trim();
  const parts=location.split(',').map(x=>x.trim());
  const city=parts.length>1?parts[0]:location;
  const region=parts.length>1?parts.slice(1).join(',').trim():'';
  const regionMatch=region.match(/^([A-Za-z]{2}|[A-Za-z ]+?)\s+(\d{5}(?:-\d{4})?)$/);
  write(city,112,279,125,9);
  if(regionMatch){write(regionMatch[1],310,279,42,9);write(regionMatch[2],409,279,95,9);}
  else if(region){write(region,310,279,194,9);}
  write(d.insurer,200,298,305,10);
  write(d.claim,135,314,370,10);
  // Customer printed name and date sit just above their respective blanks.
  write(sigs.owner1?.name||d.customer,218,610,224,9);
  write(dateOf(sigs.owner1?.when),492,610,46,8);
  write(dateOf(sigs.rep?.when),493,685,45,8);
  const stamp=async(id,x,inkBottom,maxW,maxH)=>{
    const sig=sigs[id];if(!sig?.image)return;
    const source=new Image();source.src=sig.image;
    await new Promise((resolve,reject)=>{
      if(source.complete&&source.naturalWidth)return resolve();
      source.onload=resolve;source.onerror=()=>reject(new Error('Signature image could not be loaded'));
    });
    const canvas=document.createElement('canvas');canvas.width=source.naturalWidth;canvas.height=source.naturalHeight;
    const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(source,0,0);
    const pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data;
    let minX=canvas.width,minY=canvas.height,maxX=-1,maxY=-1;
    for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++){
      const n=(y*canvas.width+x)*4;
      if(pixels[n+3]>35&&(pixels[n]<235||pixels[n+1]<235||pixels[n+2]<235)){
        minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);
      }
    }
    if(maxX<minX)throw new Error('Signature contains no visible ink');
    const pad=3,left=Math.max(0,minX-pad),top=Math.max(0,minY-pad);
    const crop=document.createElement('canvas');
    crop.width=Math.min(canvas.width-left,maxX-minX+1+2*pad);
    crop.height=Math.min(canvas.height-top,maxY-minY+1+2*pad);
    crop.getContext('2d').drawImage(canvas,left,top,crop.width,crop.height,0,0,crop.width,crop.height);
    const bytes=Uint8Array.from(atob(crop.toDataURL('image/png').split(',')[1]),c=>c.charCodeAt(0));
    const img=await pdf.embedPng(bytes),scale=Math.min(maxW/img.width,maxH/img.height);
    const w=img.width*scale,h=img.height*scale;
    page.drawImage(img,{x,y:height-inkBottom,width:w,height:h});
  };
  // Position the BOTTOM of each signature above its printed line.
  // Previously inkBottom was treated as the top, causing signatures to cross the lines.
  await stamp('owner1',153,646,300,19);
  await stamp('rep',113,695,328,19);
  return new Blob([await pdf.save()],{type:'application/pdf'});
}
async function downloadSignedPdf(){
  try{
    const blob=await createOnePagePdf();
    const url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=completed?.type==='completion'?'NHE-Job-Completion-Signed-Test.pdf':'NHE-Work-Authorization-Signed-Test.pdf';document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),30000);
  }catch(e){alert('PDF download failed: '+(e?.message||String(e)));}
}
// Private cloud test documents: a unique key prevents collisions; metadata makes them searchable.
let uploadedDocumentKeys=new Set(),cloudDocuments=[];let latestUploadedDocumentId=null,officeEmailSentIds=new Set();
const cleanPart=value=>String(value||'Unknown').normalize('NFKD').replace(/[^a-zA-Z0-9_-]+/g,'-').replace(/^-+|-+$/g,'').slice(0,45)||'Unknown';
function documentFingerprint(){return [currentId||'local',completed?.signedAt,completed?.formName].join('|');}
async function uploadSignedPdf(){
  const status=$('cloudPdfStatus'),button=$('cloudPdfButton');
  if(!completed){status.textContent='No signed test document is open.';return;}
  if(!sb||!employeeRole){status.textContent='Cloud save unavailable: sign in as an authorized employee.';return;}
  const fingerprint=documentFingerprint();
  if(uploadedDocumentKeys.has(fingerprint)){status.textContent='This signed test PDF was saved to cloud storage during this session.';return;}
  if(button.disabled)return;
  button.disabled=true;status.textContent='Creating PDF and saving to private cloud storage…';
  let path=null;
  try{
    const {data:{user},error:authError}=await sb.auth.getUser();
    if(authError||!user)throw new Error('Employee session expired. Sign in again.');
    const blob=await createOnePagePdf();
    if(!(blob instanceof Blob)||blob.size<100)throw new Error('PDF creation failed.');
    const unique=crypto.randomUUID();
    const docName=completed.type==='completion'?'Job-Completion':'Work-Authorization';
    const filename=[cleanPart(completed.data.customer),cleanPart(completed.data.jobNo||completed.data.claim||'No-Job'),docName,unique].join('_')+'.pdf';
    path=user.id+'/'+filename;
    const {error:uploadError}=await sb.storage.from('signed-documents').upload(path,blob,{contentType:'application/pdf',upsert:false});
    if(uploadError)throw uploadError;
    const metadata={storage_path:path,filename,customer_name:completed.data.customer||'',job_number:completed.data.jobNo||null,claim_number:completed.data.claim||null,property_address:completed.data.address||null,form_type:completed.type,form_name:completed.formName,signed_at:new Date().toISOString(),uploaded_by:user.id};
    const {data:savedDocument,error:metadataError}=await sb.from('signed_documents').insert(metadata).select('id').single();
    if(metadataError){
      const {error:cleanupError}=await sb.storage.from('signed-documents').remove([path]);
      throw new Error('Document index could not be saved: '+metadataError.message+(cleanupError?' (An unindexed test PDF may remain in Storage.)':''));
    }
    uploadedDocumentKeys.add(fingerprint);
    latestUploadedDocumentId=savedDocument.id;
    status.textContent='Saved successfully to private Supabase Storage and the searchable document list.';
    await sendOfficeEmail(savedDocument.id);
  }catch(e){status.textContent='Cloud save FAILED: '+(e?.message||String(e))+'. Your local signed record remains on this device. Use Retry Cloud PDF Save.';}
  finally{button.disabled=false;}
}
async function sendOfficeEmail(documentId){
  const status=$('officeEmailStatus'),button=$('officeEmailButton');
  if(!documentId){status.textContent='Save the signed test PDF to cloud storage before emailing.';return;}
  if(officeEmailSentIds.has(documentId)){status.textContent='Office email already sent during this session. Check both inboxes.';return;}
  button.disabled=true;status.textContent='Sending signed test PDF to both office addresses…';
  try{
    const {data:{session},error:sessionError}=await sb.auth.getSession();
    if(sessionError||!session?.access_token)throw new Error('Employee sign-in has expired. Sign in again.');
    const response=await fetch('/api/send-signed-document',{
      method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+session.access_token},
      body:JSON.stringify({documentId})
    });
    const result=await response.json().catch(()=>({}));
    if(!response.ok)throw new Error(result.error||'Email service returned HTTP '+response.status);
    officeEmailSentIds.add(documentId);
    status.textContent='Office email accepted by Resend for Avery and Stephen. Check both inboxes (and spam).';
  }catch(e){status.textContent='Office email NOT confirmed: '+(e?.message||String(e))+'. The PDF remains saved in Supabase. You may retry.';}
  finally{button.disabled=false;}
}
function retryOfficeEmail(){return sendOfficeEmail(latestUploadedDocumentId);}

async function renderCloudDocuments(){
  const el=$('cloudDocumentList');if(!el)return;
  if(!sb||!employeeRole){el.textContent='Sign in to view cloud documents.';return;}
  el.textContent='Loading signed documents…';
  const {data,error}=await sb.from('signed_documents').select('id,filename,storage_path,customer_name,job_number,claim_number,form_name,signed_at').order('signed_at',{ascending:false}).limit(200);
  if(error){el.textContent='Unable to load cloud documents: '+error.message+'. Run the provided Supabase SQL setup first.';return;}
  cloudDocuments=data||[];filterCloudDocuments();
}
function filterCloudDocuments(){
  const el=$('cloudDocumentList');if(!el)return;
  const q=($('documentSearch')?.value||'').trim().toLowerCase();
  const rows=cloudDocuments.filter(d=>[d.customer_name,d.job_number,d.claim_number,d.form_name,d.filename].some(v=>String(v||'').toLowerCase().includes(q)));
  el.innerHTML=rows.length?rows.map(d=>`<div class="listrow"><div><b>${esc(d.customer_name||'Customer')}</b><div class="pill">${esc(d.form_name)} · Job ${esc(d.job_number||'—')} · Claim ${esc(d.claim_number||'—')}</div><div class="pill">${esc(d.filename)} · ${esc(new Date(d.signed_at).toLocaleDateString())}</div></div><button class="btn alt" data-document-id="${esc(d.id)}">Open PDF</button></div>`).join(''):'<p class="muted">No matching cloud PDFs found.</p>';
  el.querySelectorAll('[data-document-id]').forEach(b=>b.addEventListener('click',()=>openCloudPdf(b.dataset.documentId)));
}
async function openCloudPdf(id){
  const d=cloudDocuments.find(x=>x.id===id);if(!d)return;
  const {data,error}=await sb.storage.from('signed-documents').createSignedUrl(d.storage_path,60);
  if(error||!data?.signedUrl){alert('Unable to open private PDF: '+(error?.message||'Unknown error'));return;}
  window.open(data.signedUrl,'_blank','noopener,noreferrer');
}

function emailDraft(){const subject=encodeURIComponent('NHE Signed Form - '+(completed?.data.customer||'Customer'));const body=encodeURIComponent('A signed NHE document is ready. Please attach the PDF saved using Print / Save as PDF.\n\nCustomer: '+(completed?.data.customer||'')+'\nClaim #: '+(completed?.data.claim||'')+'\nDocument: '+(completed?.formName||''));location.href='mailto:avery@nheservices.com,stephen@nheservices.com?subject='+subject+'&body='+body}
// Cloud draft testing: no signed documents or signature images are uploaded.
let cloudJobId=null;
let employeeRole=null;
async function saveCloudDraft(){
  collect();
  if(!current.customer.trim() || !current.address.trim()) {alert('Customer name and property address are required.');return;}
  if(!sb || employeeRole!=='admin'){alert('Cloud draft saving currently requires an administrator login.');return;}
  const button=document.querySelector('button[onclick="saveDraft()"]');
  if(button)button.disabled=true;
  try{
    const customerData={full_name:current.customer,address_line1:current.address,city:current.city||null};
    const jobData={job_number:current.jobNo||null,insurance_company:current.insurer||null,claim_number:current.claim||null,date_of_loss:current.loss||null,status:'Draft'};
    if(cloudJobId){
      const {data:existing,error:readError}=await sb.from('jobs').select('customer_id').eq('id',cloudJobId).single();
      if(readError)throw readError;
      const {error:customerError}=await sb.from('customers').update(customerData).eq('id',existing.customer_id);
      if(customerError)throw customerError;
      const {error:jobError}=await sb.from('jobs').update(jobData).eq('id',cloudJobId);
      if(jobError)throw jobError;
    } else {
      const {data:customer,error:customerError}=await sb.from('customers').insert(customerData).select('id').single();
      if(customerError)throw customerError;
      const {data:job,error:jobError}=await sb.from('jobs').insert({...jobData,customer_id:customer.id}).select('id').single();
      if(jobError)throw new Error('Customer saved, but job failed: '+jobError.message+' (an incomplete test customer record may remain).');
      cloudJobId=job.id;
    }
    alert('Test job draft saved to Supabase. Signed documents are still stored locally only.');
    show('jobs');
  }catch(e){alert('Cloud save failed: '+e.message+'\nNo success was recorded.');}
  finally{if(button)button.disabled=false;}
}
async function renderCloudJobs(){
  const el=$('cloudJobList');
  if(!sb || employeeRole!=='admin'){el.textContent='Cloud job list is available to administrators only during this test.';return;}
  el.textContent='Loading cloud job drafts…';
  const {data,error}=await sb.from('jobs').select('id,customer_id,job_number,insurance_company,claim_number,date_of_loss,status,customers(id,full_name,address_line1,city)').order('created_at',{ascending:false}).limit(100);
  if(error){el.textContent='Unable to load cloud jobs: '+error.message;return;}
  el.innerHTML=(data||[]).length?data.map(j=>`<div class="listrow"><div><b>${esc(j.customers?.full_name||'Customer')}</b><div class="pill">${esc(j.customers?.address_line1||'')} · ${esc(j.claim_number||'No claim #')} · ${esc(j.status||'Draft')}</div></div><button class="btn alt" data-cloud-job="${esc(j.id)}">Edit draft</button></div>`).join(''):'<p class="muted">No cloud jobs yet. Create a fictional test job to begin.</p>';
  el.querySelectorAll('[data-cloud-job]').forEach(b=>b.addEventListener('click',()=>openCloudJob(b.dataset.cloudJob,data)));
}
function openCloudJob(id,jobs){
  const j=jobs.find(x=>x.id===id);if(!j)return;
  cloudJobId=id;currentId=null;completed=null;signatures={};
  const data={customer:j.customers?.full_name||'',jobNo:j.job_number||'',address:j.customers?.address_line1||'',city:j.customers?.city||'',insurer:j.insurance_company||'',claim:j.claim_number||'',loss:j.date_of_loss||'',tech:'',formType:'auth'};
  fields.forEach(k=>$(k).value=data[k]);
  $('editorTitle').textContent='Edit Cloud Job Draft';show('editor');
}

// Authentication gates the prototype UI. Signed documents remain local to this browser.
let sb=null;
async function initializeAuth(){
  const msg=$('loginMessage');
  try {
    const response=await fetch('/api/config',{cache:'no-store'});
    if(!response.ok) throw new Error('Configuration endpoint unavailable (HTTP '+response.status+').');
    const config=await response.json();
    if(!config.supabaseUrl||!config.supabasePublishableKey) throw new Error('Supabase environment variables are missing in Vercel.');
    if(!window.supabase?.createClient) throw new Error('Supabase JavaScript library did not load.');
    sb=window.supabase.createClient(config.supabaseUrl,config.supabasePublishableKey);
    const {data:{session},error}=await sb.auth.getSession();
    if(error) throw error;
    await setSession(session);
    sb.auth.onAuthStateChange((_event,session)=>{void setSession(session)});
  }catch(e){msg.textContent='Setup issue: '+e.message;}
}
async function setSession(session){
  if(!session){$('authorizedSignatureNav').classList.add('hidden');employeeRole=null;cloudJobId=null;$('login').classList.remove('hidden');$('appShell').classList.add('hidden');$('sessionBar').classList.add('hidden');return;}
  // Require a matching employee profile before displaying the app.
  const {data:profile,error}=await sb.from('profiles').select('role,full_name').eq('id',session.user.id).single();
  if(error||!profile||!['admin','office','technician'].includes(profile.role)){
    $('loginMessage').textContent='Your account does not have an authorized NHE employee profile.';$('authorizedSignatureNav').classList.add('hidden');
    $('login').classList.remove('hidden');$('appShell').classList.add('hidden');$('sessionBar').classList.add('hidden');return;
  }
  const wasAlreadySignedIn = !$('appShell').classList.contains('hidden');
  employeeRole=profile.role;
  $('signedInAs').textContent=(profile.full_name||session.user.email)+' · '+profile.role;$('authorizedSignatureNav').classList.toggle('hidden',profile.role!=='admin');
  $('login').classList.add('hidden');$('appShell').classList.remove('hidden');$('sessionBar').classList.remove('hidden');
  if (!wasAlreadySignedIn) show('home');
}
async function signIn(){
  if(!sb){$('loginMessage').textContent='Connection is not ready. Check the setup message.';return;}
  const button=$('loginButton');button.disabled=true;
  $('loginMessage').textContent='Signing in…';
  try{const {error}=await sb.auth.signInWithPassword({email:$('loginEmail').value.trim(),password:$('loginPassword').value});
    if(error)throw error;$('loginPassword').value='';$('loginMessage').textContent='';
  }catch(e){$('loginMessage').textContent=e.message}finally{button.disabled=false}
}
async function signOut(){if(sb){await sb.auth.signOut()}$('loginPassword').value='';}
$('loginPassword').addEventListener('keydown',e=>{if(e.key==='Enter')signIn()});
// Administrator-only authorized signature setup. No signature image is stored in browser storage.
let authorizedInk=false, authorizedCanvasReady=false;
function setupAuthorizedCanvas(){
  if(authorizedCanvasReady)return;
  authorizedCanvasReady=true;
  const c=$('authorizedSignatureCanvas'),ctx=c.getContext('2d');
  ctx.strokeStyle='#18334c';ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';
  let drawing=false;
  const point=e=>{const r=c.getBoundingClientRect();return {x:(e.clientX-r.left)*c.width/r.width,y:(e.clientY-r.top)*c.height/r.height};};
  c.addEventListener('pointerdown',e=>{e.preventDefault();c.setPointerCapture(e.pointerId);drawing=true;authorizedInk=true;const p=point(e);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+.1,p.y+.1);ctx.stroke();});
  c.addEventListener('pointermove',e=>{if(!drawing)return;e.preventDefault();const p=point(e);ctx.lineTo(p.x,p.y);ctx.stroke();});
  c.addEventListener('pointerup',()=>{drawing=false;});
  c.addEventListener('pointercancel',()=>{drawing=false;});
}
function clearAuthorizedSignature(){const c=$('authorizedSignatureCanvas');c.getContext('2d').clearRect(0,0,c.width,c.height);authorizedInk=false;}
async function authorizedSignatureRequest(body){
  if(!sb||employeeRole!=='admin')throw new Error('Administrator sign-in required.');
  const {data:{session},error}=await sb.auth.getSession();
  if(error||!session?.access_token)throw new Error('Your session expired. Sign in again.');
  const response=await fetch('/api/manage-authorized-signature',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+session.access_token},body:JSON.stringify(body)});
  const result=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(result.error||'Server returned HTTP '+response.status);
  return result;
}
async function openAuthorizedSignature(){
  if(employeeRole!=='admin')return;
  setupAuthorizedCanvas();clearAuthorizedSignature();$('authorizedSignatureConsent').checked=false;
  $('authorizedSignatureStatus').textContent='Checking private signature status…';
  show('authorizedSignature');
  try{
    const result=await authorizedSignatureRequest({action:'status'});
    $('authorizedSignatureStatus').className=result.active?'success':'notice';
    $('authorizedSignatureStatus').textContent=result.active?'An authorized signature is stored for '+result.representativeName+'. It is not yet connected to outgoing forms.':'No active authorized signature is stored.';
    $('disableAuthorizedSignatureButton').disabled=!result.active;
  }catch(e){$('authorizedSignatureStatus').className='notice';$('authorizedSignatureStatus').textContent='Unable to check status: '+e.message;}
}
async function saveAuthorizedSignature(){
  const status=$('authorizedSignatureStatus'),button=$('saveAuthorizedSignatureButton');
  const name=$('authorizedRepresentativeName').value.trim();
  if(!name||name.length>150){status.textContent='Enter your full name.';return;}
  if(!authorizedInk){status.textContent='Draw your signature first.';return;}
  if(!$('authorizedSignatureConsent').checked){status.textContent='Please confirm your authorization before saving.';return;}
  if(!confirm('Save this signature as the active authorized NHE signature? This does not sign any documents yet.'))return;
  button.disabled=true;status.className='notice';status.textContent='Saving signature securely…';
  try{
    await authorizedSignatureRequest({action:'save',representativeName:name,imageData:$('authorizedSignatureCanvas').toDataURL('image/png'),consent:true});
    clearAuthorizedSignature();$('authorizedSignatureConsent').checked=false;
    status.className='success';status.textContent='Authorized signature saved securely. It is not yet applied to outgoing documents.';
    $('disableAuthorizedSignatureButton').disabled=false;
  }catch(e){status.textContent='Signature was not confirmed saved: '+e.message;}
  finally{button.disabled=false;}
}
async function disableAuthorizedSignature(){
  if(!confirm('Disable the active stored signature? Future documents will not be allowed to use it.'))return;
  const button=$('disableAuthorizedSignatureButton'),status=$('authorizedSignatureStatus');button.disabled=true;
  try{await authorizedSignatureRequest({action:'disable'});status.className='success';status.textContent='Stored signature disabled. Existing documents are unchanged.';}
  catch(e){status.className='notice';status.textContent='Unable to confirm disable: '+e.message;button.disabled=false;}
}
initializeAuth();
</script></body></html>
