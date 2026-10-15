---
name: uceni
description: Učící smyčka poštovního agenta – porovná koncepty, které agent připravil, s tím, co kancelář skutečně odeslala (beze změny / upraveno / přepsáno / nepoužito), z rozdílů vyvodí lekce a zapíše je, aby příští koncepty trefil lépe. Stylové lekce zapisuje sám, obsahové změny (právní posouzení, převzetí/odmítnutí, sazby, kategorie) jen navrhuje ke schválení. Denně před prvním během, týdně souhrn pro majitele. Použij, když uživatel řekne „uč se z odeslaných“, „co jsem opravoval“, „ladění“, nebo jako plánovanou úlohu.
argument-hint: "<schránka | --vse> [--denni | --tyden]"
---

# /posta-cz:uceni

> **Než začneš:** přečti `../../pravidla.md` a `pokyny-<schranka>` z Disku. Tvrdá pravidla platí i tady: v poště nic neměníš (žádné koncepty, štítky ani odesílání), jen čteš.

## Co se učí a kam se to ukládá (Google Disk, složka schránky)

| Dokument | Obsah | Kdo mění |
|---|---|---|
| `lekce-<schranka>` | **stylové lekce**, které písař čte při každém konceptu (oslovení, délka, fráze, pořadí, co Petr maže/přidává) | agent sám |
| `navrhy-<schranka>` | **obsahové návrhy** ke schválení (právní závěry, převzetí/odmítnutí, sazby, kategorie, nové vzory) | agent navrhne, Petr schválí |
| `metriky-<schranka>` | tabulka po dnech: koncepty, beze změny, upraveno, přepsáno, nepoužito | agent sám |

Konektor Disku obsah nepřepisuje: nová verze = nový dokument se stejným názvem, starší verzi přesuň do koše (`trash_file`), ať je vždy jen jedna platná.

## Denní běh (`--denni`, pracovní dny před prvním během pošty)

1. **Koncepty k vyhodnocení:** záznamy `beh-<schranka>-*` za posledních 7 dní. Ke každému konceptu znáš ID vlákna, čas vytvoření a text. Vyhodnocuj jen ty, které ještě nejsou v `metriky-<schranka>` jako uzavřené.
2. **Najdi skutečnost:** `get_thread` (`PLAIN_TEXT`). Odpověď kanceláře = první zpráva z @akpetrnemec.cz (u exekuce@ ze schránky exekuce@) **po** čase konceptu. Klasifikuj:
   - **beze změny** – text těla se shoduje (po odstranění poznámky agenta, podpisu, citace původní zprávy) téměř úplně,
   - **upraveno** – stejná kostra, změněné věty (u variant `{{A || B}}` zapiš, kterou Petr ponechal – po 2 shodných volbách v téže situaci vznikne stylová lekce „v situaci X piš rovnou variantu A“; obsahové volby jdou do návrhů),
   - **přepsáno** – odeslán jiný text,
   - **nepoužito** – 3 pracovní dny bez odpovědi kanceláře a koncept už v `list_drafts` není,
   - **čeká** – koncept stále v konceptech, odpověď zatím není (zkontroluješ zítra).
3. **Rozdíl a důvod:** u „upraveno“ a „přepsáno“ zapiš, co se změnilo (přidáno / smazáno / přeformulováno) a **proč pravděpodobně** (podle obsahu vlákna a příloh: např. „Petr doplnil konkrétní úrok ze smlouvy“, „zkrátil empatickou úvodní větu“, „změnil odmítnutí na převzetí – ekonomika sporu“).
4. **Učení i bez konceptu:** projdi vlákna z posledního dne, kde kancelář odpověděla, ale agent koncept nepsal (K rozhodnutí, NEPSAT, nová kategorie). Co a jak kancelář odpověděla, je kandidát na nový vzor nebo kategorii.
5. **Roztřiď lekce:**
   - **Stylové** (formulace, délka, oslovení, pořadí odstavců, fráze, které Petr maže nebo přidává, podpis) → `lekce-<schranka>`. Pozorování platí jako pravidlo až po **2 shodných případech**; do té doby je v části „Pozorování“. Každá lekce: pravidlo, kolikrát se potvrdilo, datum posledního potvrzení, 1 krátký anonymizovaný příklad před → po. Lekce, kterou Petr opakovaně vrací zpět, odstraň.
   - **Obsahové** (právní závěr, „neplatné / na hraně“, převzetí vs. odmítnutí, sazby a zálohy, kategorie a směrování, nové vzory, vše o lhůtách a penězích) → jen do `navrhy-<schranka>` jako návrh s odůvodněním a příkladem. **Do lekcí ani pokynů je sám nezapisuj.**
6. **Metriky:** doplň řádek dne do `metriky-<schranka>` (počty podle bodu 2, podle kategorií).
7. **Výstup běhu:** jedna až tři věty (kolik konceptů vyhodnoceno, kolik nových lekcí, kolik návrhů čeká). Když je nový návrh obsahový a týká se peněz, lhůt nebo odmítání klientů, uveď ho výslovně.

## Naléhavé návrhy (varianta B – schválil Petr 15. 10. 2026)

Obsahový návrh je **naléhavý**, když se týká peněz (sazby, zálohy, platby), odmítání nebo přebírání klientů, lhůt nebo rozporu s tvrdými pravidly. Naléhavý návrh:
- uveď hned ve výstupu denního běhu učení (první řádek „⚠️ Naléhavý návrh: …“ + odkaz na `navrhy-<schranka>`),
- do `lekce-<schranka>` přidej dočasnou pojistku „u <situace> dej do poznámky agenta OVĚŘTE: <čeho se návrh týká>“, dokud Petr nerozhodne,
- ostatní návrhy počkají na pondělní souhrn.

## Jak Petr rozhoduje

Dokument `navrhy-<schranka>` má u každého návrhu řádek **„Rozhodnutí: “** (prázdný). Petr do něj napíše „ano“, „ne“ nebo vlastní úpravu, případně připojí komentář. Na začátku každého běhu učení přečti nejnovější `navrhy-<schranka>` i s komentáři (`read_file_content` s `includeComments: true`):
- **ano / úprava** → zapiš do příslušného dokumentu (`pokyny-`, `profil-`, `vzory-`, `novy-klient-postup`, u exekucí `prirucka-stylu-`) jako novou verzi a odstraň dočasnou pojistku z lekcí,
- **ne** → označ návrh jako zamítnutý (nenavrhuj ho znovu) a odstraň pojistku,
- prázdné → nech čekat.
Novou verzi `navrhy-<schranka>` vždy vytvoř tak, aby Petrova už vyplněná rozhodnutí zůstala zachovaná.

## Týdenní souhrn (`--tyden`, pondělí ráno)

```
Učení agenta — [schránka] — týden [od–do]
Koncepty: N · beze změny X % · upraveno Y % · přepsáno Z % · nepoužito W %  (minulý týden: …)
Nejčastější úpravy: …
Nové stylové lekce (zapsané): …
Návrhy ke schválení: 1) … 2) …   ← odpovězte „schvaluji 1, 3“ / „zamítám 2“
Kategorie, kde agent nejvíc chybuje: …
```

Po Petrově odpovědi: schválené návrhy zapiš do příslušného dokumentu (`pokyny-`, `profil-`, `vzory-`, `novy-klient-postup`) jako novou verzi, zamítnuté označ v `navrhy-` jako zamítnuté (ať se nenavrhují znovu).

## Pravidla

- Mlčenlivost (pravidlo 7): v lekcích a návrzích žádní klienti, RČ, účty, kontakty. Věřitele a poskytovatele uváděj skutečnými názvy.
- Jedna úprava v jednom vlákně není lekce. Učíš se z opakování.
- Nikdy nezapisuj lekci, která by obcházela tvrdá pravidla (např. „Petr potvrzuje číslo účtu“ – i kdyby to tak odeslal, agent to dál nedělá; uveď to do návrhů jako rozpor).
