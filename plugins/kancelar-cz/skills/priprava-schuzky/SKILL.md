---
name: priprava-schuzky
description: Připraví podklad na schůzku s klientem, protistranou nebo na jednání — kdo přijde, o čem věc je, stav, otevřené otázky, co chceme odnést, rizika a ověřené právní body. Po schůzce zapíše úkoly a termíny. Použij, když uživatel řekne „připrav mě na schůzku", „podklad na jednání", „briefing na zítra" nebo „zapiš úkoly ze schůzky".
argument-hint: "<schůzka nebo věc> [--po pro zápis úkolů]"
---

# /kancelar-cz:priprava-schuzky

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Advokát přijde na schůzku s jednou stránkou, na které je vše podstatné. Po schůzce nic nezapadne.

## Před schůzkou

1. Načti profil kanceláře. Najdi schůzku v kalendáři (je-li dostupný) nebo se zeptej na datum, účastníky a věc.
2. **Podklady věci** — pracovní složka věci (`~/.claude/plugins/config/ak-nemec/spory-cz/veci/<věc>/` nebo transakce v korporátu), korespondence v poště, dokumenty na Drive. Čti jen to, co se týká věci.
3. **Účastníci** — u neznámé protistrany nabídni `/kancelar-cz:proverka-subjektu`.
4. **Právní body** — pro každou otázku, která se na schůzce pravděpodobně otevře, ověř znění (`zneni_paragrafu`) a případně judikaturu (`hledej_v_pravu`). Do podkladu dej jen ověřené; ostatní **[k ověření]**.
5. **Čísla** — dluh s příslušenstvím přes `urok_z_prodleni`, náklady přes `naklady_rizeni`, lhůty přes `lhuta`. Uveď vstupy.

## Výstup před schůzkou (max. 1–2 strany)

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
Schůzka: [kdo, kdy, kde]   Věc: [ ]
Cíl schůzky (co chceme odnést): …
Stav věci ve 3 větách: …
Účastníci a jejich zájmy: …
Otevřené otázky pro klienta / protistranu: …
Naše pozice a ústupky (pokud jde o vyjednávání): standard / kam můžeme / kde končíme
Právní body (ověřené): … [zdroj]
Rizika a slabá místa: … (otevřeně)
Lhůty a termíny: … (návrh — ověří advokát)
```

## Po schůzce (`--po`)

1. Zeptej se na výsledek nebo zpracuj poznámky, které uživatel vloží.
2. Vytvoř seznam úkolů: co, kdo, do kdy. Termíny přepočti nástrojem.
3. Navrhni zápis do historie věci (pracovní složka) a do kalendáře — **zapiš až po potvrzení**.
4. Navrhni krátký e-mail klientovi se shrnutím — jen jako koncept, neodesílej.
