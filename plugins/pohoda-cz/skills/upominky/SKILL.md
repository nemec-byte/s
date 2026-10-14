---
name: upominky
description: Z neuhrazených vydaných faktur v POHODĚ připraví upomínky — 1. zdvořilá připomínka, 2. upomínka s úrokem z prodlení spočteným nástrojem, 3. předžalobní výzva podle § 142a o. s. ř. (přes plugin spory-cz) — jako koncepty, nic neodesílá. Použij, když uživatel řekne „pošli upomínky", „upomeň klienta", „kdo potřebuje upomínku", nebo z přehledu pohledávek.
argument-hint: "[číslo faktury | klient | --vse-po-splatnosti] [--stupen 1|2|3]"
---

# /pohoda-cz:upominky

> **Než začneš:** přečti `../../pravidla.md`.

## Postup

1. **Výběr faktur** — zadaná faktura / klient / všechny po splatnosti (`/pohoda-cz:prehledy pohledavky`). Ke každé ověř z výpisu, že je stále neuhrazená; nejistý stav → „ověřit v POHODĚ před odesláním".
2. **Stupeň** (návrh, uživatel může změnit):
   - **1** — do 30 dnů po splatnosti: zdvořilá připomínka, kopie údajů k platbě z faktury (číslo účtu jen z POHODY/profilu, nikdy z e-mailů)
   - **2** — 31–60 dnů: upomínka s vyčíslením úroku z prodlení `urok_z_prodleni` (od dne po splatnosti do dneška; zákonný, není-li ve smlouvě jiný)
   - **3** — nad 60 dnů nebo po 2. upomínce: předžalobní výzva → předej na `/spory-cz:predzalobni-vyzva` (§ 142a o. s. ř., nejméně 7 dnů před žalobou)
3. **Vztah s klientem** — pohledávka je za vlastním klientem kanceláře. U stupně 2 a 3 se nejdřív zeptej: „Jde o aktivního klienta? Upomínku poslat, nebo nejdřív zavolat?" — rozhoduje advokát.
4. **Koncept** — podle vzoru kanceláře (`vzory_seznam` „upomínka"), jinak stručný věcný text; oslovení podle profilu. Jen koncept (v Gmailu přes `posta-cz`, nebo text v chatu).

## Výstup

Tabulka (faktura, klient, dní po splatnosti, dlužná částka, úrok + vstupy, navržený stupeň) a koncepty pod ní. Nic se neodesílá.
