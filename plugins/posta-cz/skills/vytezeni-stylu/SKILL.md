---
name: vytezeni-stylu
description: Jednorázově projde vzorek odeslané pošty schránky a vytvoří příručku stylu (oslovení, vykání, podpis, délka, tón, ustálené formulace) a anonymizované vzorové odpovědi pro každou kategorii e-mailů. Na nich pak agent píše koncepty. Použij, když uživatel řekne „nauč se můj styl", „vytěž styl ze schránky", „připrav příručku stylu" nebo po nastavení nové schránky.
argument-hint: "<schránka> [--vzorek N, výchozí 300] [--obdobi 12m]"
---

# /posta-cz:vytezeni-stylu

> **Než začneš:** přečti `../../pravidla.md`. Zvlášť pravidlo 7 (anonymizace) — příručka a vzory nesmí obsahovat údaje klientů.

## Účel

Agent se „učí" průhledně: z vašich skutečných odpovědí sepíše příručku, kterou si přečtete a opravíte. Žádné trénování modelu, žádná skrytá paměť.

## Postup

1. Načti profil schránky (kategorie). Zeptej se na souhlas: „Projdu N odeslaných e-mailů za posledních X měsíců jen pro účely příručky stylu; obsah neukládám, jen anonymizované vzory. Pokračovat?"
2. **Vzorek** — odeslaná pošta (`in:sent`, za zvolené období), přednostně odpovědi (vlákna s předchozí příchozí zprávou). Vynech: automatické zprávy, přeposílání bez textu, interní komunikaci, pokud profil neříká jinak.
3. **Zařazení** — ke každé odpovědi urči kategorii příchozí zprávy podle profilu (stejná logika jako třídič).
4. **Příručka stylu** `styl/<schranka>/prirucka.md`:
   - oslovení (podle typu adresáta), vykání / tykání a kdy se mění
   - úvodní a závěrečné fráze, podpis (přesně, jak se používá)
   - délka podle kategorie (typický počet vět)
   - tón a ustálené formulace kanceláře (např. potvrzení přijetí, odkaz na schůzku, odměna, lhůty) — doslovně, ale anonymizovaně
   - co kancelář v e-mailech **nedělá** (např. nehodnotí šance, nepíše částky)
   - u každého pravidla počet výskytů ve vzorku (`viděno 37×`), ať je vidět, co je pravidlo a co výjimka
5. **Vzory** `styl/<schranka>/vzory/<kategorie>.md` — 3–5 nejtypičtějších dvojic „příchozí (zkráceně) → odpověď", anonymizovaných: `[KLIENT]`, `[PROTISTRANA]`, `[SP. ZN.]`, `[ČÁSTKA]`, `[DATUM]`, `[EXEKUTOR]`. U kategorií s méně než 3 příklady napiš „málo příkladů — doplňte ručně".
6. **Kontrola anonymizace** — projdi oba výstupy znovu a hledej jména, e-maily, telefony, IČO, rodná čísla, spisové značky, částky, adresy. Najdeš-li cokoli, nahraď a uveď počet náhrad.
7. Ukaž příručku uživateli ke schválení. Zapiš až po schválení. Při opakovaném běhu nepřepisuj ručně upravené části — navrhni rozdíly.

## Výstup

Shrnutí v chatu: kolik e-mailů prošlo, kolik se použilo, rozdělení podle kategorií, kategorie s málo příklady, odkazy na soubory.
