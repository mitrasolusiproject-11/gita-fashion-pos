#!/bin/bash

# Cleanup Script - Remove unnecessary files for Coolify deployment

echo "🧹 Cleaning up unnecessary files for Coolify deployment..."

# Remove old deployment documentation (keep only Coolify guide)
rm -f HOSTINGER_VPS_PRODUCTION_GUIDE.md
rm -f HOSTINGER_CHECKLIST.md
rm -f HOSTINGER_QUICK_REFERENCE.md
rm -f GITHUB_DEPLOYMENT_GUIDE.md
rm -f DEPLOYMENT_GUIDE.md
rm -f DEPLOYMENT_CHECKLIST.md
rm -f DOCKER_QUICK_START.md
rm -f DOCKER_DEPLOYMENT_GUIDE.md
rm -f SIMPLE_DEPLOYMENT.md

# Remove old deployment scripts
rm -f hostinger-setup.sh
rm -f setup-ubuntu-pwa.sh
rm -f setup-docker-ubuntu.sh
rm -f deploy-from-github.sh
rm -f docker-deploy.sh
rm -f prepare-deploy.sh
rm -f simple-deploy.sh

# Remove old backup scripts (Coolify has built-in backup)
rm -f backup.sh
rm -f scripts/backup.sh

# Remove old nginx configs (Coolify handles reverse proxy)
rm -f nginx.conf
rm -rf nginx/

# Remove old deploy script
rm -f deploy.sh

# Remove printer documentation (development docs)
rm -f PRINTER_*.md
rm -f BARCODE_*.md

# Remove old Dockerfile (use Dockerfile.coolify)
# Keep original Dockerfile as fallback
# rm -f Dockerfile

# Remove simple Dockerfile
rm -f Dockerfile.simple

# Remove docker-compose.simple.yml
rm -f docker-compose.simple.yml

# Remove ecosystem config (not needed for Coolify)
rm -f ecosystem.config.js

echo "✅ Cleanup completed!"
echo ""
echo "📁 Remaining important files:"
echo "  - Dockerfile (main)"
echo "  - Dockerfile.coolify (optimized for Coolify)"
echo "  - docker-compose.yml (for local dev)"
echo "  - .coolify (Coolify config)"
echo "  - COOLIFY_DEPLOYMENT.md (deployment guide)"
echo "  - README.md (project documentation)"
echo ""
