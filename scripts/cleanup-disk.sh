#!/bin/bash

echo "🧹 Disk Cleanup Script for Coolify/Docker"
echo "=========================================="
echo ""

# Check current disk usage
echo "📊 Current Disk Usage:"
df -h / | tail -1
echo ""

# Show Docker disk usage
echo "🐳 Docker Disk Usage:"
docker system df
echo ""

# Cleanup options
echo "🗑️  Cleanup Options:"
echo ""

# 1. Remove unused Docker images
echo "1️⃣  Removing unused Docker images..."
docker image prune -af --filter "until=24h"
echo ""

# 2. Remove build cache
echo "2️⃣  Removing Docker build cache..."
docker builder prune -af --filter "until=24h"
echo ""

# 3. Remove stopped containers
echo "3️⃣  Removing stopped containers..."
docker container prune -f
echo ""

# 4. Remove unused volumes (be careful!)
echo "4️⃣  Removing unused volumes..."
docker volume prune -f
echo ""

# 5. Remove unused networks
echo "5️⃣  Removing unused networks..."
docker network prune -f
echo ""

# Show final disk usage
echo "✅ Cleanup Complete!"
echo ""
echo "📊 Final Disk Usage:"
df -h / | tail -1
echo ""

echo "🐳 Docker Disk Usage After Cleanup:"
docker system df
echo ""

echo "💡 Tips:"
echo "  - Run this script weekly to keep disk usage low"
echo "  - Database size: $(du -sh /app/data/sqlite.db 2>/dev/null || echo 'N/A')"
echo "  - Logs location: /var/log/"
