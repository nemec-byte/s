# Instalace skriptu „Přílohy pro agenta“ (cca 5 minut)

Skript běží ve Vašem Google účtu (nemec@akpetrnemec.cz). Žádný počítač nemusí být zapnutý.
V Gmailu jen čte. Na Disk ukládá přílohy do složky „Claude – pošta/prilohy“, aby je agent mohl přečíst.

## Postup

1. Otevřete https://script.google.com (přihlášen jako nemec@akpetrnemec.cz) → **Nový projekt**.
2. Projekt pojmenujte „Přílohy pro agenta“ (nahoře vlevo).
3. **Kód:** smažte obsah souboru `Kód.gs` a vložte celý obsah souboru `prilohy.gs`. Uložte (Ctrl+S).
4. **Manifest:** vlevo ⚙️ *Nastavení projektu* → zaškrtněte „Zobrazit soubor manifestu appsscript.json v editoru“.
   Pak v editoru otevřete `appsscript.json`, nahraďte jeho obsah souborem `appsscript.json` odsud a uložte.
   (Tím se zapne služba Drive pro OCR a omezí oprávnění na čtení Gmailu.)
5. Nahoře v rozbalovacím seznamu funkcí vyberte **`nastavSpoustece`** → **Spustit**.
   Google se zeptá na oprávnění → *Zkontrolovat oprávnění* → vyberte účet → *Povolit*.
   (Pokud se objeví „Aplikace není ověřena“, klikněte *Rozšířené* → *Přejít na Přílohy pro agenta*. Je to Váš vlastní skript.)
6. Hotovo. Vlevo ⏰ *Spouštěče* uvidíte dva řádky:
   - `ulozPrilohy` (každých 10 min): nová pošta,
   - `historie` (každých 15 min): přílohy za 4 roky (jen vlákna, kde kancelář odpovídala). Po dokončení se sama vypne.

## Kontrola

- Za 10–15 minut se ve složce „Claude – pošta/prilohy“ objeví podsložky pojmenované podle ID zpráv.
- Postup historie: vyberte funkci `stavHistorie` → *Spustit* → *Protokol provádění* ukáže „Hotovo měsíců: X z 48“.
- Historie potrvá podle objemu příloh řádově 1–3 dny (Google omezuje celkovou dobu běhu skriptů za den).

## Vypnutí

Funkce `vypnoutVse` → *Spustit*. Případně v ⏰ *Spouštěče* oba řádky smažte.

## Co skript dělá s daty

- Nová pošta: přílohy se po **90 dnech** automaticky přesunou do koše na Disku.
- Historie (složka `prilohy/historie`): smaže se ručně hned po dokončení analýzy stylu.
- Originály v Gmailu zůstávají beze změny.
- Přeskakuje soubory větší než 20 MB a nebezpečné typy (.exe, .zip, .html …), v souboru `_hotovo` je to poznamenáno.
