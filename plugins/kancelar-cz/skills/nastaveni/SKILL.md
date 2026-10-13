---
name: nastaveni
description: Úvodní pohovor, který vytvoří sdílený profil kanceláře pro všechny čtyři české pluginy (kancelář, spory, smlouvy, korporát). Použij, když uživatel řekne „nastav plugin", „nastavení kanceláře", spouští plugin poprvé, nebo když jiná dovednost hlásí chybějící profil. S přepínačem --kontrola jen ověří, které konektory jsou dostupné.
argument-hint: "[--kontrola]"
---

# /kancelar-cz:nastaveni

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Každá dovednost ve čtyřech pluginech čte jeden sdílený profil kanceláře. Bez něj by výstupy byly obecné (oslovení, podpis, kdo smí co odeslat, které systémy jsou k dispozici). Pohovor trvá asi 10 minut a dělá se jednou; později jde kdykoli upravit.

## Postup

1. Načti šablonu `../../pravidla-a-sablona.md` — určuje strukturu profilu a společná pravidla.
2. Zkontroluj, zda už existuje `~/.claude/plugins/config/ak-nemec/profil-kancelare.md`.
   - Existuje a je vyplněný → nabídni úpravu jednotlivých sekcí, nepřepisuj celý soubor.
   - Neexistuje → veď pohovor.
3. **Kontrola konektorů** (vždy, a jediné, co dělá `--kontrola`):
   - Ingrid Ask: zkus `svatky` pro aktuální rok. Funguje → ✓. Nefunguje → upozorni, že bez Ingrid pluginy nesmí citovat právo ani počítat lhůty, a doporuč konektor zapnout.
   - Gmail, Google Kalendář, Google Drive: zjisti, zda jsou nástroje dostupné (nic nečti, jen ověř dostupnost).
   - Praetor: zatím bez konektoru — zapiš ✗ a poznámku „evidence v Praetoru má přednost".
4. **Pohovor** — ptej se po blocích, max. 3–4 otázky najednou, nabízej rozumné výchozí volby:
   - Blok A — kancelář: název, ev. č. ČAK, ID datové schránky, plátce DPH, oblasti praxe, typičtí klienti.
     Údaje o kanceláři si můžeš ověřit přes `ares_subjekt` (IČO), ale jen se souhlasem.
   - Blok B — lidé: kdo plugin používá a v jaké roli; kdo smí co odeslat. Výchozí: ven nic bez advokáta.
   - Blok C — styl: oslovení klienta, podpis, preferovaná délka interních memo.
   - Blok D — co chce kancelář automatizovat nejdřív (pomůže doporučit další pluginy a jejich nastavení).
5. Ukaž návrh profilu celý, nech ho schválit, pak zapiš na `~/.claude/plugins/config/ak-nemec/profil-kancelare.md` (vytvoř složky).
   Do profilu zkopíruj i blok „Společná pravidla" ze šablony, aby byl profil samostatně čitelný.
6. Na konci doporuč další krok podle bloku D:
   - spory → `/spory-cz:nastaveni`
   - smlouvy → `/smlouvy-cz:nastaveni`
   - korporát → `/korporat-cz:nastaveni`

## Co nedělat

- Neptej se na údaje, které profil nepotřebuje (rodná čísla, hesla, přístupy).
- Neukládej do profilu klientská data — profil je o kanceláři, ne o věcech.
- Nevyplňuj [DOPLNIT] odhadem. Když uživatel neví, nech [DOPLNIT] a řekni, které dovednosti to omezí.
