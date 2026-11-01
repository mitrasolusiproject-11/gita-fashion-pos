# Panduan Migrasi: Hostinger/Coolify → EasyPanel (VPS Ubuntu 24.04)

Aplikasi: Gita Fashion POS (Next.js 16 + SQLite via better-sqlite3/Drizzle)
Kode ini sudah termasuk 3 perbaikan yang dites di lokal:

1. **API Restore diperbaiki** — restore backup dari server lain tidak lagi gagal
   (`user id` dari backup dipetakan ke user lokal berdasarkan email/role),
   dan insert memakai batch → restore 6.591 record ± **3 detik** (sebelumnya 3 menit).
2. **Service worker (PWA) diperbaiki** — navigasi network-first, tidak muncul lagi
   tampilan "This site can't be reached" palsu; cache basi tidak disajikan lagi di mode dev.
3. Build produksi sudah **divalidasi** (`npm run build` sukses).

---

## Tahap 1 — Persiapan di server lama (Hostinger/Coolify)

Lakukan saat jam penggunaan sepi (mis. setelah jam kerja).

1. **Buat final backup** dari aplikasi: login Admin → Pengaturan → **Backup** →
   simpan file `gita-fashion-backup-<tanggal>.json`.
2. **Backup file mentah** (opsional, sebagai rencana B): dari VPS Hostinger:
   ```bash
   # lihat nama container
   docker ps | grep -i gita
   # salin database + logo/bukti bayar
   docker cp <NAMA_CONTAINER>:/app/data/sqlite.db ./sqlite.db
   docker cp <NAMA_CONTAINER>:/app/data/uploads   ./uploads
   ```
3. **Catat** `NEXTAUTH_SECRET` dari env aplikasi Coolify (untuk dipakai ulang di server baru,
   supaya sesi login user yang sudah terbuka di browser tidak semua invalid).

---

## Tahap 2 — Push kode terbaru ke GitHub

Folder proyek lokal belum jadi git repo, jalankan:

```bash
cd /home/alif/project/gitafashion
git init -b main
git add -A
git commit -m "Fix restore + service worker, siap migrasi EasyPanel"

# sambungkan ke repo GitHub Anda (ganti URL)
git remote add origin https://github.com/USERNAME/gita-fashion.git
git push -u origin main
```

Catatan: `.gitignore` sudah dibuat — `.env` dan `*.db` tidak akan ikut ter-push (memang
tidak boleh; database dipindah lewat backup/volume, bukan git).

---

## Tahap 3 — Deploy di EasyPanel

1. **Project baru** → **App** → pilih sumber **GitHub** → repo `gita-fashion` → branch `main`.
2. **Build**: pilih *Dockerfile* (ada di root repo, tempatkan kosongkan path). Dockerfile-nya
   sudah benar: build standalone Next.js → jalankan migrasi bila DB baru → start `node server.js`.
3. **Persistent storage (PENTING!)**: di app EasyPanel → *Resource/Disks* → tambahkan disk
   dengan mount point **`/app/data`**. Di folder inilah `sqlite.db` dan folder `uploads/`
   (logo & bukti bayar) disimpan. Tanpa disk ini, data hilang setiap aplikasi di-rebuild.
4. **Environment variables**:
   | Variabel | Nilai |
   |---|---|
   | `NEXTAUTH_URL` | `https://domain-anda.com` (atau sementara `http://IP-VPS:3000`) |
   | `NEXTAUTH_SECRET` | **pakai nilai yang sama dari server lama** |
   | `DATABASE_URL` | tidak perlu diset — default Dockerfile sudah `file:/app/data/sqlite.db` |
5. **Port HTTP**: `3000` (Next.js). Enable **domain + SSL otomatis** di EasyPanel
   (Let's Encrypt/Certbot) bila domain sudah diarahkan.
6. Deploy → tunggu build selesai.

---

## Tahap 4 — Migrasi data (cutover)

### Opsi A — via fitur Restore aplikasi (paling aman & mudah) ✅ disarankan
1. Setelah app jalan di EasyPanel, login dengan user default hasil seed
   (`admin@gitafashion.com` / `admin123`) — segera **ganti password** setelah login.
2. Pengaturan → **Restore** → upload file `gita-fashion-backup-<tanggal>.json` dari Tahap 1.
3. Karena API restore sudah diperbaiki: ± 3 detik, `Error: 0`, semua transaksi/shift
   masuk lengkap (user lama di server baru dipetakan otomatis berdasarkan email).

### Opsi B — taruh file sqlite.db mentah ke disk
1. Salin `sqlite.db` hasil `docker cp` (Tahap 1) ke VPS baru, lalu ke folder disk:
   ```bash
   scp sqlite.db root@IP-VPS:/root/
   # di VPS, letakkan ke path disk EasyPanel (lihat di EasyPanel path disk-nya), contoh:
   cp /root/sqlite.db /opt/easypanel/projects/<project>/<app>/disks/<disk>/sqlite.db
   # + folder uploads jika ada logo/bukti bayar
   ```
2. Restart app. Karena `sqlite.db` sudah ada, `init-db.sh` **tidak** akan re-seed
   dan data Anda langsung terpakai.

---

## Tahap 5 — Verifikasi & pindah domain

1. Dashboard: jumlah produk (1.069), transaksi (1.869+), shift, laporan sesuai data lama.
2. Logo toko tampil, fitur POS jual, tutup shift, laporan berjalan.
3. `GET https://domain-anda.com/api/health` → sukses.
4. Arahkan DNS domain ke VPS baru (EasyPanel: set domain di app → SSL otomatis),
   matakan env `NEXTAUTH_URL`.
5. Setelah stabil 1-2 hari, matikan app lama di Coolify tapi **jangan hapus volume-nya
   dulu** — simpan sebagai backup darurat.

---

## Ringkasan checklist

- [ ] Backup JSON final dari server lama (jam sepi)
- [ ] (Opsional) `docker cp` sqlite.db + uploads
- [ ] Catat NEXTAUTH_SECRET lama
- [ ] Push kode terbaru ke GitHub
- [ ] EasyPanel: App dari GitHub, build Dockerfile
- [ ] EasyPanel: disk persisten di `/app/data`
- [ ] Env: NEXTAUTH_URL, NEXTAUTH_SECRET
- [ ] Deploy & login, ganti password default
- [ ] Restore data (Opsi A) atau coulir sqlite.db (Opsi B)
- [ ] Verifikasi data + fitur
- [ ] Pindah DNS/SSL, update NEXTAUTH_URL
- [ ] App lama dijaga beberapa hari sebagai fallback
