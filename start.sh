#!/bin/sh
set -e

echo "🚀 Starting Gita Fashion..."

# Check if database exists
if [ ! -f "/app/data/sqlite.db" ]; then
    echo "📦 Database not found, initializing..."
    
    # Run migrations
    echo "🔄 Running migrations..."
    npm run db:migrate
    
    # Seed database
    echo "🌱 Seeding database..."
    npm run db:seed
    
    echo "✅ Database initialized successfully!"
else
    echo "✅ Database found, running migrations..."
    npm run db:migrate
fi

echo "🎉 Starting application..."
exec node server.js
