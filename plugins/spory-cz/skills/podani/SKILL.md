---
name: podani
description: Napíše návrh podání nebo jeho části (žaloba, odpor, vyjádření, odvolání, replika, návrh na exekuci) podle vzorů kanceláře v Ingrid, s fakty jen z podkladů věci, ověřeným zněním zákona a judikaturou s odkazy na weby soudů. Hlídá koncentraci řízení a úplnost tvrzení a důkazů. Použij, když uživatel řekne „napiš žalobu", „připrav odvolání", „vyjádření k žalobě", „sepiš odpor" nebo „napiš část podání o…".
argument-hint: "<druh podání> [oznaceni věci] [--cast název části]"
---

# /spory-cz:podani

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Koncept podání, který advokát upraví, ne přepisuje. Forma podle vzoru kanceláře, fakta jen ze spisu, právo jen ověřené.

## Postup

1. **Podklady.** Načti profily, pracovní složku věci, chronologii (je-li), napadené rozhodnutí nebo žalobu protistrany. Chybí-li chronologie u žaloby nebo vyjádření, nabídni ji nejdřív (`/spory-cz:chronologie --pro-podani`).
2. **Lhůta.** Je-li podání vázané na lhůtu, ověř ji (`/spory-cz:lhuty`) a uveď ji nahoře v interní poznámce.
3. **Vzor.** `vzory_seznam` s klíčovým slovem druhu podání → vyber se zdůvodněním → `vzor_text`. Drž strukturu, formulace a formu kanceláře. Nenajde-li se vzor, řekni to a navrhni strukturu; nevymýšlej „styl kanceláře".
4. **Náležitosti.** Ověř v Ingrid obecné náležitosti podání a zvláštní náležitosti daného podání (např. odvolání — `zneni_paragrafu` 99/1963 § 205; žaloba — § 79 a § 42 o. s. ř.) a projdi je jako kontrolní seznam.
5. **Skutková část.** Jen z podkladů; každé tvrzení s označeným důkazem. Tvrzení klienta bez dokladu označ v interní poznámce.
   **Koncentrace:** upozorni, pokud by podání mělo přinést všechna tvrzení a důkazy (§ 118b o. s. ř.) a něco chybí.
6. **Právní část.**
   - Ustanovení: `zneni_paragrafu` (k rozhodnému datu); doslovné citace jen z výsledku nástroje.
   - Výklad: `komentar_k_paragrafu` (čti `kontrola_zneni`).
   - Judikatura: `hledej_v_pravu` (NS, NSS, ÚS) → `text_rozhodnuti` → ověř, že rozhodnutí opravdu říká to, k čemu ho citujeme (celou tezi, ne její část) → `odkaz_na_soud` pro odkaz do podání. „nenalezeno" → bez odkazu a **[k ručnímu doověření]**.
   - Judikaturu proti nám nezamlčuj — uveď ji v interní poznámce a navrhni, jak se s ní vypořádat.
7. **Petit / návrh výroku.** Přesný, vykonatelný; částky s příslušenstvím přepočti (`urok_z_prodleni`, `spocitej`). Náklady řízení: `/spory-cz:naklady`.
8. **Kontrola před předáním:**
   - Odpovídá každé „uvozovkované" místo doslova zdroji?
   - Kryje každá citace celou tezi, ke které je připojena?
   - Jsou všechna tvrzení podložena důkazem?
   - Sedí částky v textu, petitu a vyčíslení?
   - Jsou správně označeni účastníci (IČO, sídlo — ověřeno v registru)?

## Výstup

1. **Koncept podání** (.docx přes dovednost docx, nebo Markdown) — bez záhlaví důvěrnosti.
2. **Interní poznámka** se záhlavím: lhůta, použitý vzor, nepodložená tvrzení, slabá místa, judikatura proti, seznam [k ověření], kontrolní seznam náležitostí.

Podání nepodávej. Podání podává advokát.
