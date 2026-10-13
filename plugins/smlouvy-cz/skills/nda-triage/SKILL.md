---
name: nda-triage
description: Rychle roztřídí smlouvu o mlčenlivosti (NDA) na zelenou (podpis bez další revize), žlutou (krátká kontrola advokátem) nebo červenou (plná revize) podle pravidel playbooku a kontrolního seznamu — definice důvěrných informací, výjimky, doba trvání, smluvní pokuta, skrytý zákaz konkurence nebo přetahování zaměstnanců, rozhodné právo. Použij, když uživatel řekne „projdi NDA", „můžeme podepsat mlčenlivost", „smlouva o mlčenlivosti" nebo nahraje NDA.
argument-hint: "<NDA>"
---

# /smlouvy-cz:nda-triage

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Kontrolní seznam

U každé položky: ✅ standard · ⚠️ pozor · ❌ chybí / nepřijatelné. Sporné místo cituj doslova.

1. **Strany** — správně označené, ověřené v ARES/OR; kdo jedná.
2. **Jednostranná / vzájemná** — odpovídá situaci (sdílí informace jen jedna strana?).
3. **Definice důvěrných informací** — přiměřená; ne „vše, co se dozvíte jakkoli".
4. **Výjimky** — veřejně známé, již dříve známé, nezávisle vytvořené, získané od třetí osoby oprávněně, povinné zpřístupnění orgánu nebo soudu (s oznámením).
5. **Účel použití** — omezen na posouzení / spolupráci.
6. **Okruh osob** — zaměstnanci, poradci (advokát, auditor) — s povinností mlčenlivosti.
7. **Doba trvání** — smlouvy i povinnosti mlčenlivosti; neurčitá doba u obchodního tajemství může být v pořádku, jinak pozor.
8. **Vrácení / zničení** informací a výjimka pro zálohy a zákonnou archivaci.
9. **Smluvní pokuta** — výše vs. hodnota informací; kumulace za každé porušení; vztah k náhradě škody (moderace § 2051 OZ).
10. **Skryté závazky** — zákaz konkurence, zákaz přetahování zaměstnanců nebo klientů, exkluzivita, licence, povinnost uzavřít další smlouvu → vždy ⚠️ nebo ❌.
11. **Rozhodné právo a soud** — české / jiné; rozhodčí doložka.
12. **Osobní údaje** — sdílejí-li se, je třeba řešit i GDPR (NDA to obvykle nestačí).

## Třídění

Podle pravidel v playbooku (sekce NDA). Bez playbooku použij: 🔴 je-li jakékoli ❌ nebo bod 10 ⚠️; 🟡 jsou-li 2 a více ⚠️; jinak 🟢 — a označ „výchozí pravidla, playbook chybí".

## Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
NDA: [strany] — výsledek: 🟢 / 🟡 / 🔴
Proč (2–3 věty): …
Kontrolní seznam: …
Návrhy úprav (jen pro 🟡/🔴): místo „…" → „…"
```

🟢 neznamená „podepsáno". Podpis je rozhodnutí klienta, případně advokáta.
