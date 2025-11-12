# Panduan Import Transaksi Lama

## Langkah 1: Dapatkan User ID

Pertama, kita perlu tahu ID user yang akan digunakan untuk transaksi lama.

```bash
node scripts/import-old-transactions.js
```

**Edit script terlebih dahulu:**
Buka `scripts/import-old-transactions.js`, di bagian paling bawah, uncomment baris ini:
```javascript
// showUsers()  // <- Hapus tanda //
```

Dan comment baris ini:
```javascript
importTransactions()  // <- Tambahkan // di depan
```

Jalankan script, akan muncul daftar user:
```
📋 Available Users:

ID: ada3ed18-aab8-4aa9-97dc-cafc8e5bb2e8
Name: Administrator
Email: admin@gitafashion.com
Role: ADMIN
--------------------------------------------------
```

**Copy ID user** yang akan digunakan (biasanya admin).

---

## Langkah 2: Siapkan Data Transaksi

Buka file `scripts/import-old-transactions.js`

Cari bagian `const oldTransactions = [...]`

Ganti data contoh dengan data transaksi lama Anda:

```javascript
const oldTransactions = [
  {
    code: 'OLD001',  // Kode unik
    transactionDate: '2024-01-15 10:30:00',  // Tanggal transaksi
    totalItems: 2,  // Total item
    cashAmount: 150000,  // Pembayaran tunai
    transferAmount: 0,  // Pembayaran transfer
    bankName: null,  // Nama bank (jika transfer)
    paymentStatus: 'PAID',  // Status: PAID/PENDING/CANCELLED
    userId: 'PASTE_USER_ID_DI_SINI',  // Paste ID dari langkah 1
    items: [  // Daftar item yang dibeli
      {
        barcode: 'GF001001',
        productName: 'Kemeja Putih Formal',
        quantity: 1,
        price: 85000,
        discountPercent: 0,
        discountAmount: 0
      },
      // Tambahkan item lainnya...
    ]
  },
  // Tambahkan transaksi lainnya...
]
```

**Tips:**
- Gunakan Excel untuk menyiapkan data, lalu convert ke format JavaScript
- Pastikan `code` unik untuk setiap transaksi
- Pastikan `barcode` produk sudah ada di database
- Format tanggal: `YYYY-MM-DD HH:mm:ss`

---

## Langkah 3: Jalankan Import

Setelah data siap, edit script lagi:

Comment baris showUsers:
```javascript
// showUsers()  // <- Tambahkan // di depan
```

Uncomment baris importTransactions:
```javascript
importTransactions()  // <- Hapus tanda //
```

Jalankan script:
```bash
node scripts/import-old-transactions.js
```

Output akan seperti ini:
```
🚀 Starting import...

📦 Importing transaction: OLD001
   ✅ Transaction inserted
   ✅ Item inserted: Kemeja Putih Formal (1x)
   ✅ Item inserted: Blouse Casual Biru (1x)
   ✅ Transaction OLD001 imported successfully!

📦 Importing transaction: OLD002
   ✅ Transaction inserted
   ✅ Item inserted: Celana Jeans Slim Fit (1x)
   ✅ Transaction OLD002 imported successfully!

==================================================
✅ Import completed!
   Success: 2 transactions
   Failed: 0 transactions
==================================================
```

---

## Langkah 4: Verifikasi Data

### A. Via Drizzle Studio
```bash
npm run db:studio
```
Buka browser, cek tabel `transactions` dan `outgoingItems`

### B. Via Aplikasi
1. Login ke aplikasi
2. Buka menu **Laporan**
3. Set filter tanggal sesuai transaksi lama
4. Lihat apakah data muncul

---

## Troubleshooting

### Error: "User ID not found"
- Pastikan userId yang digunakan valid
- Jalankan `showUsers()` untuk cek ID yang benar

### Error: "Duplicate code"
- Code transaksi harus unik
- Cek apakah code sudah ada di database

### Error: "Product not found"
- Pastikan barcode produk sudah ada di tabel products
- Tambahkan produk dulu sebelum import transaksi

### Error: "Invalid date format"
- Format tanggal harus: `YYYY-MM-DD HH:mm:ss`
- Contoh: `2024-01-15 10:30:00`

---

## Tips Import Data Banyak

Jika data sangat banyak (ratusan/ribuan transaksi):

1. **Bagi menjadi batch kecil** (50-100 transaksi per batch)
2. **Test dengan data kecil dulu** (5-10 transaksi)
3. **Backup database** sebelum import besar
4. **Monitor memory usage** saat import

---

## Backup Database

Sebelum import, backup database:

```bash
cp sqlite.db sqlite.db.backup
```

Jika ada masalah, restore:
```bash
cp sqlite.db.backup sqlite.db
```

---

## Contoh Data Lengkap

Lihat file `scripts/TEMPLATE_IMPORT.md` untuk contoh format data lengkap.
