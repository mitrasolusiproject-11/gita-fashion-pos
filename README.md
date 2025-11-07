# 🛍️ Gita Fashion - Modern POS & Inventory Management PWA

[![Deploy Status](https://img.shields.io/badge/deploy-ready-brightgreen)](https://github.com/your-username/gita-fashion)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-ready-blue)](https://docker.com/)
[![PWA](https://img.shields.io/badge/PWA-enabled-purple)](https://web.dev/progressive-web-apps/)

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

### Deployment dengan Coolify (15 menit) - RECOMMENDED

```bash
# 1. Install Coolify di VPS
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# 2. Access Coolify Dashboard
# http://YOUR_VPS_IP:8000

# 3. Connect GitHub & Deploy
# - Add GitHub source
# - Create application from gita-fashion repo
# - Configure environment variables
# - Click Deploy

# 4. Initialize Database
# Terminal in Coolify:
npm run db:migrate && npm run db:seed

# Done! Access: https://your-domain.com
```

**📖 Detailed Guide**: [COOLIFY_DEPLOYMENT.md](COOLIFY_DEPLOYMENT.md)

### Local Development

```bash
# Clone repository
git clone https://github.com/your-username/gita-fashion.git
cd gita-fashion

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

## 🏗️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Database**: SQLite dengan Drizzle ORM
- **Authentication**: NextAuth.js dengan JWT
- **PWA**: Service Worker, Web App Manifest
- **Deployment**: Docker, Docker Compose
- **Reverse Proxy**: Traefik (auto SSL) atau Nginx

## 📋 System Requirements

### Production (VPS)
- **OS**: Ubuntu 20.04/22.04/24.04 LTS
- **RAM**: 2GB minimum (4GB recommended)
- **Storage**: 20GB SSD minimum
- **CPU**: 1 vCore minimum
- **Network**: Stable internet connection

### Development
- **Node.js**: 18.x atau lebih baru
- **npm**: 9.x atau lebih baru
- **Git**: Latest version

## 🐳 Docker Deployment

### Quick Deploy dengan Docker
```bash
# Clone repository
git clone https://github.com/your-username/gita-fashion.git
cd gita-fashion

# Configure environment
cp .env.docker .env
nano .env  # Edit DOMAIN, NEXTAUTH_SECRET, ACME_EMAIL

# Deploy dengan Traefik (auto SSL)
docker-compose --profile traefik up -d

# Atau deploy dengan Nginx
docker-compose --profile nginx up -d
```

### Docker Services
- **gita-fashion**: Main application
- **traefik**: Reverse proxy + auto SSL
- **nginx**: Alternative reverse proxy
- **backup**: Automated database backup
- **watchtower**: Auto-updates containers

## 📚 Documentation

### Deployment Guides
- [📖 Hostinger VPS Production Guide](HOSTINGER_VPS_PRODUCTION_GUIDE.md) - Complete step-by-step guide
- [✅ Deployment Checklist](HOSTINGER_CHECKLIST.md) - Detailed checklist
- [⚡ Quick Reference](HOSTINGER_QUICK_REFERENCE.md) - Quick commands and tips
- [🐳 Docker Deployment](DOCKER_DEPLOYMENT_GUIDE.md) - Docker-specific guide
- [🐙 GitHub Integration](GITHUB_DEPLOYMENT_GUIDE.md) - GitHub deployment guide

### Development
- [🔧 API Documentation](docs/API.md) - API endpoints and usage
- [🎨 UI Components](docs/COMPONENTS.md) - Reusable components
- [🗄️ Database Schema](docs/DATABASE.md) - Database structure

## 🔧 Configuration

### Environment Variables
```env
# Domain Configuration
DOMAIN=yourdomain.com
NEXTAUTH_URL=https://yourdomain.com

# Security
NEXTAUTH_SECRET=your-super-secret-key-min-32-chars

# Database
DATABASE_URL=file:./data/sqlite.db

# SSL (for Traefik)
ACME_EMAIL=your-email@example.com
```

### Default Users
After seeding database:
- **Admin**: admin@gitafashion.com / admin123
- **Manager**: manager@gitafashion.com / manager123
- **Cashier**: cashier@gitafashion.com / cashier123

## 🔄 Updates & Maintenance

### Update dari GitHub
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose build --no-cache
docker-compose up -d
```

### Backup Database
```bash
# Manual backup
docker-compose --profile backup run backup

# Automated backup (cron job)
0 2 * * * cd /opt/gita-fashion && docker-compose --profile backup run backup
```

### Monitoring
```bash
# Check application status
docker-compose ps

# View logs
docker-compose logs -f gita-fashion

# Check resource usage
docker stats
```

## 🛡️ Security Features

- **HTTPS Enforced**: SSL/TLS encryption
- **JWT Authentication**: Secure token-based auth
- **Role-based Access**: Admin, Manager, Cashier roles
- **Input Validation**: Zod schema validation
- **SQL Injection Protection**: Drizzle ORM
- **XSS Protection**: Content Security Policy
- **Rate Limiting**: API rate limiting

## 📱 PWA Features

### Installation
- **Desktop**: Install button in browser address bar
- **Mobile**: "Add to Home Screen" option
- **Offline**: Works without internet connection

### App Shortcuts
- **POS**: Quick access to point of sale
- **Products**: Manage inventory
- **Transactions**: View sales history

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Complete Deployment Guide](HOSTINGER_VPS_PRODUCTION_GUIDE.md)
- [Troubleshooting Guide](docs/TROUBLESHOOTING.md)
- [FAQ](docs/FAQ.md)

### Community
- [GitHub Issues](https://github.com/your-username/gita-fashion/issues)
- [Discussions](https://github.com/your-username/gita-fashion/discussions)

## 🎯 Roadmap

- [ ] Multi-store support
- [ ] Advanced reporting dashboard
- [ ] Mobile app (React Native)
- [ ] Integration dengan payment gateway
- [ ] Inventory forecasting
- [ ] Customer loyalty program

---

**🛍️ Gita Fashion - Modern POS Solution for Modern Business**

Made with ❤️ for small and medium businesses