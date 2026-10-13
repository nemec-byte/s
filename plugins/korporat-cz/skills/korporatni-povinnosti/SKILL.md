---
name: korporatni-povinnosti
description: Hlídá opakující se korporátní povinnosti spravovaných společností — projednání účetní závěrky valnou hromadou, uložení do sbírky listin, aktuálnost údajů v obchodním rejstříku a evidenci skutečných majitelů, konce funkčních období — a provede „zdravotní kontrolu" společnosti z registrů. Použij, když uživatel řekne „korporátní povinnosti", „co musí klientské firmy udělat", „mají uloženou závěrku?", „kontrola firmy v rejstříku" nebo jako plánovanou úlohu.
argument-hint: "[IČO | --vse] [--kontrola]"
---

# /korporat-cz:korporatni-povinnosti

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Povinnosti (výchozí sada pro s.r.o., rozšiřuj podle formy)

Každou povinnost před použitím ověř `zneni_paragrafu`; u ověřených je datum ověření.

| Povinnost | Opora | Termín |
|---|---|---|
| Projednání řádné účetní závěrky VH | § 181 odst. 2 ZOK (ověřeno 13. 10. 2026) | do 6 měsíců od konce účetního období |
| Zveřejnění účetní závěrky (a výroční zprávy) uložením do sbírky listin | § 21a odst. 2 a 4 zák. č. 563/1991 Sb. (ověřeno 13. 10. 2026) | po schválení (a auditu), nejpozději do 12 měsíců od rozvahového dne; u auditovaných do 30 dnů od splnění podmínek |
| Zápis změn údajů do OR | zákon o veřejných rejstřících **[ověř §]** | bez zbytečného odkladu **[ověř]** |
| Aktuální údaje v evidenci skutečných majitelů | zákon o evidenci skutečných majitelů **[ověř §]** | **[ověř]** |
| Konce funkčních období (je-li sjednáno) | společenská smlouva | podle smlouvy |

Termíny počítej nástroji (`lhuta`, `pracovni_den`) z konce účetního období uvedeného v `klienti.yaml`.

## Režimy

- **Výchozí / `--vse`:** pro všechny společnosti v `klienti.yaml` spočti nejbližší termíny a vypiš 🔴 do 14 dnů / 🟠 15–45 / 🟡 46–90.
- **`<IČO> --kontrola`** (zdravotní kontrola):
  - `obchodni_rejstrik` — změny od poslední kontroly (statutáři, sídlo, společníci); porovnej s `klienti.yaml` a nesoulad vypiš
  - sbírka listin — jsou uloženy závěrky za poslední ukončená období? (pokud nástroj údaj nevrací, uveď „ověřit ručně")
  - `insolvencni_rejstrik` — prázdný výsledek ≠ důkaz
  - `ares_subjekt` — stav subjektu, DPH
  - aktualizuj `posledni_kontrola` (po potvrzení)

## Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
Korporátní povinnosti — k [datum]
| Společnost | Povinnost | Termín (návrh) | Stav | Další krok |
Zjištěné nesoulady v registrech: …
Neověřeno: …
```

Neplň povinnosti za klienta a nic nepodávej; připrav podklady a upozornění.
