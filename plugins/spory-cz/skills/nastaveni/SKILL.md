---
name: nastaveni
description: Úvodní pohovor pro sporovou agendu — typické spory, strana, soudy, způsob kontroly střetu zájmů, kdo vede lhůtář, standardy předžalobních výzev a styl podání. Zapíše sporový profil. Použij při prvním spuštění pluginu spory-cz nebo když jiná dovednost hlásí chybějící profil.
argument-hint: "[--kontrola]"
---

# /spory-cz:nastaveni

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Postup

1. Zkontroluj sdílený profil `~/.claude/plugins/config/ak-nemec/profil-kancelare.md`. Chybí-li, řekni: „Nejdřív spusťte /kancelar-cz:nastaveni — sporový profil na něj navazuje." a skonči.
2. Načti šablonu `../../pravidla-a-sablona.md` (struktura sporového profilu).
3. Pohovor po blocích (max. 3–4 otázky najednou, nabízej výchozí volby):
   - **A — praxe:** typické spory, převažující strana, časté soudy, rozhodčí řízení.
   - **B — střet zájmů:** jak se dnes kontroluje (Praetor / seznam / jinak) a kdo potvrzuje. Vysvětli, že bez potvrzené kontroly `/spory-cz:prijeti-veci` věc nezaloží (§ 19 zákona o advokacii).
   - **C — lhůty:** kdo vede rozhodující lhůtář, s jakým předstihem upozorňovat, jakou interní rezervu držet.
   - **D — výzvy:** standardní lhůta k plnění, způsob odeslání, zákonný nebo smluvní úrok.
   - **E — podání:** projdi s uživatelem `vzory_seznam` a zapiš, které vzory kancelář používá pro žalobu, odpor, vyjádření, odvolání, návrh na exekuci.
4. Ukaž návrh profilu, nech schválit, zapiš na `~/.claude/plugins/config/ak-nemec/spory-cz/profil.md`.
5. Vytvoř `~/.claude/plugins/config/ak-nemec/spory-cz/veci/_prehled.yaml` s prázdným seznamem `veci: []`, pokud neexistuje.
6. Doporuč první krok: založit jednu skutečnou věc přes `/spory-cz:prijeti-veci` a vyzkoušet `/spory-cz:lhuty` na poslední doručené písemnosti.
