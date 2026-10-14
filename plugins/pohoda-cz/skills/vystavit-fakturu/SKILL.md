---
name: vystavit-fakturu
description: Vystaví vydanou fakturu v POHODĚ z podkladů — hodinová odměna z výkazu, paušál, úkonová nebo mimosmluvní odměna podle advokátního tarifu, náhrady (cestovné, soudní poplatky) — s ověřením odběratele v ARES a adresáři, náhledem ke schválení, zápisem do POHODY, uložením PDF a konceptem průvodního e-mailu. Použij, když uživatel řekne „vystav fakturu", „vyfakturuj klientovi…", „faktura za říjen pro…".
argument-hint: "<klient> [--podklady soubor/výkaz] [--obdobi měsíc] [--mimosmluvni věc]"
---

# /pohoda-cz:vystavit-fakturu

> **Než začneš:** přečti `../../pravidla.md`. Zápis do POHODY je nevratný z této strany — proto náhled a výslovné schválení.

## Postup

1. **Profil.** Načti `~/.claude/plugins/config/ak-nemec/pohoda-cz/profil.md` (DPH, splatnost, předkontace, účet, sestava, složka PDF). Ověř spojení (`status`); nedostupné → skonči s vysvětlením.
2. **Odběratel.**
   - `list_contacts` podle IČO nebo názvu → existuje? Použij `partnerId`.
   - U podnikatele `ares_subjekt`: sedí název a sídlo s adresářem? Rozpor ukaž.
   - Neexistuje-li kontakt, nabídni `/pohoda-cz:adresar` (vytvoření) — nevytvářej ho mimochodem.
3. **Položky z podkladů** (jen z toho, co uživatel dodal — výkaz, smlouva, dohoda):
   - **hodinová:** úkony s daty a časem z výkazu; součet hodin `spocitej`; sazba ze smlouvy nebo profilu (bez sazby → zeptat se)
   - **paušál:** období, částka ze smlouvy
   - **mimosmluvní / tarifní odměna:** `naklady_rizeni` (úkony s daty, tarifní hodnota) — v položkách odměna, paušály, (DPH přidá POHODA)
   - **náhrady:** soudní poplatky (bez DPH, podle dokladu), cestovné
   - nejasnou položku nehádej → zeptat se
4. **Hlavička:** datum vystavení (dnes, není-li řečeno jinak), DUZP (u služeb dle dohody — zeptej se, je-li sporné), splatnost (`splatnost_dni`; výsledek posuň `pracovni_den`, pokud tak kancelář chce), forma úhrady, účet, předkontace, text, variabilní symbol (nechat na číselné řadě, není-li jiný).
5. **Náhled** — celá faktura v tabulce: odběratel (+ zdroj ověření), položky (text, množství, jednotka, cena bez DPH, sazba DPH), součty bez DPH / DPH / celkem (`spocitej`), data, VS, účet. Pod tím „Co jsem předpokládal" a „Co ověřit".
6. **Schválení** — teprve po výslovném „ano, vystav" volej `create_invoice` (`type: issuedInvoice`). Hook si vyžádá ještě potvrzení.
7. **Po vystavení:**
   - ukaž číslo dokladu a ID záznamu z odpovědi;
   - nabídni PDF: `print` s `agenda: vydane_faktury`, `recordId`, `reportId` z profilu, `pdfPath` = `pdf_slozka\<číslo>.pdf`;
   - nabídni koncept průvodního e-mailu klientovi (styl podle `posta-cz`, je-li nastaven) — jen koncept, neodesílat.

## Nikdy

- nevystavuj fakturu bez náhledu a schválení
- neopravuj chybnou vystavenou fakturu dalším zápisem — připrav podklad pro opravný doklad v POHODĚ
- nevymýšlej sazby, hodiny ani úkony
