#!/usr/bin/env bash
set -euo pipefail

cd /opt/apps/envra.lengziyu.cn
git pull
npm ci
npm run build
sudo nginx -t && sudo systemctl reload nginx

echo "[ok] envra.lengziyu.cn updated"
