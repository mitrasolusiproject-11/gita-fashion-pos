# Fix 404 Error - Redeploy Guide

## Masalah
Deployment berjalan lancar tapi muncul 404 Not Found saat dibuka di browser.

## Penyebab
Dockerfile tidak properly copy standalone Next.js build output.

## Solusi yang Sudah Diterapkan
1. ✅ Update Dockerfile untuk properly copy `.next/standalone` output
2. ✅ Tambahkan init-db.sh untuk auto-migrate database
3. ✅ Fix permissions untuk nextjs user
4. ✅ Copy node_modules untuk drizzle-kit

## Langkah Redeploy di Coolify

### 1. Buka Coolify Dashboard
- Login ke panel Coolify Anda
- Pilih aplikasi "Gita Fashion POS"

### 2. Trigger Redeploy
Ada 2 cara:

**Cara A: Manual Redeploy**
- Klik tombol "Redeploy" atau "Deploy"
- Coolify akan pull latest code dari GitHub
- Tunggu build selesai (5-10 menit)

**Cara B: Force Rebuild**
- Klik "Settings" atau "Configuration"
- Cari opsi "Force Rebuild" atau "Clear Build Cache"
- Klik "Redeploy"

### 3. Verifikasi Environment Variables
Pastikan environment variables sudah diset:
```
DATABASE_URL=file:/app/data/sqlite.db
JWT_SECRET=your-secret-key-here
NODE_ENV=production
PORT=3000
```

### 4. Check Logs
Setelah deploy, cek logs untuk memastikan:
- ✅ "🔍 Checking database..."
- ✅ "📦 Database not found, running migrations..." (first deploy)
- ✅ "✅ Database initialized!"
- ✅ "🎉 Database ready!"
- ✅ Server listening on port 3000

### 5. Test Aplikasi
Buka URL aplikasi Anda:
- Homepage harus muncul (bukan 404)
- Test login di `/login`
- Test health check di `/api/health`

## Troubleshooting

### Jika Masih 404:
1. **Check Port Mapping**
   - Pastikan Coolify expose port 3000
   - Check di Settings > Ports

2. **Check Build Logs**
   - Lihat apakah build Next.js berhasil
   - Cari error di build logs

3. **Check Container Logs**
   - Lihat runtime logs
   - Pastikan "Server listening" muncul

4. **Restart Container**
   - Stop container
   - Start ulang
   - Monitor logs

### Jika Database Error:
1. **Check Volume Mount**
   - Pastikan `/app/data` di-mount sebagai persistent volume
   - Path: `/app/data`

2. **Check Permissions**
   - Container harus bisa write ke `/app/data`
   - User: nextjs (uid 1001)

## Catatan Penting
- Setiap kali ada perubahan di GitHub, Coolify bisa auto-deploy (jika webhook aktif)
- Database akan persist di volume `/app/data`
- First deploy akan auto-run migrations
- Subsequent deploys akan skip migration jika DB sudah ada

## Kontak
Jika masih ada masalah, cek logs dan share error message untuk troubleshooting lebih lanjut.
