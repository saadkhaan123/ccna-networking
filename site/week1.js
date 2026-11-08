// Detailed lessons. DETAIL[weekNumber] = {sections:[{h,html}], lab:{title,intro,steps:[html], trouble:[[problem,fix]]}, extraQuiz:[...]}
const DETAIL = {};
DETAIL[1] = {
sections:[
{h:"1. Network kya hota hai? (bilkul basic)",html:`
<p><b>Network</b> ka matlab hai: <b>2 ya zyada devices ka aapas mein judna taake wo data (information) share kar saken.</b></p>
<p><b>Misaal:</b> Aapke ghar mein mobile, laptop aur TV sab WiFi se jude hain. Yeh sab ek network hain. Aap mobile se laptop par photo bhejte hain, yani data ek device se doosre tak gaya.</p>
<div class="note"><b>Asaan example (dak khana):</b> Maan lo network ek dak khana (post office) system hai. Aap khat likhte ho (data), us par pata likhte ho (IP address), dak khana (router/switch) usse sahi ghar tak pohanchata hai. Networking ka sara kaam bas yehi hai: <b>data ko sahi jagah tak sahi tareeqe se pohanchana.</b></div>
<p><b>Network kyun zaroori hai?</b></p>
<ul><li>Internet chalane ke liye (website, YouTube, WhatsApp)</li><li>Office mein printer aur files share karne ke liye</li><li>Server aur cloud (jaise aapki WordPress site hosting par) tak pohanchne ke liye</li></ul>`},
{h:"2. Network ki types (size ke hisab se)",html:`
<table><tr><th>Type</th><th>Poora naam</th><th>Size</th><th>Example</th></tr>
<tr><td><b>PAN</b></td><td>Personal Area Network</td><td>Bohat chhota (1-10 m)</td><td>Mobile ka Bluetooth se headphones se judna</td></tr>
<tr><td><b>LAN</b></td><td>Local Area Network</td><td>Ek building / ghar / office</td><td>Aapke ghar ka WiFi, office ka network</td></tr>
<tr><td><b>MAN</b></td><td>Metropolitan Area Network</td><td>Ek shehr</td><td>Karachi mein company ki 5 branches</td></tr>
<tr><td><b>WAN</b></td><td>Wide Area Network</td><td>Shehron / mulkon ke beech</td><td>Karachi office se Lahore office ka link</td></tr>
<tr><td><b>Internet</b></td><td>-</td><td>Poori duniya</td><td>Bohat saare WANs ka jaal</td></tr></table>
<p class="mute">Yaad rakho: <b>LAN = apna ghar/office. WAN = bahar ki duniya (ISP ke zariye).</b> Internet sab se bada WAN hai.</p>`},
{h:"3. Network ke devices (kaun kya karta hai)",html:`
<table><tr><th>Device</th><th>Kaam</th><th>Asaan example</th></tr>
<tr><td><b>Switch</b></td><td>Ek hi LAN ke andar devices ko jorta hai (PC, printer, server)</td><td>Ghar ke andar kamron ke darwaze</td></tr>
<tr><td><b>Router</b></td><td>Alag alag networks ko jorta hai (ghar ka LAN ↔ Internet) aur sahi raasta chunta hai</td><td>Chowk jahan ek sadak doosri sadak se milti hai + GPS</td></tr>
<tr><td><b>Firewall</b></td><td>Security: kaun aa sakta hai, kaun nahi</td><td>Building ka guard jo ID check karta hai</td></tr>
<tr><td><b>Access Point (AP)</b></td><td>WiFi deta hai (wireless devices ke liye)</td><td>Cable ke bina connection</td></tr>
<tr><td><b>Modem / ONT</b></td><td>ISP ki line (fiber/DSL) ko ghar ke router se jorta hai</td><td>Shehr ki main pipeline se ghar ka connection</td></tr>
<tr><td><b>End device</b></td><td>Jo data banate/istemal karte hain: PC, phone, server, printer</td><td>Khat bhejne wala/lene wala insaan</td></tr></table>
<div class="note"><b>Zaroori farq:</b> <b>Switch</b> = ek hi network ke andar. <b>Router</b> = alag networks ke beech. Ghar ka WiFi box asal mein 3 cheezein ek mein hota hai: router + switch + access point.</div>`},
{h:"4. Addresses: MAC aur IP (abhi sirf idea lo)",html:`
<ul><li><b>MAC address</b> = device ka <b>pakka ID number</b> (jaise aapka CNIC number). Network card par chhapa hota hai, jaise <code>00-1A-2B-3C-4D-5E</code>. Yeh LAN ke andar kaam aata hai.</li>
<li><b>IP address</b> = device ka <b>network wala pata</b> (jaise ghar ka pata). Badal sakta hai, jaise <code>192.168.1.10</code>. Yeh alag networks ke beech kaam aata hai.</li></ul>
<p><b>Dono kyun?</b> Jaise courier: shehr aur gali ka pata (IP) se parcel aapke mohalle tak aata hai, phir aapka naam/CNIC (MAC) se sahi aadmi ko milta hai.</p>`},
{h:"5. OSI Model: 7 layers (sab se zaroori topic)",html:`
<p><b>OSI model</b> ek <b>naqsha (blueprint)</b> hai jo batata hai ke data aapki screen se doosre computer tak <b>7 steps</b> mein kaise jaata hai. Har layer ka apna alag kaam hai.</p>
<p><b>Yaad karne ka tareeqa (upar se neeche, 7 → 1):</b> <b>A</b>ll <b>P</b>eople <b>S</b>eem <b>T</b>o <b>N</b>eed <b>D</b>ata <b>P</b>rocessing<br>
<b>Neeche se upar (1 → 7):</b> <b>P</b>lease <b>D</b>o <b>N</b>ot <b>T</b>hrow <b>S</b>ausage <b>P</b>izza <b>A</b>way</p>
<table><tr><th>#</th><th>Layer</th><th>Kya karta hai (asaan)</th><th>Data ko kya kehte hain (PDU)</th><th>Protocols / cheezein</th></tr>
<tr><td>7</td><td><b>Application</b></td><td>User ka program network se baat karta hai (browser, email)</td><td>Data</td><td>HTTP, HTTPS, DNS, FTP, SMTP, DHCP</td></tr>
<tr><td>6</td><td><b>Presentation</b></td><td>Data ka format, encryption, compression</td><td>Data</td><td>SSL/TLS, JPEG, ASCII</td></tr>
<tr><td>5</td><td><b>Session</b></td><td>Baat-cheet (session) shuru, jaari, khatam karna</td><td>Data</td><td>NetBIOS, RPC</td></tr>
<tr><td>4</td><td><b>Transport</b></td><td>Data ko tukron mein todna, reliable ya fast bhejna, port numbers</td><td><b>Segment</b></td><td>TCP, UDP</td></tr>
<tr><td>3</td><td><b>Network</b></td><td>IP address lagana, best raasta chunna (routing)</td><td><b>Packet</b></td><td>IP, ICMP (ping), router</td></tr>
<tr><td>2</td><td><b>Data Link</b></td><td>MAC address lagana, LAN ke andar delivery</td><td><b>Frame</b></td><td>Ethernet, ARP, switch</td></tr>
<tr><td>1</td><td><b>Physical</b></td><td>Asli bijli/light/radio signal (bits 0 aur 1)</td><td><b>Bits</b></td><td>Cable, fiber, WiFi, hub</td></tr></table>
<div class="note"><b>Courier ki misaal:</b> Aap khat likhte ho (L7). Usse achhe format mein/lock karte ho (L6). Doosre se baat shuru karte ho (L5). Bade parcel ko dabbon mein baantke number lagate ho (L4). Shehr ka pata likhte ho (L3). Gali/ghar ka tag lagate ho (L2). Gaadi se bhej dete ho (L1).</div>
<p><b>Sabse zaroori jodi:</b> <b>Layer 1 = cable/bits. Layer 2 = switch + MAC + frame. Layer 3 = router + IP + packet. Layer 4 = TCP/UDP + port + segment. Layer 7 = browser/app.</b></p>`},
{h:"6. TCP/IP Model: 4 layers (asli duniya mein yahi chalta hai)",html:`
<p>OSI sirf samajhne ke liye hai. Real internet <b>TCP/IP model</b> par chalta hai (sirf 4 layers):</p>
<table><tr><th>TCP/IP layer</th><th>OSI layers jo isme aate hain</th><th>Examples</th></tr>
<tr><td><b>Application</b></td><td>7, 6, 5</td><td>HTTP, DNS, SSH, FTP</td></tr>
<tr><td><b>Transport</b></td><td>4</td><td>TCP, UDP</td></tr>
<tr><td><b>Internet</b></td><td>3</td><td>IP, ICMP</td></tr>
<tr><td><b>Network Access</b></td><td>2, 1</td><td>Ethernet, WiFi</td></tr></table>`},
{h:"7. Encapsulation: data aage kaise bhejta hai (step by step)",html:`
<p><b>Encapsulation</b> = data jab upar se neeche jaata hai to har layer us par apna <b>header</b> (label) lagati hai, jaise parcel par ek ke baad ek sticker.</p>
<pre>Layer 7-5:  [      DATA      ]                      "Hello"
Layer 4:    [TCP hdr][ DATA ]                       = SEGMENT  (port number)
Layer 3:    [IP hdr][TCP hdr][ DATA ]               = PACKET   (IP address)
Layer 2:    [Eth hdr][IP][TCP][ DATA ][Trailer]     = FRAME    (MAC address)
Layer 1:    1 0 1 1 0 0 1 0 1 ...                   = BITS     (cable signal)</pre>
<p>Receiver par ulta hota hai, <b>de-encapsulation</b>: neeche se upar har layer apna header utaarti jaati hai, aakhir mein sirf data bachta hai.</p>
<p><b>PDU yaad karo:</b> Data → <b>S</b>egment → <b>P</b>acket → <b>F</b>rame → <b>B</b>its (<b>S</b>ab <b>P</b>acket <b>F</b>aasle <b>B</b>aante).</p>`},
{h:"8. TCP vs UDP + Ports",html:`
<table><tr><th></th><th>TCP</th><th>UDP</th></tr>
<tr><td>Style</td><td>Pehle connection banata hai (3-way handshake), phir data. Gum ho to dobara bhejta hai.</td><td>Seedha bhej deta hai, parwah nahi.</td></tr>
<tr><td>Speed</td><td>Thoda slow</td><td>Fast</td></tr>
<tr><td>Reliable?</td><td>Haan</td><td>Nahi</td></tr>
<tr><td>Misaal</td><td>Websites, email, file download</td><td>Video call, live games, DNS</td></tr>
<tr><td>Analogy</td><td>Registered post (receipt milti hai)</td><td>Sadharan pamphlet phenkna</td></tr></table>
<p><b>Port number</b> = ek computer ke andar ka darwaza. IP batata hai kaun sa computer, port batata hai kaun sa program/service.</p>
<table><tr><th>Port</th><th>Service</th></tr><tr><td>80</td><td>HTTP (website)</td></tr><tr><td>443</td><td>HTTPS (secure website)</td></tr><tr><td>53</td><td>DNS</td></tr><tr><td>22</td><td>SSH</td></tr><tr><td>25</td><td>Email (SMTP)</td></tr><tr><td>21</td><td>FTP</td></tr><tr><td>67/68</td><td>DHCP</td></tr></table>
<p><b>TCP 3-way handshake:</b> Client → <code>SYN</code> ("kya tum ready ho?") · Server → <code>SYN-ACK</code> ("haan, tum?") · Client → <code>ACK</code> ("haan, shuru karo").</p>`},
{h:"9. Asli misaal: jab aap website kholte ho",html:`
<p>Aap browser mein <code>hsdevelopment.hsbetterbuys.com</code> likhte ho. Peeche kya hota hai:</p>
<ol><li><b>L7 DNS:</b> Browser DNS se poochta hai "is naam ka IP kya hai?" Jawab: ek IP address.</li>
<li><b>L4 TCP:</b> Aapka computer server se 3-way handshake karta hai (port 443).</li>
<li><b>L6 TLS:</b> Connection encrypt hota hai (HTTPS ka lock).</li>
<li><b>L7 HTTP:</b> Browser page maangta hai: <code>GET /</code></li>
<li><b>L3:</b> Har packet par aapka IP aur server ka IP lagta hai. Router raasta chunte hain.</li>
<li><b>L2:</b> Ghar ke andar frame par router ka MAC lagta hai (ARP se pata chalta hai).</li>
<li><b>L1:</b> WiFi/cable par bits ban kar jaata hai.</li>
<li>Server ka jawab ulte raaste se aata hai aur page khulta hai.</li></ol>
<div class="note"><b>Aapka faida:</b> Aap web developer ho, to L7 (HTTP, DNS, SSL) pehle se jaante ho. Ab neeche ki layers (L1-L4) seekhni hain. Wireshark se Week 22 mein yeh sab live dekhoge.</div>`},
{h:"10. Glossary (chhoti dictionary)",html:`
<table><tr><th>Lafz</th><th>Matlab</th></tr>
<tr><td>Host</td><td>Network par koi bhi device jis ka IP ho (PC, phone, server)</td></tr>
<tr><td>Protocol</td><td>Rules ka set jis se do devices baat karte hain (jaise HTTP)</td></tr>
<tr><td>Bandwidth</td><td>Ek second mein kitna data guzar sakta hai (Mbps)</td></tr>
<tr><td>Latency</td><td>Data ko pohanchne mein kitna waqt lagta hai (ms)</td></tr>
<tr><td>ISP</td><td>Internet Service Provider (PTCL, Nayatel, StormFiber)</td></tr>
<tr><td>Gateway</td><td>Router ka wo IP jis se aap bahar ke networks tak jaate ho</td></tr>
<tr><td>Broadcast</td><td>Ek device ka sab devices ko message bhejna</td></tr>
<tr><td>PDU</td><td>Protocol Data Unit: har layer par data ka naam (segment/packet/frame)</td></tr>
<tr><td>ICMP / ping</td><td>Test karna ke doosra device zinda hai ya nahi</td></tr>
<tr><td>ARP</td><td>IP se MAC address pata karne ka protocol</td></tr></table>`},
{h:"11. Aam ghaltiyan aur yaad rakhne ki cheezein",html:`
<ul><li>Router aur switch ko mix mat karo: <b>switch = andar (LAN), router = bahar (alag networks)</b>.</li>
<li>OSI sirf theory hai, TCP/IP real hai. Exam mein dono aate hain.</li>
<li>Frame (L2) ≠ Packet (L3) ≠ Segment (L4).</li>
<li>Ping fail hone ka matlab har dafa network kharab nahi, kabhi firewall block karta hai.</li>
<li>Roz ek layer ko apni zaban mein khud explain karo (Feynman). AI se kaho "meri galti pakdo".</li></ul>`}
],
lab:{title:"Lab 01 (poore steps): Switch + 3 PCs, pehla ping",
intro:"Maqsad: ek chhota LAN banana aur PC0 se PC1/PC2 ko ping karna. Time: 20-30 min. Packet Tracer pehle se khula hona chahiye.",
steps:[
"<b>Naya project:</b> Packet Tracer ke menu mein <b>File → New</b>. Khali workspace khulega.",
"<b>Switch lao:</b> Neeche left mein devices ki do rows hain. Neeche wali row mein doosra icon (flat box jaisa) <b>Switches</b> hai, us par click karo. Upar wali row mein <b>2960</b> (2960-24TT) dikhega. Usse kheench kar workspace ke beech mein chhodo.",
"<b>PCs lao:</b> Neeche left mein pehla icon (monitor jaisa) <b>End Devices</b> hai. Click karo, phir <b>PC</b> (PC-PT) ko 3 baar kheench kar switch ke aas paas chhodo. Naam PC0, PC1, PC2 ban jayenge.",
"<b>Cable chuno:</b> Neeche left mein <b>Connections</b> (bijli ka zig-zag icon) par click karo. Phir <b>Copper Straight-Through</b> (solid kali seedhi line) chuno. Mouse ka cursor ek tar ke saath ban jayega.",
"<b>PC0 ko jodo:</b> PC0 par click karo, list mein <b>FastEthernet0</b> chuno. Phir switch par click karo aur <b>FastEthernet0/1</b> chuno. Cable lag jayegi.",
"<b>PC1 aur PC2 ko jodo:</b> Isi tarah PC1 (FastEthernet0) ko switch ke <b>Fa0/2</b> se, aur PC2 ko <b>Fa0/3</b> se jodo.",
"<b>Battiyan check:</b> Cable ke dono sire par pehle <b>orange</b>, kuch second mein <b>hara triangle</b> ho jata hai. Jaldi ke liye neeche left ka <b>fast-forward</b> button dabao. Agar sab hara ho jaye to Layer 1/2 theek hai.",
"<b>PC0 ka IP:</b> PC0 par click → <b>Desktop</b> tab → <b>IP Configuration</b>. <b>Static</b> select karo. IPv4 Address: <code>192.168.1.10</code>, Subnet Mask: <code>255.255.255.0</code> (khud aa jata hai). Default Gateway khali chhodo. Window band karo.",
"<b>PC1 ka IP:</b> Isi tarah <code>192.168.1.11</code> aur mask <code>255.255.255.0</code>.",
"<b>PC2 ka IP:</b> <code>192.168.1.12</code> aur mask <code>255.255.255.0</code>.",
"<b>Ping test:</b> PC0 par click → Desktop → <b>Command Prompt</b>. Type karo <code>ping 192.168.1.11</code> aur Enter. Phir <code>ping 192.168.1.12</code>. <b>Reply from</b> aana chahiye, <b>Lost = 0 (0% loss)</b>.",
"<b>Simulation mode (concept dekhne ke liye):</b> Neeche right mein <b>Simulation</b> button dabao. Phir upar toolbar mein <b>closed envelope</b> (Add Simple PDU) icon dabao, pehle PC0 par, phir PC1 par click karo. Phir <b>Auto Capture / Play</b> dabao. Aap packet ko chalte dekhoge. Pehle <b>ARP</b> packet, phir <b>ICMP</b>. Kisi packet par click karo to <b>OSI Model</b> tab mein dikhega ke us layer par kya hua.",
"<b>Realtime par wapas:</b> Neeche right mein <b>Realtime</b> dabao.",
"<b>Save karo:</b> <b>File → Save As</b> → <code>D:\\networking\\labs\\lab01.pkt</code>.",
"<b>GitHub par daalo:</b> VS Code terminal mein: <code>cd D:\\networking</code>, <code>git add -A</code>, <code>git commit -m \"Week 1 lab done\"</code>, <code>git push</code>."],
trouble:[
["Cable orange hi rahi","Thora wait karo ya fast-forward dabao. Agar phir bhi orange ho to cable type check karo (Straight-Through)."],
["Ping: Request timed out (sab)","Teeno PCs ke IP aur mask dobara check karo, sab 192.168.1.x hon. Cable green hon."],
["Ping: Destination host unreachable","Aap ne doosre PC ka IP galat likha ya IP set nahi hua."],
["Pehla packet fail, baaki ok","Normal hai. ARP pehle MAC dhoondta hai."],
["IP Configuration option nahi mil raha","PC par double-click karo, Desktop tab chuno. Switch par Desktop tab nahi hota."]
]},
extraQuiz:[
{q:"Router aur switch mein sab se bada farq?",o:["Switch ek LAN ke andar, router alag networks ke beech","Dono same hain","Router sirf WiFi ke liye","Switch internet deta hai"],a:0},
{q:"Data ka sahi order (upar se neeche)?",o:["Segment → Packet → Frame → Bits","Frame → Packet → Segment → Bits","Bits → Frame → Packet → Segment","Packet → Bits → Segment → Frame"],a:0},
{q:"MAC address kis layer ka hai?",o:["Layer 1","Layer 2","Layer 3","Layer 7"],a:1},
{q:"HTTPS ka default port?",o:["80","53","443","22"],a:2},
{q:"Video call ke liye aam taur par kaun sa protocol?",o:["TCP","UDP","ICMP","ARP"],a:1},
{q:"IP address kis layer par kaam karta hai?",o:["Layer 2","Layer 3","Layer 4","Layer 7"],a:1},
{q:"TCP 3-way handshake ka sahi order?",o:["SYN, SYN-ACK, ACK","ACK, SYN, FIN","SYN, ACK, FIN","FIN, ACK, SYN"],a:0},
{q:"LAN kya hai?",o:["Ek building/ghar ka network","Poori duniya ka network","Sirf WiFi","Sirf server"],a:0}
]
};
