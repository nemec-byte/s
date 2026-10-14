---
name: prehledy
description: Přehledy z účetnictví POHODA — neuhrazené a po splatnosti vydané faktury (kdo a kolik dluží, jak dlouho), obrat kanceláře za období podle klientů, přijaté faktury k úhradě, porovnání období. Jen čte. Použij, když uživatel řekne „kdo nám nezaplatil", „pohledávky po splatnosti", „obrat za měsíc/rok", „kolik jsme fakturovali klientovi X", „co máme zaplatit".
argument-hint: "<pohledavky | obrat | k-uhrade | klient IČO/název> [--od RRRR-MM-DD] [--do RRRR-MM-DD]"
---

# /pohoda-cz:prehledy

> **Než začneš:** přečti `../../pravidla.md` (zvlášť pravidla 8 a 9 — oříznuté výpisy a nezjištěný stav úhrady).

## Přehledy

### `pohledavky` (výchozí)
1. `list_documents` — vydané faktury (`invoiceType: issuedInvoice`) za posledních 24 měsíců, po měsících, aby nic nebylo oříznuto.
2. Pro každou fakturu zjisti z výpisu splatnost a stav úhrady (zbývající částka). Chybí-li údaj, viz pravidlo 9.
3. Dny po splatnosti spočti nástrojem (od `dateDue` do dneška). Skupiny: 1–30 / 31–90 / 91–180 / 180+ dnů.
4. Ke každé pohledávce nad 30 dní nabídni `/pohoda-cz:upominky`; nad 180 dní upozorni na promlčení (§ 629 OZ, tři roky — konec spočti `lhuta` režim `oz`) a nabídni `/spory-cz:predzalobni-vyzva`.

### `obrat`
Vydané faktury za období (výchozí aktuální rok), součty bez DPH a s DPH (`spocitej`), podle klientů (TOP 10 + ostatní) a podle měsíců. Porovnání se stejným obdobím loni, pokud uživatel chce.

### `k-uhrade`
Přijaté faktury (`invoiceType: receivedInvoice`) se splatností do 14 dnů a po splatnosti.

### `klient <IČO / název>`
Všechny vydané faktury klienta (filtr `ico` nebo `company`), součet, neuhrazené, průměrná doba úhrady.

## Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
[Přehled] — [období] — stav POHODY k [datum a čas dotazu]
Souhrn ve 3 větách
Tabulka (číslo faktury, klient, datum, splatnost, částka, zbývá, dní po splatnosti)
Součty (vstupy výpočtu)
Neúplnost: oříznuté výpisy / nezjištěný stav úhrady / co ověřit v POHODĚ
```

Na přání export do Excelu (dovednost xlsx).
