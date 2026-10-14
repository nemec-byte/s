---
name: nastaveni
description: Průvodce zprovozněním napojení Claude na účetnictví POHODA — mServer, samostatný uživatel s omezenými právy, instalace ověřené verze dg/pohoda-mcp, proměnné prostředí bez hesla v souborech, test spojení — a profil účetnictví kanceláře (číselné řady, předkontace, bankovní účet, splatnost, sazba DPH, šablona tisku faktury, složka PDF). Použij při prvním spuštění pluginu pohoda-cz, když uživatel řekne „připoj Pohodu" nebo když jiná dovednost hlásí chybějící spojení.
argument-hint: "[--kontrola]"
---

# /pohoda-cz:nastaveni

> **Než začneš:** přečti `../../pravidla.md`.

## Část A — zprovoznění (dělá se jednou, na počítači s POHODOU)

Proveď uživatele krok za krokem; u každého kroku počkej na potvrzení. Sám nic neinstaluj bez souhlasu.

1. **mServer v POHODĚ** — Účetní jednotky → Databáze → POHODA mServer → Nový: název (např. `claude`), účetní jednotka kanceláře, port 444. Spustit. Pro automatický start doporučuje Stormware Plánovač úloh Windows.
   - mServer nechat naslouchat **jen lokálně / v síti kanceláře**, nikdy nepřesměrovávat do internetu. Mimo `localhost` zapnout HTTPS (záložka HTTPS).
2. **Samostatný uživatel POHODY** pro Claude (ne Admin) — práva: čtení dokladů a adresáře; zápis jen do agend **Vydané faktury** a **Adresář**. Žádná práva k mazání, účetním uzávěrkám ani nastavení.
3. **PHP 8.1+** (s rozšířeními curl, dom, simplexml) a **Composer**.
4. **Instalace ověřené verze** (prošli jsme kód commitu ze 13. 10. 2026):
   ```powershell
   git clone https://github.com/dg/pohoda-mcp.git C:\nastroje\pohoda-mcp
   cd C:\nastroje\pohoda-mcp
   git checkout 3eba9a2c00ee856d1e9e1356d1c82b95d3103820
   composer install --no-dev
   ```
   Novější verze instaluj až po další kontrole kódu.
5. **Proměnné prostředí Windows** (uživatelské, ne v souborech projektu): `POHODA_MCP_DIR` (např. `C:\nastroje\pohoda-mcp`), `POHODA_URL` (`http://localhost:444`), `POHODA_ICO`, `POHODA_USERNAME`, `POHODA_PASSWORD`. Heslo nikdy do `.mcp.json`, gitu ani chatu.
6. Restart Claude (desktop / Claude Code), aby se načetl server `pohoda` z tohoto pluginu.

## Část B — kontrola (`--kontrola` dělá jen tohle)

- `status` (s `companyDetail: true`): verze, licence, účetní jednotka, účetní rok. Sedí IČO s profilem kanceláře?
- Zkušební čtení: `list_documents` agenda faktur, `invoiceType: issuedInvoice`, poslední měsíc, `limit: 5`.
- Výsledek popiš; při chybě vysvětli nejčastější příčiny (mServer neběží, port, jméno/heslo, IČO, práva uživatele).

## Část C — profil účetnictví

Zjisti od uživatele (případně dohledej v existujících fakturách přes `list_documents`) a zapiš do `~/.claude/plugins/config/ak-nemec/pohoda-cz/profil.md` po schválení:

```yaml
platce_dph: ano                 # ano / ne
sazba_dph_sluzby: high          # high = základní sazba; ověř u účetní
splatnost_dni: 14
predkontace_vydane: ""          # IDS předkontace, např. "3FV" — z existujících faktur
bankovni_ucet_ids: ""           # IDS bankovního účtu v POHODĚ, např. "KB"
ciselna_rada: ""                # pokud se nepoužije výchozí
stredisko: ""                   # volitelné
cinnost: ""                     # volitelné
forma_uhrady: draft             # draft = převodem
report_faktura_id: 0            # ID tiskové sestavy faktury (vlastnosti sestavy v POHODĚ)
pdf_slozka: "C:\\Faktury\\PDF"  # místní složka
text_faktury: "Právní služby dle smlouvy o poskytování právních služeb"
polozky_typy:                   # typy fakturace kanceláře
  - hodinova: { jednotka: "h", sazba: 0 }   # sazbu doplní uživatel
  - pausal:   { jednotka: "měs", sazba: 0 }
  - mimosmluvni: "podle advokátního tarifu — naklady_rizeni"
uctarna: ""                     # kdo v kanceláři účtuje (pro dotazy)
```
