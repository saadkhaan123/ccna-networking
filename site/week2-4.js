// Detailed lessons for weeks 2-4 (same format as week1.js)
DETAIL[2] = {
sections:[
{h:"1. IP address kya hota hai?",html:`
<p><b>IP address</b> = network par har device ka <b>pata (address)</b>. Jaise ghar ka pata hota hai, waise hi har computer/phone ka IP hota hai taake data sahi jagah pohnche.</p>
<p>IPv4 address aisa dikhta hai: <code>192.168.1.10</code></p>
<ul><li>Yeh <b>4 hisson (octets)</b> mein hota hai, dot (.) se alag.</li><li>Har hissa <b>0 se 255</b> tak ho sakta hai.</li><li>Andar se yeh <b>32 bits</b> (1 aur 0) ka hota hai: 4 octets × 8 bits.</li></ul>
<pre>192      .168      .1        .10
11000000 .10101000 .00000001 .00001010   (32 bits)</pre>
<p>Computer sirf 1 aur 0 samajhta hai. Humein binary aani chahiye, kyunki subnetting (Week 3) isi par chalti hai.</p>`},
{h:"2. Binary ↔ Decimal (sabse zaroori practice)",html:`
<p>Ek octet mein 8 bits hote hain. Har bit ki ek value hoti hai (left se right):</p>
<table><tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr></table>
<p><b>Decimal → Binary (200 ka example):</b></p>
<ol><li>128 ≤ 200? Haan → <b>1</b>, baqi 200−128 = 72</li><li>64 ≤ 72? Haan → <b>1</b>, baqi 8</li><li>32 ≤ 8? Nahi → <b>0</b></li><li>16 ≤ 8? Nahi → <b>0</b></li><li>8 ≤ 8? Haan → <b>1</b>, baqi 0</li><li>4, 2, 1 → <b>0 0 0</b></li></ol>
<p>Jawab: <code>11001000</code> (check: 128+64+8 = 200 ✓)</p>
<p><b>Binary → Decimal:</b> jahan 1 hai us position ki value jod do. <code>10101100</code> = 128+32+8+4 = <b>172</b>.</p>
<div class="note"><b>Yaad rakhne wali values:</b> 128, 192, 224, 240, 248, 252, 254, 255 (yeh subnet masks mein baar baar aati hain). Binary Converter tab se practice karo.</div>`},
{h:"3. Public aur Private IP",html:`
<p><b>Public IP:</b> internet par unique. ISP deta hai. Poori duniya mein ek hi device ka.</p>
<p><b>Private IP:</b> sirf ghar/office ke andar. Har ghar mein 192.168.1.x ho sakta hai, koi takrao nahi.</p>
<table><tr><th>Private range</th><th>Poori range</th><th>Aam istemal</th></tr>
<tr><td>10.0.0.0/8</td><td>10.0.0.0 – 10.255.255.255</td><td>Bade networks</td></tr>
<tr><td>172.16.0.0/12</td><td>172.16.0.0 – 172.31.255.255</td><td>Medium networks</td></tr>
<tr><td>192.168.0.0/16</td><td>192.168.0.0 – 192.168.255.255</td><td>Ghar / chhote office</td></tr></table>
<p>Private IP se internet tak jaane ke liye router <b>NAT</b> karta hai (Week 12) jo private IP ko public IP mein badal deta hai.</p>`},
{h:"4. IP Classes aur special addresses",html:`
<table><tr><th>Class</th><th>Pehla octet</th><th>Default mask</th><th>Istemal</th></tr>
<tr><td>A</td><td>1 – 126</td><td>255.0.0.0 (/8)</td><td>Bade networks</td></tr>
<tr><td>B</td><td>128 – 191</td><td>255.255.0.0 (/16)</td><td>Medium</td></tr>
<tr><td>C</td><td>192 – 223</td><td>255.255.255.0 (/24)</td><td>Chhote</td></tr>
<tr><td>D</td><td>224 – 239</td><td>-</td><td>Multicast</td></tr>
<tr><td>E</td><td>240 – 255</td><td>-</td><td>Research (reserved)</td></tr></table>
<p><b>Special addresses:</b></p>
<ul><li><code>127.0.0.1</code> = <b>Loopback</b> (apna hi computer, <code>ping 127.0.0.1</code> se apna network card test hota hai)</li>
<li><code>169.254.x.x</code> = <b>APIPA</b>: DHCP server nahi mila to Windows khud ye IP le leta hai (matlab masla hai!)</li>
<li><code>255.255.255.255</code> = <b>Broadcast</b> (sab devices ko)</li>
<li><code>0.0.0.0</code> = "koi nahi / default"</li></ul>
<p class="mute">Aaj kal classes ki jagah subnet mask (CIDR) use hota hai, magar exam mein classes aati hain.</p>`},
{h:"5. Subnet Mask aur Default Gateway",html:`
<p><b>Subnet mask</b> batata hai ke IP ka kaun sa hissa <b>network</b> hai aur kaun sa <b>host (device)</b>. Jaise phone number ka area code aur number.</p>
<pre>IP:    192.168.1.10   = 11000000.10101000.00000001.00001010
Mask:  255.255.255.0  = 11111111.11111111.11111111.00000000
                        |------ network ------| |--host--|</pre>
<p>Mask mein <b>1</b> = network part, <b>0</b> = host part. <code>255.255.255.0</code> ko <b>/24</b> bhi likhte hain (24 ones).</p>
<p><b>Rule:</b> Agar do devices ka network part <b>same</b> ho, to wo seedha baat kar sakte hain (same LAN). Agar alag ho, to unhein <b>router</b> (default gateway) chahiye.</p>
<p><b>Default Gateway</b> = router ka IP jo us LAN ka darwaza hai bahar ki duniya ke liye. Misaal: PC 192.168.1.10 → gateway 192.168.1.1.</p>`},
{h:"6. Unicast, Broadcast, Multicast",html:`
<table><tr><th>Type</th><th>Matlab</th><th>Misaal</th></tr>
<tr><td><b>Unicast</b></td><td>Ek se ek</td><td>Aap ek website kholte ho</td></tr>
<tr><td><b>Broadcast</b></td><td>Ek se sab (LAN mein)</td><td>ARP request "192.168.1.5 kaun hai?"</td></tr>
<tr><td><b>Multicast</b></td><td>Ek se ek group</td><td>Live video stream, OSPF (224.0.0.5)</td></tr></table>`},
{h:"7. Static IP vs DHCP",html:`
<ul><li><b>Static:</b> aap khud IP likhte ho. Servers, routers, printers ke liye.</li>
<li><b>DHCP:</b> router/server khud IP deta hai (DORA: Discover, Offer, Request, Ack). Phones/laptops ke liye. (Week 12 mein detail)</li></ul>
<p>Ghar ka router DHCP server hota hai, isi liye aapko manually IP nahi likhna padta.</p>`},
{h:"8. Glossary + yaad rakhne ki cheezein",html:`
<table><tr><th>Lafz</th><th>Matlab</th></tr>
<tr><td>Octet</td><td>IP ka ek hissa = 8 bits</td></tr><tr><td>CIDR / prefix</td><td>/24, /26 jaisa likhna mask ko</td></tr>
<tr><td>Network ID</td><td>Network ka pehla address (host bits sab 0)</td></tr><tr><td>Broadcast address</td><td>Network ka aakhri address (host bits sab 1)</td></tr>
<tr><td>Host range</td><td>Network ID aur broadcast ke beech ke addresses</td></tr></table>
<ul><li>Same network ke devices ke network bits <b>same</b> hone chahiye.</li><li>IP aur mask hamesha <b>saath</b> dekho.</li><li>Ping fail ho to pehle check karo: IP, mask, gateway.</li></ul>`}
],
lab:{title:"Lab 02 (poore steps): Do networks aur router (ping kyun fail hota hai)",
intro:"Maqsad: dekho ke alag subnets ke PCs bina router ke baat nahi kar sakte, phir router laga kar ping chalao. Time: 30-40 min. Pichle sawal ka jawab bhi isi se milega.",
steps:[
"<b>Naya project:</b> File → New.",
"<b>Devices lao:</b> 2 switches (2960), 4 PCs (PC0 se PC3), aur 1 router (<b>Network Devices → Routers → 2911</b>).",
"<b>Left LAN jodo:</b> Copper Straight-Through cable se PC0 (Fast0) → Switch0 (Fa0/1), PC1 (Fast0) → Switch0 (Fa0/2).",
"<b>Right LAN jodo:</b> PC2 → Switch1 (Fa0/1), PC3 → Switch1 (Fa0/2).",
"<b>IPs do (static):</b><br>PC0: <code>192.168.1.10</code> / <code>255.255.255.0</code><br>PC1: <code>192.168.1.11</code> / <code>255.255.255.0</code><br>PC2: <code>192.168.2.10</code> / <code>255.255.255.0</code><br>PC3: <code>192.168.2.11</code> / <code>255.255.255.0</code>",
"<b>Test 1 (same LAN):</b> PC0 command prompt: <code>ping 192.168.1.11</code>. Chalna chahiye (same network).",
"<b>Test 2 (alag LAN, bina router):</b> PC0 se <code>ping 192.168.2.10</code>. <b>Fail</b> hoga (Destination host unreachable). Yehi aapke pichle sawal ka jawab hai: network part alag hai, to PC samajhta hai ke wo doosre network mein hai aur gateway chahiye, jo set nahi.",
"<b>Router jodo:</b> Switch0 ka <b>GigabitEthernet0/1</b> → Router ka <b>GigabitEthernet0/0</b>. Switch1 ka <b>GigabitEthernet0/1</b> → Router ka <b>GigabitEthernet0/1</b> (Straight-Through).",
"<b>Router configure:</b> Router par click → <b>CLI</b> tab. Agar 'Continue with configuration dialog?' aaye to <code>no</code> likho, Enter. Phir:<pre>enable\nconfigure terminal\ninterface gigabitEthernet 0/0\nip address 192.168.1.1 255.255.255.0\nno shutdown\nexit\ninterface gigabitEthernet 0/1\nip address 192.168.2.1 255.255.255.0\nno shutdown\nend\nshow ip interface brief</pre>Dono interfaces <b>up/up</b> dikhni chahiye.",
"<b>Gateway set karo:</b> PC0 aur PC1 ka Default Gateway <code>192.168.1.1</code>. PC2 aur PC3 ka Default Gateway <code>192.168.2.1</code>.",
"<b>Test 3:</b> PC0 se <code>ping 192.168.2.10</code>. Ab chalna chahiye (pehla packet fail ho sakta hai). Router ne do networks ko jod diya.",
"<b>tracert:</b> PC0 se <code>tracert 192.168.2.10</code>. Pehla hop <code>192.168.1.1</code> (router) dikhega.",
"<b>Save:</b> <code>D:\\networking\\labs\\lab02.pkt</code>. Phir <code>git add -A</code>, <code>git commit -m \"Week 2 lab\"</code>, <code>git push</code>."],
trouble:[
["Router interface 'down'","Cable check karo aur interface par 'no shutdown' likha ho. Switch port hara hone mein thoda waqt lagta hai."],
["Ping: Request timed out","PC ka gateway set hai? Router ke IPs sahi hain? Mask match karta hai?"],
["Destination host unreachable (router ke baad bhi)","PC ka Default Gateway galat ya khali hai."],
["Router CLI mein command nahi chal rahi","'enable' aur 'configure terminal' pehle likho. Prompt Router(config)# hona chahiye."]
]},
extraQuiz:[
{q:"IPv4 address kitne bits ka hota hai?",o:["16","32","64","128"],a:1},
{q:"Binary 10101100 ka decimal?",o:["168","172","192","180"],a:1},
{q:"Kaun sa IP private hai?",o:["8.8.8.8","172.20.5.1","11.0.0.1","200.1.1.1"],a:1},
{q:"169.254.10.5 kab milta hai?",o:["DHCP fail hone par","Internet se","Router ne diya","VPN"],a:0},
{q:"Default gateway kya hai?",o:["Router ka IP jo LAN se bahar jaata hai","DNS server","Switch ka MAC","Printer"],a:0},
{q:"Subnet mask mein 1 kya dikhata hai?",o:["Host part","Network part","MAC","Port"],a:1},
{q:"Class C ka default mask?",o:["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.128"],a:2},
{q:"Alag subnet ke PCs ko baat karne ke liye kya chahiye?",o:["Router","Hub","Sirf cable","Kuch nahi"],a:0}
]
};

DETAIL[3] = {
sections:[
{h:"1. Subnetting kyun karte hain?",html:`
<p><b>Subnetting</b> = ek bade network ko <b>chhote networks (subnets)</b> mein todna.</p>
<p><b>Misaal:</b> Ek building mein 200 log hain. Sab ek hi bade hall mein hon to shor (broadcast) bohat hoga. Floors/rooms mein baant do (Sales, IT, HR) to sab behtar.</p>
<ul><li><b>Broadcast kam</b> hota hai, network tez chalta hai.</li><li><b>Security:</b> departments alag hote hain (ACL laga sakte hain).</li><li><b>IP addresses ki bachat:</b> zarurat ke hisaab se size.</li><li><b>Organization:</b> har department ka apna subnet.</li></ul>`},
{h:"2. Basic idea: host bits udhaar lena",html:`
<p>Pehle: <code>192.168.1.0/24</code> → 24 network bits, <b>8 host bits</b> → 2⁸ = 256 addresses.</p>
<p>Subnetting mein hum host bits mein se kuch bits <b>network mein badal dete hain</b>. /24 se /26 matlab 2 bits udhaar liye, ab <b>2² = 4 subnets</b> bane, har subnet mein 6 host bits → 2⁶ = <b>64</b> addresses.</p>
<pre>/24: 11111111.11111111.11111111.00000000  (1 network, 256 addrs)
/26: 11111111.11111111.11111111.11000000  (4 subnets, 64 addrs each)
                                  ^^ yeh 2 bits udhaar liye</pre>
<p><b>Formulas:</b></p>
<ul><li>Subnets = 2<sup>(borrowed bits)</sup></li><li>Total addresses per subnet = 2<sup>(host bits)</sup></li><li><b>Usable hosts = 2<sup>(host bits)</sup> − 2</b> (ek network address, ek broadcast address)</li></ul>`},
{h:"3. Cheat table (yaad kar lo)",html:`
<table><tr><th>Prefix</th><th>Mask</th><th>Block size</th><th>Usable hosts</th></tr>
<tr><td>/24</td><td>255.255.255.0</td><td>256</td><td>254</td></tr>
<tr><td>/25</td><td>255.255.255.128</td><td>128</td><td>126</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>64</td><td>62</td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>32</td><td>30</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td></tr>
<tr><td>/29</td><td>255.255.255.248</td><td>8</td><td>6</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>4</td><td>2</td></tr></table>
<p class="mute">Yaad karne ki trick: block size = 256 − mask ka interesting octet. /26 → 256−192 = 64.</p>`},
{h:"4. Magic number method (step by step)",html:`
<p><b>Sawal:</b> <code>192.168.1.77/26</code> ka network address, broadcast aur host range kya hai?</p>
<ol><li><b>Mask:</b> /26 = 255.255.255.<b>192</b>. Interesting octet = chautha.</li>
<li><b>Block size:</b> 256 − 192 = <b>64</b>.</li>
<li><b>Subnets ki list (64 ke multiples):</b> 0, 64, 128, 192.</li>
<li><b>77 kis mein aata hai?</b> 64 ≤ 77 < 128 → subnet <b>64</b>.</li>
<li><b>Network address:</b> 192.168.1.<b>64</b></li>
<li><b>Broadcast:</b> agle subnet (128) se ek kam → 192.168.1.<b>127</b></li>
<li><b>Hosts:</b> 192.168.1.<b>65</b> se 192.168.1.<b>126</b> (62 hosts)</li></ol>
<p><b>Sawal 2:</b> <code>10.1.5.200/27</code>: mask 255.255.255.224, block 32. Subnets: 0,32,64,96,128,160,<b>192</b>,224. 200 → 192. Network <b>10.1.5.192</b>, broadcast <b>10.1.5.223</b>, hosts <b>.193 – .222</b> (30 hosts).</p>
<p><b>Sawal 3 (bada):</b> <code>172.16.45.9/20</code>: mask 255.255.<b>240</b>.0, interesting octet = teesra. Block = 256 − 240 = <b>16</b>. 45 → 32 (multiples: 0,16,32,48). Network <b>172.16.32.0</b>, broadcast <b>172.16.47.255</b>, hosts <b>172.16.32.1 – 172.16.47.254</b> (4094 hosts).</p>
<div class="note">Subnet Calculator tab se apna jawab check karo. Pehle khud hal karo, phir calculator.</div>`},
{h:"5. VLSM: alag alag size ke subnets",html:`
<p>Har department ka size alag hota hai. Sabko barabar /24 dena <b>zaya</b> hai. <b>VLSM</b> = zarurat ke hisaab se alag mask.</p>
<p><b>Rule:</b> sabse bade subnet se shuru karo, phir chhote.</p>
<p><b>Misaal:</b> network <code>192.168.10.0/24</code>:</p>
<table><tr><th>Department</th><th>Hosts</th><th>Mask</th><th>Network</th><th>Usable range</th><th>Broadcast</th></tr>
<tr><td>Sales</td><td>50</td><td>/26 (62)</td><td>192.168.10.0</td><td>.1 – .62</td><td>.63</td></tr>
<tr><td>IT</td><td>25</td><td>/27 (30)</td><td>192.168.10.64</td><td>.65 – .94</td><td>.95</td></tr>
<tr><td>HR</td><td>10</td><td>/28 (14)</td><td>192.168.10.96</td><td>.97 – .110</td><td>.111</td></tr>
<tr><td>WAN link</td><td>2</td><td>/30 (2)</td><td>192.168.10.112</td><td>.113 – .114</td><td>.115</td></tr></table>
<p>Dekho kaise ek ke baad ek subnet shuru hota hai aur koi overlap nahi.</p>`},
{h:"6. Subnetting ki practice kaise karein",html:`
<ul><li>Roz <b>20 questions</b> (Subnet Drill tab, subnettingpractice.com).</li>
<li>Pehle cheat table yaad karo, phir bina table ke karo.</li>
<li>Har sawal mein 4 cheezein nikalo: <b>network, broadcast, first host, last host</b>.</li>
<li>Exam mein subnetting <b>1-2 minute</b> mein honi chahiye. Speed zaroori hai.</li>
<li>AI se kaho: "10 subnetting questions do, mein jawab dunga, tum check karna."</li></ul>
<div class="note"><b>Aam ghalti:</b> usable hosts mein −2 bhool jana, aur broadcast ko host samajh lena.</div>`}
],
lab:{title:"Lab 03 (poore steps): 3 department VLSM network",
intro:"Maqsad: VLSM plan banakar Packet Tracer mein router ke 3 interfaces par 3 alag subnets lagana. Time: 40-50 min.",
steps:[
"<b>Pehle plan (kagaz/notes par):</b> Sales /26 → network 192.168.10.0 mask 255.255.255.192, gateway .1. IT /27 → network 192.168.10.64 mask 255.255.255.224, gateway .65. HR /28 → network 192.168.10.96 mask 255.255.255.240, gateway .97.",
"<b>Naya project:</b> File → New. 1 router <b>2911</b>, 3 switches <b>2960</b>, 3 PCs lo (ek ek department ke liye).",
"<b>Cables:</b> Router Gi0/0 → Switch0 Gi0/1 (Sales), Router Gi0/1 → Switch1 Gi0/1 (IT), Router Gi0/2 → Switch2 Gi0/1 (HR). Phir har PC ko apne switch ke Fa0/1 se jodo (Straight-Through).",
"<b>Router config</b> (CLI tab):<pre>enable\nconfigure terminal\ninterface g0/0\nip address 192.168.10.1 255.255.255.192\nno shutdown\nexit\ninterface g0/1\nip address 192.168.10.65 255.255.255.224\nno shutdown\nexit\ninterface g0/2\nip address 192.168.10.97 255.255.255.240\nno shutdown\nend\nshow ip interface brief</pre>",
"<b>PC IPs:</b><br>Sales PC: IP <code>192.168.10.10</code>, mask <code>255.255.255.192</code>, gateway <code>192.168.10.1</code><br>IT PC: IP <code>192.168.10.70</code>, mask <code>255.255.255.224</code>, gateway <code>192.168.10.65</code><br>HR PC: IP <code>192.168.10.100</code>, mask <code>255.255.255.240</code>, gateway <code>192.168.10.97</code>",
"<b>Test:</b> Sales PC se IT PC ko aur HR PC ko ping karo. Teeno departments aapas mein baat karenge.",
"<b>Check:</b> Router CLI mein <code>show ip route</code>. 3 <b>C</b> (connected) routes dikhengi, ek har subnet ki.",
"<b>Calculator se verify:</b> Site ke Subnet Calculator mein <code>192.168.10.70</code> aur <code>27</code> daalo. Network 192.168.10.64 aana chahiye.",
"<b>Save:</b> <code>D:\\networking\\labs\\lab03.pkt</code>, phir git add / commit / push."],
trouble:[
["Ping fail","Mask har PC par apne subnet ke mutabiq dalo (192, 224, 240) aur gateway sahi ho."],
["Router: 'Bad mask' ya address overlap error","Do interfaces par overlapping subnet nahi hone chahiye. Plan dobara check karo."],
["Interface down","no shutdown lagao aur cable check karo."]
]},
extraQuiz:[
{q:"/26 mein usable hosts?",o:["30","62","64","126"],a:1},
{q:"192.168.1.130/25 ka network address?",o:["192.168.1.0","192.168.1.128","192.168.1.64","192.168.1.192"],a:1},
{q:"/28 ka mask?",o:["255.255.255.224","255.255.255.240","255.255.255.248","255.255.255.252"],a:1},
{q:"2 hosts wale WAN link ke liye behtareen mask?",o:["/24","/28","/29","/30"],a:3},
{q:"VLSM mein pehle kaun sa subnet allot karte hain?",o:["Sabse chhota","Sabse bada","Random","Aakhri"],a:1},
{q:"192.168.1.0/27 ka broadcast?",o:["192.168.1.15","192.168.1.31","192.168.1.32","192.168.1.63"],a:1},
{q:"Usable hosts ka formula?",o:["2^h","2^h − 2","2^h + 2","h × 2"],a:1},
{q:"10.0.0.0/8 mein kitne host bits?",o:["8","16","24","32"],a:2}
]
};

DETAIL[4] = {
sections:[
{h:"1. Ethernet aur LAN ka dil: Switch",html:`
<p><b>Ethernet</b> LAN ka sabse common technology hai (wired). Data <b>frames</b> mein jaata hai aur har frame par <b>source MAC</b> aur <b>destination MAC</b> likha hota hai.</p>
<p><b>Switch</b> LAN ka dil hai. Yeh Layer 2 device hai aur <b>MAC address table</b> (CAM table) rakhta hai.</p>
<p><b>MAC address:</b> 48 bits, hex mein, jaise <code>00:1A:2B:3C:4D:5E</code>. Pehle 24 bits = company (OUI), baaqi 24 bits = device number.</p>`},
{h:"2. Switch kaise kaam karta hai (4 kaam)",html:`
<ol><li><b>Learn:</b> frame aane par us ka <b>source MAC</b> us port ke saath table mein likh leta hai.</li>
<li><b>Forward:</b> <b>destination MAC</b> table mein hai to sirf us port par bhejta hai.</li>
<li><b>Flood:</b> destination MAC table mein nahi (unknown) ya broadcast hai to <b>baqi sab ports</b> par bhejta hai (jis port se aaya wahan nahi).</li>
<li><b>Filter:</b> agar source aur destination ek hi port par hon to frame aage nahi bhejta.</li></ol>
<p><b>Misaal:</b> PC0 (MAC A, Fa0/1) PC1 (MAC B, Fa0/2) ko ping karta hai:</p>
<pre>1. Switch table khali. Frame (src A, dst B) aaya Fa0/1 par.
2. Switch likhta hai: A → Fa0/1  (learn)
3. B table mein nahi → sab ports par flood.
4. PC1 jawab deta hai (src B, dst A) Fa0/2 se.
5. Switch likhta hai: B → Fa0/2.
6. Ab A↔B ka traffic sirf in 2 ports par jaata hai.</pre>`},
{h:"3. Collision domain aur Broadcast domain",html:`
<table><tr><th></th><th>Matlab</th><th>Kaun todta hai</th></tr>
<tr><td><b>Collision domain</b></td><td>Wo hissa jahan do devices ek saath bhejein to takrao ho sakta hai</td><td><b>Switch ka har port</b> alag collision domain hai. Hub sabko ek bana deta hai.</td></tr>
<tr><td><b>Broadcast domain</b></td><td>Wo hissa jahan ek broadcast sab tak pohanchta hai</td><td><b>Router</b> (aur VLAN) todte hain. Switch nahi.</td></tr></table>
<p>Ek simple switch ke <b>sab ports = ek broadcast domain</b>, lekin <b>har port = alag collision domain</b>.</p>`},
{h:"4. ARP: IP se MAC",html:`
<p>PC ko doosre PC ka IP pata hota hai, lekin LAN mein frame bhejne ke liye <b>MAC</b> chahiye. <b>ARP</b> (Address Resolution Protocol) yeh kaam karta hai.</p>
<pre>PC0: "192.168.1.11 ka MAC kya hai?"   (broadcast, sab ko)
PC1: "Main hoon, mera MAC B hai."     (unicast reply)</pre>
<p>PC apni <b>ARP cache</b> mein jawab yaad rakhta hai. Windows par <code>arp -a</code> se dekho. Isi liye pehla ping slow/fail ho sakta hai.</p>`},
{h:"5. Cables",html:`
<table><tr><th>Cable</th><th>Kahan</th></tr>
<tr><td><b>Straight-through</b></td><td>Alag type ke devices: PC↔switch, switch↔router</td></tr>
<tr><td><b>Crossover</b></td><td>Same type: switch↔switch, PC↔PC (purane devices; naye devices auto-detect karte hain)</td></tr>
<tr><td><b>Console (rollover)</b></td><td>Router/switch ko configure karne ke liye PC se</td></tr>
<tr><td><b>Fiber</b></td><td>Lambi doori, tez speed</td></tr></table>
<p>Copper cable (UTP) limit: <b>100 meter</b>. Cat5e/Cat6 aam hain.</p>`},
{h:"6. Cisco IOS: CLI ke modes",html:`
<table><tr><th>Mode</th><th>Prompt</th><th>Kaise jaana hai</th></tr>
<tr><td>User EXEC</td><td><code>Switch&gt;</code></td><td>Default, bohat limited</td></tr>
<tr><td>Privileged EXEC</td><td><code>Switch#</code></td><td><code>enable</code></td></tr>
<tr><td>Global Config</td><td><code>Switch(config)#</code></td><td><code>configure terminal</code> (ya <code>conf t</code>)</td></tr>
<tr><td>Interface Config</td><td><code>Switch(config-if)#</code></td><td><code>interface fa0/1</code></td></tr>
<tr><td>Line Config</td><td><code>Switch(config-line)#</code></td><td><code>line console 0</code> / <code>line vty 0 15</code></td></tr></table>
<p><b>Tricks:</b> Tab = command pura karo. <code>?</code> = help. <code>exit</code> = ek level peeche. <code>end</code> (ya Ctrl+Z) = seedha # par. Command chhoti bhi chal jati hai: <code>sh ip int br</code>.</p>
<p><b>Do configs:</b> <code>running-config</code> = abhi ki (RAM, restart par ud jati hai). <code>startup-config</code> = save wali (NVRAM). Save karne ke liye: <code>copy running-config startup-config</code> (ya <code>write memory</code>).</p>`},
{h:"7. Zaroori commands (matlab ke saath)",html:`
<table><tr><th>Command</th><th>Kya karta hai</th></tr>
<tr><td><code>hostname SW1</code></td><td>Device ka naam</td></tr>
<tr><td><code>enable secret cisco123</code></td><td>Privileged mode ka encrypted password</td></tr>
<tr><td><code>line console 0 / password x / login</code></td><td>Console access par password</td></tr>
<tr><td><code>banner motd #Authorized only#</code></td><td>Login se pehle warning message</td></tr>
<tr><td><code>interface vlan 1</code> + <code>ip address ...</code> + <code>no shutdown</code></td><td>Switch ko management IP dena (SVI)</td></tr>
<tr><td><code>show running-config</code></td><td>Poori config dekho</td></tr>
<tr><td><code>show ip interface brief</code></td><td>Interfaces aur unka status</td></tr>
<tr><td><code>show mac address-table</code></td><td>Switch ka MAC table</td></tr>
<tr><td><code>show interfaces fa0/1</code></td><td>Port ki detail</td></tr>
<tr><td><code>show version</code></td><td>IOS version, uptime</td></tr></table>`}
],
lab:{title:"Lab 04 (poore steps): Switch ko CLI se configure karo",
intro:"Maqsad: Switch ki basic configuration, management IP aur MAC table dekhna. Lab 01 (lab01.pkt) khol lo ya naya 1 switch + 3 PCs banao. Time: 30-40 min.",
steps:[
"<b>Lab 01 kholo:</b> File → Open → <code>D:\\networking\\labs\\lab01.pkt</code>. (Ya naya banao: 1 switch 2960, 3 PCs, IPs 192.168.1.10/.11/.12, mask 255.255.255.0.)",
"<b>Switch CLI:</b> Switch0 par click → <b>CLI</b> tab. Enter dabao. Prompt <code>Switch&gt;</code> aayega.",
"<b>Privileged mode:</b> <code>enable</code> likho. Prompt <code>Switch#</code> ho jayega.",
"<b>Global config:</b><pre>configure terminal\nhostname SW1</pre>Prompt <code>SW1(config)#</code> ho jayega.",
"<b>Secret password:</b><pre>enable secret cisco123</pre>",
"<b>Console password:</b><pre>line console 0\npassword console123\nlogin\nexit</pre>",
"<b>Banner:</b><pre>banner motd #Authorized access only#</pre>",
"<b>Management IP (SVI):</b><pre>interface vlan 1\nip address 192.168.1.2 255.255.255.0\nno shutdown\nend</pre>",
"<b>Save:</b><pre>copy running-config startup-config</pre>Enter dabao (filename confirm). <code>[OK]</code> aana chahiye.",
"<b>Test:</b> PC0 command prompt se <code>ping 192.168.1.2</code>. Switch reply dega.",
"<b>MAC table dekho:</b> Pehle PC0 se PC1 aur PC2 ko ping karo. Phir SW1 CLI mein <code>show mac address-table</code>. Aapko 3 MAC addresses aur unke ports (Fa0/1, Fa0/2, Fa0/3) dikhenge.",
"<b>Interfaces dekho:</b> <code>show ip interface brief</code>. Fa0/1-3 up, vlan1 up honi chahiye.",
"<b>Config dekho:</b> <code>show running-config</code> aur pehchano jo aap ne likha tha.",
"<b>Test (restart):</b> <code>reload</code> se pehle save zaroor karo. Save na ho to config chali jati hai. (Optional test.)",
"<b>Save aur git:</b> <code>D:\\networking\\labs\\lab04.pkt</code>, phir add / commit / push."],
trouble:[
["Command 'Invalid input'","Sahi mode mein ho? Prompt # ya (config)# check karo. Spelling dekho."],
["Ping to switch fail","SVI par 'no shutdown' likha? PC aur switch ek hi subnet (192.168.1.x) mein hain?"],
["MAC table khali","Pehle PCs se traffic chalao (ping), phir show karo."],
["Prompt ghalat mode mein atka","'end' likho, phir 'enable' se dobara shuru karo."]
]},
extraQuiz:[
{q:"Switch MAC table kaise banata hai?",o:["Destination MAC se","Source MAC se","IP se","Manually only"],a:1},
{q:"Switch ke sab ports kitne broadcast domain banate hain (VLAN ke bina)?",o:["Ek","Har port alag","Do","Teen"],a:0},
{q:"Kis command se Privileged mode mein jaate hain?",o:["enable","configure terminal","login","start"],a:0},
{q:"PC se switch tak kaun si cable?",o:["Straight-through","Crossover","Console","Rollover only"],a:0},
{q:"startup-config kahan rehti hai?",o:["RAM","NVRAM","Flash only","Cloud"],a:1},
{q:"Switch ko management IP dene ke liye?",o:["SVI (interface vlan 1)","Router port","Console","MAC"],a:0},
{q:"Copper UTP ki maximum doori?",o:["10 m","100 m","1 km","10 km"],a:1},
{q:"ARP request kaisi hoti hai?",o:["Broadcast","Unicast","Multicast only","Ghair"],a:0}
]
};
