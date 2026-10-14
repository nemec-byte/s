# Profil schránky: nemec@ — šablona

*Vyplní /posta-cz:nastaveni-schranky nemec dne [DATUM]. Ukládá se do `~/.claude/plugins/config/ak-nemec/posta-cz/schranky/nemec.md`.*

**Adresa:** [DOPLNIT]@[DOPLNIT — doména kanceláře]
**Majitel / kdo schvaluje koncepty:** Mgr. Petr Němec
**Jak je schránka připojená:** [DOPLNIT — vlastní účet Google v konektoru Gmail / přeposílání do jiné schránky se štítkem]
**Čas ranního zpracování:** [DOPLNIT — např. 6:45, pracovní dny]
**Vyhledávání nové pošty:** `in:inbox newer_than:1d -in:chats` (v pondělí `newer_than:3d`)

## Kategorie

| Kategorie | Jak poznat | Píše koncept | Kdo odpovídá | Vzor |
|---|---|---|---|---|
| klient | odesílatel je klient (seznam domén / adres níže), dotaz ke své věci | ano | advokát | `klient.md` |
| novy-klient | poptávka služeb, první kontakt | ano | advokát | `novy-klient.md` |
| protistrana | protistrana nebo její advokát | ano, opatrně | advokát | `protistrana.md` |
| soud-urad | @justice.cz, úřady, exekutorské úřady | **ne** — shrnutí + další krok | advokát | — |
| kolega | jiná AK, notář, exekutor ve spolupráci | ano | advokát | `kolega.md` |
| fakturace | faktury, upomínky, dotazy k platbám | ne — shrnutí | [DOPLNIT] | — |
| interni | kolegové z kanceláře | ne | — | — |
| nabidky-spam | obchodní nabídky, newslettery | ne — jen označit v souhrnu | — | — |

## Směrování podle odesílatele

```yaml
soud-urad:   ["@justice.cz", "@cak.cz", "@mfcr.cz", "@financnisprava.cz", "@cssz.cz", "@ekcr.cz"]   # doplnit
klient:      []     # domény a adresy klientů — doplnit
protistrana: []     # doplnit podle živých věcí
interni:     ["@[DOPLNIT doména kanceláře]"]
```

## Zvláštní pokyny

- [DOPLNIT — např. „Klientům odpovídám vždy do 24 hodin, i když jen potvrzením přijetí."]
- [DOPLNIT — např. „Nikdy nepiš sazby odměny, vždy [DOPLNÍ ADVOKÁT]."]
