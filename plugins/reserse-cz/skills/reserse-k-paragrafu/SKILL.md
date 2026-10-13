---
name: reserse-k-paragrafu
description: Rešerše vycházející z konkrétního ustanovení — znění k rozhodnému datu i dnes (a zda se mezitím změnilo), komentáře s kontrolou, k jakému znění byly psány, navázaná judikatura NS, NSS a ÚS seřazená podle právní síly a nejnovější rozhodnutí. Použij, když uživatel řekne „co je k § …", „komentář a judikatura k paragrafu", „jak se vykládá § …" nebo „změnilo se znění § …".
argument-hint: "<§ číslo zákona, např. § 2051 89/2012> [--k-datu RRRR-MM-DD] [--nizsi-soudy]"
---

# /reserse-cz:reserse-k-paragrafu

> **Než začneš:** přečti `../../metodika.md` (cesta vůči adresáři této dovednosti).

## Postup

1. **Identifikace předpisu** — rok, číslo, paragraf. Je-li zadáno zkratkou (OZ, o. s. ř., ZOK, ZP), převeď a ověř dotazem, že jde o správný předpis.
2. **Znění** — `zneni_paragrafu`:
   - dnes,
   - k rozhodnému datu (`--k-datu`), je-li zadáno;
   - liší-li se, ukaž obě znění vedle sebe a vyznač rozdíl. Ověř `zneni_ucinne_od` / `zneni_ucinne_do`.
3. **Komentáře** — `komentar_k_paragrafu` (s `k_datu`, je-li zadáno). U každého komentáře uveď autora, dílo, rok a `kontrola_zneni` (k aktuálnímu / k dřívějšímu znění / předpis zrušen). Shrň výklad, kde se komentáře shodují a kde ne.
4. **Navázaná judikatura** — z komentářové odpovědi; je-li pole zkráceno (`zkraceno`, `*_celkem`), řekni, že seznam není úplný, a doplň `hledej_v_pravu` s dotazem „§ X zákona Y" + klíčový institut.
5. **Nejnovější vývoj** — `hledej_v_pravu` s `od_roku` = posledních 5 let; pokud nic, 10 let.
6. **Ověření** — u 3–5 nejdůležitějších rozhodnutí `text_rozhodnuti` (vlastní posouzení, odstavce, nosný důvod).

## Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI
§ [ ] zákona č. [ ] — rešerše k [datum]

Znění (dnes / k rozhodnému datu) — doslovně; změny: …
Výklad v komentářích — shody a rozdíly; ke kterému znění
Judikatura podle právní síly (ÚS → NS Sbírka/A → NS/NSS → ostatní) — teze, sp. zn., datum, odst., [interní odkaz]
Nejnovější vývoj (posledních 5 let)
Neúplnost: (zkrácené seznamy, co nebylo ověřeno v plném textu)
```
