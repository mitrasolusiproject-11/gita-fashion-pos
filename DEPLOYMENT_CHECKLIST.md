# ✅ Checklist Deployment ke Coolify

## Sebelum Deploy

- [ ] Push semua perubahan ke GitHub
- [ ] Generate NEXTAUTH_SECRET dengan `openssl rand -base64 32`
- [ ] Siapkan domain dan pointing ke IP VPS
- [ ] Pastikan Coolify sudah terinstall di VPS

## Di Coolify Dashboard

### 1. Setup Project & Application
- [ ] Buat project baru
- [ ] Tambahkan application dari GitHub repository
- [ ] Pilih branch `main`
- [ ] Set Build Pack ke `Dockerfile`
- [ ] Set Port ke `3000`

### 2. Environment Variables
Tambahkan di Coolify:
```
DATABASE_URL=file:./data/sqlite.db
NEXTAUTH_SECRET=[hasil dari openssl rand -base64 32]
NEXTAUTH_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=Gita Fashion
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=production
```

### 3. Persistent Storage
- [ ] Tambahkan volume untuk database
  - Name: `database`
  - Mount Path: `/app/data`

### 4. Domain & SSL
- [ ] Tambahkan domain Anda
- [ ] Coolify akan auto-setup SSL (Let's Encrypt)
- [ ] Pastikan domain sudah pointing ke IP VPS (A record)

### 5. Deploy
- [ ] Klik tombol **Deploy**
- [ ] Monitor logs untuk error
- [ ] Tunggu hingga status **Running**

## Setelah Deploy

### Verifikasi
- [ ] Buka https://yourdomain.com
- [ ] Test health check: https://yourdomain.com/api/health
- [ ] Login dengan credentials default
- [ ] Test fitur POS
- [ ] Test tambah produk
- [ ] Test transaksi

### Inisialisasi Database (jika perlu)
Jika database belum ter-seed:
```bash
npm run db:migrate
npm run db:seed
```

### Ganti Password Default
- [ ] Login sebagai admin
- [ ] Ganti password admin
- [ ] Ganti password kasir

## Maintenance

### Update Aplikasi
```bash
git add .
git commit -m "Update"
git push origin main
```
Coolify akan auto-deploy (jika diaktifkan) atau klik **Redeploy**

### Backup Database
```bash
# Di Coolify terminal
cp /app/data/sqlite.db /app/data/backup-$(date +%Y%m%d).db
```

### Monitor
- [ ] Check logs secara berkala
- [ ] Monitor resource usage (CPU/RAM)
- [ ] Setup backup otomatis

## Troubleshooting

### Build Failed
- Check logs di Coolify
- Pastikan semua environment variables sudah diset
- Pastikan Dockerfile tidak ada error

### Database Error
- Pastikan persistent storage sudah di-mount
- Run migrations: `npm run db:migrate`
- Seed database: `npm run db:seed`

### SSL Error
- Pastikan domain sudah pointing ke IP VPS
- Tunggu propagasi DNS (bisa 5-30 menit)
- Check di Coolify logs untuk error SSL

### Application Not Starting
- Check port 3000 tidak digunakan aplikasi lain
- Check environment variables
- Check logs untuk error detail

---

**📞 Butuh bantuan?** Check [COOLIFY_SETUP.md](COOLIFY_SETUP.md) untuk panduan detail.
