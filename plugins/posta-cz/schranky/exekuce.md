# Profil schránky: exekuce@ — šablona

*Vyplní /posta-cz:nastaveni-schranky exekuce dne [DATUM]. Ukládá se do `~/.claude/plugins/config/ak-nemec/posta-cz/schranky/exekuce.md`.*

**Adresa:** exekuce@[DOPLNIT — doména kanceláře]
**Kdo schvaluje koncepty:** [DOPLNIT]
**Jak je schránka připojená:** samostatně — konektor Gmail připojený přímo k účtu exekuce@ (rozhodnuto 14. 10. 2026)
**Účet Claude, pod kterým běží ranní úloha:** [DOPLNIT — účet osoby, která exekuce@ vyřizuje; v něm je připojený Gmail exekuce@ a nainstalovaný plugin posta-cz]
**Koho kancelář v exekucích zastupuje:** [DOPLNIT — oprávněné (věřitele) / povinné / obojí]
**Čas ranního zpracování:** [DOPLNIT]
**Vyhledávání nové pošty:** `in:inbox newer_than:1d` (v pondělí `newer_than:3d`)

## Kategorie (návrh — upraví se při nastavení)

| Kategorie | Jak poznat | Píše koncept | Kdo odpovídá | Vzor |
|---|---|---|---|---|
| exekutor-vyrozumeni | exekutorský úřad: vyrozumění o zahájení, o provedení úkonu, o vymoženém plnění | **ne** — shrnutí + spis. zn. exekutora | [DOPLNIT] | — |
| exekutor-vyzva | exekutor žádá součinnost, zálohu, doplnění, vyjádření | **ne** — shrnutí, navržený krok, lhůta jako návrh | [DOPLNIT] | — |
| povinny-dotaz | povinný se ptá na dluh, výši, číslo účtu | ano — podle vzoru, částky [DOPLNÍ] | [DOPLNIT] | `povinny-dotaz.md` |
| povinny-splatky | povinný žádá splátkový kalendář / odklad / slevu | ano — jen potvrzení přijetí a postup kanceláře, žádný příslib | advokát | `povinny-splatky.md` |
| klient-veritel | klient (oprávněný) se ptá na stav vymáhání | ano | [DOPLNIT] | `klient-veritel.md` |
| insolvence | zmínka o insolvenci povinného, ISIR, insolvenční správce | **ne** — 🔴 nahoru, upozornit na lhůtu k přihlášce (§ 173 IZ) | advokát | — |
| platby | avíza o platbách, výpisy | ne — shrnutí | [DOPLNIT] | — |
| nabidky-spam | — | ne | — | — |

## Směrování podle odesílatele

```yaml
exekutor-vyrozumeni: ["@ekcr.cz"]   # + domény jednotlivých exekutorských úřadů — doplnit
insolvence: []                      # insolvenční správci — doplnit
klient-veritel: []                  # klienti — doplnit
```

Kategorie `povinny-*` se pozná podle obsahu (zmínka o exekuci, spis. zn. exekutora, žádost o splátky), ne podle domény.

## Zvláštní pokyny

- [DOPLNIT — např. „Povinným nikdy neuvádět číslo účtu v konceptu, jen odkaz na exekutora."]
- [DOPLNIT — např. „U splátek vždy odkaz na schválení klientem."]
