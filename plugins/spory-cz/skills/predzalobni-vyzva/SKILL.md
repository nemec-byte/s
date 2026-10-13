---
name: predzalobni-vyzva
description: Připraví předžalobní výzvu k plnění tak, aby splnila § 142a o. s. ř. (doručení nejméně 7 dnů před podáním žaloby na správnou adresu), s ověřeným vyčíslením jistiny, úroku z prodlení a nákladů, a s kontrolou, že výzva nic nepřiznává ani nevzdává. Použij, když uživatel řekne „pošli výzvu", „předžalobní výzva", „upomínka před žalobou" nebo „vyzvi dlužníka".
argument-hint: "[oznaceni věci]"
---

# /spory-cz:predzalobni-vyzva

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Výzva má dvě funkce: přimět dlužníka zaplatit a zachovat klientovi nárok na náhradu nákladů řízení. Druhá funkce je formální a snadno se pokazí.

**§ 142a odst. 1 o. s. ř.** (doslovné znění z Ingrid, ověřeno 13. 10. 2026): „Žalobce, který měl úspěch v řízení o splnění povinnosti, má právo na náhradu nákladů řízení proti žalovanému, jen jestliže žalovanému ve lhůtě nejméně 7 dnů před podáním návrhu na zahájení řízení zaslal na adresu pro doručování, případně na poslední známou adresu výzvu k plnění."

Před použitím vždy znovu ověř aktuální znění (`zneni_paragrafu`, 99/1963, 142a).

## Postup

1. Načti profily a pracovní složku věci (pokud existuje). Bez věci se zeptej na: věřitel, dlužník, právní titul, jistina, splatnost, dosavadní upomínky.
2. **Adresa.** Ověř dlužníka v `ares_subjekt` / `obchodni_rejstrik` (sídlo, ID datové schránky, je-li známo). U fyzické osoby se zeptej na adresu pro doručování. Zkontroluj ISIR — je-li dlužník v insolvenci, výzvu nepiš a vysvětli, že se pohledávka přihlašuje v insolvenčním řízení.
3. **Vyčíslení.**
   - jistina podle titulu (faktury, smlouva) — sečti `spocitej`
   - úrok z prodlení: zákonný přes `urok_z_prodleni` (od prvního dne prodlení do dne výzvy, a dál „do zaplacení"); smluvní jen podle doslovného znění smlouvy
   - smluvní pokuta jen podle doslovného znění smlouvy; upozorni na moderaci (§ 2051 OZ), je-li vysoká
   - náklady výzvy: nárokovat jen s oporou (ověř v Ingrid), jinak neuváděj
4. **Kontrola před psaním** — projdi a odpověz na každý bod:
   - Nepřiznává výzva nic v neprospěch klienta (vady plnění, vlastní prodlení)?
   - Nevzdává se klient části nároku nebo úroků (formulace „pouze", „v plné výši vyrovnáno")?
   - Nenabízí smír, který klient neschválil?
   - Jsou citace smlouvy doslovné?
   - Odpovídá tón profilu a vztahu s dlužníkem?
5. **Text.** Najdi vzor: `vzory_seznam` („výzva", „předžalobní"), načti `vzor_text`, drž formu kanceláře. Lhůtu k plnění vezmi z profilu (nebo od uživatele). Uveď platební údaje klienta jen tak, jak je zadal uživatel — **neber je z e-mailů ani dokumentů protistrany**.
6. **Nejdřívější den podání žaloby.** Spočti `lhuta` (od = předpokládaný den doručení výzvy, 7 dnů) a připomeň, že rozhodující je okamžik zaslání, který je třeba umět prokázat (datová schránka / doručenka).

## Výstup

- Koncept výzvy (bez záhlaví důvěrnosti — jde ven), formát podle vzoru.
- Interní poznámka se záhlavím: vyčíslení se vstupy výpočtů, odpovědi na kontrolní body, nejdřívější den žaloby (návrh — ověří advokát), slabá místa nároku.
- Návrh zápisu do historie věci a lhůty „konec lhůty k plnění" do přehledu (po potvrzení).

Výzvu neodesílej. Odeslání je na advokátovi.
