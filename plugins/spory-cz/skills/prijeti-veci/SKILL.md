---
name: prijeti-veci
description: Jednotné přijetí nové sporové věci — identifikace, kontrola střetu zájmů (brána), prověrka protistrany, AML (je-li namístě), předmět sporu, promlčení, první lhůty, plná moc a odměna. Založí pracovní složku věci a řádek v přehledu věcí. Použij, když uživatel řekne „nová věc", „přijmi věc", „nový klient ve sporu" nebo „založ spis".
argument-hint: "[název věci]"
---

# /spory-cz:prijeti-veci

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Každá věc projde stejným příjmem, aby byly věci srovnatelné, lhůty hned zachycené a nic podstatného (střet zájmů, promlčení) nezapadlo. Pracovní složka je pomůcka pro Claude; spis a evidence věcí v Praetoru zůstávají rozhodující.

## Načti

- sdílený profil kanceláře a `~/.claude/plugins/config/ak-nemec/spory-cz/profil.md`
- `~/.claude/plugins/config/ak-nemec/spory-cz/veci/_prehled.yaml` (kvůli jedinečnosti označení)

## Příjem

### 1. Identifikace
- klient (IČO / jméno a datum narození), protistrana, další účastníci
- naše role: žalobce / žalovaný / vedlejší účastník / navrhovatel / věřitel v insolvenci
- typ věci: peněžitá pohledávka / nájem / náhrada škody / pracovní / rodinná / insolvenční / jiná
- soud nebo orgán, spisová značka (je-li řízení zahájeno), číslo věci v Praetoru

### 2. Střet zájmů — BRÁNA
Postup podle profilu (sekce „Kontrola střetu zájmů"). Zapiš: stav (`proveden` / `ceka` / `neproveden`), kdo, kdy, proti komu (klient, protistrana, propojené osoby, statutáři).
- `proveden` → pokračuj.
- `ceka` → pokračuj, ale zvýrazni v pracovní složce i v přehledu a připomínej při každé aktualizaci.
- `neproveden` → **STOP.** Složku ani řádek v přehledu nezakládej. Vysvětli, že jde o povinnost podle § 19 zákona o advokacii, a nabídni, co ke kontrole připravit (seznam jmen a IČO).

### 3. Prověrka protistrany
Nabídni `/kancelar-cz:proverka-subjektu`. U peněžitých nároků vždy ISIR — protistrana v insolvenci mění celý postup (přihláška pohledávky místo žaloby; § 173 insolvenčního zákona, ověřeno 13. 10. 2026).

### 4. AML
Jen pokud služba spadá pod § 2 odst. 1 písm. g) zákona č. 253/2008 Sb. (běžné zastupování ve sporu obvykle ne; úschova peněz ano). Zeptej se, nerozhoduj sám.

### 5. Předmět a hodnota
- nárok, právní titul, jistina, příslušenství (úrok spočti `urok_z_prodleni`)
- **Promlčení:** začátek běhu, délka, případné stavění. Obecná lhůta tři roky (§ 629 OZ). Konec spočti `lhuta` (režim `oz`) a uveď předpoklady. Hrozí-li promlčení do 60 dnů → 🔴 na začátek výstupu.

### 6. Lhůty a termíny
Každá známá lhůta (doručená písemnost, jednání, splatnost) — přes `/spory-cz:lhuty`.

### 7. Smluvní stránka
Plná moc (rozsah), odměna (smluvní / mimosmluvní / úkonová), záloha. Jen zapiš, co uživatel uvede.

## Zápis (po potvrzení uživatelem)

1. Označení věci: `rrrr-protistrana-predmet` (malá písmena, pomlčky, bez diakritiky).
2. `veci/<oznaceni>/vec.md` — celý příjem jako text, záhlaví důvěrnosti.
3. `veci/<oznaceni>/historie.md` — první záznam „přijetí věci [datum]".
4. Řádek do `veci/_prehled.yaml`:

```yaml
- oznaceni: 2026-novak-dluh-najem
  klient: "…"
  protistrana: "…"
  role: zalobce
  soud: "OS Plzeň-město"
  sp_zn: "" 
  praetor: ""
  stav: predzalobni   # predzalobni | rizeni-1-stupen | odvolani | dovolani | exekuce | insolvence | uzavreno
  stret_zajmu: proveden
  promlceni_konec: 2027-03-31   # návrh — ověří advokát
  lhuty:
    - co: "výzva k plnění — konec lhůty"
      do: 2026-10-24
      zdroj: "výzva odeslána 2026-10-14, 10 dní"
      potvrzeno_advokatem: false
  posledni_aktualizace: 2026-10-13
```

Před zápisem ukaž řádek a zeptej se: „Takto to zapíšu — chcete něco změnit?"
