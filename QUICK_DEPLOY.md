# ⚡ Quick Deploy Guide

## 1️⃣ Generate Secret (di terminal lokal)
```bash
openssl rand -base64 32
```
Copy hasilnya untuk NEXTAUTH_SECRET

## 2️⃣ Push ke GitHub
```bash
git add .
git commit -m "Ready for production"
git push origin main
```

## 3️⃣ Setup di Coolify

### Buat Application
1. Login Coolify: `http://YOUR_VPS_IP:8000`
2. New Project → New Application
3. Public Repository → Paste URL repo
4. Branch: `main`
5. Build Pack: `Dockerfile`
6. Port: `3000`

### Environment Variables
```env
DATABASE_URL=file:./data/sqlite.db
NEXTAUTH_SECRET=hasil-dari-step-1
NEXTAUTH_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=Gita Fashion
NODE_ENV=production
```

### Storage
- Mount Path: `/app/data`

### Domain
- Add domain: `gitafashion.yourdomain.com`
- SSL: Auto (Let's Encrypt)

### Deploy
- Klik **Deploy**
- Tunggu 5-10 menit

## 4️⃣ Verifikasi

```bash
# Health check
curl https://yourdomain.com/api/health

# Login
https://yourdomain.com/login
```

**Credentials:**
- Admin: `admin@gitafashion.com` / `admin123`
- Kasir: `kasir@gitafashion.com` / `kasir123`

## 5️⃣ Done! 🎉

---

**Butuh detail?** Lihat [COOLIFY_SETUP.md](COOLIFY_SETUP.md)
