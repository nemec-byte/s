# Metodika rešerše (podle Ingrid Ask)

Tento soubor čte každá dovednost pluginu `reserse-cz`. Popisuje, jak Ingrid rešerši staví, a pravidla, která z toho plynou. Platí spolu se společnými pravidly kanceláře (`~/.claude/plugins/config/ak-nemec/profil-kancelare.md`, sekce „Společná pravidla"); chybí-li profil, platí pravidla níže samostatně.

## 1. Korpus a jeho vrstvy

Ingrid hledá v **uzavřeném ověřeném korpusu**: Sbírka zákonů, cca 1,3 mil. rozhodnutí, publikované komentáře, odborné články a VŠKP. Výsledky přicházejí ve třech vrstvách:

1. **zákony** (`druh: zakon`)
2. **judikatura** (NS, NSS, ÚS; obecné soudy jen na výslovné přání)
3. **literatura** (komentáře, články, VŠKP)

**Pořadí uvnitř vrstvy = relevance k dotazu (`poradi_relevance`), ne právní síla.** Váhu závěru určuje `tier`.

## 2. Právní síla (`tier`) — podle ní se váží závěr

| tier | zdroj | jak s ním zacházet |
|---|---|---|
| 1 | zákon (Sbírka) | závazný pramen; doslovné znění vždy z `zneni_paragrafu` |
| 2 | Ústavní soud | nejvyšší váha mezi rozhodnutími; rozlišuj nález a usnesení |
| 3 | NS — Sbírka / kategorie A | nejsilnější přesvědčivá judikatura |
| 4 | NS kat. B a ostatní, NSS | přesvědčivá judikatura |
| 5 | SDEU / ESLP | rozhodující pro výklad unijního / úmluvního práva |
| 6 | obecné soudy, finanční arbitr | jen ilustrace; spis. zn. vždy se soudem |
| 7 | komentář | odborný výklad, není pramen; kontroluj `kontrola_zneni` |
| 8 | článek / VŠKP | podpůrné |
| 9 | zahraniční | **nezávazné — nikdy jako opora závěru** |
| 10 | necitovatelné | **nepoužívat** |

Závěr rešerše se opírá o tier 1–5. Tier 6–8 jen doplňují a jsou tak označené.

## 3. Pole výsledku, která musíš číst

- `citovatelne` / `overena_citace` — je-li `overena_citace: false`, text ověř v plném znění, než ho ocituješ.
- `shoda: uvolnena` — výsledek vzešel z dotazu, ze kterého se ubrala slova. Je to volnější shoda, ne přímá odpověď.
- `nalezeno: fulltext | semanticky | oba` — „oba" je nejjistější.
- `cast_rozhodnuti` + `odstavce` — cituj jen z „vlastního právního posouzení" soudu, ne z rekapitulace argumentů účastníků nebo nižších soudů. Uváděj odstavce.
- `kategorie` (A–D u NS) a `pravni_veta` — právní věta má přednost před volnou parafrází.
- `kontrola_zneni` (komentáře) — komentář k dřívějšímu znění označ „k dřívějšímu znění" a ověř, zda závěr platí i dnes.
- `odlozene_skryto` — kolik rutinních rozhodnutí obecných soudů bylo skryto.

## 4. Odkazy

- Pole `odkaz` vede do **interního prohlížeče kanceláře**. Do rešerše ho dávej jako klikatelný odkaz, URL přebírej doslova a nikdy si ji nevymýšlej.
- **Do podání pro soud nepatří.** Tam jen odkaz z `odkaz_na_soud`; když vrátí „nenalezeno", odkaz neuváděj a označ **[k ručnímu doověření]**.

## 5. Postup hledání

1. **Dotazy hutně:** pojmy a instituty, raději víc kratších dotazů než jedna dlouhá věta (fulltext hledá všechna slova, sémantika význam).
2. **Časová okna:** začni `od_roku` = posledních 5 let; je-li výsledků málo nebo jde o ustálenou otázku, rozšiř na 10 → 15 → 20 let → bez omezení. U každého okna zapiš, co přineslo.
3. **Soudy:** výchozí NS, NSS, ÚS. Nižší soudy (`i_nizsi_soudy: true`) jen na výslovné přání; zapisuje se do evidence. Zadá-li kolega konkrétní soudy, předej je v parametru `soudy`.
4. **Odložená vrstva:** výchozí skrytá. Zapni `odlozene: true`, jde-li o procesní otázku nebo o instituty v ní (zmeškání, uznání, soudní poplatek, zastavení, platební rozkaz, náklady v nesporných věcech), a **řekni uživateli, že jsi ji zapnul**.
5. **Literatura:** cíleně přes `literatura_zdroje` (např. `komentar_oz`, `komentar_zok`, `ba`, `bulletin_ns`), když obecný dotaz literaturu nevrátí.
6. **Zahraničí:** jen na přání; `zeme` + dotaz **v jazyce dané země**; výsledky tier 9 = inspirace, ne opora.
7. **Plný text:** každé rozhodnutí, o které se opře závěr, otevři `text_rozhodnuti` a ověř, že opravdu říká to, k čemu ho citujeme (celou tezi, ne její část), a zda je to nosný důvod.
8. **Znění zákona:** vždy `zneni_paragrafu`, a to **k rozhodnému datu** (`k_datu`) — datu uzavření smlouvy, vzniku nároku nebo škodní události.

## 6. Poctivost

- Cituj **výhradně** z výsledků nástrojů. Nic z paměti.
- Judikaturu proti nám uveď vždy, v samostatném oddílu.
- Rozpor v judikatuře (různé senáty, vývoj v čase) pojmenuj a uveď, co je novější a vyšší.
- Když korpus odpověď nedává, napiš to. „Nenalezeno" je výsledek, ne selhání.
