---
name: zapis-z-valne-hromady
description: Připraví pozvánku, listinu přítomných a zápis z valné hromady s.r.o. (a obdobně a.s.) podle ZOK a společenské smlouvy — kontrola svolání, usnášeníschopnosti, většin, náležitostí zápisu a lhůty pro jeho vyhotovení a rozeslání. Z poznámek nebo nahrávky sestaví zápis. Použij, když uživatel řekne „zápis z valné hromady", „pozvánka na VH", „připrav valnou hromadu" nebo vloží poznámky z jednání.
argument-hint: "<společnost (IČO)> [--pozvanka | --zapis poznámky]"
---

# /korporat-cz:zapis-z-valne-hromady

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Postup

1. **Podklady.** OR (`obchodni_rejstrik`): společníci, podíly, jednatelé. Společenská smlouva (svolání, kvórum, většiny). Program.
2. **`--pozvanka`:** náležitosti a lhůta pro svolání podle ZOK a společenské smlouvy — ověř v Ingrid (`zneni_paragrafu` 90/2012, ustanovení o svolání VH s.r.o.) **[ověř konkrétní §]**; způsob doručení podle společenské smlouvy. Připomeň povinnost jednatele svolat VH a projednání řádné účetní závěrky do 6 měsíců od konce účetního období (§ 181 ZOK, ověřeno 13. 10. 2026). Datum odeslání a nejzazší den konání spočti nástrojem.
3. **Listina přítomných** — jméno a sídlo/bydliště společníka, případně zástupce, počet hlasů (§ 188 odst. 2 ZOK, ověřeno 13. 10. 2026). U zástupců kontrola plné moci.
4. **`--zapis`:** z poznámek uživatele sestav zápis:
   - náležitosti zápisu ověř v Ingrid (ZOK, ustanovení o zápisu z VH s.r.o.) **[ověř konkrétní §]**; minimálně: firma a sídlo, místo a doba konání, kdo VH zahájil a kdo jí předsedal, zapisovatel, přijatá rozhodnutí s výsledky hlasování, protesty
   - u každého usnesení: kvórum (přítomné hlasy) a potřebná většina podle zákona a společenské smlouvy — spočti `spocitej` a ukaž výpočet
   - **Nic nedoplňuj, co v poznámkách není.** Chybí-li výsledek hlasování nebo údaj, nech `[DOPLNIT]`.
5. **Lhůta zápisu:** zapisovatel vyhotoví zápis do 15 dnů od ukončení VH a bez zbytečného odkladu ho zašle společníkům; podepisuje předseda (nebo svolavatel) a zapisovatel (§ 188 odst. 3 ZOK, ověřeno 13. 10. 2026). Konec lhůty spočti `lhuta`.
6. **Veřejná listina** — vyžaduje-li rozhodnutí notářský zápis, upozorni a připrav podklady pro notáře.
7. **Následné kroky:** zápis do OR, sbírka listin (účetní závěrka — § 21a zákona o účetnictví), evidence skutečných majitelů, výplata podílů na zisku (test insolvence **[k ověření]**).

## Výstup

Koncepty (bez záhlaví): pozvánka / listina přítomných / zápis. Interní poznámka (se záhlavím): výpočty kvóra a většin, lhůty (návrh — ověří advokát), [DOPLNIT] místa, následné kroky.
