---
name: closing-checklist
description: Vede kontrolní seznam transakce (převod podílu, prodej závodu, investice) od podpisu po vypořádání — odkládací podmínky, souhlasy orgánů a třetích osob, dokumenty k podpisu s formou, úschova kupní ceny, zápisy do rejstříků a oznámení — se stavem, odpovědností a termíny. Použij, když uživatel řekne „closing checklist", „co chybí k uzavření transakce", „stav transakce", „podmínky převodu podílu".
argument-hint: "<transakce> [--aktualizace]"
---

# /korporat-cz:closing-checklist

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Postup

1. **Podklady.** Transakční smlouva (SPA / smlouva o převodu podílu / smlouva o koupi závodu), společenská smlouva cíle, výsledky due diligence (`transakce/<transakce>/`).
2. **Sestav seznam** — každá položka: co, opora (článek smlouvy / ustanovení zákona ověřené v Ingrid), odpovědná strana, termín (nástrojem), stav (✅ / ⏳ / ❌ / n/a), důkaz splnění.

   Typické položky u převodu podílu s.r.o.:
   - souhlas orgánu / vzdání se předkupního práva, je-li převoditelnost omezena (podle společenské smlouvy; porušení jiného omezení než souhlasu → neplatnost, § 209 odst. 4 ZOK, ověřeno 13. 10. 2026)
   - smlouva o převodu podílu — písemně s úředně ověřenými podpisy; vůči společnosti účinná doručením účinné smlouvy (§ 209 odst. 2 ZOK, ověřeno 13. 10. 2026)
   - souhlas s převodem od zástavního věřitele / financující banky, změna kontroly v klíčových smlouvách (z due diligence)
   - úschova kupní ceny (advokátní úschova → **AML povinnosti**, § 2 odst. 1 písm. g) zák. č. 253/2008 Sb.; smlouva o úschově, podmínky výplaty)
   - rozhodnutí o změně jednatelů, plné moci
   - návrh na zápis do OR, aktualizace seznamu společníků, evidence skutečných majitelů
   - oznámení zaměstnancům / úřadům, je-li třeba **[ověř podle transakce]**
   - u prodeje závodu: zvláštní povinnosti (zveřejnění, souhlasy věřitelů, zaměstnanci) **[ověř v Ingrid]**
3. **Kritická cesta** — co blokuje co; nejzazší termíny (long-stop date ze smlouvy).
4. **`--aktualizace`:** zpracuj nové informace, změň stavy, přidej datovaný záznam; ukaž rozdíl oproti minulé verzi.

## Výstup

Tabulka (Markdown / Excel) se záhlavím důvěrnosti, nahoře 🔴 blokující položky a nejbližší termíny (návrh — ověří advokát). Uložení do `transakce/<transakce>/closing.md` po potvrzení.
