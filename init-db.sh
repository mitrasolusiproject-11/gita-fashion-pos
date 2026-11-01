#!/bin/sh
set -e

echo "🔍 Checking database..."
echo "📍 DATABASE_URL: $DATABASE_URL"

# Ensure data directory exists and is writable
echo "📁 Creating /app/data directory..."
mkdir -p /app/data
chmod 755 /app/data 2>/dev/null || true

# Test write permissions
echo "✍️  Testing write permissions..."
touch /app/data/test.txt && rm /app/data/test.txt && echo "✅ Directory is writable" || echo "❌ Directory is NOT writable"

# List directory permissions
ls -la /app/data

# Check if database exists
if [ ! -f "/app/data/sqlite.db" ]; then
    echo "📦 Database not found, running migrations..."
    cd /app && node_modules/.bin/drizzle-kit migrate
    echo "✅ Database initialized!"
    
    echo "🌱 Seeding database with default data..."
    cd /app && node scripts/seed-production.js
    echo "✅ Database seeded!"
else
    echo "✅ Database exists"
fi

echo "🎉 Database ready!"
