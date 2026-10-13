---
name: hlidani-vypovedi
description: Vede registr smluv klientů s výpovědními lhůtami, automatickým prodloužením a termíny, ke kterým je nutné jednat, a upozorňuje před zavřením okna. Termíny počítá nástroji Ingrid. Použij, když uživatel řekne „co se prodlužuje", „hlídej výpověď", „přidej smlouvu do registru", „nepropásli jsme výpověď?" nebo jako plánovanou úlohu.
argument-hint: "[--pridat smlouva | --dni N | --promeskane]"
---

# /smlouvy-cz:hlidani-vypovedi

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Registr

`~/.claude/plugins/config/ak-nemec/smlouvy-cz/registr-vypovedi.yaml`:

```yaml
smlouvy:
  - id: novak-najem-2024
    klient: "…"
    protistrana: "…"
    smlouva: "nájemní smlouva ze dne 1. 3. 2024"
    doba: "určitá do 28. 2. 2027, automatické prodloužení o 1 rok"
    vypoved: "nejpozději 3 měsíce před koncem doby"
    jednat_do: 2026-11-30        # spočteno nástrojem — návrh, ověří advokát
    vypocet: "konec doby 28. 2. 2027 − 3 měsíce → 30. 11. 2026; kontrola dopředu: lhuta(od=2026-11-30, delka=3, jednotka=mesice, ramec=oz)"
    citace: "čl. 7.2: „…“"
    odpovida: "klient / advokát"
    stav: aktivni                # aktivni | vypovezeno | prodlouzeno | ukonceno
```

## Režimy

- **Výchozí — co se blíží (90 dnů)**: skupiny 🔴 0–13 dnů · 🟠 14–44 · 🟡 45–89 (každý termín patří do právě jedné skupiny). U každé položky doporučený krok a kdo ho má udělat.
- **`--dni N`**: jiné okno.
- **`--promeskane`**: termíny `jednat_do` v minulosti se stavem `aktivni` → „okno se zavřelo — smlouva se pravděpodobně prodloužila; ověřte".
- **`--pridat <smlouva>`**: přečti smlouvu, najdi ustanovení o době, výpovědi a prodloužení, **doslovně** je ocituj, urči rozhodný den a spočti `jednat_do`:
  - výpovědní doba a její počátek podle smlouvy (např. od prvního dne měsíce následujícího po doručení) — výpočet krok po kroku. Nástroj `lhuta` počítá dopředu: poslední den pro doručení výpovědi urči zpětně a výsledek **ověř dopředným výpočtem** `lhuta` (musí vyjít konec doby); `pracovni_den` pro posun na pracovní den;
  - u smluv na dobu neurčitou bez ujednání nabídni zákonné pravidlo § 1999 OZ (konec kalendářního čtvrtletí, výpověď alespoň 3 měsíce předem — ověřeno 13. 10. 2026), ale jen po ověření, že se na smlouvu použije (zvláštní úprava nájmu, pracovního poměru apod. má přednost);
  - počítej s dobou doručení výpovědi (rezerva podle způsobu doručení).
  Ukaž záznam a zapiš ho po potvrzení.

## Hranice

Registr je pomůcka; výpověď neodesílej a nerozhoduj, zda smlouvu ukončit. U každého termínu: „návrh — ověří advokát".
