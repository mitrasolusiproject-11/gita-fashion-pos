# 🛍️ Gita Fashion - Modern POS & Inventory Management PWA

Sistem kasir modern dan manajemen inventory untuk Gita Fashion dengan fitur PWA (Progressive Web App) yang dapat diinstall dan bekerja offline.

## ✨ Fitur Utama

### 📱 Progressive Web App (PWA)
- **Installable**: Bisa diinstall seperti aplikasi native
- **Offline Support**: Tetap bisa digunakan tanpa internet
- **Fast Loading**: Caching optimal untuk performa terbaik
- **Push Notifications**: Notifikasi real-time
- **App Shortcuts**: Akses cepat ke POS, Products, Transactions

### 🏪 Point of Sale (POS)
- Interface kasir yang intuitif dan cepat
- Scan barcode untuk input produk
- Multiple payment methods (Cash, Transfer)
- Print receipt otomatis
- Real-time stock update

### 📦 Inventory Management
- Manajemen produk dan kategori
- Tracking stok real-time
- Generate dan print barcode
- Import/export data produk
- Low stock alerts

### 📊 Reporting & Analytics
- Laporan penjualan harian/bulanan
- Analisis produk terlaris
- Tracking profit dan revenue
- Export laporan ke Excel/PDF

### 🔐 User Management
- Multi-user dengan role-based access
- Admin, Manager, dan Cashier roles
- Secure authentication dengan JWT
- Change password functionality

## 🚀 Quick Start

### Development Lokal
```bash
# Install dependencies
npm install

# Setup database
npm run db:generate
npm run db:migrate
npm run db:seed

# Start development server
npm run dev

# Open http://localhost:3000
```

### Deploy ke Coolify
- 📖 [Panduan Lengkap](COOLIFY_SETUP.md)
- ⚡ [Quick Deploy](QUICK_DEPLOY.md)
- ✅ [Deployment Checklist](DEPLOYMENT_CHECKLIST.md)

**Default Login:**
- Admin: `admin@gitafashion.com` / `admin123`
- Kasir: `kasir@gitafashion.com` / `kasir123`

## 🏗️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Database**: SQLite dengan Drizzle ORM
- **Authentication**: JWT
- **PWA**: Service Worker, Web App Manifest

## 📋 System Requirements

- **Node.js**: 18.x atau lebih baru
- **npm**: 9.x atau lebih baru

## 🔧 Environment Variables

File `.env` sudah dikonfigurasi untuk development lokal:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="gita-fashion-secret-key-2024"
NEXTAUTH_URL="http://localhost:3000"
```

## 📱 PWA Features

- **Installable**: Bisa diinstall seperti aplikasi native
- **Offline Support**: Tetap bisa digunakan tanpa internet
- **App Shortcuts**: Akses cepat ke POS, Products, Transactions