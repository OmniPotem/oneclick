.PHONY: start-backend start-frontend launch-devops-server stop-devops-server \
        start-elastiquiz start-backend-server start-prisma stop-ionic stop-prisma stop-backend-server

# ----------------------------------------------
# 🧠 Dev Dashboard
# ----------------------------------------------

launch-devops-server:
	@mkdir -p logs
	@echo "🚀 Lancement du dashboard dev..."
	cd backend && nohup node index.js > ../logs/backend.log 2>&1 &
	cd frontend && nohup npm start > ../logs/frontend.log 2>&1 &
	sleep 2 && $(BROWSER_OPEN) http://localhost:4200

stop-devops-server:
	@echo "🛑 Arrêt du dashboard dev..."
	pkill -f "node index.js" || true
	pkill -f "ng serve" || true
	pkill -f "npm start" || true

# ----------------------------------------------
# 🔧 Projets OmniPotem
# ----------------------------------------------

start-backend-server:
	cd ../server && source .env.sh && export DEFAULT=elastiquiz && docker-compose up -d && npx nodemon

stop-backend-server:
	pkill -f "nodemon" || true
	docker-compose -f ../server/docker-compose.yml down

start-elastiquiz:
	cd ../elastiquiz-ionic && ionic serve

stop-ionic:
	pkill -f "ionic" || true

start-prisma:
	cd ../server && source .env.sh && npx prisma studio

stop-prisma:
	pkill -f "prisma" || true

# ----------------------------------------------
# 🔄 Default
# ----------------------------------------------

.DEFAULT_GOAL := launch-devops-server

# ----------------------------------------------
# 🔁 Browser launcher (OS-aware)
# ----------------------------------------------

# macOS : open / Linux : xdg-open / Windows Git Bash : start
UNAME := $(shell uname)
ifeq ($(UNAME), Darwin)
  BROWSER_OPEN := open
else
  BROWSER_OPEN := xdg-open
endif
