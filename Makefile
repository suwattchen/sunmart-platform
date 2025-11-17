.PHONY: init bootstrap build-core build-portal run stop logs logs-portal debug clean update

init:
	@echo "=== SunMart Platform Setup ==="
	@echo "1. สร้าง secrets: make bootstrap"
	@echo "2. Build images: make build-core build-portal"
	@echo "3. Run: make run"
	@echo "4. View logs: make logs"
	@echo "5. Debug: make debug HOST=customer-id"

bootstrap:
	@mkdir -p secrets
	@if [ ! -f secrets/postgres_pass ]; then openssl rand -base64 32 > secrets/postgres_pass; echo "✅ postgres_pass created"; fi
	@if [ ! -f secrets/portainer_admin ]; then echo "admin:$$(openssl rand -base64 12)" | htpasswd -niB admin > secrets/portainer_admin; echo "✅ portainer_admin created"; fi
	@if [ ! -f .env ]; then cp .env.example .env; echo "⚠️ Please edit .env file"; fi

build-core:
	cd apps/core-go && docker build -t sunmart/core-svc:latest .

build-portal:
	cd apps/frontend && docker build -f Dockerfile.distroless -t sunmart/portal:latest .

run:
	docker compose up -d --build

stop:
	docker compose down

logs:
	docker compose logs -f --tail=50

logs-portal:
	docker compose logs -f --tail=50 portal

debug:
	@./scripts/debug.sh $(HOST)

clean:
	docker compose down --volumes --remove-orphans
	docker image prune -af

update:
	docker compose pull
	docker compose up -d --no-deps --build core-svc portal
