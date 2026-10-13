---
name: chronologie
description: Sestaví chronologii skutkového stavu z dokumentů věci — každá událost s datem, zdrojem (dokument, strana) a označením, zda je sporná. Vyznačí mezery, rozpory a události rozhodné pro lhůty a promlčení. Použij, když uživatel řekne „udělej chronologii", „časová osa", „sepiš skutkový stav" nebo připravuje žalobu či vyjádření.
argument-hint: "[oznaceni věci] [--pro-podani]"
---

# /spory-cz:chronologie

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Skutkový stav je základ každého podání; kvůli koncentraci řízení (§ 118b o. s. ř.) musí být tvrzení a důkazy kompletní včas. Chronologie ukáže, co víme, odkud, a co chybí.

## Postup

1. Načti pracovní složku věci a dokumenty, které uživatel určí (smlouvy, e-maily, faktury, rozhodnutí). Nečti nic, co do věci nepatří.
2. Pro každou událost zapiš:
   - **datum** (přesné; je-li jen přibližné, označ `cca`)
   - **událost** (věcně, bez hodnocení)
   - **zdroj** — dokument a místo (str., odst., e-mail ze dne…); bez zdroje = `[jen tvrzení klienta]`
   - **sporné?** — ano / ne / nevíme
   - **význam** — pro nárok, obranu, lhůtu, promlčení
3. Citace z dokumentů jen doslovně, jinak parafráze bez uvozovek.
4. Vyznač:
   - **mezery** — období nebo kroky, pro které nemáme doklad
   - **rozpory** — mezi dokumenty nebo mezi dokumentem a tvrzením klienta
   - **rozhodná data** — splatnost, doručení, odstoupení, výpověď; u každého nabídni výpočet lhůty (`/spory-cz:lhuty` nebo `lhuta`)
5. `--pro-podani`: k událostem doplň návrh důkazů (listina, svědek, znalec) a označ, co je třeba ještě opatřit.

## Výstup

Tabulka (Markdown, na přání .docx) se záhlavím důvěrnosti:

| # | Datum | Událost | Zdroj | Sporné | Význam | Důkaz |
|---|---|---|---|---|---|---|

Pod tabulkou: mezery, rozpory, rozhodná data s lhůtami (návrh — ověří advokát), seznam důkazů k opatření.

Uložení do `veci/<oznaceni>/chronologie.md` po potvrzení.
