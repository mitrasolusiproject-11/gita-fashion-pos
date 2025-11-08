# 🚀 Deploy ke Hostinger VPS dengan Coolify

## Prerequisites

✅ VPS Hostinger dengan Ubuntu 24
✅ Coolify sudah terinstall
✅ Domain sudah pointing ke IP VPS

## Step-by-Step Deployment

### 1. Generate Secret Key

Di terminal lokal:
```bash
openssl rand -base64 32
```
**Simpan hasilnya!** Ini akan digunakan untuk `NEXTAUTH_SECRET`

### 2. Push ke GitHub

```bash
git add .
git commit -m "Ready for production"
git push origin main
```

### 3. Login ke Coolify

Buka browser: `http://IP_VPS_ANDA:8000`

### 4. Buat Project Baru

1. Klik **+ New**
2. Pilih **Project**
3. Nama: `Gita Fashion`
4. Klik **Create**

### 5. Tambahkan Application

1. Di project, klik **+ New Resource**
2. Pilih **Application**
3. Pilih **Public Repository**
4. Paste URL GitHub repo Anda
5. Branch: `main`
6. Klik **Continue**

### 6. Konfigurasi Build

**General Settings:**
- Build Pack: `Dockerfile`
- Port: `3000`
- Health Check Path: `/api/health` (opsional)

### 7. Environment Variables

Klik tab **Environment Variables**, tambahkan:

```env
DATABASE_URL=file:./data/sqlite.db
NEXTAUTH_SECRET=hasil-dari-step-1-openssl
NEXTAUTH_URL=https://gitafashion.yourdomain.com
NEXT_PUBLIC_APP_NAME=Gita Fashion
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=production
```

**Penting:** Ganti `NEXTAUTH_SECRET` dengan hasil dari step 1!

### 8. Persistent Storage

1. Klik tab **Storages**
2. Klik **+ Add**
3. Konfigurasi:
   - **Name**: `database`
   - **Mount Path**: `/app/data`
   - **Host Path**: (biarkan kosong, auto-generated)
4. Klik **Save**

### 9. Setup Domain

1. Klik tab **Domains**
2. Klik **+ Add**
3. Masukkan domain: `gitafashion.yourdomain.com`
4. Coolify akan otomatis setup SSL (Let's Encrypt)

**Pastikan domain sudah pointing ke IP VPS:**
```
Type: A
Name: gitafashion (atau subdomain lain)
Value: IP_VPS_ANDA
TTL: 3600
```

### 10. Deploy!

1. Klik tombol **Deploy** (biru, di kanan atas)
2. Monitor logs di tab **Logs**
3. Tunggu 5-10 menit untuk build pertama kali

### 11. Verifikasi

Setelah status **Running**:

```bash
# Test health check
curl https://gitafashion.yourdomain.com/api/health

# Response:
# {"status":"ok","timestamp":"...","service":"Gita Fashion POS"}
```

Buka browser: `https://gitafashion.yourdomain.com`

### 12. Login

**Default Credentials:**
- Admin: `admin@gitafashion.com` / `admin123`
- Kasir: `kasir@gitafashion.com` / `kasir123`

**⚠️ PENTING:** Segera ganti password setelah login pertama!

## Update Aplikasi

Setiap kali ada perubahan:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

**Auto-deploy:**
- Jika diaktifkan, Coolify akan otomatis deploy
- Jika tidak, klik **Redeploy** di Coolify dashboard

## Troubleshooting

### Build Failed

**Check:**
1. Logs di Coolify (tab Logs)
2. Environment variables sudah lengkap?
3. Dockerfile tidak ada error?

**Fix:**
- Pastikan semua env vars sudah diset
- Check syntax di Dockerfile
- Klik **Redeploy**

### Database Error

**Symptoms:** Error saat login atau akses data

**Fix:**
```bash
# Di Coolify terminal
npm run db:migrate
npm run db:seed
```

### SSL Error

**Symptoms:** "Your connection is not private"

**Check:**
1. Domain sudah pointing ke IP VPS? (cek di DNS provider)
2. Tunggu propagasi DNS (5-30 menit)
3. Check logs Coolify untuk error SSL

**Fix:**
```bash
# Check DNS
nslookup gitafashion.yourdomain.com

# Harus return IP VPS Anda
```

### Application Not Starting

**Check:**
1. Port 3000 tidak digunakan aplikasi lain
2. Environment variables benar
3. Persistent storage sudah di-mount

**Fix:**
- Stop aplikasi lain yang pakai port 3000
- Verify env vars
- Re-create storage volume

## Backup Database

### Manual Backup

Di Coolify terminal:
```bash
cp /app/data/sqlite.db /app/data/backup-$(date +%Y%m%d-%H%M%S).db
```

### Download Backup

1. Buka **File Manager** di Coolify
2. Navigate ke `/app/data`
3. Download file `sqlite.db`

### Restore Backup

```bash
# Upload backup file ke /app/data/
# Rename ke sqlite.db
mv backup-20241108.db sqlite.db

# Restart application
```

## Monitoring

### Check Logs
- Tab **Logs** di Coolify
- Real-time logs

### Resource Usage
- Tab **Resources** di Coolify
- Monitor CPU, RAM, Disk

### Application Status
- Dashboard Coolify
- Status: Running / Stopped / Error

## Tips & Best Practices

1. **Backup Rutin**: Backup database setiap hari
2. **Monitor Logs**: Check logs secara berkala
3. **Update Regular**: Keep dependencies up-to-date
4. **Security**: Ganti password default segera
5. **SSL**: Pastikan SSL selalu aktif
6. **Domain**: Gunakan subdomain untuk production

## Kontak & Support

- **Dokumentasi Lengkap**: [COOLIFY_SETUP.md](COOLIFY_SETUP.md)
- **Quick Reference**: [QUICK_DEPLOY.md](QUICK_DEPLOY.md)
- **Checklist**: [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

---

**🎉 Selamat! Aplikasi Anda sudah live di production dengan Coolify!**

**URL Production:** https://gitafashion.yourdomain.com
