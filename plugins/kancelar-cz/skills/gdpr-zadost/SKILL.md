---
name: gdpr-zadost
description: Zpracuje žádost subjektu údajů podle GDPR (přístup, oprava, výmaz, omezení, přenositelnost, námitka) — pro kancelář samotnou nebo pro klienta-správce. Ověří totožnost žadatele, spočte lhůtu, zváží výjimky (včetně mlčenlivosti advokáta) a připraví koncept odpovědi. Použij, když uživatel řekne „přišla žádost podle GDPR", „chce vidět své osobní údaje", „žádost o výmaz" nebo „DSAR".
argument-hint: "<žádost nebo popis> [--za-klienta název]"
---

# /kancelar-cz:gdpr-zadost

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Žádosti subjektů údajů mají pevnou lhůtu a chyby v nich jsou vidět navenek. Dovednost připraví postup a koncept odpovědi; odpověď odesílá správce po schválení advokátem.

## Postup

1. **Kdo je správce.** Kancelář sama (údaje klientů, protistran, zaměstnanců), nebo klient, pro kterého kancelář žádost řeší (`--za-klienta`)?
2. **Druh žádosti.** Přístup / oprava / výmaz / omezení zpracování / přenositelnost / námitka. Žádost může obsahovat víc práv najednou.
3. **Datum doručení a lhůta.**
   - Přišla-li do datové schránky, zjisti den doručení nástrojem `doruceni_ds`.
   - Lhůtu spočti nástrojem `lhuta` (jednotka měsíce, režim `oz`). Délku lhůty a možnost prodloužení ověř v čl. 12 odst. 3 nařízení (EU) 2016/679 přes `hledej_v_pravu` (zdroje „zakony"); nenajde-li se v Ingrid, označ **[k ověření na EUR-Lex]**.
4. **Ověření totožnosti.** Je-li důvodná pochybnost, navrhni přiměřený způsob ověření (ne víc údajů, než je nutné).
5. **Výjimky a omezení** — pro každou uveď, zda se uplatní a proč:
   - **Mlčenlivost advokáta** (§ 21 zákona o advokacii, ověřeno 13. 10. 2026): údaje, které kancelář zná z poskytování právních služeb jinému klientovi, nelze subjektu zpřístupnit, pokud by tím byla porušena mlčenlivost. Rozsah omezení práv subjektu (čl. 23 GDPR a český adaptační zákon č. 110/2019 Sb.) ověř v Ingrid před použitím **[k ověření]**.
   - práva a svobody jiných osob, zjevně nedůvodná nebo nepřiměřená žádost, zákonné povinnosti archivace (u výmazu).
6. **Rozsah dat.** Navrhni, kde údaje hledat (Praetor, pošta, Drive, účetnictví) a co z nalezeného vydat. Sám v systémech kanceláře nevyhledávej bez pokynu.
7. **Koncept odpovědi** — zdvořilý, srozumitelný, s poučením o právu podat stížnost u ÚOOÚ. Bez záhlaví důvěrnosti (jde ven).

## Výstup

```
DŮVĚRNÉ — PRÁVNÍ SLUŽBA ADVOKÁTA — POVINNOST MLČENLIVOSTI   (interní část)
Žádost: [druh] od [žadatel] — doručeno [datum] — lhůta do [datum] (návrh — ověří advokát; vstupy: …)
Správce: …
Ověření totožnosti: …
Výjimky: … (uplatní se / neuplatní — proč)
Kde hledat údaje: …
Úkoly: co, kdo, do kdy

--- KONCEPT ODPOVĚDI (bez záhlaví, ke schválení) ---
…
```
