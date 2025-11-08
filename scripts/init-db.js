#!/usr/bin/env node

/**
 * Database Initialization Script
 * Runs migrations and seeds initial data
 */

const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const { migrate } = require('drizzle-orm/better-sqlite3/migrator');
const bcrypt = require('bcryptjs');

// Try to load schema from different possible locations
let users, categories;
try {
  const schema = require('../src/lib/schema');
  users = schema.users;
  categories = schema.categories;
} catch (e) {
  // In production build, try from current directory
  const schema = require('./src/lib/schema');
  users = schema.users;
  categories = schema.categories;
}

const DB_PATH = process.env.DATABASE_URL?.replace('file:', '') || './data/sqlite.db';
const MIGRATIONS_PATH = './drizzle';

async function initDatabase() {
  console.log('🚀 Starting database initialization...');
  
  try {
    // Connect to database
    console.log(`📦 Connecting to database: ${DB_PATH}`);
    const sqlite = new Database(DB_PATH);
    const db = drizzle(sqlite);
    
    // Run migrations
    console.log('🔄 Running migrations...');
    migrate(db, { migrationsFolder: MIGRATIONS_PATH });
    console.log('✅ Migrations completed');
    
    // Check if data already exists
    const existingUsers = db.select().from(users).all();
    
    if (existingUsers.length > 0) {
      console.log('ℹ️  Database already has data, skipping seed');
      sqlite.close();
      return;
    }
    
    console.log('🌱 Seeding initial data...');
    
    // Seed default admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    db.insert(users).values({
      id: 'admin-001',
      name: 'Administrator',
      email: 'admin@gitafashion.com',
      password: hashedPassword,
      role: 'ADMIN',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }).run();
    
    console.log('✅ Created admin user: admin@gitafashion.com / admin123');
    
    // Seed default categories
    const defaultCategories = [
      { id: 'cat-001', name: 'Pakaian', description: 'Kategori pakaian' },
      { id: 'cat-002', name: 'Aksesoris', description: 'Kategori aksesoris' },
      { id: 'cat-003', name: 'Sepatu', description: 'Kategori sepatu' },
      { id: 'cat-004', name: 'Tas', description: 'Kategori tas' },
      { id: 'cat-005', name: 'Lainnya', description: 'Kategori lainnya' }
    ];
    
    for (const category of defaultCategories) {
      db.insert(categories).values({
        ...category,
        createdAt: new Date(),
        updatedAt: new Date()
      }).run();
    }
    
    console.log(`✅ Created ${defaultCategories.length} default categories`);
    
    // Close connection
    sqlite.close();
    
    console.log('🎉 Database initialization completed successfully!');
    console.log('');
    console.log('📝 Default credentials:');
    console.log('   Email: admin@gitafashion.com');
    console.log('   Password: admin123');
    console.log('');
    console.log('⚠️  Please change the admin password after first login!');
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
}

// Run initialization
initDatabase();
