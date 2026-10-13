---
name: due-diligence
description: Due diligence nad datovou místností nebo složkou dokumentů — tabulka „jeden dokument = jeden řádek", každá buňka s citací zdroje (dokument, strana, článek), vytažení zjištění podle kategorií a prahu významnosti kanceláře (změna kontroly, exkluzivita, zákaz konkurence, zajištění, sankce, spory), ověření cílové společnosti v registrech a zpráva s barevným hodnocením. Použij, když uživatel řekne „udělej due diligence", „projdi dataroom", „prověrka společnosti před koupí", „DD tabulka" nebo „vytáhni rizika ze smluv".
argument-hint: "<složka nebo seznam dokumentů> [--sloupce vlastní] [--jen-zjisteni]"
---

# /korporat-cz:due-diligence

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Projít desítky dokumentů stejně pečlivě jako první a nic nepodložené nenapsat. Každá buňka tabulky je dohledatelná do dokumentu.

## Postup

1. **Rozsah.** Načti korporátní profil (kategorie, prahy). Zeptej se na: transakci (převod podílu / závodu / investice), koho zastupujeme (kupující / prodávající), rozhodné datum, co je mimo rozsah.
2. **Cílová společnost** — `obchodni_rejstrik` (historie změn, statutáři, společníci, zástavy podílů, je-li údaj dostupný), `ares_subjekt`, `insolvencni_rejstrik` (prázdný výsledek ≠ důkaz). Sbírka listin: zkontroluj uložení účetních závěrek (§ 21a zákona o účetnictví) a projednání VH do 6 měsíců (§ 181 odst. 2 ZOK) — oboje ověřeno 13. 10. 2026. Evidence skutečných majitelů — výpis je třeba opatřit **[nástroj nemáme]**.
3. **Inventura dokumentů** — seznam všech souborů, typ, datum, strany; nečitelné nebo neúplné dokumenty zvlášť.
4. **Tabulka.** Výchozí sloupce pro smlouvy (upravitelné `--sloupce`):

| Dokument | Typ | Strany | Datum | Doba / výpověď | Změna kontroly | Exkluzivita / zákaz konkurence | Omezení odpovědnosti / pokuty | Zajištění | Postoupení | Rozhodné právo / spory | Hodnota | Poznámka |

   Každá buňka: hodnota + zdroj `[dok, str., čl.]`. Nenalezeno = „neuvedeno" (ne prázdné, ne odhad). Doslovné citace jen doslovně.
5. **Zjištění.** Pro každé zjištění: kategorie, popis, zdroj, dopad na transakci, 🔴 brání transakci / 🟡 řešit v transakční dokumentaci (prohlášení, odškodnění, podmínka) / 🟢 informativní, návrh řešení. Hodnocení podle prahů z profilu; zákonná opora ověřená v Ingrid.
6. **Korporátní část** — zakladatelské dokumenty, omezení převoditelnosti podílu (souhlas orgánu, předkupní právo), forma převodu (smlouva o převodu podílu písemně s úředně ověřenými podpisy, § 209 odst. 2 ZOK, ověřeno 13. 10. 2026), zástavy, rozhodnutí orgánů.
7. Velké objemy zpracovávej po dávkách; po každé dávce průběžné shrnutí, ať nic nezapadne.

## Výstup

1. Tabulka (Excel přes dovednost xlsx, nebo Google Sheets / Markdown podle profilu).
2. Zpráva (záhlaví důvěrnosti): shrnutí pro klienta (1 strana), 🔴 zjištění, 🟡 zjištění s návrhy do SPA, seznam chybějících dokumentů a dotazů na prodávajícího, co nebylo předmětem prověrky.
3. Ulož do `~/.claude/plugins/config/ak-nemec/korporat-cz/transakce/<transakce>/` (po potvrzení).
