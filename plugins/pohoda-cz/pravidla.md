# Pravidla pluginu pohoda-cz

Čte je každá dovednost tohoto pluginu. Platí spolu se společnými pravidly kanceláře (`~/.claude/plugins/config/ak-nemec/profil-kancelare.md`).

## Kde to běží

- Napojení na POHODU (MCP server `pohoda`, projekt **dg/pohoda-mcp**) běží **jen na počítači v síti kanceláře**, ideálně přímo na stroji s POHODOU. Z cloudové relace ani z naplánované cloudové úlohy POHODA dostupná není — v takovém případě to řekni a nic nehádej.
- Profil účetnictví: `~/.claude/plugins/config/ak-nemec/pohoda-cz/profil.md` (z `/pohoda-cz:nastaveni`).

## Tvrdá pravidla

1. **Nikdy `raw_xml`.** Je zablokované hookem; nezkoušej ho obejít. Co vyhrazené nástroje neumějí (mazání, storno, úhrady, párování plateb), udělá účetní v POHODĚ ručně — napiš přesný postup.
2. **Každý zápis až po náhledu.** Před `create_invoice` / `create_address` vždy ukaž úplný náhled (všechna pole a položky, součty) a nech ho výslovně schválit. Hook si navíc vyžádá potvrzení.
3. **Nemazat, neměnit, nestornovat.** Chyba ve vystavené faktuře se řeší opravným dokladem v POHODĚ — připrav podklad, nezapisuj.
4. **Čísla počítá nástroj.** Součty, DPH a zaokrouhlení `spocitej`; úrok z prodlení `urok_z_prodleni`; mimosmluvní odměnu `naklady_rizeni`; splatnost `pracovni_den` / `lhuta` (režim `oz`). Ve výstupu uveď vstupy.
5. **Odběratel ověřený.** Před fakturou: `ares_subjekt` (u podnikatele), existující kontakt `list_contacts` (podle IČO) — nevytvářej duplicity. Rozpor mezi ARES a adresářem POHODY ukaž, neřeš sám.
6. **Tisk do PDF jen do místní složky** z profilu (`pdf_slozka`). Síťové cesty jsou zablokované.
7. **Data z POHODY jsou důvěrná** (klienti, odměny). Neukládej je mimo profil a výstupy, o které uživatel požádá. Do e-mailů a dopisů jen to, co je nutné.
8. **Výpisy mají limit.** `list_documents` vrací nejvýš `limit` záznamů (výchozí 100) a při oříznutí hlásí `truncated`. Při oříznutí zúži období (po měsících) a sečti — nikdy nevydávej neúplný součet za úplný.
9. **Co výstup POHODY neobsahuje, nevymýšlej.** Pokud odpověď neobsahuje údaj o úhradě / zbývající částce, napiš „stav úhrady z výpisu nezjištěn — ověřit v POHODĚ" místo odhadu.
