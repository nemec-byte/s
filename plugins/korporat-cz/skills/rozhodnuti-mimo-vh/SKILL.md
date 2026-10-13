---
name: rozhodnuti-mimo-vh
description: Připraví rozhodnutí jediného společníka v působnosti valné hromady, nebo návrh rozhodnutí per rollam s.r.o. (a obdobně a.s.) — kontrola působnosti, formy (kdy je nutná veřejná listina), lhůty pro vyjádření, podkladů, většin podle společenské smlouvy, a následných kroků (oznámení, zápis do OR, sbírka listin). Použij, když uživatel řekne „rozhodnutí jediného společníka", „per rollam", „rozhodnutí mimo valnou hromadu", „schválení účetní závěrky" nebo „odvolání jednatele".
argument-hint: "<společnost (IČO)> <předmět rozhodnutí>"
---

# /korporat-cz:rozhodnuti-mimo-vh

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Postup

1. **Společnost.** `obchodni_rejstrik` a `ares_subjekt` podle IČO: forma, společníci a podíly, jednatelé, způsob jednání. Vyžádej si společenskou smlouvu (stanovy) — bez ní nelze ověřit většiny ani to, zda není per rollam vyloučeno.
2. **Kdo rozhoduje.**
   - Jednočlenná společnost: působnost nejvyššího orgánu vykonává jediný společník (§ 12 odst. 1 ZOK, ověřeno 13. 10. 2026).
   - Vícečlenná s.r.o.: rozhodování per rollam, nevyloučí-li ho společenská smlouva (§ 175 odst. 1 ZOK, ověřeno 13. 10. 2026).
3. **Působnost.** Ověř, že věc patří do působnosti valné hromady (§ 190 odst. 2 ZOK, ověřeno 13. 10. 2026, + společenská smlouva). Pokud ne, řekni, který orgán rozhoduje.
4. **Forma veřejné listiny.** Vyžaduje-li zákon osvědčení rozhodnutí veřejnou listinou (typicky změna společenské smlouvy, změna základního kapitálu — **ověř konkrétní ustanovení v Ingrid**), pak:
   - rozhodnutí jediného společníka má formu veřejné listiny (§ 12 odst. 2 ZOK),
   - návrh per rollam má formu veřejné listiny a vyjádření společníka s úředně ověřeným podpisem (§ 175 odst. 3 ZOK).
   → Připrav podklad pro notáře z profilu, ne finální listinu.
5. **Per rollam — náležitosti návrhu** (§ 175 odst. 2 ZOK): lhůta pro doručení vyjádření (podle společenské smlouvy, jinak 15 dnů od doručení návrhu), podklady, další údaje podle společenské smlouvy. Přijetí rozhodnutí a oznámení — § 177 ZOK (ověřeno 13. 10. 2026). Nedoručí-li společník ve lhůtě souhlas, platí, že s návrhem nesouhlasí, a většina se počítá z celkového počtu hlasů **všech** společníků (§ 176 ZOK, ověřeno 13. 10. 2026) — ukaž výpočet většiny `spocitej`.
   Lhůtu a den přijetí počítej nástrojem `lhuta` (režim `oz`) z data doručení posledního návrhu.
6. **Text.** `vzory_seznam` („jediného společníka", „per rollam") → `vzor_text`. Výroky přesné a zapsatelné (u změn v OR přesně podle údajů, které se zapisují).
7. **Následné kroky** — seznam s termíny: oznámení společníkům, návrh na zápis do OR (jaké přílohy), založení do sbírky listin, aktualizace evidence skutečných majitelů, interní evidence.

## Výstup

- Koncept rozhodnutí / návrhu per rollam a formuláře vyjádření (bez záhlaví důvěrnosti).
- Interní poznámka (se záhlavím): působnost, forma, většina podle společenské smlouvy, lhůty (návrh — ověří advokát), následné kroky, co je třeba ověřit.
