---
name: lhuty
description: Z doručené písemnosti (rozhodnutí, usnesení, výzva soudu, platební rozkaz, předvolání) určí, jaké lhůty běží, spočte jejich konec nástroji Ingrid (doručení do datové schránky, o. s. ř., OZ, správní řád) a navrhne zápis do lhůtáře. Použij, když uživatel řekne „přišlo usnesení", „jaká je lhůta", „do kdy odvolání", „spočítej lhůtu" nebo nahraje doručenou písemnost.
argument-hint: "<písemnost nebo popis> [--vec oznaceni]"
---

# /spory-cz:lhuty

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Zmeškaná lhůta je nejdražší chyba advokacie. Dovednost lhůtu najde, spočte nástrojem a ukáže, z čeho vychází — aby ji advokát mohl ověřit za minutu, ne za deset.

Tato dovednost smí běžet i bez nastavení pluginu.

## Postup

1. **Den doručení.**
   - Datová schránka: zeptej se na den dodání a případně den přihlášení; spočti `doruceni_ds` (fikce 10. dnem).
   - Jiný způsob: den převzetí podle doručenky; u náhradního doručení se zeptej na den uložení a zda se adresát v úložní době přihlásil — **den doručení fikcí neurčuj bez ověření ustanovení** (`zneni_paragrafu`, o. s. ř.).
2. **Jaká lhůta běží.** Z poučení v písemnosti a z ustanovení:
   - Poučení soudu přečti doslova a lhůtu z něj převezmi.
   - Ověř ji proti zákonu přes `zneni_paragrafu`. Příklady ověřené 13. 10. 2026: odvolání 15 dnů od doručení písemného vyhotovení (§ 204 odst. 1 o. s. ř.); vyjádření na výzvu podle § 114b o. s. ř. — lhůtu určí soud, nejméně 30 dnů, nevyjádření má následek fikce uznání (§ 114b odst. 5).
   - Liší-li se poučení od zákona, upozorni — nesprávné poučení může lhůtu prodloužit (u odvolání § 204 odst. 2 o. s. ř.).
   - Lhůty pro odpor, dovolání, kasační stížnost aj. vždy ověř v Ingrid, nepiš je z paměti.
3. **Výpočet.** `lhuta` s parametry: `od` = den doručení (rozhodná událost), `delka`, `jednotka`, `ramec` (`osr` / `oz` / `spravni`). Výsledek uveď s předpoklady, které nástroj vrátí.
4. **Interní rezerva.** Podle profilu (např. 2 pracovní dny před koncem) spočti `pracovni_den` interní termín.
5. **Navazující důsledky.** Upozorni na koncentraci řízení (§ 118b o. s. ř.), pokud z písemnosti plyne přípravné jednání nebo první jednání; na fikci uznání u § 114b; na právní moc a vykonatelnost.

## Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
Písemnost: [druh, soud, sp. zn., č. j.]
Doručeno: [datum] — [způsob, výpočet doruceni_ds]
Lhůta: [co] — [délka] — konec [datum, den v týdnu]   ← NÁVRH, OVĚŘÍ ADVOKÁT
  Opora: [§ … — doslovné znění z Ingrid] / poučení soudu: „…"
  Výpočet: lhuta(od=…, delka=…, jednotka=…, ramec=…) → předpoklady: …
Interní termín: [datum]
Důsledky zmeškání / na co pozor: …
```

## Zápis

Po potvrzení advokátem přidej lhůtu do `veci/<oznaceni>/historie.md` a do `_prehled.yaml` s `potvrzeno_advokatem: true`. Do kalendáře zapiš jen na výslovný pokyn. Připomeň, že rozhodující je lhůtář uvedený v profilu (např. Praetor).
