---
name: reserse
description: Právní rešerše k zadané otázce podle metodiky Ingrid Ask — rozklad otázky na dílčí právní otázky, plán dotazů, hledání po vrstvách (zákon → judikatura → literatura) a časových oknech 5/10/15/20 let, vážení podle právní síly, ověření plného textu rozhodnutí, judikatura proti a memo s ověřenými citacemi a odkazy. Použij, když uživatel řekne „udělej rešerši", „najdi judikaturu k…", „jak to vidí Nejvyšší soud", „je k tomu judikatura" nebo položí právní otázku, která potřebuje oporu v právu.
argument-hint: "<právní otázka> [--soudy ns,us,…] [--nizsi-soudy] [--od-roku RRRR] [--k-datu RRRR-MM-DD] [--zahranici de,at,…] [--rychla]"
---

# /reserse-cz:reserse

> **Než začneš:** přečti `../../metodika.md` (cesta vůči adresáři této dovednosti). Pravidla v ní platí vždy.

## 1. Zadání

Ujasni si (a chybí-li to, zeptej se — max. 3 otázky):
- **Otázka** — co přesně má rešerše zodpovědět; pro koho (klient, podání, interní).
- **Rozhodné datum** — podle něj znění předpisů (`k_datu`).
- **Strana** — kterou pozici hledáme (oporu i protiargumenty hledáme vždy, ale strana určuje rámování).
- **Rozsah** — soudy (výchozí NS, NSS, ÚS), nižší soudy jen výslovně, zahraničí jen výslovně, časové okno.

## 2. Rozklad a plán

1. Rozlož otázku na **dílčí právní otázky** (typicky 2–5). U každé napiš, který institut a které ustanovení se nabízí.
2. Pro každou dílčí otázku navrhni **2–4 hutné dotazy** (pojmy, instituty, synonyma — např. „moderace smluvní pokuty", „nepřiměřenost smluvní pokuty kritéria").
3. Plán ukaž uživateli jednou větou na otázku a pokračuj. Nečekej na schválení, pokud zadání není nejasné.

## 3. Hledání

Pro každou dílčí otázku:

1. **Zákon:** `zneni_paragrafu` k rozhodnému datu pro každé relevantní ustanovení. Rozhodné ustanovení uveď doslovně.
2. **Výklad:** `komentar_k_paragrafu` — čti `kontrola_zneni`; navázanou judikaturu si poznamenej jako kandidáty.
3. **Judikatura:** `hledej_v_pravu` s dotazy z plánu:
   - okno `od_roku` = dnes − 5 let → je-li málo relevantních výsledků tier 2–4, rozšiř na 10 → 15 → 20 let → bez omezení;
   - `soudy` podle zadání; `odlozene: true` jen u procesních otázek (a řekni to);
   - dotazy s `shoda: uvolnena` ber opatrně.
4. **Literatura:** chybí-li výklad, cíleně `literatura_zdroje`.
5. **Plný text:** pro každé rozhodnutí, o které se má opřít závěr, `text_rozhodnuti`:
   - ověř, že teze je v **vlastním právním posouzení** soudu a v jakých odstavcích;
   - ověř, zda je to nosný důvod, nebo obiter dictum;
   - zkontroluj, zda rozhodnutí nebylo zrušeno ÚS nebo překonáno pozdější judikaturou (dohledej dotazem na sp. zn. a na novější rozhodnutí k téže otázce).
6. **Protiargumenty:** pro každou dílčí otázku alespoň jeden dotaz formulovaný z pohledu protistrany.
7. **`--zahranici`:** `zeme` + dotaz v jazyce země; jen jako inspirace (tier 9).

Průběžně si veď **deník hledání** (dotaz → okno → co přineslo), ať je rešerše opakovatelná.

## 4. Syntéza

- Závěr opři o tier 1–5. Tier 6–8 označ jako podpůrné.
- U každé teze: zdroj, tier, odstavec, klikatelný interní odkaz (z pole `odkaz`, doslovně).
- Rozpory v judikatuře a vývoj v čase pojmenuj; uveď, co je novější a od vyššího soudu.
- Kde korpus nic nedal, napiš „v korpusu Ingrid nenalezeno" a co jsi zkoušel.

## 5. Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
Rešerše: [otázka] — rozhodné datum [ ] — zpracováno [datum]

1. Stručná odpověď (3–5 vět) + míra jistoty (ustálená judikatura / převažující názor / nejednotné / bez judikatury)
2. Právní úprava — doslovné znění rozhodných ustanovení k rozhodnému datu
3. Dílčí otázky — pro každou:
   - závěr
   - opora: [sp. zn., datum, soud, tier, odst.] — klíčová pasáž doslovně — [interní odkaz]
   - komentářová literatura (s označením k aktuálnímu / dřívějšímu znění)
4. Judikatura a argumenty proti — a jak se s nimi vypořádat
5. Otevřené otázky a rizika
6. Deník hledání (dotazy, okna, soudy, zapnutá odložená vrstva)
7. Seznam pramenů seřazený podle tier
```

`--rychla`: jen body 1, 3 (bez literatury) a 4; max. 1 strana; plný text ověř jen u rozhodnutí v závěru.

## 6. Návaznost

- Má-li rešerše jít do podání, nabídni `/reserse-cz:overeni-citaci` — převede interní odkazy na odkazy na weby soudů (`odkaz_na_soud`).
- Uložení: na přání do `~/.claude/plugins/config/ak-nemec/reserse-cz/reserse/<rrrr-mm-dd>-<tema>.md` (bez osobních údajů klientů v názvu).
