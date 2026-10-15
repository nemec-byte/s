# START – agent pošty exekuce@ (první nastavení)

Tento dokument čte Claude v účtu Claude připojeném ke schránce exekuce@akpetrnemec.cz, když dostane pokyn „Nastav agenta pošty exekuce@ podle dokumentu START-exekuce“. Majitel a schvalovatel je Mgr. Petr Němec.

Složka: „Claude – pošta – exekuce“, ID `1Md6KyBNrVxffyEyfEvaaC0JyEwN86xhs`. Než začneš, přečti si `pravidla-exekuce`.

## Krok 1 – kontrola připojení

Kontrolu ukaž jako tabulku ✅/❌. Při chybě přestaň a řekni, co nastavit.
1. **Gmail** je připojený ke schránce exekuce@ (ověř podle příjemce jedné nové zprávy).
2. **Nástroje Gmailu odpovídají pravidlu 1.** Povolené jsou jen čtení, `create_draft`, `list_labels`, `label_thread` a `create_label`. Pokud je dostupné cokoli dalšího, co zapisuje (odesílá, odpovídá, přeposílá, maže, odebírá štítky, mění štítky zprávy, spam, upravuje koncepty), vypněte to na claude.ai → Nastavení → Konektory → Gmail → u každého takového nástroje „Nepovolovat“.
3. **Google Disk** vidí složku podle ID výše a umí do ní zapisovat.
4. **Ingrid Ask** odpovídá (zkus např. `zneni_paragrafu` 120/2001 § 55).
5. **Přílohy:** ve složce `prilohy` (ID `1ZV7Tik-Nfh1EB0YmqbCExtlD3531-Hic`) přibývají podsložky a podsložka `historie`. Pokud ne, skript „Přílohy pro agenta“ v účtu exekuce@ ještě neběží (viz `INSTALACE-skriptu-exekuce`).

## Krok 2 – analýza pošty (2 roky)

- Proveď podle `postup-analyzy-exekuce`.
- Pokud se historie příloh ještě stahuje (podsložek v `prilohy/historie` přibývá, nejstarší je mladší než 2 roky), řekni to a nabídni dvě možnosti: začít hned s obdobími, která už mají přílohy, nebo počkat.
- Výsledky ulož na Disk a ukaž Petrovi `analyza-exekuce-souhrn`. Ke schválení předlož i návrh `profil-exekuce`: kategorie, kdo co vyřizuje a časy běhů.

## Krok 3 – zkušební běh

Po schválení profilu proveď jeden běh podle `postup-behu-exekuce` s oknem 1 den. Petrovi ukaž koncepty a souhrn.

## Krok 4 – pravidelný běh (až na pokyn Petra)

Vytvoř rutinu (`create_trigger`):
- **každé spuštění v nové relaci** (`create_new_session_on_fire: true`);
- **konektory:** Gmail, Google Drive, Ingrid Ask;
- **rozvrh:** podle profilu, s časovým pásmem `CRON_TZ=Europe/Prague`, v pracovní dny;
- **prompt:** „Běh pošty exekuce@. Ze složky na Google Disku s ID 1Md6KyBNrVxffyEyfEvaaC0JyEwN86xhs přečti dokumenty pravidla-exekuce a postup-behu-exekuce (vždy nejnovější verzi) a proveď jeden běh přesně podle nich. Nikdy nic neodesílej ani nemaž, jen vytvářej koncepty.“

Vytvoř i **druhou rutinu – učení** (`create_trigger`):
- každé spuštění v nové relaci; konektory Gmail, Google Drive;
- rozvrh: pracovní dny v 5:40, `CRON_TZ=Europe/Prague 40 5 * * 1-5`;
- prompt: „Učení pošty exekuce@. Ze složky na Google Disku s ID 1Md6KyBNrVxffyEyfEvaaC0JyEwN86xhs přečti pravidla-exekuce, pokyny-exekuce a postup-uceni-exekuce (vždy nejnovější verzi) a proveď denní běh učení. V pondělí navíc týdenní souhrn. Do pošty nic nezapisuj.“

Potom Petrovi potvrď, kdy proběhne první běh pošty a první běh učení.
