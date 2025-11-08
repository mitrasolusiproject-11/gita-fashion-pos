#!/bin/sh
set -e

echo "🔍 Checking database..."

# Ensure data directory exists and is writable
mkdir -p /app/data
chmod 755 /app/data

# Check if database exists
if [ ! -f "/app/data/sqlite.db" ]; then
    echo "📦 Database not found, running migrations..."
    cd /app && node_modules/.bin/drizzle-kit migrate
    echo "✅ Database initialized!"
else
    echo "✅ Database exists"
fi

echo "🎉 Database ready!"
