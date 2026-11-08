# Lab 01 – First Network (Week 1)

## Topology
PC1 --- Switch0 --- PC2
              \---- PC3

## Steps
1. Packet Tracer mein 1 switch (2960) aur 3 PCs lo.
2. Copper straight-through cable se connect karo.
3. IPs do (PC > Desktop > IP Configuration):
   - PC1 192.168.1.10/24
   - PC2 192.168.1.11/24
   - PC3 192.168.1.12/24
4. Har PC se ping karo baaki PCs ko.
5. Simulation mode mein ping dekho: ARP phir ICMP, har layer par kya hota hai.

## Sawal (khud jawab do, phir AI se check karo)
- Pehle ping mein ek packet fail kyun hota hai? (ARP)
- Switch kaise decide karta hai frame kahan bhejna hai?
- Agar PC3 ka IP 192.168.2.12 kar do to kya hoga? Kyun?

## Deliverable
Screenshot + 5 line summary GitHub repo mein `labs/lab01` mein upload.

---
Agle labs (Week 2 se): ek ek file banao: lab02-subnetting, lab03-vlan, lab04-inter-vlan, lab05-ospf, lab06-nat, lab07-acl, lab08-vpn, lab09-python-automation.
AI se kaho: "Lab 02 banao [topic] par, isi format mein."
