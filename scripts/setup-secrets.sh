#!/bin/bash
set -e

SECRETS_DIR="./secrets"
mkdir -p "$SECRETS_DIR"

# Postgres pass
if [ ! -f "$SECRETS_DIR/postgres_pass" ]; then
  openssl rand -base64 32 > "$SECRETS_DIR/postgres_pass"
  chmod 600 "$SECRETS_DIR/postgres_pass"
  echo "✅ postgres_pass created"
fi

# Portainer admin
if [ ! -f "$SECRETS_DIR/portainer_admin" ]; then
  echo "admin:$(openssl rand -base64 12)" | htpasswd -niB admin > "$SECRETS_DIR/portainer_admin"
  chmod 600 "$SECRETS_DIR/portainer_admin"
  echo "✅ portainer_admin created"
fi

# Telegram config (ถ้ายังไม่มี ให้สร้าง template)
if [ ! -f "$SECRETS_DIR/telegram_config" ]; then
  cat > "$SECRETS_DIR/telegram_config" <<'TELE'
TELEGRAM_TOKEN=your_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
TELEGRAM_TELEGRAM
fi

# .env
if [ ! -f .env ]; then
  cp .env.example .env
  echo "⚠️  Please edit .env file with real values"
fi

echo "🎉 All secrets created in $SECRETS_DIR"
