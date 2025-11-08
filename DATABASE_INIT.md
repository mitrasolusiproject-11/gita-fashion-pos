# Database Initialization Guide

## Automatic Initialization (Recommended)

Database akan otomatis ter-initialize saat container pertama kali dijalankan dengan:
- ✅ Migrations
- ✅ Admin user default
- ✅ Kategori default

### Default Credentials
```
Email: admin@gitafashion.com
Password: admin123
```

⚠️ **PENTING**: Ganti password setelah login pertama kali!

---

## Manual Initialization

Jika auto-initialization gagal, Anda bisa run manual:

### Via Coolify Console/Terminal

1. Buka Coolify Dashboard
2. Pilih project → **Terminal** atau **Console**
3. Jalankan:

```bash
# Full initialization (migrations + seed)
node scripts/init-db.js

# Atau hanya create/reset admin user
node scripts/seed-admin.js
```

### Via NPM Scripts

```bash
# Initialize database
npm run db:init

# Create/reset admin user only
npm run db:seed-admin
```

---

## Troubleshooting

### Error: "Cannot find module"

Pastikan dependencies sudah terinstall:
```bash
npm install
```

### Error: "Database locked"

Stop aplikasi dulu, lalu run init script:
```bash
# Stop container
# Run init
node scripts/init-db.js
# Start container
```

### Reset Database

Jika perlu reset database dari awal:
```bash
# Hapus database file
rm -f data/sqlite.db

# Run init lagi
node scripts/init-db.js
```

---

## Environment Variables Required

Pastikan environment variables berikut sudah di-set di Coolify:

```env
DATABASE_URL=file:./data/sqlite.db
NEXTAUTH_SECRET=your-secret-min-32-chars
NEXTAUTH_URL=https://your-domain.com
NODE_ENV=production
```

---

## Verification

Setelah initialization, cek:

1. **Database file exists**:
   ```bash
   ls -lh data/sqlite.db
   ```

2. **Admin user exists**:
   ```bash
   sqlite3 data/sqlite.db "SELECT email, role FROM users WHERE role='ADMIN';"
   ```

3. **Categories exist**:
   ```bash
   sqlite3 data/sqlite.db "SELECT COUNT(*) FROM categories;"
   ```

4. **Login test**:
   - Buka aplikasi
   - Login dengan: `admin@gitafashion.com` / `admin123`
   - Ganti password di Settings

---

## Scripts Overview

| Script | Purpose |
|--------|---------|
| `scripts/init-db.js` | Full initialization (migrations + seed) |
| `scripts/seed-admin.js` | Create/reset admin user only |
| `start.sh` | Startup script (auto-runs init-db.js) |

---

## Support

Jika masih ada masalah:
1. Cek logs di Coolify
2. Pastikan environment variables sudah benar
3. Coba manual initialization via console
