#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="${ROOT_DIR}/dist"
ZIP_NAME="auth-callback-autoclose-extension.zip"

rm -rf "${OUT_DIR}"
mkdir -p "${OUT_DIR}"

(
  cd "${ROOT_DIR}"
  zip -r "${OUT_DIR}/${ZIP_NAME}" manifest.json background.js README.md > /dev/null
)

echo "Built ${OUT_DIR}/${ZIP_NAME}"
