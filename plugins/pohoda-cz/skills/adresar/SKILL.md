---
name: adresar
description: Vyhledá kontakt v adresáři POHODY, porovná ho s ARES a obchodním rejstříkem, upozorní na duplicity a zastaralé údaje a po schválení založí nový kontakt. Neupravuje ani nemaže existující záznamy. Použij, když uživatel řekne „najdi v Pohodě klienta", „založ klienta v Pohodě", „sedí adresa klienta?", nebo z vystavení faktury.
argument-hint: "<IČO nebo název> [--zalozit]"
---

# /pohoda-cz:adresar

> **Než začneš:** přečti `../../pravidla.md`.

## Postup

1. `list_contacts` podle IČO (přednostně) i podle názvu — najdi i možné duplicity (stejné IČO, podobný název).
2. U podnikatele `ares_subjekt` (+ `obchodni_rejstrik` pro sídlo a způsob jednání) a porovnej: název, sídlo, DIČ.
3. Výsledek:
   - **existuje a sedí** → ID kontaktu
   - **existuje, ale liší se** → ukaž rozdíly; úpravu provede účetní v POHODĚ (plugin záznamy neupravuje) — napiš přesně co změnit
   - **duplicity** → vypiš je s ID; sloučení ručně v POHODĚ
   - **neexistuje** a `--zalozit` → náhled kontaktu z ARES (firma, IČO, DIČ, ulice, město, PSČ; e-mail a telefon jen od uživatele) → po schválení `create_address`
4. U fyzické osoby nepodnikatele žádné rejstříky; údaje jen od uživatele, rodné číslo do POHODY neukládat, pokud to profil výslovně nevyžaduje.
