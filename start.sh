#!/bin/sh
set -e

echo "🚀 Starting Gita Fashion POS..."

# Create data directory if it doesn't exist
mkdir -p /app/data

# Initialize database with migrations and seed data
echo "📦 Initializing database..."
if [ -f "/app/scripts/init-db.js" ]; then
  node /app/scripts/init-db.js || {
    echo "⚠️  Database initialization failed, but continuing..."
    echo "Database will be initialized on first request"
  }
else
  echo "⚠️  Init script not found, skipping database initialization"
fi

# Start the application
echo "✨ Starting Next.js server on port ${PORT:-3000}..."
exec node server.js
