# Instalace skriptu „Přílohy pro agenta“ – schránka exekuce@

Postup je stejný jako u nemec@. Liší se jen účtem a souborem s kódem.

1. V anonymním okně prohlížeče (nebo v jiném profilu) se přihlaste do Googlu jako **exekuce@akpetrnemec.cz**.
2. Otevřete https://script.google.com/home/projects/create a projekt pojmenujte **Přílohy pro agenta – exekuce**.
3. Do `Kód.gs` vložte celý obsah souboru **prilohy-exekuce.gs** (ne prilohy.gs, ten patří k nemec@).
4. V ⚙️ Nastavení projektu zaškrtněte „Zobrazit v editoru soubor manifestu appsscript.json“. Do `appsscript.json` vložte obsah souboru **appsscript.json**.
5. Vyberte funkci **nastavSpoustece**, klikněte na **Spustit** a povolte přístup.
6. Kontrola: za 10–15 minut se ve složce „Claude – pošta – exekuce/prilohy“ objeví podsložky.

Skript zapisuje do složky, kterou vlastní nemec@ a která je sdílená s exekuce@. Bez sdílení skript selže s chybou „No item with the given ID could be found“.
