#!/usr/bin/env python3
"""posta-cz: strážce nástrojů Gmailu (PreToolUse).

Povolí jen čtení, nové koncepty a PŘIDÁNÍ uživatelských štítků (Claude/…) k vláknu.
Vše ostatní (odeslání, odpověď, přeposlání, mazání, spam, odebírání štítků, systémové
štítky, úpravy konceptů) zablokuje kódem 2. Seznam je povolovací: nový nástroj
konektoru je zakázaný, dokud ho sem někdo vědomě nepřidá.
"""
import json
import re
import sys

POVOLENE = {
    "search_threads", "get_thread", "get_message", "list_drafts", "get_draft",
    "create_draft", "list_labels", "label_thread", "create_label",
}


def zakaz(duvod):
    print("posta-cz: " + duvod + " Připrav jen koncept (štítky jen Claude/… přidávat).", file=sys.stderr)
    sys.exit(2)


try:
    data = json.load(sys.stdin)
except Exception:
    zakaz("nepodařilo se přečíst volání nástroje, z opatrnosti blokuji.")

nastroj = str(data.get("tool_name", ""))
vstup = data.get("tool_input") or {}
kratke = nastroj.split("__")[-1]

if kratke not in POVOLENE:
    zakaz("nástroj „%s“ je v tomto pluginu zakázán." % kratke)

if kratke == "label_thread":
    stitky = vstup.get("labelIds") or []
    # uživatelské štítky mají ID „Label_…“; systémové (INBOX, UNREAD, TRASH, SPAM, CATEGORY_…) nikdy
    if not stitky or any(not str(s).startswith("Label_") for s in stitky):
        zakaz("k vláknu smí přidat jen uživatelské štítky (Claude/…), ne systémové.")

if kratke == "create_label":
    nazev = str(vstup.get("displayName", ""))
    if not nazev.startswith("Claude/"):
        zakaz("zakládat smí jen štítky s předponou Claude/.")

sys.exit(0)
