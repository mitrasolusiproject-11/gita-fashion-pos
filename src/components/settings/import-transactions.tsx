'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, FileText, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function ImportTransactions() {
  const [file, setFile] = useState<File | null>(null)
  const [importing, setImporting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setResult(null)
    }
  }

  const handleDeleteRange = async () => {
    if (!startDate || !endDate) {
      alert('Pilih tanggal mulai dan tanggal akhir')
      return
    }

    if (!confirm(`Hapus semua transaksi dari ${startDate} sampai ${endDate}?\n\nPeringatan: Aksi ini tidak dapat dibatalkan!`)) {
      return
    }

    setDeleting(true)
    try {
      const response = await fetch('/api/transactions/delete-range', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate, endDate })
      })

      const data = await response.json()

      if (response.ok) {
        alert(`✅ Berhasil menghapus ${data.deletedCount} transaksi`)
        setStartDate('')
        setEndDate('')
      } else {
        alert(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('Terjadi kesalahan saat menghapus transaksi')
    } finally {
      setDeleting(false)
    }
  }

  const handleImport = async () => {
    if (!file) {
      alert('Pilih file CSV terlebih dahulu')
      return
    }

    setImporting(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/import/transactions', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (response.ok) {
        setResult(data)
        setFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        alert(`Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Import error:', error)
      alert('Terjadi kesalahan saat import')
    } finally {
      setImporting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Import Transaksi dari CSV
        </CardTitle>
        <CardDescription>
          Upload file CSV untuk import transaksi lama ke sistem
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Delete Range */}
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded space-y-3">
          <p className="text-sm font-medium text-yellow-900">
            ⚠️ Hapus Transaksi (untuk re-import)
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-yellow-800 mb-1">Dari Tanggal</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 text-sm border rounded"
              />
            </div>
            <div>
              <label className="block text-xs text-yellow-800 mb-1">Sampai Tanggal</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 text-sm border rounded"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDeleteRange}
            disabled={!startDate || !endDate || deleting}
            className="w-full"
          >
            {deleting ? 'Menghapus...' : 'Hapus Transaksi di Range Ini'}
          </Button>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Pilih File CSV
          </label>
          <div className="flex gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="flex-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <Button
              onClick={handleImport}
              disabled={!file || importing}
            >
              {importing ? 'Importing...' : 'Import'}
            </Button>
          </div>
          {file && (
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </p>
          )}
        </div>

        {/* Result */}
        {result && (
          <div className="space-y-3">
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <div className="flex items-center gap-2 text-green-800 font-medium mb-2">
                <CheckCircle className="h-5 w-5" />
                Import Selesai
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Total Transaksi: <span className="font-bold">{result.summary.total}</span></div>
                <div className="text-green-600">Berhasil: <span className="font-bold">{result.summary.success}</span></div>
                <div className="text-yellow-600">Dilewati: <span className="font-bold">{result.summary.skipped}</span></div>
                <div className="text-red-600">Gagal: <span className="font-bold">{result.summary.failed}</span></div>
              </div>
            </div>

            {result.errors && result.errors.length > 0 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded">
                <div className="flex items-center gap-2 text-red-800 font-medium mb-2">
                  <XCircle className="h-5 w-5" />
                  Error Messages
                </div>
                <ul className="text-sm text-red-700 space-y-1">
                  {result.errors.map((err: string, i: number) => (
                    <li key={i}>• {err}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded text-sm">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="font-medium text-blue-900">Format CSV:</p>
              <p className="text-blue-800">
                File CSV harus memiliki kolom: code, transactionDate, barcode, productName, quantity, price, discountPercent, discountAmount, cashAmount, transferAmount, bankName, paymentStatus
              </p>
              <p className="text-blue-800">
                Untuk transaksi dengan multiple items, gunakan code yang sama di beberapa baris.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
