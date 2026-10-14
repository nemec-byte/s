#!/usr/bin/env bash
# Strážce volání nástrojů POHODY (PreToolUse). Čte JSON volání ze stdin.
#  - raw_xml: vždy zakázáno (umí cokoli včetně mazání)
#  - print: zakázána síťová cesta (UNC \\server, //server) — ochrana proti úniku přihlašovacích údajů Windows
#  - create_*: vždy vyžádat potvrzení uživatele
vstup=$(cat)
nastroj=$(printf '%s' "$vstup" | grep -o '"tool_name"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/.*"\([^"]*\)"$/\1/')

zamitnout() {
  printf '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"%s"}}\n' "$1"
  exit 0
}
zeptat() {
  printf '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"ask","permissionDecisionReason":"%s"}}\n' "$1"
  exit 0
}

case "$nastroj" in
  *pohoda*raw_xml)
    zamitnout "pohoda-cz: raw_xml je zakázáno (může měnit i mazat data). Použij vyhrazený nástroj nebo operaci proveď ručně v POHODĚ." ;;
  *pohoda*print)
    if printf '%s' "$vstup" | grep -Eq '"pdfPath"[[:space:]]*:[[:space:]]*"(\\\\\\\\|//)'; then
      zamitnout "pohoda-cz: tisk do síťové cesty je zakázán. Použij místní složku z profilu (POHODA_PDF_DIR)."
    fi
    zeptat "pohoda-cz: tisk/uložení PDF z POHODY — potvrďte." ;;
  *pohoda*create_*)
    zeptat "pohoda-cz: zápis do účetnictví POHODA ($nastroj) — zkontrolujte náhled a potvrďte." ;;
esac
exit 0
