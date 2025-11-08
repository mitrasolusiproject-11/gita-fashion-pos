#!/usr/bin/env node

/**
 * Quick script to create admin user
 * Usage: node scripts/seed-admin.js
 */

const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const { eq } = require('drizzle-orm');

// Try to load schema from different possible locations
let users;
try {
  const schema = require('../src/lib/schema');
  users = schema.users;
} catch (e) {
  // In production build, try from current directory
  const schema = require('./src/lib/schema');
  users = schema.users;
}

const DB_PATH = process.env.DATABASE_URL?.replace('file:', '') || './data/sqlite.db';

async function createAdmin() {
  console.log('👤 Creating admin user...');
  
  try {
    const sqlite = new Database(DB_PATH);
    const db = drizzle(sqlite);
    
    // Check if admin exists
    const existingAdmin = db.select()
      .from(users)
      .where(eq(users.email, 'admin@gitafashion.com'))
      .get();
    
    if (existingAdmin) {
      console.log('ℹ️  Admin user already exists');
      
      // Update password
      const hashedPassword = await bcrypt.hash('admin123', 10);
      db.update(users)
        .set({ 
          password: hashedPassword,
          updatedAt: new Date()
        })
        .where(eq(users.email, 'admin@gitafashion.com'))
        .run();
      
      console.log('✅ Admin password reset to: admin123');
    } else {
      // Create new admin
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      db.insert(users).values({
        id: 'admin-' + Date.now(),
        name: 'Administrator',
        email: 'admin@gitafashion.com',
        password: hashedPassword,
        role: 'ADMIN',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }).run();
      
      console.log('✅ Admin user created');
    }
    
    sqlite.close();
    
    console.log('');
    console.log('📝 Admin credentials:');
    console.log('   Email: admin@gitafashion.com');
    console.log('   Password: admin123');
    console.log('');
    
  } catch (error) {
    console.error('❌ Failed to create admin:', error);
    process.exit(1);
  }
}

createAdmin();
