/**
 * Přílohy pro poštovního agenta (posta-cz) — VERZE PRO exekuce@
 *
 * Co dělá:
 *  1) ulozPrilohy() – každých 10 minut uloží přílohy nových e-mailů z doručené
 *     pošty na Google Disk do „Claude – pošta/prilohy/<ID zprávy>/“.
 *  2) historie() – jednorázové doplnění za 2 roky (jen vlákna, kde kancelář
 *     odpovídala = klienti a noví klienti) do „prilohy/historie/“. Běží po
 *     částech, dokud není hotovo, pak se sama vypne.
 *  U PDF a obrázků vytvoří i čitelnou kopii (Google Dokument s OCR), aby agent
 *  přečetl i naskenované dokumenty. Složky starší než RETENCE_DNI jdou do koše.
 *
 * Co NEDĚLÁ: v Gmailu nic neodesílá, nemaže, neoznačuje ani nepřesouvá.
 * Z pošty jen čte, na Disk zapisuje jen do složky „prilohy“.
 *
 * Struktura složky jedné zprávy:
 *   <původní soubor>
 *   <původní soubor> (OCR)   … jen PDF a obrázky
 *   _hotovo                  … značka, že je složka kompletní (+ seznam souborů)
 *
 * Instalace: viz INSTALACE.md ve stejné složce.
 */

// ID složky „prilohy“ ve složce „Claude – pošta – exekuce“ (Disk nemec@, sdílená s exekuce@; vytvořena 14. 10. 2026)
const SLOZKA_PRILOHY_ID = '1ZV7Tik-Nfh1EB0YmqbCExtlD3531-Hic';
const DOMENA_KANCELARE = '@akpetrnemec.cz';
// Adresa schránky, ve které skript běží (nemec@, exekuce@ …) — její vlastní odeslané přílohy se v historii neukládají
const VLASTNI_ADRESA = (Session.getEffectiveUser().getEmail() || '(nezjištěno)').toLowerCase();

// Nová pošta: stejné okno jako hodinový běh agenta + rezerva
const HLEDAT_NOVE = 'in:inbox has:attachment newer_than:2d -category:promotions -category:social';

// Historie: přílohy od lidí mimo kancelář; zda kancelář ve vlákně odpověděla, ověří skript
const HLEDAT_HISTORIE = 'has:attachment -from:me -category:promotions -category:social -category:updates ' +
  '-from:justice.cz -from:mojedatovaschranka.cz -from:cak.cz -subject:faktura -subject:"daňový doklad"';
const HISTORIE_MESICU = 24;   // exekuce@: 2 roky (Petr 14. 10. 2026)
const HISTORIE_MAX_VLAKEN_NA_MESIC = 40;

// Po kolika dnech složky s přílohami mazat (do koše). Historie se maže ručně po analýze.
const RETENCE_DNI = 90;

const MAX_VELIKOST_B = 20 * 1024 * 1024;   // větší přílohy přeskočit
const MAX_BEH_MS = 4.5 * 60 * 1000;        // limit jednoho běhu Apps Scriptu je 6 min
const OCR_TYPY = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
// Word/ODT/RTF: kopie jako Google Dokument „(text)“, aby je agent přečetl i tam, kde konektor formát nečte
const TEXT_KONCOVKY = ['doc', 'docx', 'odt', 'rtf'];
const TYPY_PODLE_KONCOVKY = {
  pdf: 'application/pdf', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png',
  doc: 'application/msword', rtf: 'application/rtf', odt: 'application/vnd.oasis.opendocument.text',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
const POVOLENE_KONCOVKY = ['zip', 'pdf', 'doc', 'docx', 'odt', 'rtf', 'txt', 'xls', 'xlsx', 'ods', 'csv',
                           'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'heic', 'tif', 'tiff', 'isdoc', 'xml', 'zfo'];

// ---------------------------------------------------------------- nová pošta

/** Spouští časový spouštěč každých 10 minut. */
function ulozPrilohy() {
  const start = Date.now();
  const koren = DriveApp.getFolderById(SLOZKA_PRILOHY_ID);
  for (const vlakno of GmailApp.search(HLEDAT_NOVE, 0, 100)) {
    for (const zprava of vlakno.getMessages()) {
      if (Date.now() - start > MAX_BEH_MS) return;   // zbytek příště
      ulozZpravu_(koren, vlakno, zprava);
    }
  }
  uklid_(koren);
}

// ---------------------------------------------------------------- historie

/** Spouští spouštěč každých 15 minut, dokud není projito HISTORIE_MESICU měsíců. */
function historie() {
  const start = Date.now();
  const props = PropertiesService.getScriptProperties();
  let mesic = Number(props.getProperty('historie_mesic') || 0);    // 0 = posledních 30 dní
  if (mesic >= HISTORIE_MESICU) { vypniSpoustec_('historie'); return; }

  const koren = DriveApp.getFolderById(SLOZKA_PRILOHY_ID);
  const slozkaHist = najdiNeboVytvor_(koren, 'historie');

  while (mesic < HISTORIE_MESICU && Date.now() - start < MAX_BEH_MS) {
    const od = posunDny_(-(mesic + 1) * 30), doo = posunDny_(-mesic * 30);
    const dotaz = HLEDAT_HISTORIE + ' after:' + od + ' before:' + doo;
    const vlakna = GmailApp.search(dotaz, 0, HISTORIE_MAX_VLAKEN_NA_MESIC * 3);
    let pocet = 0, prerusenoCasem = false;
    for (const vlakno of vlakna) {
      if (pocet >= HISTORIE_MAX_VLAKEN_NA_MESIC) break;
      const zpravy = vlakno.getMessages();
      if (!zpravy.some(m => m.getFrom().indexOf(DOMENA_KANCELARE) !== -1)) continue;  // kancelář neodpověděla
      pocet++;
      for (const zprava of zpravy) {
        if (Date.now() - start > MAX_BEH_MS) { prerusenoCasem = true; break; }
        if (zprava.getFrom().toLowerCase().indexOf(VLASTNI_ADRESA) !== -1) continue;   // přeposlané od kolegů ano
        ulozZpravu_(slozkaHist, vlakno, zprava);
      }
      if (prerusenoCasem) break;
    }
    if (prerusenoCasem) break;          // stejný měsíc znovu příště (hotové složky se přeskočí)
    mesic++;
    props.setProperty('historie_mesic', String(mesic));
  }
  if (mesic >= HISTORIE_MESICU) vypniSpoustec_('historie');
}

// ---------------------------------------------------------------- společné

function ulozZpravu_(koren, vlakno, zprava) {
  const prilohy = zprava.getAttachments({ includeInlineImages: false, includeAttachments: true });
  if (prilohy.length === 0) return;
  const id = zprava.getId();

  let slozka = najdi_(koren, id);
  if (slozka && slozka.getFilesByName('_hotovo').hasNext()) return;  // už hotovo
  if (!slozka) {
    slozka = koren.createFolder(id);
    slozka.setDescription('Vlákno: ' + vlakno.getId() + '\nDatum: ' + zprava.getDate().toISOString() +
                          '\nPředmět: ' + zprava.getSubject());
  }

  const zaznam = [];
  for (const p of prilohy) {
    const nazev = p.getName() || 'bez-nazvu';
    const koncovka = (nazev.split('.').pop() || '').toLowerCase();
    if (p.getSize() > MAX_VELIKOST_B) { zaznam.push('PŘESKOČENO (velikost): ' + nazev); continue; }
    if (POVOLENE_KONCOVKY.indexOf(koncovka) === -1) { zaznam.push('PŘESKOČENO (typ .' + koncovka + '): ' + nazev); continue; }
    if (koncovka === 'zip') {                       // ZIP rozbalit, uložit jen povolené typy (ne další ZIP)
      let soubory = [];
      try { soubory = Utilities.unzip(p.copyBlob().setContentType('application/zip')); }
      catch (e) { zaznam.push('ZIP NEŠEL ROZBALIT: ' + nazev + ' – ' + e.message); continue; }
      for (const b of soubory) {
        const n = (b.getName() || '').split('/').pop();
        const k = (n.split('.').pop() || '').toLowerCase();
        if (!n || k === 'zip' || POVOLENE_KONCOVKY.indexOf(k) === -1) { zaznam.push('PŘESKOČENO ze ZIP: ' + n); continue; }
        const typ = TYPY_PODLE_KONCOVKY[k];
        if (typ) b.setContentType(typ);
        ulozSoubor_(slozka, b.setName(nazev + ' – ' + n), zaznam);
      }
      continue;
    }
    ulozSoubor_(slozka, p.copyBlob().setName(nazev), zaznam);
  }
  slozka.createFile('_hotovo', zaznam.join('\n'), MimeType.PLAIN_TEXT);
}

function ulozSoubor_(slozka, blob, zaznam) {
  const nazev = blob.getName();
  const koncovka = (nazev.split('.').pop() || '').toLowerCase();
  if (slozka.getFilesByName(nazev).hasNext()) { zaznam.push('ULOŽENO: ' + nazev); return; }  // přerušený běh
  slozka.createFile(blob);
  zaznam.push('ULOŽENO: ' + nazev);
  const ocr = OCR_TYPY.indexOf(blob.getContentType()) !== -1 || ['pdf', 'jpg', 'jpeg', 'png'].indexOf(koncovka) !== -1;
  const text = TEXT_KONCOVKY.indexOf(koncovka) !== -1;
  if (!ocr && !text) return;
  try {
    Drive.Files.create(
      { name: nazev + (ocr ? ' (OCR)' : ' (text)'), mimeType: 'application/vnd.google-apps.document', parents: [slozka.getId()] },
      blob, ocr ? { ocrLanguage: 'cs' } : {});
    zaznam.push((ocr ? 'OCR: ' : 'TEXT: ') + nazev);
  } catch (e) {
    zaznam.push('PŘEVOD SELHAL: ' + nazev + ' – ' + e.message);
  }
}

// ---------------------------------------------------------------- fronta (cílené dostažení)

/**
 * Agent může požádat o přílohy konkrétních zpráv: do složky „prilohy/fronta“ uloží textový soubor
 * s ID zpráv z Gmailu (libovolně oddělená). Skript je každých 5 minut stáhne do „prilohy/historie“
 * a hotový soubor přesune do koše. Agent tím nic jiného než stažení příloh nespustí.
 */
function zpracujFrontu() {
  const start = Date.now();
  const koren = DriveApp.getFolderById(SLOZKA_PRILOHY_ID);
  const fronta = najdiNeboVytvor_(koren, 'fronta');
  const hist = najdiNeboVytvor_(koren, 'historie');
  const it = fronta.getFiles();
  while (it.hasNext()) {
    const f = it.next();
    const ids = (f.getBlob().getDataAsString().match(/\b[0-9a-f]{16}\b/g) || []);
    const zbyva = [];
    for (const id of ids) {
      if (Date.now() - start > MAX_BEH_MS) { zbyva.push(id); continue; }
      try {
        const zprava = GmailApp.getMessageById(id);
        if (zprava) ulozZpravu_(hist, zprava.getThread(), zprava);
      } catch (e) { /* neexistující nebo nedostupná zpráva – přeskočit */ }
    }
    if (zbyva.length) fronta.createFile(f.getName(), zbyva.join('\n'), MimeType.PLAIN_TEXT);
    f.setTrashed(true);
    if (Date.now() - start > MAX_BEH_MS) return;
  }
}

function najdi_(koren, nazev) {
  const it = koren.getFoldersByName(nazev);
  return it.hasNext() ? it.next() : null;
}

function najdiNeboVytvor_(koren, nazev) {
  return najdi_(koren, nazev) || koren.createFolder(nazev);
}

function posunDny_(dny) {
  const d = new Date(Date.now() + dny * 24 * 3600 * 1000);
  return Utilities.formatDate(d, 'Europe/Prague', 'yyyy/MM/dd');
}

/** Složky nové pošty starší než RETENCE_DNI do koše (složku „historie“ nechává). */
function uklid_(koren) {
  if (RETENCE_DNI <= 0) return;
  const hranice = Date.now() - RETENCE_DNI * 24 * 3600 * 1000;
  const it = koren.getFolders();
  while (it.hasNext()) {
    const s = it.next();
    if (s.getName() !== 'historie' && s.getName() !== 'fronta' && s.getDateCreated().getTime() < hranice) s.setTrashed(true);
  }
}

function vypniSpoustec_(funkce) {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === funkce)
    .forEach(t => ScriptApp.deleteTrigger(t));
}

// ---------------------------------------------------------------- instalace (spustit ručně jednou)

/** Nastaví oba spouštěče: nová pošta každých 10 min, historie každých 15 min (sama se vypne). */
function nastavSpoustece() {
  vypniSpoustec_('ulozPrilohy');
  vypniSpoustec_('historie');
  vypniSpoustec_('zpracujFrontu');
  ScriptApp.newTrigger('ulozPrilohy').timeBased().everyMinutes(10).create();
  ScriptApp.newTrigger('historie').timeBased().everyMinutes(15).create();
  ScriptApp.newTrigger('zpracujFrontu').timeBased().everyMinutes(5).create();
}

/** Stav historie – kolik měsíců z HISTORIE_MESICU je hotovo (spusťte a podívejte se do protokolu). */
function stavHistorie() {
  Logger.log('Hotovo měsíců: ' + (PropertiesService.getScriptProperties().getProperty('historie_mesic') || 0) +
             ' z ' + HISTORIE_MESICU);
}

/** Úplné vypnutí skriptu. */
function vypnoutVse() {
  vypniSpoustec_('ulozPrilohy');
  vypniSpoustec_('historie');
  vypniSpoustec_('zpracujFrontu');
}
