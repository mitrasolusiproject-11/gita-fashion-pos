# 🧹 Panduan Cleanup Disk Space

## Masalah
Disk space di server Coolify penuh (9-15GB terpakai untuk aplikasi kecil).

## Penyebab Umum
1. **Docker images lama** dari deployment sebelumnya
2. **Build cache** yang menumpuk
3. **Stopped containers** yang tidak terhapus
4. **Logs** yang besar

## Solusi: Cleanup via Coolify Dashboard

### Cara 1: Via Coolify UI (PALING AMAN)
1. Login ke **Coolify Dashboard**
2. Klik **Server** di sidebar
3. Pilih server Anda
4. Klik tab **"Resources"** atau **"Cleanup"**
5. Klik **"Cleanup Unused Resources"**
6. Tunggu proses selesai

### Cara 2: Via SSH (Manual)

```bash
# 1. SSH ke server
ssh user@your-server-ip

# 2. Cek disk usage
df -h

# 3. Cek Docker disk usage
docker system df

# 4. Cleanup Docker (AMAN)
docker system prune -a --volumes -f

# Atau step by step:
docker image prune -a -f      # Hapus unused images
docker container prune -f     # Hapus stopped containers  
docker volume prune -f        # Hapus unused volumes
docker builder prune -a -f    # Hapus build cache

# 5. Cek lagi
df -h
docker system df
```

## Cleanup Berkala

Jalankan cleanup ini **setiap minggu** atau **setelah beberapa kali deployment** untuk mencegah disk penuh.

### Otomatis via Cron (Optional)

```bash
# Edit crontab
crontab -e

# Tambahkan baris ini (cleanup setiap Minggu jam 2 pagi)
0 2 * * 0 docker system prune -a --volumes -f
```

## Monitoring

Gunakan button **"📊 Check Disk Usage"** di Settings untuk monitor:
- Total disk usage
- Database size
- App size

## Tips Pencegahan

1. **Jangan deploy terlalu sering** - setiap deploy membuat image baru
2. **Gunakan .dockerignore** - hindari copy file yang tidak perlu
3. **Cleanup berkala** - minimal 1x seminggu
4. **Monitor disk** - cek sebelum penuh

## Troubleshooting

### Disk masih penuh setelah cleanup?

```bash
# Cek folder besar
du -sh /* | sort -h

# Cek logs
du -sh /var/log/*

# Hapus logs lama (hati-hati!)
find /var/log -type f -name "*.log" -mtime +30 -delete
```

### Aplikasi error setelah cleanup?

Jangan panik! Coolify akan otomatis rebuild. Atau:

```bash
# Redeploy dari Coolify dashboard
# Atau via CLI:
docker compose up -d --force-recreate
```

## Target Disk Usage

Untuk aplikasi POS ini, target yang wajar:
- **Database**: 10-50 MB
- **App**: 200-500 MB  
- **Total**: < 1 GB

Jika lebih dari 2GB, ada yang salah!
