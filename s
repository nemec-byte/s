#!/bin/sh
mkdir -p /root/.ssh
chmod 700 /root/.ssh
grep -q claude-coolify-deploy /root/.ssh/authorized_keys 2>/dev/null || echo 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIRcPagaWroFO0bCXQx+TnmKm8iip3dbLRFVEcutmk5G claude-coolify-deploy' >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
echo KEY_INSTALLED_OK
