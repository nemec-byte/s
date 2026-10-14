---
name: ladeni-stylu
description: Týdenní ladění — porovná koncepty, které agent připravil, s tím, co advokát skutečně odeslal, najde opakované úpravy (oslovení, délka, formulace, kategorie) a navrhne změny příručky stylu, vzorů a směrování. Změny zapíše jen po schválení. Použij, když uživatel řekne „vylaď styl", „co jsem v konceptech opravoval", „týdenní ladění" nebo jako týdenní plánovanou úlohu.
argument-hint: "<schránka | --vse> [--dni 7]"
---

# /posta-cz:ladeni-stylu

> **Než začneš:** přečti `../../pravidla.md`.

## Postup

1. Na Disku najdi záznamy běhů `beh-<schranka>-*` za posledních N dní (výchozí 7) — obsahují ID vláken a text konceptů, které agent připravil.
2. Ke každému vláknu najdi skutečně odeslanou odpověď kanceláře (pokud existuje) a porovnej ji s textem konceptu. Koncept už v poště být nemusí — pokud chybí, a odpověď neexistuje, započítej „koncept nepoužit".
3. Spočítej:
   - použito beze změn / s drobnými úpravami / přepsáno / nepoužito
   - podle kategorie
4. Najdi **opakované** úpravy (alespoň 3×): změna oslovení, zkrácení, odstraněné nebo přidané formulace, změněný tón, přeřazení do jiné kategorie, e-maily, na které agent koncept psát neměl (nebo naopak měl).
5. Navrhni změny jako rozdíly (před → po) do:
   - `prirucka-stylu-<schranka>`
   - `vzory-<schranka>-<kategorie>` (nový anonymizovaný vzor z dobré odpovědi)
   - `novy-klient-postup`
   - profilu schránky (směrování, `pise_koncept`)
   Zapiš je jako nový Google Dokument `ladeni-<schranka>-<RRRR-MM-DD>` do složky „Claude – pošta".
6. Ukaž návrhy a **aplikuj jen schválené** — jako novou verzi příslušného dokumentu na Disku. Jednorázové úpravy (jen v jednom vlákně) do příručky nedávej.

## Výstup

```
Ladění stylu — [schránka] — [období]
Koncepty: N · beze změn X % · drobné úpravy Y % · přepsáno Z % · nepoužito W %
Opakované úpravy: …
Navržené změny (ke schválení): …
```

Anonymizace platí i tady (pravidlo 7).
