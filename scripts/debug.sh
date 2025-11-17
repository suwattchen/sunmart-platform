#!/bin/bash
CLIENT_ID=${1:?"ใช้: ./debug.sh <client-id>"}
echo "🔍 กำลังดึง log สำหรับลูกค้า: $CLIENT_ID"

LOG_DIR="/tmp/sunmart-debug-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$LOG_DIR"

# ดึง log จาก Compose services
docker-compose logs core-svc 2>&1 | grep "$CLIENT_ID" > "$LOG_DIR/core.log" || true
docker-compose logs portal 2>&1 | grep "$CLIENT_ID" > "$LOG_DIR/portal.log" || true

# ดึงสถานะ DB
docker-compose exec -T postgres psql -U sunmart -d sunmart \
  -c "SELECT id, status, created_at FROM hosts WHERE id LIKE '%${CLIENT_ID}%' LIMIT 10" > "$LOG_DIR/db-status.txt" 2>&1 || true

# แพ็ก zip
cd /tmp && zip -r "debug-${CLIENT_ID}.zip" "sunmart-debug-$(date +%Y%m%d-%H%M%S)" > /dev/null
echo "✅ เสร็จ: /tmp/debug-${CLIENT_ID}.zip"
