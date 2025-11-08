module.exports=[514,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(91119),e=a.i(6015),f=a.i(86304),g=a.i(99570),h=a.i(66718),i=a.i(80701),j=a.i(14574),k=a.i(1199),l=a.i(77156);let m=(0,a.i(70106).default)("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);var n=a.i(41675),o=a.i(71931);function p(){let[a,p]=(0,c.useState)([]),[q,r]=(0,c.useState)(null),[s,t]=(0,c.useState)(!1),[u,v]=(0,c.useState)(""),[w,x]=(0,c.useState)("ALL"),[y,z]=(0,c.useState)(!1),[A,B]=(0,c.useState)(null);(0,c.useEffect)(()=>{D(),C()},[]);let C=async()=>{try{let a=await fetch("/api/settings/public");if(a.ok){let b=await a.json();B(b)}}catch(a){console.error("Error fetching store settings:",a)}},D=async()=>{try{let a=await fetch("/api/transactions",{credentials:"include"});if(a.ok){let b=await a.json();p(Array.isArray(b)?b:[])}}catch(a){console.error("Error fetching transactions:",a),p([])}},E=async a=>{try{console.log("Fetching transaction detail for code:",a);let b=await fetch(`/api/transactions/${a}`,{credentials:"include"});if(console.log("Response status:",b.status),b.ok){let a=await b.json();console.log("Transaction data:",a),r(a),t(!0)}else try{let a=await b.json();console.error("Error response:",a),alert(`Gagal mengambil detail transaksi: ${a?.error||"Server error"}`)}catch(a){console.error("Failed to parse error response:",a),alert(`Gagal mengambil detail transaksi: HTTP ${b.status}`)}}catch(a){console.error("Error fetching transaction detail:",a),alert("Terjadi kesalahan saat mengambil detail transaksi")}},F=async a=>{try{console.log("Fetching transaction for receipt, code:",a);let b=await fetch(`/api/transactions/${a}`,{credentials:"include"});if(console.log("Receipt response status:",b.status),b.ok){let a=await b.json();console.log("Receipt transaction data:",a),r(a),z(!0)}else try{let a=await b.json();console.error("Receipt error response:",a),alert(`Gagal mengambil data transaksi: ${a?.error||"Server error"}`)}catch(a){console.error("Failed to parse receipt error response:",a),alert(`Gagal mengambil data transaksi: HTTP ${b.status}`)}}catch(a){console.error("Error fetching transaction for receipt:",a),alert("Terjadi kesalahan saat mengambil data transaksi")}},G=a.filter(a=>{let b=a.code.toLowerCase().includes(u.toLowerCase()),c="ALL"===w||a.paymentStatus===w;return b&&c}),H=G.length,I=G.reduce((a,b)=>a+b.cashAmount+b.transferAmount,0),J=G.filter(a=>"PAID"===a.paymentStatus).length;return(0,b.jsxs)("div",{className:"p-6",children:[(0,b.jsxs)("div",{className:"mb-6",children:[(0,b.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Riwayat Transaksi"}),(0,b.jsx)("p",{className:"text-gray-600",children:"Kelola dan pantau semua transaksi penjualan"})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[(0,b.jsxs)(d.Card,{children:[(0,b.jsxs)(d.CardHeader,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,b.jsx)(d.CardTitle,{className:"text-sm font-medium",children:"Total Transaksi"}),(0,b.jsx)(k.Receipt,{className:"h-4 w-4 text-muted-foreground"})]}),(0,b.jsxs)(d.CardContent,{children:[(0,b.jsx)("div",{className:"text-2xl font-bold",children:H}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Transaksi hari ini"})]})]}),(0,b.jsxs)(d.Card,{children:[(0,b.jsxs)(d.CardHeader,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,b.jsx)(d.CardTitle,{className:"text-sm font-medium",children:"Total Penjualan"}),(0,b.jsx)(n.Calendar,{className:"h-4 w-4 text-muted-foreground"})]}),(0,b.jsxs)(d.CardContent,{children:[(0,b.jsxs)("div",{className:"text-2xl font-bold",children:["Rp ",I.toLocaleString()]}),(0,b.jsx)("p",{className:"text-xs text-muted-foreground",children:"Penjualan hari ini"})]})]}),(0,b.jsxs)(d.Card,{children:[(0,b.jsxs)(d.CardHeader,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,b.jsx)(d.CardTitle,{className:"text-sm font-medium",children:"Transaksi Lunas"}),(0,b.jsx)(m,{className:"h-4 w-4 text-muted-foreground"})]}),(0,b.jsxs)(d.CardContent,{children:[(0,b.jsx)("div",{className:"text-2xl font-bold",children:J}),(0,b.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Dari ",H," transaksi"]})]})]})]}),(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 mb-6",children:[(0,b.jsx)(h.Input,{placeholder:"Cari kode transaksi...",value:u,onChange:a=>v(a.target.value),className:"flex-1"}),(0,b.jsxs)(i.Select,{value:w,onValueChange:x,children:[(0,b.jsx)(i.SelectTrigger,{className:"w-full sm:w-48",children:(0,b.jsx)(i.SelectValue,{placeholder:"Filter status"})}),(0,b.jsxs)(i.SelectContent,{children:[(0,b.jsx)(i.SelectItem,{value:"ALL",children:"Semua Status"}),(0,b.jsx)(i.SelectItem,{value:"PAID",children:"Lunas"}),(0,b.jsx)(i.SelectItem,{value:"PENDING",children:"Pending"}),(0,b.jsx)(i.SelectItem,{value:"CANCELLED",children:"Dibatalkan"})]})]})]}),(0,b.jsxs)(d.Card,{children:[(0,b.jsx)(d.CardHeader,{children:(0,b.jsx)(d.CardTitle,{children:"Daftar Transaksi"})}),(0,b.jsx)(d.CardContent,{children:0===G.length?(0,b.jsx)("div",{className:"text-center py-8 text-gray-500",children:u||"ALL"!==w?"Tidak ada transaksi yang sesuai dengan filter":"Belum ada transaksi"}):(0,b.jsx)("div",{className:"overflow-x-auto",children:(0,b.jsxs)(e.Table,{children:[(0,b.jsx)(e.TableHeader,{children:(0,b.jsxs)(e.TableRow,{children:[(0,b.jsx)(e.TableHead,{children:"Kode Transaksi"}),(0,b.jsx)(e.TableHead,{children:"Tanggal"}),(0,b.jsx)(e.TableHead,{children:"Total Item"}),(0,b.jsx)(e.TableHead,{children:"Total Bayar"}),(0,b.jsx)(e.TableHead,{children:"Status"}),(0,b.jsx)(e.TableHead,{children:"Aksi"})]})}),(0,b.jsx)(e.TableBody,{children:G.map(a=>(0,b.jsxs)(e.TableRow,{children:[(0,b.jsx)(e.TableCell,{className:"font-medium",children:a.code}),(0,b.jsx)(e.TableCell,{children:new Date(a.transactionDate).toLocaleDateString("id-ID")}),(0,b.jsxs)(e.TableCell,{children:[a.totalItems," item"]}),(0,b.jsxs)(e.TableCell,{children:["Rp ",(a.cashAmount+a.transferAmount).toLocaleString()]}),(0,b.jsx)(e.TableCell,{children:(0,b.jsx)(f.Badge,{variant:"PAID"===a.paymentStatus?"default":"PENDING"===a.paymentStatus?"secondary":"destructive",children:"PAID"===a.paymentStatus?"Lunas":"PENDING"===a.paymentStatus?"Pending":"Dibatalkan"})}),(0,b.jsx)(e.TableCell,{children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)(g.Button,{size:"sm",variant:"outline",onClick:()=>E(a.code),children:(0,b.jsx)(l.Eye,{className:"h-4 w-4"})}),(0,b.jsx)(g.Button,{size:"sm",variant:"outline",onClick:()=>F(a.code),children:(0,b.jsx)(o.Printer,{className:"h-4 w-4"})})]})})]},a.id))})]})})})]}),(0,b.jsx)(j.Dialog,{open:s,onOpenChange:t,children:(0,b.jsxs)(j.DialogContent,{className:"max-w-2xl",children:[(0,b.jsx)(j.DialogHeader,{children:(0,b.jsx)(j.DialogTitle,{children:"Detail Transaksi"})}),q&&(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Kode Transaksi"}),(0,b.jsx)("p",{className:"font-medium",children:q.code})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Tanggal"}),(0,b.jsx)("p",{className:"font-medium",children:new Date(q.transactionDate).toLocaleString("id-ID")})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Kasir"}),(0,b.jsx)("p",{className:"font-medium",children:q.cashierName||"Unknown"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Status"}),(0,b.jsx)(f.Badge,{variant:"PAID"===q.paymentStatus?"default":"secondary",children:"PAID"===q.paymentStatus?"Lunas":"Pending"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"font-medium mb-2",children:"Item Transaksi"}),(0,b.jsxs)(e.Table,{children:[(0,b.jsx)(e.TableHeader,{children:(0,b.jsxs)(e.TableRow,{children:[(0,b.jsx)(e.TableHead,{children:"Produk"}),(0,b.jsx)(e.TableHead,{children:"Qty"}),(0,b.jsx)(e.TableHead,{children:"Harga"}),(0,b.jsx)(e.TableHead,{children:"Subtotal"})]})}),(0,b.jsx)(e.TableBody,{children:(q.items||[]).map(a=>(0,b.jsxs)(e.TableRow,{children:[(0,b.jsx)(e.TableCell,{children:a.product?.name||"Unknown Product"}),(0,b.jsx)(e.TableCell,{children:a.quantity}),(0,b.jsxs)(e.TableCell,{children:["Rp ",a.price.toLocaleString()]}),(0,b.jsxs)(e.TableCell,{children:["Rp ",(a.quantity*a.price-(a.discount||0)).toLocaleString()]})]},a.id))})]})]}),(0,b.jsxs)("div",{className:"border-t pt-4",children:[(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Subtotal:"}),(0,b.jsxs)("span",{children:["Rp ",(q.subtotal||0).toLocaleString()]})]}),(q.totalDiscount||0)>0&&(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Total Diskon:"}),(0,b.jsxs)("span",{children:["-Rp ",(q.totalDiscount||0).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex justify-between font-bold text-lg",children:[(0,b.jsx)("span",{children:"Total:"}),(0,b.jsxs)("span",{children:["Rp ",(q.totalAmount||0).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"mt-2 space-y-1",children:[q.cashAmount>0&&(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Tunai:"}),(0,b.jsxs)("span",{children:["Rp ",q.cashAmount.toLocaleString()]})]}),q.transferAmount>0&&(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Transfer:"}),(0,b.jsxs)("span",{children:["Rp ",q.transferAmount.toLocaleString()]})]})]})]})]})]})}),(0,b.jsx)(j.Dialog,{open:y,onOpenChange:z,children:(0,b.jsxs)(j.DialogContent,{className:"max-w-md",children:[(0,b.jsx)(j.DialogHeader,{children:(0,b.jsx)(j.DialogTitle,{children:"Cetak Struk"})}),q&&(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"text-center border-b pb-4",children:[(0,b.jsx)("h3",{className:"font-bold",children:"GITA FASHION"}),(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Jl. Fashion Street No. 123"}),(0,b.jsx)("p",{className:"text-sm text-gray-600",children:"Telp: (021) 123-4567"})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"No. Transaksi:"}),(0,b.jsx)("span",{children:q.code})]}),(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Tanggal:"}),(0,b.jsx)("span",{children:new Date(q.transactionDate).toLocaleString("id-ID")})]}),(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Kasir:"}),(0,b.jsx)("span",{children:q.cashierName||"Unknown"})]})]}),(0,b.jsx)("div",{className:"border-t border-b py-2",children:(q.items||[]).map(a=>(0,b.jsxs)("div",{className:"space-y-1",children:[(0,b.jsx)("div",{className:"flex justify-between",children:(0,b.jsx)("span",{className:"text-sm",children:a.product?.name||"Unknown Product"})}),(0,b.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,b.jsxs)("span",{children:[a.quantity," x Rp ",a.price.toLocaleString()]}),(0,b.jsxs)("span",{children:["Rp ",(a.quantity*a.price).toLocaleString()]})]}),(a.discount||0)>0&&(0,b.jsxs)("div",{className:"flex justify-between text-sm text-red-600",children:[(0,b.jsx)("span",{children:"Diskon:"}),(0,b.jsxs)("span",{children:["-Rp ",(a.discount||0).toLocaleString()]})]})]},a.id))}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Subtotal:"}),(0,b.jsxs)("span",{children:["Rp ",(q.subtotal||0).toLocaleString()]})]}),(q.totalDiscount||0)>0&&(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Total Diskon:"}),(0,b.jsxs)("span",{children:["-Rp ",(q.totalDiscount||0).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex justify-between font-bold",children:[(0,b.jsx)("span",{children:"TOTAL:"}),(0,b.jsxs)("span",{children:["Rp ",(q.totalAmount||0).toLocaleString()]})]}),q.cashAmount>0&&(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Tunai:"}),(0,b.jsxs)("span",{children:["Rp ",q.cashAmount.toLocaleString()]})]}),q.transferAmount>0&&(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Transfer:"}),(0,b.jsxs)("span",{children:["Rp ",q.transferAmount.toLocaleString()]})]})]}),(0,b.jsx)("div",{className:"flex justify-end",children:(0,b.jsxs)(g.Button,{onClick:()=>{if(!q)return;let a=window.open("","_blank");if(!a)return;let b=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Struk Transaksi - ${q.code}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
          
          /* Thermal printer specific CSS */
          @media print {
            @page {
              size: 58mm auto;
              margin: 0;
            }
            
            body {
              margin: 0 !important;
              padding: 0 !important;
            }
            
            .receipt {
              width: 100% !important;
            }
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body { 
            font-family: 'Roboto', sans-serif; 
            font-size: 12px; 
            margin: 0; 
            padding: 0; 
            line-height: 1.2;
            width: 100%;
          }
          .receipt { 
            width: 100%; 
            max-width: 180px; 
            margin: 0; 
            padding: 2px;
          }
          
          /* Thermal 80mm Support */
          @media print and (min-width: 80mm) {
            .receipt { 
              max-width: 260px !important; /* 68.8mm - optimal untuk 80mm */
              padding: 3px !important;
            }
            body {
              font-size: 13px !important;
            }
            .header h2 {
              font-size: 18px !important;
            }
            .header p {
              font-size: 12px !important;
            }
            .item {
              font-size: 12px !important;
            }
          }
          
          /* Alternative: Manual 80mm class */
          .receipt-80mm { 
            max-width: 260px !important;
            padding: 3px !important;
          }
          .receipt-80mm body {
            font-size: 13px !important;
          }
          .receipt-80mm .header h2 {
            font-size: 18px !important;
          }
          .receipt-80mm .header p {
            font-size: 12px !important;
          }
          .receipt-80mm .item {
            font-size: 12px !important;
          }
          .header { 
            text-align: center; 
            border-bottom: 1px dashed #000; 
            padding-bottom: 8px; 
            margin-bottom: 8px; 
          }
          .header h2 { 
            margin: 0 0 2px 0; 
            font-weight: 700; 
            font-size: 16px; 
          }
          .header p { 
            margin: 1px 0; 
            font-size: 11px; 
            font-weight: 400; 
          }
          .item { 
            display: flex; 
            justify-content: space-between; 
            margin: 2px 0; 
            font-weight: 400; 
          }
          .total { 
            border-top: 1px dashed #000; 
            padding-top: 8px; 
            margin-top: 8px; 
          }
          .footer { 
            text-align: center; 
            margin-top: 15px; 
            font-size: 10px; 
            font-weight: 300; 
          }
          .footer p { 
            margin: 2px 0; 
          }
          
          @media print {
            * {
              margin: 0 !important;
              padding: 0 !important;
            }
            body { 
              margin: 0 !important; 
              padding: 0 !important; 
              width: auto !important;
              font-size: 11px !important;
            }
            .receipt { 
              width: 100% !important; 
              max-width: 180px !important; /* Default 58mm */
              margin: 0 !important; 
              padding: 1px !important;
            }
            
            /* Auto-detect 80mm thermal */
            @media print and (min-width: 300px) {
              .receipt { 
                max-width: 260px !important; /* 80mm thermal */
                padding: 2px !important;
              }
            }
            .header {
              padding-bottom: 6px !important;
              margin-bottom: 6px !important;
            }
            .header h2 {
              font-size: 14px !important;
              margin: 0 !important;
            }
            .header p {
              font-size: 10px !important;
              margin: 0 !important;
            }
            .item {
              font-size: 10px !important;
              margin: 1px 0 !important;
            }
            .total {
              padding-top: 4px !important;
              margin-top: 4px !important;
            }
            .footer {
              margin-top: 8px !important;
              font-size: 8px !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <h2>${A?.storeName||"GITA FASHION"}</h2>
            <p>${A?.storeAddress||"Jl. Fashion Street No. 123"}</p>
            <p>Telp: ${A?.storePhone||"(021) 123-4567"}</p>
            <p>================================</p>
          </div>
          
          <div class="transaction-info">
            <div class="item"><span>No. Transaksi:</span><span>${q.code}</span></div>
            <div class="item"><span>Tanggal:</span><span>${new Date(q.transactionDate).toLocaleString("id-ID")}</span></div>
            <div class="item"><span>Kasir:</span><span>${q.cashierName||"Unknown"}</span></div>
            <p>================================</p>
          </div>

          <div class="items">
            ${(q.items||[]).map(a=>`
              <div class="item">
                <span>${a.product?.name||"Unknown Product"}</span>
              </div>
              <div class="item">
                <span>${a.quantity} x ${a.price.toLocaleString("id-ID")}</span>
                <span>${(a.quantity*a.price).toLocaleString("id-ID")}</span>
              </div>
              ${a.discount>0?`<div class="item"><span>Diskon:</span><span>-${a.discount.toLocaleString("id-ID")}</span></div>`:""}
            `).join("")}
          </div>

          <div class="total">
            <div class="item"><span>Subtotal:</span><span>Rp ${(q.subtotal||0).toLocaleString("id-ID")}</span></div>
            ${(q.totalDiscount||0)>0?`<div class="item"><span>Total Diskon:</span><span>-Rp ${(q.totalDiscount||0).toLocaleString("id-ID")}</span></div>`:""}
            <div class="item"><strong><span>TOTAL:</span><span>Rp ${(q.totalAmount||0).toLocaleString("id-ID")}</span></strong></div>
            <p>================================</p>
            ${q.cashAmount>0?`<div class="item"><span>Tunai:</span><span>Rp ${q.cashAmount.toLocaleString("id-ID")}</span></div>`:""}
            ${q.transferAmount>0?`<div class="item"><span>Transfer:</span><span>Rp ${q.transferAmount.toLocaleString("id-ID")}</span></div>`:""}
          </div>

          <div class="footer">
            <p>${A?.footerText||"Terima kasih atas kunjungan Anda!"}</p>
            <p>Barang yang sudah dibeli tidak dapat dikembalikan</p>
            <p>${new Date().toLocaleString("id-ID")}</p>
          </div>
        </div>
      </body>
      
      <script>
        // Simple print control - content starts from top
        window.addEventListener('afterprint', function() {
          console.log('Print completed - closing window');
          setTimeout(() => window.close(), 500);
        });
        
        // Auto print after short delay
        setTimeout(() => {
          window.print();
        }, 1000);
        
        // Add paper cut spacing at the end
        document.addEventListener('DOMContentLoaded', function() {
          const receipt = document.querySelector('.receipt');
          if (receipt) {
            const spacer = document.createElement('div');
            spacer.style.height = '10mm';
            spacer.style.width = '100%';
            receipt.appendChild(spacer);
          }
        });
      </script>
      </html>
    `;a.document.open(),a.document.write(b),a.document.close()},children:[(0,b.jsx)(o.Printer,{className:"h-4 w-4 mr-2"}),"Cetak Struk"]})})]})]})})]})}a.s(["default",()=>p],514)}];

//# sourceMappingURL=src_app_dashboard_transactions_page_tsx_73f0451d._.js.map