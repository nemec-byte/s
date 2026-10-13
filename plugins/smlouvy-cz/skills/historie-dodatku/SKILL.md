---
name: historie-dodatku
description: Z původní smlouvy a všech dodatků sestaví aktuální platné znění a historii změn — co, kdy a kterým dodatkem se změnilo, s doslovnými citacemi, a upozorní na rozpory, mezery v číslování, chybějící podpisy nebo dodatky uzavřené v rozporu s ujednanou formou. Použij, když uživatel řekne „jak teď smlouva zní", „konsolidované znění", „co měnily dodatky" nebo nahraje smlouvu s dodatky.
argument-hint: "<smlouva a dodatky>"
---

# /smlouvy-cz:historie-dodatku

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Postup

1. **Inventura dokumentů.** Seřaď podle data uzavření: smlouva, dodatky, přílohy, obchodní podmínky (a jejich verze). Ke každému: datum, strany, podpisy (kdo podepsal, zda je oprávněn jednat podle OR k datu podpisu — `obchodni_rejstrik`), účinnost.
2. **Formální kontrola.** Vyžaduje smlouva pro změny určitou formu? Má ji každý dodatek? Chybí-li dodatek v řadě (č. 1, 2, 4), upozorni.
3. **Změny.** Pro každý článek: původní znění → změna (dodatek č., článek) → aktuální znění. Citace jen doslovné.
   Upozorni, když dodatek mění článek, který mezitím změnil jiný dodatek, nebo když se změny navzájem vylučují.
4. **Aktuální znění.** Sestav konsolidované znění. Každý změněný článek označ poznámkou `[změněno dodatkem č. X ze dne …]`. Kde nelze rozhodnout, nech obě verze a **[rozhodne advokát]**.
5. **Klíčová data** z aktuálního znění: doba trvání, výpověď, prodloužení, ceny a valorizace → nabídni zápis do registru (`/smlouvy-cz:hlidani-vypovedi`).

## Výstup

- Tabulka historie: článek | původně | dodatek | aktuálně | poznámka.
- Konsolidované znění (.docx nebo Markdown) s výrazným upozorněním „PRACOVNÍ KONSOLIDACE — NENÍ PRÁVNÍM JEDNÁNÍM STRAN".
- Seznam problémů: formy, podpisy, rozpory, mezery.
