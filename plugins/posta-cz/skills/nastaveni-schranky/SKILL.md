---
name: nastaveni-schranky
description: Nastaví jednu e-mailovou schránku pro zpracování pošty — adresa, způsob připojení, kdo schvaluje koncepty, kategorie e-mailů a které z nich dostávají koncept, směrování podle odesílatelů, čas ranního běhu — a navrhne naplánovanou ranní úlohu. Má připravené šablony pro nemec@ a exekuce@. Použij, když uživatel řekne „nastav schránku", „přidej schránku", „připoj exekuce@" nebo spouští plugin poprvé.
argument-hint: "<schránka, např. nemec | exekuce | kancelar | mooz | makar | caslavsky> [--kontrola]"
---

# /posta-cz:nastaveni-schranky

> **Než začneš:** přečti `../../pravidla.md`.

## Postup

1. **Šablona.** Existuje-li `../../schranky/<schranka>.md`, použij ji; jinak vyjdi z `../../schranky/nemec.md` a kategorie přizpůsob pohovorem.
2. **Připojení** (`--kontrola` dělá jen tento krok):
   - Ověř, ke kterému účtu Google je připojen konektor Gmail (vyhledej 1 zprávu a podívej se na příjemce) — nic nečti ani neukládej.
   - Je-li schránka jiný účet, než na který je konektor připojen, vysvětli možnosti a nech uživatele vybrat:
     a) **přeposílání** pošty ze schránky do připojeného účtu se štítkem (např. `exekuce`) — nejjednodušší; koncepty pak vznikají v připojeném účtu a při odeslání je třeba zvolit odesílací adresu schránky („Odeslat jako");
     b) **samostatné připojení** schránky (jiný účet Claude / konektor připojený k tomuto účtu Google) — čistší oddělení, víc správy.
     U samostatného připojení: ranní úloha i koncepty patří k účtu Claude, ve kterém je Gmail schránky připojený — plugin, profil a příručka stylu se nastavují v tomto účtu. Ověř, že konektor opravdu ukazuje na správnou schránku (příjemce vyhledané zprávy), než cokoli zpracuješ.
     Rozhodnutí zapiš do profilu. Bez funkčního připojení schránku nezakládej jako aktivní.
3. **Pohovor** (max. 3–4 otázky najednou):
   - kdo koncepty schvaluje a kdo za schránku odpovídá
   - projdi kategorie šablony: sedí? co chybí? které dostávají koncept?
   - směrování: domény a adresy klientů, soudů, exekutorů, insolvenčních správců (lze doplňovat průběžně)
   - zvláštní pokyny (co se v e-mailech nikdy nepíše)
   - čas ranního běhu
4. Zapiš profil po schválení jako Google Dokument `profil-<schranka>` do složky „Claude – pošta" na Disku.
5. **Další kroky** — doporuč:
   1. `/posta-cz:vytezeni-stylu <schranka>` (bez příručky agent koncepty nepíše)
   2. zkušební běh `/posta-cz:ranni-posta <schranka> --max 10` a kontrola konceptů
   3. teprve pak **naplánovaná úloha**: každý pracovní den v nastavený čas `/posta-cz:ranni-posta <schranka>` a jednou týdně `/posta-cz:ladeni-stylu <schranka>`. Úlohu založ jen na výslovný pokyn uživatele.
