---
name: shrnuti-pro-klienta
description: Převede revizi smlouvy nebo právní analýzu do srozumitelného shrnutí pro klienta-neprávníka — co smlouva znamená, co je riziko, co doporučujeme a co má klient rozhodnout — bez právního žargonu a bez interních poznámek. Použij, když uživatel řekne „napiš to klientovi", „shrnutí pro klienta", „vysvětli klientovi smlouvu" nebo „e-mail klientovi k revizi".
argument-hint: "<revize nebo analýza> [--email | --memo]"
---

# /smlouvy-cz:shrnuti-pro-klienta

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Zásady

- Klient potřebuje rozhodnout, ne studovat. Nejdřív doporučení, pak důvody.
- Bez paragrafů v textu (jen tam, kde je klient výslovně chce, nebo v poznámce pod čarou).
- Riziko konkrétně: „když dodavatel nedodá včas, můžete po něm chtít nejvýš X Kč, i kdyby vám vznikla škoda Y" — ne „omezení odpovědnosti je nevýhodné".
- Otevřeně: co je jisté, co je odhad, kde rozhoduje klient (obchodní riziko) a kde advokát (právní riziko).
- **Nic interního ven:** záhlaví důvěrnosti, poznámky [k ověření], hodnocení protistrany, vyjednávací rezervy klienta — nic z toho nepatří do textu, který může klient přeposlat dál. Než výstup předáš, zkontroluj, že tam nejsou.
- Oslovení a podpis podle profilu kanceláře.

## Struktura

```
Předmět: [smlouva] — naše doporučení

1. Doporučení jednou větou (podepsat / podepsat po úpravách / nepodepisovat).
2. Co je pro vás nejdůležitější (3–5 bodů, každý: co smlouva říká → co to pro vás znamená → co navrhujeme).
3. Co od vás potřebujeme rozhodnout / doplnit (otázky).
4. Další kroky a termíny.
```

`--email`: max. 1 obrazovka. `--memo`: delší, s přílohou tabulky připomínek ve zjednodušené formě.

Výstup je koncept. Neodesílej ho.
