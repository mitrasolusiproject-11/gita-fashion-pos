# 🚀 Panduan Deploy ke Coolify

## Persiapan

### 1. Push ke GitHub
```bash
git add .
git commit -m "Ready for Coolify deployment"
git push origin main
```

### 2. Generate Secret Key
Buat secret key yang aman (minimal 32 karakter):
```bash
openssl rand -base64 32
```

## Deploy di Coolify

### Step 1: Buat Project Baru
1. Login ke Coolify dashboard: `http://YOUR_VPS_IP:8000`
2. Klik **+ New** → **Project**
3. Beri nama: `Gita Fashion`

### Step 2: Tambahkan Application
1. Di project, klik **+ New Resource** → **Application**
2. Pilih **Public Repository**
3. Masukkan URL repo: `https://github.com/username/gita-fashion-pos`
4. Branch: `main`
5. Klik **Continue**

### Step 3: Konfigurasi Build
1. **Build Pack**: Pilih `Dockerfile`
2. **Port**: `3000`
3. **Health Check Path**: `/api/health` (opsional)

### Step 4: Environment Variables
Tambahkan environment variables berikut:

```env
DATABASE_URL=file:./data/sqlite.db
NEXTAUTH_SECRET=hasil-dari-openssl-rand-base64-32
NEXTAUTH_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=Gita Fashion
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=production
```

### Step 5: Persistent Storage
1. Klik tab **Storages**
2. Tambahkan volume:
   - **Name**: `database`
   - **Mount Path**: `/app/data`
   - **Host Path**: (biarkan auto)

### Step 6: Domain
1. Klik tab **Domains**
2. Tambahkan domain Anda: `gitafashion.yourdomain.com`
3. Coolify akan otomatis setup SSL dengan Let's Encrypt

### Step 7: Deploy!
1. Klik tombol **Deploy**
2. Tunggu proses build (5-10 menit pertama kali)
3. Monitor logs untuk memastikan tidak ada error

## Setelah Deploy

### Inisialisasi Database
Jika database belum ter-seed otomatis:

1. Buka **Terminal** di Coolify
2. Jalankan:
```bash
npm run db:migrate
npm run db:seed
```

### Login Credentials
- **Admin**: `admin@gitafashion.com` / `admin123`
- **Kasir**: `kasir@gitafashion.com` / `kasir123`

## Update Aplikasi

Setiap kali push ke GitHub:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

Coolify akan otomatis detect dan deploy ulang (jika auto-deploy diaktifkan).

Atau manual deploy dari Coolify dashboard: klik **Redeploy**

## Troubleshooting

### Database tidak ter-create
```bash
# Di Coolify terminal
npm run db:migrate
npm run db:seed
```

### Port sudah digunakan
Pastikan port 3000 tidak digunakan aplikasi lain di VPS.

### SSL Error
Pastikan domain sudah pointing ke IP VPS Anda (A record).

### Build Failed
Check logs di Coolify, biasanya karena:
- Environment variables belum diset
- Node version tidak compatible
- Dependencies error

## Backup Database

### Manual Backup
```bash
# Di Coolify terminal
cp /app/data/sqlite.db /app/data/backup-$(date +%Y%m%d).db
```

### Download Backup
1. Buka **File Manager** di Coolify
2. Navigate ke `/app/data`
3. Download file `sqlite.db`

## Monitoring

- **Logs**: Tab Logs di Coolify
- **Resources**: Monitor CPU/RAM usage
- **Health**: Check status aplikasi

---

**🎉 Selamat! Aplikasi Anda sudah live di production!**
