# Template Import Transaksi Lama

## Format Data Excel/CSV

Siapkan data transaksi Anda dalam format berikut:

### Sheet 1: Transactions
| code   | transactionDate      | totalItems | cashAmount | transferAmount | bankName | paymentStatus | userId |
|--------|---------------------|------------|------------|----------------|----------|---------------|--------|
| OLD001 | 2024-01-15 10:30:00 | 2          | 150000     | 0              |          | PAID          | xxx    |
| OLD002 | 2024-01-16 14:20:00 | 1          | 0          | 120000         | BCA      | PAID          | xxx    |

### Sheet 2: Items (untuk setiap transaksi)
| transactionCode | barcode  | productName           | quantity | price  | discountPercent | discountAmount |
|----------------|----------|-----------------------|----------|--------|-----------------|----------------|
| OLD001         | GF001001 | Kemeja Putih Formal   | 1        | 85000  | 0               | 0              |
| OLD001         | GF001002 | Blouse Casual Biru    | 1        | 65000  | 0               | 0              |
| OLD002         | GF002001 | Celana Jeans Slim Fit | 1        | 120000 | 0               | 0              |

## Keterangan Field

### Transactions:
- **code**: Kode transaksi unik (misal: OLD001, OLD002, dst)
- **transactionDate**: Tanggal transaksi (format: YYYY-MM-DD HH:mm:ss)
- **totalItems**: Total jumlah item dalam transaksi
- **cashAmount**: Jumlah pembayaran tunai (0 jika transfer)
- **transferAmount**: Jumlah pembayaran transfer (0 jika tunai)
- **bankName**: Nama bank (kosongkan jika tunai)
- **paymentStatus**: PAID / PENDING / CANCELLED
- **userId**: ID user (dapatkan dengan menjalankan script showUsers)

### Items:
- **transactionCode**: Harus sama dengan code di tabel Transactions
- **barcode**: Barcode produk (harus ada di tabel products)
- **productName**: Nama produk
- **quantity**: Jumlah item dibeli
- **price**: Harga satuan
- **discountPercent**: Persentase diskon (0-100)
- **discountAmount**: Jumlah diskon dalam rupiah

## Contoh Data

```javascript
{
  code: 'OLD001',
  transactionDate: '2024-01-15 10:30:00',
  totalItems: 2,
  cashAmount: 150000,
  transferAmount: 0,
  bankName: null,
  paymentStatus: 'PAID',
  userId: 'ada3ed18-aab8-4aa9-97dc-cafc8e5bb2e8',
  items: [
    {
      barcode: 'GF001001',
      productName: 'Kemeja Putih Formal',
      quantity: 1,
      price: 85000,
      discountPercent: 0,
      discountAmount: 0
    },
    {
      barcode: 'GF001002',
      productName: 'Blouse Casual Biru',
      quantity: 1,
      price: 65000,
      discountPercent: 0,
      discountAmount: 0
    }
  ]
}
```
