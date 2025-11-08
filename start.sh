#!/bin/sh
set -e

echo "Starting Gita Fashion POS..."

# Create data directory if it doesn't exist
mkdir -p /app/data

# Try to run database migrations (non-blocking)
echo "Checking database migrations..."
if command -v node > /dev/null 2>&1; then
  node -e "
    try {
      const { drizzle } = require('drizzle-orm/better-sqlite3');
      const Database = require('better-sqlite3');
      const { migrate } = require('drizzle-orm/better-sqlite3/migrator');
      
      const sqlite = new Database('/app/data/sqlite.db');
      const db = drizzle(sqlite);
      
      migrate(db, { migrationsFolder: '/app/drizzle' });
      console.log('✓ Migrations completed successfully');
    } catch (error) {
      console.log('⚠ Migration skipped:', error.message);
      console.log('Database will be initialized on first request');
    }
  " || echo "⚠ Migration failed, continuing anyway..."
fi

# Start the application
echo "Starting Next.js server on port ${PORT:-3000}..."
exec node server.js
