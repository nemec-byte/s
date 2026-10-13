---
name: stav-veci
description: Aktualizuje jednu věc (nová událost, změna stavu, nová lhůta) nebo vytvoří přehled všech otevřených sporových věcí — stav, další krok, lhůty, nevyřešený střet zájmů, hrozící promlčení. Při uzavření věci připraví závěrečné shrnutí a kontrolní seznam. Použij, když uživatel řekne „stav věcí", „přehled spisů", „aktualizuj věc", „co se děje ve věci…" nebo „uzavři věc".
argument-hint: "[oznaceni věci] [--aktualizace | --prehled | --uzavrit]"
---

# /spory-cz:stav-veci

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Režimy

### `--aktualizace <věc>` (výchozí, je-li zadána věc)
1. Načti `veci/<oznaceni>/vec.md`, `historie.md` a řádek v `_prehled.yaml`.
2. Zeptej se na novou událost nebo zpracuj vloženou písemnost / e-mail.
3. Nová lhůta → `/spory-cz:lhuty`. Změna stavu → aktualizuj `stav`.
4. Připiš datovaný záznam do `historie.md` a uprav řádek v přehledu. Před zápisem ukaž změny.
5. Je-li `stret_zajmu: ceka`, připomeň to.

### `--prehled`
Přečti `_prehled.yaml` a vytvoř přehled otevřených věcí:

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
Přehled sporových věcí — k [datum]
🔴 Pozornost: lhůty do 5 prac. dnů / promlčení do 60 dnů / střet zájmů čeká / nepotvrzené lhůty
| Věc | Klient | Protistrana | Stav | Další krok | Nejbližší lhůta | Aktualizováno |
Věci bez aktualizace déle než 30 dnů: …
```

Pracovní dny a dny do konce lhůt počítej nástroji. Připomeň, že rozhodující evidence je v Praetoru / lhůtáři z profilu.

### `--uzavrit <věc>`
1. Shrnutí věci: výsledek, pravomocné rozhodnutí (datum právní moci), vymožené částky, náklady.
2. Kontrolní seznam: vyúčtování klientovi, vrácení originálů, archivace spisu (lhůty archivace ověř v předpisech ČAK **[k ověření]**), ukončení plné moci, zrušení lhůt v kalendáři, poučení klienta o případných dalších krocích (exekuce, dovolání).
3. Nastav `stav: uzavreno` a připiš závěrečný záznam do historie (po potvrzení).
