# 📦 File-file untuk Deployment Coolify

## ✅ File yang Sudah Disiapkan

### 1. Docker Configuration
- ✅ `Dockerfile` - Multi-stage build untuk production
- ✅ `.dockerignore` - Exclude file yang tidak perlu

### 2. Environment Configuration
- ✅ `.env.example` - Template environment variables
- ✅ `.env` - Development environment (jangan di-commit)

### 3. Documentation
- ✅ `COOLIFY_SETUP.md` - Panduan lengkap deployment
- ✅ `QUICK_DEPLOY.md` - Quick reference untuk deploy
- ✅ `DEPLOYMENT_CHECKLIST.md` - Checklist step-by-step
- ✅ `README.md` - Updated dengan link deployment

### 4. Application Files
- ✅ `src/app/api/health/route.ts` - Health check endpoint
- ✅ `start.sh` - Startup script (auto-migrate & seed)
- ✅ `next.config.ts` - Sudah dikonfigurasi untuk standalone output

## 🚀 Langkah Deployment

### Persiapan
```bash
# 1. Generate secret key
openssl rand -base64 32

# 2. Push ke GitHub
git add .
git commit -m "Ready for Coolify deployment"
git push origin main
```

### Di Coolify Dashboard

1. **Buat Application**
   - Public Repository
   - Branch: `main`
   - Build Pack: `Dockerfile`
   - Port: `3000`

2. **Environment Variables**
   ```env
   DATABASE_URL=file:./data/sqlite.db
   NEXTAUTH_SECRET=[hasil dari openssl rand]
   NEXTAUTH_URL=https://yourdomain.com
   NEXT_PUBLIC_APP_NAME=Gita Fashion
   NODE_ENV=production
   ```

3. **Persistent Storage**
   - Mount Path: `/app/data`

4. **Domain**
   - Add domain Anda
   - SSL auto (Let's Encrypt)

5. **Deploy**
   - Klik Deploy
   - Tunggu 5-10 menit

## 🔍 Verifikasi

```bash
# Health check
curl https://yourdomain.com/api/health

# Response:
# {"status":"ok","timestamp":"...","service":"Gita Fashion POS"}
```

## 🔑 Default Login

- **Admin**: `admin@gitafashion.com` / `admin123`
- **Kasir**: `kasir@gitafashion.com` / `kasir123`

## 📝 Catatan Penting

1. **Database**: SQLite dengan persistent storage di `/app/data`
2. **Auto-migrate**: Dockerfile akan otomatis run migrations
3. **Auto-seed**: Jika database kosong, akan otomatis seed data
4. **SSL**: Coolify handle SSL otomatis dengan Let's Encrypt
5. **Updates**: Push ke GitHub → Coolify auto-deploy (jika diaktifkan)

## 🛠️ Troubleshooting

### Build Failed
- Check logs di Coolify
- Pastikan environment variables sudah diset
- Pastikan domain sudah pointing ke VPS

### Database Error
- Pastikan persistent storage sudah di-mount ke `/app/data`
- Check logs untuk error detail

### SSL Error
- Pastikan domain sudah pointing ke IP VPS (A record)
- Tunggu propagasi DNS (5-30 menit)

## 📚 Dokumentasi Lengkap

- [COOLIFY_SETUP.md](COOLIFY_SETUP.md) - Panduan detail
- [QUICK_DEPLOY.md](QUICK_DEPLOY.md) - Quick reference
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Checklist

---

**🎉 Siap untuk production deployment!**
