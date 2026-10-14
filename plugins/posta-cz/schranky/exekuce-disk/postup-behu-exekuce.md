# Postup běhu – pošta exekuce@

Spouští se pravidelně (časy jsou v `profil-exekuce`). Nejdřív si přečti `pravidla-exekuce`. Mají přednost.

## 1. Příprava

1. Ověř nástroje. Z Gmailu smí být k dispozici jen čtení (`search_threads`, `get_thread`, `get_message`, `list_drafts`, `get_draft`) a `create_draft`. Je-li dostupné cokoli, co odesílá nebo maže, **skonči** (pravidlo 1).
2. Ověř, že Gmail je schránka exekuce@ (příjemce libovolné nové zprávy). Pokud ne, skonči a napiš to do souhrnu.
3. Z Disku načti `pokyny-exekuce` (mají přednost před vším kromě pravidel), `profil-exekuce`, `prirucka-stylu-exekuce` a `vzory-exekuce-*` (vždy nejnovější verzi). Pokud příručka chybí, jen třiď a shrň, koncepty nepiš.

## 2. Načtení

- Dotaz `in:inbox newer_than:<okno> -category:promotions -category:social`. Okno je podle profilu, výchozí je 2× interval mezi běhy. Maximum vláken je podle profilu.
- Přeskoč vlákna, která už mají koncept (`list_drafts`), a vlákna, kde poslední zprávu poslala kancelář (@akpetrnemec.cz).
- Každé vlákno přečti celé (`get_thread`, `PLAIN_TEXT`).

## 3. Přílohy

Pro každou příchozí zprávu s přílohou:
1. Najdi podsložku: `search_files` s `title = '<ID zprávy>' and parentId = '1ZV7Tik-Nfh1EB0YmqbCExtlD3531-Hic'`.
2. Vypiš její soubory: `search_files` s `parentId = '<ID podsložky>'`.
3. Pokud obsahuje `_hotovo`, čti `read_file_content` nejdřív původní soubor. Verzi „(OCR)“ použij, když je originál bez textu (sken).
4. Podsložka chybí nebo nemá `_hotovo`:
   - zpráva je mladší než 30 minut: vlákno přeskoč, příští běh ho zpracuje;
   - je starší: zařaď vlákno do „K rozhodnutí – přílohy nejsou na Disku, zkontrolujte skript“.

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

## 6. Záznam a souhrn

- Vznikl-li aspoň jeden koncept, ulož do složky dokument `beh-exekuce-<RRRR-MM-DD-HHMM>`. Obsahuje ID vláken, kategorie a texty konceptů.
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
