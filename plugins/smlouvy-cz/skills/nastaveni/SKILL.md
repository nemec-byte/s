---
name: nastaveni
description: Pohovor, který sepíše vyjednávací playbook kanceláře — standardní pozice, akceptovatelné ústupky a nepřijatelné body pro hlavní ustanovení smluv a pravidla třídění NDA. Umí playbook odvodit i z vzorových smluv kanceláře. Použij při prvním spuštění pluginu smlouvy-cz, když uživatel řekne „sepiš playbook", „nastav revize smluv", nebo když revize hlásí chybějící playbook.
argument-hint: "[--ze-vzoru cesta k vzorovým smlouvám]"
---

# /smlouvy-cz:nastaveni

> **Než začneš:** přečti `../../pravidla-a-sablona.md` (cesta vůči adresáři této dovednosti) — společná pravidla všech čtyř pluginů a šablona profilu. Pravidla platí vždy, i když je profil kanceláře nevyplněný.

## Účel

Revize „podle zákona" říká, co je platné. Revize „podle playbooku" říká, co je pro klienta přijatelné. Playbook je to, co dělá z obecné revize revizi kanceláře.

## Postup

1. Zkontroluj sdílený profil kanceláře (chybí-li → nejdřív `/kancelar-cz:nastaveni`).
2. Načti šablonu playbooku z `../../pravidla-a-sablona.md`.
3. **Zdroj pozic** — nabídni dvě cesty:
   - **Ze vzorů (`--ze-vzoru`)**: přečti 2–5 vzorových nebo podepsaných smluv kanceláře a navrhni standard pro každé ustanovení. Rozpory mezi vzory ukaž a nech rozhodnout.
   - **Pohovorem**: projdi ustanovení po skupinách (odpovědnost a pokuty / platby / trvání a ukončení / spory a právo / data a mlčenlivost).
4. U každého ustanovení zapiš tři úrovně: **standard**, **akceptovatelné**, **nepřijatelné → eskalace**. U zákonných limitů uveď ustanovení ověřené v Ingrid, např.:
   - vyloučení náhrady újmy — § 2898 OZ (ověřeno 13. 10. 2026)
   - moderace smluvní pokuty — § 2051 OZ (ověřeno 13. 10. 2026)
   - obchodní podmínky a „bitva formulářů" — § 1751 OZ (ověřeno 13. 10. 2026)
   - adhezní smlouvy, zvláště nevýhodné doložky — § 1800 OZ (ověřeno 13. 10. 2026)
   - výpověď závazku na dobu neurčitou — § 1999 OZ (ověřeno 13. 10. 2026)
   Před uložením znění znovu ověř `zneni_paragrafu`.
5. **NDA pravidla** — co je zelená / žlutá / červená (např. jednostranná vs. vzájemná, doba trvání, smluvní pokuta, zákaz konkurence nebo přetahování zaměstnanců skrytý v NDA).
6. **Eskalace** — kdo rozhoduje o nepřijatelných bodech, od jaké hodnoty reviduje vždy advokát.
7. Ukaž celý playbook, nech schválit, zapiš `~/.claude/plugins/config/ak-nemec/smlouvy-cz/playbook.md`. Založ prázdné `odchylky.md` a `registr-vypovedi.yaml` (`smlouvy: []`).

## Údržba

Playbook není jednorázový. Když `/smlouvy-cz:revize-smlouvy` zaznamená stejnou přijatou odchylku potřetí, navrhni úpravu playbooku.
