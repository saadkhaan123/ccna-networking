const $=s=>document.querySelector(s);
const main=$("#main");
let done={};
try{done=JSON.parse(localStorage.getItem("netdone")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("netdone",JSON.stringify(done))}catch(e){}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function buildNav(){
  let h="",last="";
  COURSE.forEach(c=>{
    if(c.phase!==last){h+=`<div class="ph">${esc(c.phase)}</div>`;last=c.phase}
    h+=`<a href="#w${c.w}" id="n${c.w}" class="${done[c.w]?"done":""}"><span class="dot">✓</span>W${c.w} · ${esc(c.title)}</a>`;
  });
  $("#nav").innerHTML=h;
  const n=Object.values(done).filter(Boolean).length;
  $("#pbar").style.width=(n/COURSE.length*100)+"%";
  $("#ptext").textContent=`${n} / ${COURSE.length} weeks complete`;
}

function home(){
  const next=COURSE.find(c=>!done[c.w]);
  const n=Object.values(done).filter(Boolean).length;
  main.innerHTML=`<div class="hero"><span class="badge">Web Developer → Network Engineer</span>
  <h1>Networking Academy</h1>
  <p class="mute" style="font-size:17px;margin:0 0 16px">CCNA 24 hafton mein, AI ke saath. Lessons, labs, quizzes, tools sab ek jagah.</p>
  <a class="btn" href="${n===0?"#setup":next?"#w"+next.w:"#career"}">${n===0?"🚀 Pehle Setup karo":next?"▶ Week "+next.w+" continue karo":"🎉 Career plan dekho"}</a>
  <a class="btn sec" href="#plan">🗓️ Daily plan</a></div>
  <div class="stats"><div class="stat"><b>${n}/24</b><span>Weeks complete</span></div><div class="stat"><b>24</b><span>Weeks</span></div><div class="stat"><b>${COURSE.reduce((a,c)=>a+c.quiz.length,0)}</b><span>Quiz questions</span></div><div class="stat"><b>${streak()}</b><span>Day streak 🔥</span></div></div>
  <img src="banner.png" alt="CCNA journey banner" style="width:100%;border-radius:16px;border:1px solid var(--line);box-shadow:var(--shadow)">
  <h2>My Journey</h2><div class="card"><div style="display:grid;grid-template-columns:repeat(12,1fr);gap:8px">${COURSE.map(c=>`<a href="#w${c.w}" title="Week ${c.w}: ${esc(c.title)}" style="text-decoration:none;height:40px;border-radius:10px;display:grid;place-items:center;font-weight:700;font-size:13px;${done[c.w]?"background:linear-gradient(135deg,#38bdf8,#4ade80);color:#04210f":"background:var(--panel2);color:var(--mute);border:1px solid var(--line)"}">${done[c.w]?"✓":c.w}</a>`).join("")}</div><p class="mute" style="margin:12px 0 0;font-size:13px">${n} of 24 weeks complete. Green = done. Hover karke topic dekho.</p></div>
  <h2>Sab Weeks</h2><div class="grid">${COURSE.map(c=>`<a class="pcard ${done[c.w]?"done":""}" href="#w${c.w}"><span class="badge">Week ${c.w}</span><br><b style="display:block;margin-top:8px">${esc(c.title)}</b><span class="mute" style="font-size:12px">${esc(c.phase.split(" – ")[1])}</span>${done[c.w]?'<br><span style="color:var(--ok)">✓ Done</span>':""}</a>`).join("")}</div>`;
}

function streak(){
  let days=[];try{days=JSON.parse(localStorage.getItem("netdays")||"[]")}catch(e){}
  const t=new Date().toDateString();
  if(!days.includes(t)){days.push(t);try{localStorage.setItem("netdays",JSON.stringify(days))}catch(e){}}
  let s=0,d=new Date();
  while(days.includes(d.toDateString())){s++;d.setDate(d.getDate()-1)}
  return s;
}

function setup(){
  const L=(u,t)=>`<a class="btn" target="_blank" rel="noopener" href="${u}">${t}</a>`;
  main.innerHTML=`<span class="badge">Step 0</span><h1>🚀 Setup: Netacad + Packet Tracer</h1>
  <p class="mute">Yeh ek baar karna hai (30-45 min). Account aur download aapko khud karna hoga kyunki login/email verification chahiye.</p>
  <h2>1. Cisco Networking Academy account (free)</h2>
  <ol class="steps">
   <li>Open karo: ${L("https://www.netacad.com/","netacad.com")} aur <b>Sign up / Get started</b> dabao.</li>
   <li>Apna email (<code>saadkhan32290@gmail.com</code>) use karo, naam sahi likho, password banao aur email verify karo.</li>
   <li>Course enroll karo: <b>"Getting Started with Cisco Packet Tracer"</b> (free self-paced). Netacad par search karo ya ${L("https://www.netacad.com/courses/getting-started-cisco-packet-tracer","direct link")}.</li>
   <li>Phir enroll karo: <b>"Networking Basics"</b>, <b>"Switching, Routing, and Wireless Essentials"</b> aur <b>"Enterprise Networking, Security, and Automation"</b> (CCNA 1-3). Jo free dikhe woh lo; kuch courses instructor ke through bhi milte hain.</li>
   <li>Netacad ke "Resources → Download Packet Tracer" section mein jao.</li>
  </ol>
  <h2>2. Packet Tracer install (Windows)</h2>
  <ol class="steps">
   <li>Netacad se Packet Tracer ka <b>Windows 64-bit</b> installer download karo (${L("https://www.netacad.com/resources/lab-downloads","lab downloads")}).</li>
   <li>Installer chalao, Next… Next… Finish. Launch karo.</li>
   <li>Pehli baar <b>Netacad login</b> maangta hai. Wahi email/password do.</li>
   <li>Test: File → New, 1 Switch + 2 PCs lo, cable se jodo, IPs do aur ping karo. (Week 1 lab)</li>
  </ol>
  <div class="note"><b>Note:</b> Netacad ka naam/links kabhi kabhi badalte hain. Agar koi link na khule to netacad.com par "Packet Tracer" search karo.</div>
  <h2>3. Baaki free tools</h2>
  <div class="card"><table>
   <tr><th>Wireshark</th><td>Packets dekhne ke liye. ${L("https://www.wireshark.org/download.html","Download")}</td></tr>
   <tr><th>Anki</th><td>Flashcards (spaced repetition). ${L("https://apps.ankiweb.net/","Download")}</td></tr>
   <tr><th>GitHub</th><td>Labs upload karo, portfolio proof. ${L("https://github.com/","github.com")}</td></tr>
   <tr><th>Jeremy's IT Lab</th><td>Best free CCNA videos. ${L("https://www.youtube.com/results?search_query=Jeremy%27s+IT+Lab+CCNA+200-301","YouTube")}</td></tr>
   <tr><th>Subnetting practice</th><td>${L("https://subnettingpractice.com/","subnettingpractice.com")}</td></tr>
   <tr><th>AWS Free Tier</th><td>Cloud networking (Week 19). ${L("https://aws.amazon.com/free/","aws.amazon.com/free")}</td></tr>
   <tr><th>GNS3 (optional)</th><td>Real IOS emulation baad mein. ${L("https://www.gns3.com/","gns3.com")}</td></tr>
  </table></div>
  <h2>4. Setup checklist</h2>
  <div class="card">${["Netacad account banaya","Packet Tracer install ho gaya","Week 1 ping lab chal gaya","Wireshark install","Anki install","GitHub repo 'ccna-labs' banaya"].map((t,i)=>`<label class="chk" style="margin:6px 0"><input type="checkbox" data-s="${i}" ${(JSON.parse(localStorage.getItem("netsetup")||"{}"))[i]?"checked":""}> ${t}</label>`).join("")}</div>
  <a class="btn" href="#w1">Week 1 shuru karo →</a>`;
  document.querySelectorAll("input[data-s]").forEach(i=>i.onchange=()=>{let o={};try{o=JSON.parse(localStorage.getItem("netsetup")||"{}")}catch(e){}o[i.dataset.s]=i.checked;try{localStorage.setItem("netsetup",JSON.stringify(o))}catch(e){}});
}

function plan(){
  main.innerHTML=`<h1>🗓️ Daily Study Plan</h1><p class="mute">Job ke saath roz ~2.5 ghante. Consistency > intensity.</p>
  <div class="card"><table><tr><th>Time</th><th>Kya karna hai</th></tr>
  <tr><td>15 min</td><td><b>Revision:</b> kal ka topic, Anki cards ya AI se 5 quiz questions.</td></tr>
  <tr><td>60 min</td><td><b>Video + notes:</b> aaj ka topic (Jeremy's IT Lab / Netacad module).</td></tr>
  <tr><td>60 min</td><td><b>Lab:</b> Packet Tracer mein khud configure karo. Stuck ho to AI se hint lo.</td></tr>
  <tr><td>15 min</td><td><b>Summary:</b> apni zaban mein 5 lines likho. Progress tick karo.</td></tr></table></div>
  <h2>Hafte ka schedule</h2>
  <div class="card"><table>
  <tr><th>Mon-Tue</th><td>Naya topic (theory + video)</td></tr>
  <tr><th>Wed-Thu</th><td>Lab + commands practice</td></tr>
  <tr><th>Fri</th><td>Subnetting drill + quiz</td></tr>
  <tr><th>Sat</th><td>Mini project / GitHub upload / mock test</td></tr>
  <tr><th>Sun</th><td>Rest ya sirf revision</td></tr></table></div>
  <div class="note">Rule: roz kam se kam <b>30 minute</b>. Streak mat todo, home page par streak 🔥 dikhta hai.</div>`;
}

$("#theme").onclick=()=>{const r=document.documentElement,t=r.dataset.theme==="light"?"dark":"light";r.dataset.theme=t;try{localStorage.setItem("nettheme",t)}catch(e){}};
try{const t=localStorage.getItem("nettheme");if(t)document.documentElement.dataset.theme=t}catch(e){}

function week(n){
  const c=COURSE.find(x=>x.w===n);if(!c)return home();
  const D=(typeof DETAIL!=="undefined"&&DETAIL[n])||null;
  if(D&&!c._q){c.quiz=c.quiz.concat(D.extraQuiz||[]);c._q=1}
  const detailHtml=D?`<h2>📚 Detailed Lesson <span class="badge">asaan zaban mein</span></h2>
  <div class="card"><b>Is week ke sections:</b><ol>${D.sections.map((s,i)=>`<li><a href="#sec${i}" onclick="document.getElementById('sec${i}').scrollIntoView({behavior:'smooth'});return false">${esc(s.h.replace(/^\d+\.\s*/,""))}</a></li>`).join("")}</ol></div>
  ${D.sections.map((s,i)=>`<div class="card" id="sec${i}"><h3>${esc(s.h)}</h3>${s.html}</div>`).join("")}`:"";
  const labHtml=D&&D.lab?`<h2>🧪 ${esc(D.lab.title)}</h2><div class="card"><p>${esc(D.lab.intro)}</p></div><ol class="steps">${D.lab.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
  <h3 style="margin-top:18px">🛠️ Masla aaye to</h3><div class="card"><table><tr><th>Problem</th><th>Hal</th></tr>${D.lab.trouble.map(t=>`<tr><td>${esc(t[0])}</td><td>${esc(t[1])}</td></tr>`).join("")}</table></div>`:`<h2>🧪 Lab</h2><div class="card">${esc(c.lab)}</div>`;
  main.innerHTML=`<span class="badge">${esc(c.phase)}</span><h1>Week ${c.w}: ${esc(c.title)}</h1>
  ${detailHtml}
  <h2>⚡ Quick Summary</h2><div class="card"><ul class="pts">${c.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>
  <h2>🎥 Video</h2><div class="card">${esc(c.video)}<br><a class="btn sec" target="_blank" href="https://www.youtube.com/results?search_query=${encodeURIComponent(c.video)}">YouTube par dhoondo</a></div>
  ${labHtml}
  ${c.cmds.length?`<h2>⌨️ Commands</h2><div class="card"><pre>${c.cmds.map(esc).join("\n")}</pre></div>`:""}
  <h2>❓ Quiz</h2><div id="quiz"></div><div id="score" class="card"></div>
  <h2>🤖 AI se poochho</h2><div class="card"><button class="sec" id="cp">Is week ka AI prompt copy karo</button></div>
  <label class="chk"><input type="checkbox" id="dn" ${done[c.w]?"checked":""}> Week ${c.w} complete</label>
  <div>${n>1?`<a class="btn sec" href="#w${n-1}">← Pichla</a> `:""}${n<24?`<a class="btn" href="#w${n+1}">Agla →</a>`:""}</div>`;
  let sc=0,ans=0;
  $("#quiz").innerHTML=c.quiz.map((q,i)=>`<div class="card q"><b>${i+1}. ${esc(q.q)}</b>${q.o.map((o,j)=>`<button class="opt" data-q="${i}" data-o="${j}">${esc(o)}</button>`).join("")}</div>`).join("");
  document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.q,j=+b.dataset.o,q=c.quiz[i];
    const grp=[...document.querySelectorAll(`.opt[data-q="${i}"]`)];
    if(grp.some(x=>x.disabled))return;
    grp.forEach(x=>x.disabled=true);
    grp[q.a].classList.add("right");
    if(j===q.a)sc++;else b.classList.add("wrong");
    ans++;$("#score").textContent=`Score: ${sc} / ${c.quiz.length}`+(ans===c.quiz.length?(sc===c.quiz.length?" 🎉 Perfect!":" – galat sawal dobara padho."):"");
  });
  $("#cp").onclick=()=>{navigator.clipboard.writeText(`Tum CCNA instructor ho. Mujhe "${c.title}" Roman Urdu mein simple examples se samjhao, phir 5 MCQ ek ek karke poochho.`);$("#cp").textContent="Copied ✓"};
  $("#dn").onchange=e=>{done[c.w]=e.target.checked;save();buildNav();markActive()};
}

// ---- Tools
const ip2n=s=>{const p=s.trim().split(".").map(Number);if(p.length!==4||p.some(x=>!(x>=0&&x<=255)||isNaN(x)))return null;return((p[0]<<24)>>>0)+(p[1]<<16)+(p[2]<<8)+p[3]};
const n2ip=n=>[n>>>24,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
function subnetCalc(){
  main.innerHTML=`<h1>🧮 Subnet Calculator</h1><div class="card"><input id="ip" value="192.168.10.77" size="16"> / <input id="cd" type="number" min="0" max="32" value="26" style="width:70px"> <button id="go">Calculate</button></div><div id="res" class="card"></div>`;
  const run=()=>{const a=ip2n($("#ip").value),c=+$("#cd").value;
    if(a===null||c<0||c>32||isNaN(c)){$("#res").textContent="Sahi IP aur /0-32 do.";return}
    const mask=c===0?0:(0xFFFFFFFF<<(32-c))>>>0,net=(a&mask)>>>0,bc=(net|(~mask>>>0))>>>0;
    const hosts=c>=31?(c===32?1:2):Math.pow(2,32-c)-2;
    const bin=n=>[24,16,8,0].map(s=>((n>>>s)&255).toString(2).padStart(8,"0")).join(".");
    $("#res").innerHTML=`<table>
    <tr><th>Network</th><td>${n2ip(net)}/${c}</td></tr><tr><th>Mask</th><td>${n2ip(mask)}</td></tr>
    <tr><th>Wildcard</th><td>${n2ip(~mask>>>0)}</td></tr><tr><th>Broadcast</th><td>${n2ip(bc)}</td></tr>
    <tr><th>First host</th><td>${c<31?n2ip(net+1):n2ip(net)}</td></tr><tr><th>Last host</th><td>${c<31?n2ip(bc-1):n2ip(bc)}</td></tr>
    <tr><th>Usable hosts</th><td>${hosts}</td></tr><tr><th>Block size</th><td>${Math.pow(2,32-c)}</td></tr>
    <tr><th>IP binary</th><td><code>${bin(a)}</code></td></tr><tr><th>Mask binary</th><td><code>${bin(mask)}</code></td></tr></table>`};
  $("#go").onclick=run;run();
}
function binary(){
  main.innerHTML=`<h1>🔢 Binary Converter</h1><div class="card"><p>Decimal (0-255):</p><input id="d" type="number" min="0" max="255" value="192"> <p>Binary:</p><input id="b" value="11000000" maxlength="8"><p class="mute">Place values: 128 64 32 16 8 4 2 1</p></div>
  <div class="card"><p>Poori IP binary mein:</p><input id="fi" value="192.168.1.10" size="16"><pre id="fo" style="margin-top:10px"></pre></div>`;
  $("#d").oninput=()=>{const v=+$("#d").value;if(v>=0&&v<=255)$("#b").value=v.toString(2).padStart(8,"0")};
  $("#b").oninput=()=>{if(/^[01]{1,8}$/.test($("#b").value))$("#d").value=parseInt($("#b").value,2)};
  const f=()=>{const a=ip2n($("#fi").value);$("#fo").textContent=a===null?"Invalid IP":[24,16,8,0].map(s=>((a>>>s)&255).toString(2).padStart(8,"0")).join(".")};
  $("#fi").oninput=f;f();
}
function drill(){
  const sizes=[25,26,27,28,29,30];
  main.innerHTML=`<h1>🎯 Subnet Drill</h1><div class="card"><div id="dq"></div><input id="da" placeholder="Jawab likho" size="24"> <button id="dc">Check</button> <button class="sec" id="dnx">Naya sawal</button><p id="df"></p><p class="mute" id="dsc">Score: 0/0</p></div>`;
  let cur,right=0,tot=0;
  const gen=()=>{const c=sizes[Math.floor(Math.random()*sizes.length)],o=[10,172,192][Math.floor(Math.random()*3)];
    const base=`${o}.${o===10?Math.floor(Math.random()*255):o===172?16+Math.floor(Math.random()*16):168}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*254)+1}`;
    const a=ip2n(base),mask=(0xFFFFFFFF<<(32-c))>>>0,net=(a&mask)>>>0,bc=(net|(~mask>>>0))>>>0;
    const kinds=[["Network address",n2ip(net)],["Broadcast address",n2ip(bc)],["Usable hosts",String(Math.pow(2,32-c)-2)]];
    const k=kinds[Math.floor(Math.random()*3)];cur=k[1];
    $("#dq").innerHTML=`<h3>${base}/${c}</h3><p>${k[0]} kya hai?</p>`;$("#da").value="";$("#df").textContent=""};
  $("#dc").onclick=()=>{tot++;const ok=$("#da").value.trim()===cur;if(ok)right++;
    $("#df").innerHTML=ok?"✅ Sahi!":`❌ Jawab: <b>${cur}</b>`;$("#dsc").textContent=`Score: ${right}/${tot}`};
  $("#dnx").onclick=gen;$("#da").onkeydown=e=>{if(e.key==="Enter")$("#dc").click()};gen();
}
function cheat(){
  main.innerHTML=`<h1>📋 CLI Cheat Sheet</h1><div class="card"><table><tr><th>Command</th><th>Kaam</th></tr>${CHEAT.map(r=>`<tr><td><code>${esc(r[0])}</code></td><td>${esc(r[1])}</td></tr>`).join("")}</table></div>
  <div class="card"><h3>Ping fail troubleshooting</h3><ol><li>Cable / interface up? (show ip int brief)</li><li>IP aur mask sahi?</li><li>Default gateway?</li><li>VLAN / trunk?</li><li>Routing table mein route?</li><li>ACL / firewall block?</li><li>DNS (agar naam se ping)?</li></ol></div>`;
}
function ai(){
  main.innerHTML=`<h1>🤖 AI Prompts</h1><p class="mute">[BRACKET] ko apni cheez se badlo. Copy karke Claude/ChatGPT mein daalo.</p>${PROMPTS.map((p,i)=>`<div class="card"><b>${esc(p.t)}</b><pre style="white-space:pre-wrap;color:var(--text)">${esc(p.p)}</pre><br><button data-i="${i}">Copy</button></div>`).join("")}
  <div class="card"><h3>Golden rules</h3><ul><li>AI ko tutor banao, answer machine nahi.</li><li>Config khud type karo, copy-paste nahi.</li><li>Har hafte mock quiz.</li><li>AI ke jawab verify karo (docs / lab mein test).</li></ul></div>`;
  document.querySelectorAll("button[data-i]").forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(PROMPTS[b.dataset.i].p);b.textContent="Copied ✓"});
}
function career(){
  main.innerHTML=`<h1>💼 Career Plan</h1>
  <div class="card"><h3>Certifications</h3><ol><li>CCNA 200-301 (main target)</li><li>AWS Cloud Practitioner / Security+ (optional)</li><li>Later: CCNP / DevNet</li></ol></div>
  <div class="card"><h3>Jobs</h3><ul><li>NOC / Network Support (first job)</li><li>Network Engineer</li><li>Network Security</li><li>Cloud / DevOps Network Engineer</li></ul><p class="mute">Search: "NOC engineer Karachi", "junior network administrator", remote network support.</p></div>
  <div class="card"><h3>Tumhara edge</h3><p>Web developer + networking = hosting, DNS, SSL, CDN, firewall, cloud networking. Freelance: "Website hosting + security + DNS setup" packages.</p></div>
  <div class="card"><h3>Portfolio fix list</h3><ul><li>Ek positioning chuno (title vs H1 conflict).</li><li>Testimonials add karo, 98%/100% claims hatao ya prove karo.</li><li>Har project ka description aur result likho.</li><li>Naam consistent rakho, CV typo "hafiz-saaz" fix karo.</li><li>"Networking Labs" section + GitHub link add karo.</li></ul></div>
  <div class="card"><h3>Timeline</h3><p>Month 1-2 basics+switching · 3-4 routing+services · 5 security+automation · 6 exam + apply 10 jobs/week.</p></div>`;
}

function markActive(){
  document.querySelectorAll("#nav a").forEach(a=>a.classList.remove("active"));
  const h=location.hash.slice(1),el=$("#n"+h.slice(1));if(/^w\d+$/.test(h)&&el)el.classList.add("active");
}
function route(){
  const h=location.hash.slice(1)||"home";
  if(/^w\d+$/.test(h))week(+h.slice(1));
  else ({home,setup,plan,subnet:subnetCalc,binary,drill,cheat,ai,career}[h]||home)();
  markActive();window.scrollTo(0,0);$("#sidebar").classList.remove("open");
}
$("#menu").onclick=()=>$("#sidebar").classList.toggle("open");
window.addEventListener("hashchange",route);
buildNav();route();
