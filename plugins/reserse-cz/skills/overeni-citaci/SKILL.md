---
name: overeni-citaci
description: Zkontroluje všechny citace v hotovém textu (podání, memo, rešerše, smlouva) — rozhodnutí podle spisové značky v plném textu, zda opravdu říkají to, k čemu jsou citována, zda nebyla zrušena nebo překonána, doslovné citace zákonů proti aktuálnímu znění nebo znění k rozhodnému datu, a nahradí interní odkazy odkazy na oficiální weby soudů. Použij, když uživatel řekne „ověř citace", „zkontroluj judikaturu v podání", „sedí ty paragrafy?" nebo před odesláním podání.
argument-hint: "<dokument nebo text> [--k-datu RRRR-MM-DD] [--pro-soud]"
---

# /reserse-cz:overeni-citaci

> **Než začneš:** přečti `../../metodika.md` (cesta vůči adresáři této dovednosti).

## Účel

Poslední kontrola před tím, než text opustí kancelář. Chybná nebo vymyšlená citace v podání stojí důvěryhodnost u soudu.

## Postup

1. **Vytěž citace** — projdi celý text a sepiš:
   - rozhodnutí (spisové značky, čísla jednací, R/Rc čísla, ECLI, C-…/…),
   - ustanovení předpisů (§, čl., zákon),
   - doslovné citace (text v uvozovkách přiřazený zdroji),
   - odkazy (URL).
2. **Rozhodnutí** — pro každé:
   - `text_rozhodnuti` — existuje? sedí soud, datum, druh? (u víc rozhodnutí pod jednou značkou čti `dalsi_rozhodnuti`)
   - **říká rozhodnutí to, k čemu je citováno?** Najdi pasáž, uveď odstavce, posuď, zda kryje celou tezi a zda jde o vlastní posouzení soudu (ne rekapitulaci)
   - doslovná citace z rozhodnutí — porovnej znak po znaku
   - zrušeno / překonáno? — dotaz `hledej_v_pravu` na sp. zn. a na novější rozhodnutí k téže otázce
   - `--pro-soud`: `odkaz_na_soud` → oficiální odkaz; „nenalezeno" → odkaz odstraň a **[k ručnímu doověření]**
3. **Předpisy** — `zneni_paragrafu` (k rozhodnému datu, je-li zadáno, jinak dnes): existuje ustanovení, odpovídá odstavec a písmeno, sedí doslovná citace?
4. **Odkazy** — interní odkazy Ingrid (`zakony.ingridask.cz`) v textu pro soud označ k nahrazení; ostatní URL jen zkontroluj formálně (neotevírej neznámé weby bez pokynu).

## Výstup

| # | Citace v textu | Stav | Problém | Návrh opravy |
|---|---|---|---|---|
| 1 | 23 Cdo 693/2023 | ✅ ověřeno, odst. 22 | — | oficiální odkaz: … |
| 2 | „…" (§ 2051 OZ) | ⚠️ | citace neodpovídá znění | správné znění: „…" |
| 3 | 32 Cdo 9999/2019 | ❌ | v korpusu nenalezeno | ověřit ručně / vypustit |

Nahoře souhrn: počet ✅ / ⚠️ / ❌. Na přání vrať opravený text se změnami vyznačenými, nikdy ne tiše přepsaný.
