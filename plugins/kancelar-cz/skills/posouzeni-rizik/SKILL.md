---
name: posouzeni-rizik
description: Posoudí právní riziko věci, smlouvy nebo záměru klienta maticí závažnost × pravděpodobnost, s ověřenou oporou v zákoně a judikatuře, a navrhne, kdy věc eskalovat na advokáta nebo klienta. Použij, když uživatel řekne „jaké je riziko", „posuď riziko", „vyplatí se žalovat", „co nám hrozí" nebo potřebuje podklad pro rozhodnutí klienta.
argument-hint: "<popis situace nebo dokument>"
---

# /kancelar-cz:posouzeni-rizik

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Převést „může to dopadnout špatně" na strukturované posouzení, se kterým může klient rozhodnout. Posouzení je podklad, ne prognóza výsledku sporu.

## Postup

1. **Skutkový stav.** Shrň, co víme, a odděl to od toho, co jen tvrdí klient nebo protistrana. Chybějící fakta vypiš jako otázky.
2. **Právní rámec.** Pro každý nárok nebo riziko:
   - znění předpisu přes `zneni_paragrafu` (k rozhodnému datu — u smluv datum uzavření, u škod datum škodní události),
   - výklad přes `komentar_k_paragrafu` (čti pole `kontrola_zneni`),
   - judikatura přes `hledej_v_pravu` (NS, NSS, ÚS) a ověření přes `text_rozhodnuti`.
   - **Promlčení:** vždy zkontroluj. Obecná promlčecí lhůta je tři roky (§ 629 odst. 1 OZ, ověřeno 13. 10. 2026); počátek běhu a zvláštní lhůty ověř podle konkrétního nároku. Lhůtu spočti nástrojem `lhuta` v režimu `oz`.
3. **Hodnocení** každého rizika:
   - **Závažnost** 1–5 (1 = zanedbatelné, 5 = existenční pro klienta / trestněprávní / regulatorní sankce)
   - **Pravděpodobnost** 1–5 (1 = málo pravděpodobné, 5 = téměř jisté)
   - **Skóre** = závažnost × pravděpodobnost → 🟢 1–6 / 🟡 7–14 / 🔴 15–25
   - U každého skóre uveď **proč** (které fakty a které ustanovení nebo rozhodnutí).
4. **Finanční expozice** (jde-li o peníze): jistina, úrok z prodlení (`urok_z_prodleni`), náklady řízení obou stran (`naklady_rizeni`), soudní poplatek. Uveď rozpětí, ne jedno číslo.
5. **Možnosti řešení**: smír / výzva / žaloba / obrana / nic nedělat — u každé náklady, čas a riziko.
6. **Eskalace**: 🔴 kdykoli → advokát rozhoduje sám; jde-li o rozhodnutí klienta (smír, žaloba), připrav otázky pro klienta.

## Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
Posouzení rizika: [věc] — k [datum]

Závěr ve 3 větách: …
Tabulka rizik: riziko | závažnost | pravděpodobnost | skóre | proč | zdroj
Finanční expozice: … (rozpětí, vstupy výpočtů)
Možnosti a doporučení: …
Slabá místa naší pozice: … (otevřeně)
Co chybí ke zpřesnění: …
Neověřeno: … [k ověření]
```

## Co nedělat

- Neuváděj procentuální šanci na úspěch ve sporu, pokud ji advokát výslovně nechce; i pak ji označ jako odhad.
- Nezamlčuj judikaturu, která mluví proti klientovi.
