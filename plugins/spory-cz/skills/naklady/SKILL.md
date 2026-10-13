---
name: naklady
description: Vyčíslí náklady řízení (mimosmluvní odměna advokáta podle advokátního tarifu, režijní paušál, DPH, soudní poplatek, cestovné, promeškaný čas) nástrojem Ingrid podle znění tarifu účinného v den každého úkonu, a připraví přehled úkonů do podání nebo pro klienta. Použij, když uživatel řekne „vyčísli náklady", „náklady řízení", „kolik bude stát spor" nebo „seznam úkonů do závěrečného návrhu".
argument-hint: "[oznaceni věci] [--odhad pro budoucí spor]"
---

# /spory-cz:naklady

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Postup

1. **Tarifní hodnota.** Z věci (hodnota předmětu bez příslušenství) nebo pevná hodnota podle § 9 tarifu — urči s uživatelem a ověř v Ingrid (`zneni_paragrafu` pro vyhl. č. 177/1996 Sb.). Liší-li se u některého úkonu (změna žaloby), zadej ji u úkonu.
2. **Úkony.** Z historie věci a spisu sestav seznam úkonů s daty: převzetí a příprava zastoupení, výzva (§ 142a), žaloba, vyjádření, jednání (s délkou v hodinách), odvolání… U každého urči, zda jde o celý nebo poloviční úkon — při pochybnosti se zeptej, nehádej.
3. **Výpočet** nástrojem `naklady_rizeni`: úkony s daty, tarifní hodnota, koeficient a počet zastoupených (je-li namístě), plátce DPH podle profilu, soudní poplatek, cestovné, promeškaný čas.
4. **`--odhad`** — pro rozhodnutí klienta, zda žalovat: spočti náklady pro obvyklý průběh (1 stupeň / s odvoláním) pro obě strany; uveď jako rozpětí a vysvětli riziko povinnosti hradit náklady protistrany.

## Výstup

```
Náklady řízení — [věc] — k [datum]
Tarifní hodnota: … (opora)
| Datum | Úkon | Rozsah | Sazba | Paušál | Celkem |
Odměna celkem / paušály / DPH / soudní poplatek / ostatní / CELKEM
Vstupy a předpoklady výpočtu: … (výstup nástroje)
```

Pro podání připrav i textovou verzi „vyčíslení nákladů řízení" podle vzoru kanceláře (`vzory_seznam` „náklady").
