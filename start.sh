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
    
    # Run FK constraint removal migration if needed
    if [ -f "/app/scripts/remove-fk-constraint.js" ]; then
        echo "🔧 Running FK constraint migration..."
        node /app/scripts/remove-fk-constraint.js || echo "⚠️  FK migration skipped (may already be applied)"
    fi
fi

echo "🎉 Starting application..."
exec node server.js
