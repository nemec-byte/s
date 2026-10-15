# Postup běhu – pošta exekuce@

Spouští se pravidelně (časy jsou v `pokyny-exekuce` a `profil-exekuce`). Nejdřív si přečti `pravidla-exekuce`. Mají přednost.

## 1. Příprava

1. Ověř nástroje Gmailu podle pravidla 1 (povolené jsou jen čtení, `create_draft`, `list_labels`, `label_thread` a `create_label`). Je-li dostupné cokoli dalšího, co zapisuje, **skonči** (pravidlo 1).
2. Ověř, že Gmail je schránka exekuce@ (příjemce libovolné nové zprávy). Pokud ne, skonči a napiš to do souhrnu.
3. Z Disku načti `pokyny-exekuce` (mají přednost před vším kromě pravidel), `lekce-exekuce` (naučené stylové lekce – mají přednost před příručkou), `profil-exekuce`, `prirucka-stylu-exekuce` a `vzory-exekuce-*` (vždy nejnovější verzi). Pokud příručka chybí, jen třiď a shrň, koncepty nepiš.

## 2. Načtení

- Dotaz `in:inbox newer_than:<okno> -category:promotions -category:social`. Okno je podle profilu, výchozí je 2× interval mezi běhy. Maximum vláken je podle profilu.
- Přeskoč vlákna, která už mají koncept (`list_drafts`), a vlákna, kde poslední zprávu poslala kancelář (@akpetrnemec.cz).
- Každé vlákno přečti celé (`get_thread`, `PLAIN_TEXT`).

## 3. Přílohy

Pro každou příchozí zprávu s přílohou:
1. Najdi podsložku: `search_files` s `title = '<ID zprávy>' and mimeType = 'application/vnd.google-apps.folder'` (může být ve `prilohy` i v `prilohy/historie`).
2. Vypiš její soubory: `search_files` s `parentId = '<ID podsložky>'`.
3. Pokud obsahuje `_hotovo`, čti `read_file_content` nejdřív původní soubor. Verzi „(OCR)“ použij, když je originál bez textu (sken); u Word/ODT verzi „(text)“.
4. Kontroluj přílohy celého vlákna, nejen poslední zprávy.
5. Podsložka chybí nebo nemá `_hotovo`:
   - zpráva je mladší než 30 minut: vlákno přeskoč, příští běh ho zpracuje;
   - je starší: zapiš ID vlákna do fronty (`create_file` text/plain do složky `prilohy/fronta`, ID `16-AFbjBrFwBpYVqk1H0dVO5WfVd5eSt4`), vlákno přeskoč a zpracuj ho v příštím běhu. Koncept naslepo nikdy.

## 4. Třídění

Každé vlákno zařaď do kategorie z profilu. Urči jistotu, naléhavost, zda je podezřelé, krátké shrnutí, další krok a komu patří podle rozdělení práce. Naléhavé (🔴) jsou vždy:
- insolvence povinného (lhůta k přihlášce),
- výzvy exekutora a soudu se lhůtou,
- hrozící zmeškání lhůty.

## 5. Koncepty

Koncept piš jen tehdy, když kategorie má `pise_koncept: ano`, zpráva potřebuje odpověď, není podezřelá a jistota není nízká.
- Styl podle příručky a vzorů kategorie: oslovení, společný podpis, délka.
- Vycházej z textu vlákna a příloh. Co v nich není, nevymýšlej, použij `[DOPLNÍ: …]`.
- Lhůty a částky jen z nástrojů Ingrid. Právní obsah jen podle pravidla 7.
- Uložení: `create_draft` s `replyToMessageId` poslední příchozí zprávy, `to` = její odesílatel (pravidlo 2), předmět „Re: <původní>“.

## 6. Štítky

Každé zpracované vlákno označ (`label_thread`) štítky s předponou `Claude/`. ID štítků zjistíš přes `list_labels`, chybějící založíš přes `create_label`:
- `Claude/<kategorie>` (např. `Claude/povinny-dotaz`),
- `Claude/koncept`, pokud vznikl koncept,
- `Claude/k-rozhodnuti`, pokud jde do „K rozhodnutí“,
- `Claude/naléhavé` u 🔴,
- `Claude/podezřelé` u ⚠️.

Nic jiného se štítky nedělej: neodebírej je, nepřidávej systémové, nearchivuj. Štítky jsou jen orientační pro tým, k deduplikaci se nepoužívají (přecházejí i na nové zprávy ve vlákně).

## 7. Záznam a souhrn

- Vznikl-li aspoň jeden koncept, ulož do složky dokument `beh-exekuce-<RRRR-MM-DD-HHMM>`: pro každý koncept ID vlákna, ID zprávy, na kterou odpovídá, ID konceptu, čas vytvoření, kategorii, použité lekce a text konceptu. Z toho se agent učí (`postup-uceni-exekuce`).
- Souhrn (výstup běhu):

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA
Pošta exekuce@ — [datum, čas]
📮 N nových · K konceptů · R k rozhodnutí
🔴 Naléhavé: …
⚖️ Exekutoři / soudy / insolvence: odesílatel — shrnutí — další krok (lhůta jako návrh) — komu
✍️ Koncepty: odesílatel — předmět — kategorie — komu
❓ K rozhodnutí: … (proč agent nepsal)
⚠️ Podezřelé: …
Nezpracováno / chyby: …
```

Pokud nic nového nepřišlo, stačí jedna věta. Selhání musí být v souhrnu vidět.
