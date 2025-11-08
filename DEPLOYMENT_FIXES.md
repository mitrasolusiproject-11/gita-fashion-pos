# 🔧 Deployment Fixes - Gita Fashion PWA

## ✅ Perbaikan yang Sudah Dilakukan

### 1. **Dockerfile.coolify - Dependencies**
- ✅ Menambahkan `python3 make g++` untuk build better-sqlite3
- ✅ Install semua dependencies (bukan hanya production) di stage deps
- ✅ Install production dependencies di runner stage

### 2. **Dockerfile.coolify - Build Environment**
- ✅ Menambahkan `SKIP_ENV_VALIDATION=1` untuk bypass validasi env saat build
- ✅ Menambahkan dummy `NEXTAUTH_SECRET` dan `NEXTAUTH_URL` untuk build
- ✅ Set `DATABASE_URL=file:./data/sqlite.db`

### 3. **Dockerfile.coolify - File Copying**
- ✅ Menambahkan copy `scripts/` folder (untuk init-db.js)
- ✅ Menambahkan copy `src/lib/` folder (untuk database schema)
- ✅ Memastikan semua file yang dibutuhkan tersedia di runtime

### 4. **Configuration**
- ✅ Update `.coolify` untuk menggunakan `Dockerfile.coolify`

---

## 🚀 Langkah Deploy Ulang

### **1. Commit & Push Perubahan**

```bash
cd gita-fashion

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "fix: Update Dockerfile.coolify for successful deployment

- Add build dependencies (python3, make, g++)
- Add runtime dependencies for better-sqlite3
- Copy scripts and src/lib folders
- Add build environment variables
- Install production dependencies properly"

# Push to GitHub
git push origin main
```

### **2. Deploy di Coolify**

#### **Option A: Auto-Deploy (Jika sudah diaktifkan)**
- Push ke GitHub akan otomatis trigger deployment
- Monitor logs di Coolify dashboard

#### **Option B: Manual Deploy**
1. Buka Coolify Dashboard
2. Pilih aplikasi **gita-fashion**
3. Klik tombol **Deploy** atau **Redeploy**
4. Monitor deployment logs

### **3. Verifikasi Environment Variables di Coolify**

Pastikan environment variables ini sudah diset di Coolify:

```env
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=<generate-dengan-openssl-rand-base64-32>
DATABASE_URL=file:./data/sqlite.db
NEXT_PUBLIC_APP_NAME=Gita Fashion
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=production
SECURE_COOKIES=true
TRUST_PROXY=true
NEXT_TELEMETRY_DISABLED=1
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### **4. Verifikasi Persistent Storage**

Pastikan storage sudah di-mount di Coolify:

1. **Database Storage:**
   - Source: `/data`
   - Destination: `/app/data`

2. **Logs Storage (Optional):**
   - Source: `/logs`
   - Destination: `/app/logs`

---

## 🔍 Monitoring Deployment

### **Cek Build Logs:**
```
Coolify Dashboard → Your App → Logs → Build Logs
```

**Yang harus dicari:**
- ✅ `npm ci` berhasil
- ✅ `npm run build` berhasil
- ✅ `.next/standalone` folder terbuat
- ✅ No error messages

### **Cek Runtime Logs:**
```
Coolify Dashboard → Your App → Logs → Application Logs
```

**Yang harus dicari:**
- ✅ `Starting Next.js server on port 3000`
- ✅ `Server listening on 0.0.0.0:3000`
- ✅ No database errors
- ✅ Health check passing

---

## 🆘 Troubleshooting

### **Error: "Cannot find module 'better-sqlite3'"**
**Solusi:** Sudah diperbaiki dengan menambahkan build dependencies

### **Error: "NEXTAUTH_SECRET is not defined"**
**Solusi:** 
1. Set di Coolify environment variables
2. Generate dengan: `openssl rand -base64 32`

### **Error: "Database file not found"**
**Solusi:**
1. Pastikan persistent storage mounted ke `/app/data`
2. Restart aplikasi setelah mount storage

### **Error: "Build failed - Cannot read properties"**
**Solusi:** Sudah diperbaiki dengan `SKIP_ENV_VALIDATION=1`

### **Error: "Health check failed"**
**Solusi:**
1. Cek apakah aplikasi sudah running: `curl http://localhost:3000/api/health`
2. Cek logs untuk error messages
3. Pastikan port 3000 exposed

---

## ✅ Checklist Setelah Deploy

- [ ] Build berhasil tanpa error
- [ ] Container running
- [ ] Health check passing (hijau di Coolify)
- [ ] Aplikasi accessible via domain
- [ ] SSL certificate active (HTTPS)
- [ ] Login page muncul
- [ ] Database initialized (atau bisa init manual)

---

## 📞 Jika Masih Gagal

Jika deployment masih gagal setelah perbaikan ini:

1. **Screenshot error logs** dari Coolify
2. **Copy paste error message** lengkap
3. **Cek tahap mana yang gagal:**
   - Build stage?
   - Runtime stage?
   - Health check?

Dengan informasi tersebut, kita bisa troubleshoot lebih lanjut.

---

**Last Updated:** 2024-11-08
**Status:** Ready for deployment ✅
