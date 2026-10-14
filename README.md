# České právnické pluginy pro Claude — AK Mgr. Petr Němec

Sedm pluginů pro Claude (Cowork / Claude Code), převzaté z právnických pluginů Anthropic a přepsané pro české právo a praxi advokátní kanceláře. Právo, lhůty, registry a vzory podání berou z konektoru **Ingrid Ask**.

> **Každý výstup je návrh pro kontrolu advokátem.** Pluginy nic neodesílají, nepodávají ani nepodepisují. Lhůty jsou vždy označené „návrh — ověří advokát"; rozhodující zůstává lhůtář kanceláře (Praetor).

## Co je uvnitř

| Plugin | Dovednosti | K čemu |
|---|---|---|
| **kancelar-cz** | `nastaveni`, `proverka-subjektu`, `ranni-prehled`, `priprava-schuzky`, `posouzeni-rizik`, `gdpr-zadost` | Základ: profil kanceláře, lustrace ARES/OR/ISIR (+ AML), ranní přehled, schůzky, rizika, žádosti subjektů údajů |
| **spory-cz** | `nastaveni`, `prijeti-veci`, `lhuty`, `predzalobni-vyzva`, `prijata-vyzva`, `chronologie`, `podani`, `naklady`, `stav-veci` + agent `hlidac-lhut` | Sporová agenda podle o. s. ř. |
| **smlouvy-cz** | `nastaveni`, `revize-smlouvy`, `nda-triage`, `historie-dodatku`, `hlidani-vypovedi`, `shrnuti-pro-klienta` | Smlouvy podle OZ a playbooku kanceláře |
| **reserse-cz** | `reserse`, `reserse-k-paragrafu`, `overeni-citaci` | Rešerše podle metodiky Ingrid: vrstvy, právní síla, časová okna, ověření plného textu, judikatura proti, kontrola citací před odesláním |
| **posta-cz** | `nastaveni-schranky`, `vytezeni-stylu`, `ranni-posta`, `ladeni-stylu` + agenti `tridic`, `pisar` | Ranní pošta: třídění podle profilu schránky, koncepty odpovědí v Gmailu ve stylu kanceláře naučeném z odeslané pošty, týdenní ladění. Odesílání a mazání blokuje hook. Šablony schránek nemec@ a exekuce@ |
| **pohoda-cz** | `nastaveni`, `prehledy`, `vystavit-fakturu`, `zpracovat-zadosti`, `upominky`, `adresar` | Účetnictví POHODA přes dg/pohoda-mcp (ověřený commit 3eba9a2). Jen z počítače v síti kanceláře. Zápis po náhledu a potvrzení, `raw_xml` a tisk do síťových cest blokuje hook. Žádosti o fakturu podávají advokáti na stránce [Fakturace AK Němec](https://claude.ai/artifact/TVA7uwBpDS3JPTX5WF5CNM) |
| **korporat-cz** | `nastaveni`, `due-diligence`, `rozhodnuti-mimo-vh`, `zapis-z-valne-hromady`, `korporatni-povinnosti`, `closing-checklist` | Korporátní agenda podle ZOK |

Dovednosti se spouští lomítkem, např. `/spory-cz:lhuty`, nebo samy, když o úkol požádáte běžnou větou („přišlo usnesení, do kdy je odvolání?").

## Co bylo oproti originálu změněno

- **Právo:** americké instituty (FRCP, discovery, depositions, privilege log, legal hold, FRE 408, Delaware) nahrazeny českými — o. s. ř., OZ, ZOK, zákon o advokacii, AML zákon, zákon o účetnictví, insolvenční zákon.
- **Ověřování:** každé ustanovení citované v pluginech bylo ověřeno v Ingrid (`zneni_paragrafu`) ke dni 13. 10. 2026 a je u něj datum ověření. Co ověřit nešlo, je označeno **[k ověření]** a dovednost ho při použití ověří sama.
- **Výpočty:** lhůty, doručení do datové schránky, úroky z prodlení a náklady řízení počítají nástroje Ingrid, ne model.
- **Vynecháno** (bez českého ekvivalentu nebo použití): claim charts, deposition prep, privilege log, legal hold, subpoena triage, outside counsel status, M&A disclosure schedules pro US právo, DocuSign workflow, americké konektory (CourtListener, Trellis, Everlaw, Ironclad, iManage).
- **Přidáno:** prověrka subjektu s AML podkladem, výpočet lhůt z doručených písemností, předžalobní výzva podle § 142a o. s. ř., náklady řízení podle advokátního tarifu, rozhodnutí per rollam a jediného společníka, korporátní povinnosti (sbírka listin, VH).

## Instalace

**Předpoklad:** zapnutý konektor **Ingrid Ask** (bez něj pluginy necitují právo ani nepočítají lhůty). Doporučeně i Gmail, Google Kalendář a Google Drive.

### Claude Code
```
/plugin marketplace add nemec-byte/s
/plugin install kancelar-cz@ak-nemec-pravo-cz
/plugin install spory-cz@ak-nemec-pravo-cz
/plugin install smlouvy-cz@ak-nemec-pravo-cz
/plugin install korporat-cz@ak-nemec-pravo-cz
/plugin install reserse-cz@ak-nemec-pravo-cz
/plugin install posta-cz@ak-nemec-pravo-cz
/plugin install pohoda-cz@ak-nemec-pravo-cz
```
(Repozitář je soukromý — Claude Code musí mít přístup k GitHubu.)

### Cowork / claude.ai
Přidejte repozitář `nemec-byte/s` jako marketplace pluginů v nastavení pluginů (přesný postup se v aplikaci mění — viz nápověda Claude k pluginům) a pluginy zapněte.

## První spuštění

1. `/kancelar-cz:nastaveni` — profil kanceláře (cca 10 min). Ostatní pluginy na něj navazují.
2. Podle praxe: `/spory-cz:nastaveni`, `/smlouvy-cz:nastaveni` (playbook), `/korporat-cz:nastaveni`.
3. Vyzkoušejte na skutečné věci: `/kancelar-cz:proverka-subjektu 12345678` nebo `/spory-cz:lhuty` na poslední doručené písemnosti.

Nastavení a pracovní data se ukládají do `~/.claude/plugins/config/ak-nemec/` a přežijí aktualizace pluginů.

## Struktura

```
.claude-plugin/marketplace.json
plugins/<plugin>/
  .claude-plugin/plugin.json
  pravidla-a-sablona.md     ← společná pravidla + šablona profilu (každá dovednost ji čte)
  skills/<dovednost>/SKILL.md
  agents/                   ← jen spory-cz (hlídač lhůt)
plugins/reserse-cz/metodika.md  ← metodika rešerše podle Ingrid (čtou ji dovednosti rešerše)
```

## Licence

Apache License 2.0 — viz [LICENSE](LICENSE) a [NOTICE](NOTICE) (původ z `anthropics/knowledge-work-plugins` a `anthropics/claude-for-legal`).
