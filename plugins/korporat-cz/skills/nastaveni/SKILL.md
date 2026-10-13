---
name: nastaveni
description: Pohovor pro korporátní agendu — typická agenda, formy klientů, spolupracující notář, kategorie a prahy due diligence, vzory rozhodnutí a zápisů — a založení seznamu spravovaných společností pro hlídání korporátních povinností. Použij při prvním spuštění pluginu korporat-cz nebo když jiná dovednost hlásí chybějící profil.
argument-hint: "[--pridat-spolecnost IČO]"
---

# /korporat-cz:nastaveni

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Postup

1. Zkontroluj sdílený profil kanceláře (chybí-li → `/kancelar-cz:nastaveni`).
2. Načti šablonu korporátního profilu z `../../pravidla-a-sablona.md`.
3. Pohovor po blocích:
   - **A — agenda a klienti:** co kancelář dělá nejčastěji, jaké formy korporací, spolupracující notář.
   - **B — due diligence:** kategorie, prahy významnosti, barevná škála, výstup (Excel / Google Sheets / Markdown).
   - **C — vzory:** projdi `vzory_seznam` („rozhodnutí", „valná hromada", „per rollam", „převod podílu") a zapiš, které vzory kancelář používá.
4. Zapiš `~/.claude/plugins/config/ak-nemec/korporat-cz/profil.md` (po schválení).
5. **Spravované společnosti** (`--pridat-spolecnost` nebo v rámci nastavení): pro každou IČO ověř `ares_subjekt` + `obchodni_rejstrik`, zapiš do `klienti.yaml`:

```yaml
spolecnosti:
  - ico: "12345678"
    firma: "…"
    forma: s.r.o.
    ucetni_obdobi_konec: "12-31"
    jednatele: ["…"]
    spolecnici: ["…"]
    povinnosti: []     # doplní /korporat-cz:korporatni-povinnosti
    posledni_kontrola: 2026-10-13
```
