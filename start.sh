#!/bin/sh
set -e

echo "Starting Gita Fashion POS..."

# Create data directory if it doesn't exist
mkdir -p /app/data

# Run database migrations
echo "Running database migrations..."
node -e "
const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const { migrate } = require('drizzle-orm/better-sqlite3/migrator');

const sqlite = new Database('/app/data/sqlite.db');
const db = drizzle(sqlite);

try {
  migrate(db, { migrationsFolder: '/app/drizzle' });
  console.log('Migrations completed successfully');
} catch (error) {
  console.error('Migration error:', error);
  process.exit(1);
}
"

# Start the application
echo "Starting Next.js server..."
exec node server.js
