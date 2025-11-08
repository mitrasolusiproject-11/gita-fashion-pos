module.exports=[95259,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(16259),e=a.i(99570),f=a.i(66718),g=a.i(91119),h=a.i(6015),i=a.i(14574),j=a.i(80701),k=a.i(70430),l=a.i(86304),m=a.i(81560),n=a.i(15618),o=a.i(70106);let p=(0,o.default)("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var q=a.i(38784);let r=(0,o.default)("scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);var s=a.i(83497);let t=(0,o.default)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);var u=a.i(71931);function v(){let{user:a}=(0,d.useAuth)(),[o,v]=(0,c.useState)(""),[w,x]=(0,c.useState)([]),[y,z]=(0,c.useState)([]),[A,B]=(0,c.useState)(!1),[C,D]=(0,c.useState)(!1),[E,F]=(0,c.useState)("cash"),[G,H]=(0,c.useState)(0),[I,J]=(0,c.useState)(0),[K,L]=(0,c.useState)(""),[M,N]=(0,c.useState)(null),[O,P]=(0,c.useState)(!1),[Q,R]=(0,c.useState)(!1),[S,T]=(0,c.useState)(null),[U,V]=(0,c.useState)(0),[W,X]=(0,c.useState)("percentage"),[Y,Z]=(0,c.useState)(null);(0,c.useEffect)(()=>{_(),$()},[]);let $=async()=>{try{let a=await fetch("/api/settings/public");if(a.ok){let b=await a.json();Z(b)}}catch(a){console.error("Error fetching store settings:",a)}},_=async()=>{try{let a=await fetch("/api/products",{credentials:"include"});if(a.ok){let b=await a.json();z(Array.isArray(b)?b.slice(0,10):[])}}catch(a){console.error("Error fetching products:",a),z([])}},aa=a=>{if(a.currentStock<=0)return void alert("Stok produk habis!");let b=w.find(b=>b.barcode===a.barcode);if(b){if(b.quantity>=a.currentStock)return void alert("Quantity melebihi stok yang tersedia!");x(w.map(b=>b.barcode===a.barcode?{...b,quantity:b.quantity+1}:b))}else x([...w,{id:a.id,barcode:a.barcode,name:a.name,price:a.sellPrice,quantity:1,discount:0,discountType:"percentage"}])},ab=async()=>{if(o.trim())try{let a=await fetch(`/api/products/${o}`,{credentials:"include"});if(a.ok){let b=await a.json();aa(b),v("")}else alert("Produk tidak ditemukan!")}catch(a){console.error("Error scanning barcode:",a),alert("Terjadi kesalahan saat scan barcode")}},ac=(a,b)=>{if(b<=0)return void ad(a);let c=y.find(b=>b.barcode===a);c&&b>c.currentStock?alert("Quantity melebihi stok yang tersedia!"):x(w.map(c=>c.barcode===a?{...c,quantity:b}:c))},ad=a=>{x(w.filter(b=>b.barcode!==a))},ae=()=>{x([])},af=a=>{let b=a.price*a.quantity;return"percentage"===a.discountType?b*a.discount/100:a.discount},ag=()=>w.reduce((a,b)=>a+b.price*b.quantity-af(b),0),ah=()=>w.reduce((a,b)=>a+af(b),0),ai=a=>{let b=ag();"cash"===a?(H(b),J(0)):"transfer"===a&&(J(b),H(0))},aj=async()=>{if(0===w.length)return void alert("Keranjang kosong!");if(G+I<ag())return void alert("Jumlah pembayaran kurang!");B(!0);try{let b={items:w.map(a=>({barcode:a.barcode,name:a.name,quantity:a.quantity,price:a.price,discount:a.discount,discountPercent:"percentage"===a.discountType?a.discount:0,discountAmount:af(a)})),cashAmount:G,transferAmount:I,bankName:I>0?K:null},c=await fetch("/api/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b),credentials:"include"});if(c.ok){let b={...await c.json(),items:w,cashAmount:G,transferAmount:I,user:a};N(b),D(!1),P(!0),ae(),H(0),J(0),L(""),alert("Transaksi berhasil!")}else{let a=await c.json();alert(`Gagal memproses transaksi: ${a.error||"Unknown error"}`)}}catch(a){console.error("Error processing payment:",a),alert("Terjadi kesalahan saat memproses pembayaran")}finally{B(!1)}};return(0,b.jsxs)("div",{className:"p-6",children:[(0,b.jsxs)("div",{className:"mb-6",children:[(0,b.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Point of Sale"}),(0,b.jsx)("p",{className:"text-gray-600",children:"Sistem kasir Gita Fashion"})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,b.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,b.jsxs)(g.Card,{children:[(0,b.jsx)(g.CardHeader,{children:(0,b.jsxs)(g.CardTitle,{className:"flex items-center gap-2",children:[(0,b.jsx)(r,{className:"h-5 w-5"}),"Scanner Barcode"]})}),(0,b.jsx)(g.CardContent,{children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)(f.Input,{placeholder:"Scan atau ketik barcode produk...",value:o,onChange:a=>v(a.target.value),onKeyPress:a=>"Enter"===a.key&&ab(),className:"flex-1"}),(0,b.jsx)(e.Button,{onClick:ab,children:(0,b.jsx)(r,{className:"h-4 w-4"})})]})})]}),(0,b.jsxs)(g.Card,{children:[(0,b.jsx)(g.CardHeader,{children:(0,b.jsxs)(g.CardTitle,{className:"flex items-center gap-2",children:[(0,b.jsx)(s.Package,{className:"h-5 w-5"}),"Produk Populer"]})}),(0,b.jsx)(g.CardContent,{children:0===y.length?(0,b.jsx)("div",{className:"text-center py-8 text-gray-500",children:"Tidak ada produk tersedia"}):(0,b.jsx)("div",{className:"overflow-x-auto",children:(0,b.jsxs)(h.Table,{children:[(0,b.jsx)(h.TableHeader,{children:(0,b.jsxs)(h.TableRow,{children:[(0,b.jsx)(h.TableHead,{children:"Barcode"}),(0,b.jsx)(h.TableHead,{children:"Nama Produk"}),(0,b.jsx)(h.TableHead,{children:"Kategori"}),(0,b.jsx)(h.TableHead,{children:"Stok"}),(0,b.jsx)(h.TableHead,{children:"Harga"}),(0,b.jsx)(h.TableHead,{children:"Aksi"})]})}),(0,b.jsx)(h.TableBody,{children:y.map(a=>(0,b.jsxs)(h.TableRow,{children:[(0,b.jsx)(h.TableCell,{className:"font-mono text-sm",children:a.barcode}),(0,b.jsx)(h.TableCell,{className:"font-medium",children:a.name}),(0,b.jsx)(h.TableCell,{children:a.category}),(0,b.jsx)(h.TableCell,{children:(0,b.jsx)(l.Badge,{variant:a.currentStock<=5?"destructive":"secondary",children:a.currentStock})}),(0,b.jsxs)(h.TableCell,{children:["Rp ",a.sellPrice.toLocaleString()]}),(0,b.jsx)(h.TableCell,{children:(0,b.jsx)(e.Button,{size:"sm",onClick:()=>aa(a),disabled:a.currentStock<=0,children:(0,b.jsx)(n.Plus,{className:"h-4 w-4"})})})]},a.id))})]})})})]})]}),(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)(g.Card,{children:[(0,b.jsx)(g.CardHeader,{children:(0,b.jsxs)(g.CardTitle,{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsx)(q.ShoppingCart,{className:"h-5 w-5"}),"Keranjang (",w.length,")"]}),w.length>0&&(0,b.jsx)(e.Button,{variant:"outline",size:"sm",onClick:ae,children:(0,b.jsx)(m.Trash2,{className:"h-4 w-4"})})]})}),(0,b.jsx)(g.CardContent,{children:0===w.length?(0,b.jsx)("div",{className:"text-center py-8 text-gray-500",children:"Keranjang kosong"}):(0,b.jsx)("div",{className:"space-y-4",children:w.map(a=>{let c=a.price*a.quantity,d=af(a),f=c-d;return(0,b.jsxs)("div",{className:"p-3 border rounded space-y-2",children:[(0,b.jsx)("div",{className:"flex items-start justify-between",children:(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("h4",{className:"font-medium text-sm",children:a.name}),(0,b.jsx)("p",{className:"text-xs text-gray-500",children:a.barcode}),(0,b.jsxs)("p",{className:"text-sm",children:["Rp ",a.price.toLocaleString()," x ",a.quantity]}),a.discount>0&&(0,b.jsxs)("p",{className:"text-xs text-red-600",children:["Diskon: ","percentage"===a.discountType?`${a.discount}%`:`Rp ${a.discount.toLocaleString()}`," ","(-Rp ",d.toLocaleString(),")"]}),(0,b.jsxs)("p",{className:"text-sm font-bold",children:["Total: Rp ",f.toLocaleString()]})]})}),(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{className:"flex items-center gap-1",children:[(0,b.jsx)(e.Button,{size:"sm",variant:"outline",onClick:()=>ac(a.barcode,a.quantity-1),children:(0,b.jsx)(p,{className:"h-3 w-3"})}),(0,b.jsx)("span",{className:"w-8 text-center text-sm",children:a.quantity}),(0,b.jsx)(e.Button,{size:"sm",variant:"outline",onClick:()=>ac(a.barcode,a.quantity+1),children:(0,b.jsx)(n.Plus,{className:"h-3 w-3"})})]}),(0,b.jsxs)("div",{className:"flex items-center gap-1",children:[(0,b.jsx)(e.Button,{size:"sm",variant:"outline",onClick:()=>{T(a),V(a.discount),X(a.discountType),R(!0)},title:"Diskon",children:"%"}),(0,b.jsx)(e.Button,{size:"sm",variant:"destructive",onClick:()=>ad(a.barcode),children:(0,b.jsx)(m.Trash2,{className:"h-3 w-3"})})]})]})]},a.barcode)})})})]}),w.length>0&&(0,b.jsxs)(g.Card,{children:[(0,b.jsx)(g.CardHeader,{children:(0,b.jsx)(g.CardTitle,{children:"Total Pembayaran"})}),(0,b.jsxs)(g.CardContent,{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Subtotal:"}),(0,b.jsxs)("span",{children:["Rp ",w.reduce((a,b)=>a+b.price*b.quantity,0).toLocaleString()]})]}),ah()>0&&(0,b.jsxs)("div",{className:"flex justify-between text-red-600",children:[(0,b.jsx)("span",{children:"Diskon:"}),(0,b.jsxs)("span",{children:["-Rp ",ah().toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex justify-between font-bold text-lg border-t pt-2",children:[(0,b.jsx)("span",{children:"Total:"}),(0,b.jsxs)("span",{children:["Rp ",ag().toLocaleString()]})]})]}),(0,b.jsxs)(e.Button,{className:"w-full",onClick:()=>D(!0),disabled:0===w.length,children:[(0,b.jsx)(t,{className:"h-4 w-4 mr-2"}),"Proses Pembayaran"]})]})]})]})]}),(0,b.jsx)(i.Dialog,{open:C,onOpenChange:D,children:(0,b.jsxs)(i.DialogContent,{className:"max-w-md",children:[(0,b.jsx)(i.DialogHeader,{children:(0,b.jsx)(i.DialogTitle,{children:"Proses Pembayaran"})}),(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsx)("div",{className:"p-4 bg-gray-50 rounded",children:(0,b.jsxs)("div",{className:"flex justify-between font-bold text-lg",children:[(0,b.jsx)("span",{children:"Total Bayar:"}),(0,b.jsxs)("span",{children:["Rp ",ag().toLocaleString()]})]})}),(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(k.Label,{htmlFor:"paymentMethod",children:"Metode Pembayaran"}),(0,b.jsxs)(j.Select,{value:E,onValueChange:F,children:[(0,b.jsx)(j.SelectTrigger,{children:(0,b.jsx)(j.SelectValue,{})}),(0,b.jsxs)(j.SelectContent,{children:[(0,b.jsx)(j.SelectItem,{value:"cash",children:"Tunai"}),(0,b.jsx)(j.SelectItem,{value:"transfer",children:"Transfer"}),(0,b.jsx)(j.SelectItem,{value:"split",children:"Tunai + Transfer"})]})]})]}),("cash"===E||"split"===E)&&(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)(k.Label,{htmlFor:"cashAmount",children:"Jumlah Tunai"}),"cash"===E&&(0,b.jsx)(e.Button,{type:"button",size:"sm",variant:"outline",onClick:()=>ai("cash"),children:"Pas"})]}),(0,b.jsx)(f.Input,{id:"cashAmount",type:"number",value:G,onChange:a=>H(parseFloat(a.target.value)||0),placeholder:"0"})]}),("transfer"===E||"split"===E)&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)(k.Label,{htmlFor:"transferAmount",children:"Jumlah Transfer"}),"transfer"===E&&(0,b.jsx)(e.Button,{type:"button",size:"sm",variant:"outline",onClick:()=>ai("transfer"),children:"Pas"})]}),(0,b.jsx)(f.Input,{id:"transferAmount",type:"number",value:I,onChange:a=>J(parseFloat(a.target.value)||0),placeholder:"0"})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(k.Label,{htmlFor:"bankName",children:"Nama Bank"}),(0,b.jsx)(f.Input,{id:"bankName",value:K,onChange:a=>L(a.target.value),placeholder:"Contoh: BCA, Mandiri, BRI"})]})]}),G+I>ag()&&(0,b.jsx)("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("span",{children:"Kembalian:"}),(0,b.jsxs)("span",{className:"font-bold",children:["Rp ",(G+I-ag()).toLocaleString()]})]})})]}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)(e.Button,{variant:"outline",onClick:()=>D(!1),className:"flex-1",children:"Batal"}),(0,b.jsx)(e.Button,{onClick:aj,disabled:A||G+I<ag(),className:"flex-1",children:A?"Memproses...":"Bayar"})]})]})]})}),(0,b.jsx)(i.Dialog,{open:Q,onOpenChange:R,children:(0,b.jsxs)(i.DialogContent,{className:"max-w-md",children:[(0,b.jsx)(i.DialogHeader,{children:(0,b.jsx)(i.DialogTitle,{children:"Atur Diskon"})}),S&&(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"font-medium",children:S.name}),(0,b.jsxs)("p",{className:"text-sm text-gray-600",children:["Harga: Rp ",S.price.toLocaleString()]}),(0,b.jsxs)("p",{className:"text-sm text-gray-600",children:["Quantity: ",S.quantity]}),(0,b.jsxs)("p",{className:"text-sm text-gray-600",children:["Subtotal: Rp ",(S.price*S.quantity).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)(k.Label,{children:"Jenis Diskon"}),(0,b.jsxs)(j.Select,{value:W,onValueChange:a=>X(a),children:[(0,b.jsx)(j.SelectTrigger,{children:(0,b.jsx)(j.SelectValue,{})}),(0,b.jsxs)(j.SelectContent,{children:[(0,b.jsx)(j.SelectItem,{value:"percentage",children:"Persentase (%)"}),(0,b.jsx)(j.SelectItem,{value:"amount",children:"Nominal (Rp)"})]})]})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsxs)(k.Label,{htmlFor:"discountValue",children:["Nilai Diskon ","percentage"===W?"(%)":"(Rp)"]}),(0,b.jsx)(f.Input,{id:"discountValue",type:"number",value:U,onChange:a=>V(parseFloat(a.target.value)||0),placeholder:"0",min:"0",max:"percentage"===W?100:S.price*S.quantity})]}),U>0&&(0,b.jsxs)("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[(0,b.jsxs)("p",{className:"text-sm",children:["Diskon: ","percentage"===W?`${U}% = Rp ${(S.price*S.quantity*U/100).toLocaleString()}`:`Rp ${U.toLocaleString()}`]}),(0,b.jsxs)("p",{className:"text-sm font-bold",children:["Total setelah diskon: Rp ",(S.price*S.quantity-("percentage"===W?S.price*S.quantity*U/100:U)).toLocaleString()]})]}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)(e.Button,{variant:"outline",onClick:()=>R(!1),className:"flex-1",children:"Batal"}),(0,b.jsx)(e.Button,{onClick:()=>{S&&(x(w.map(a=>a.barcode===S.barcode?{...a,discount:U,discountType:W}:a)),R(!1),T(null),V(0))},className:"flex-1",children:"Terapkan Diskon"})]})]})]})}),(0,b.jsx)(i.Dialog,{open:O,onOpenChange:P,children:(0,b.jsxs)(i.DialogContent,{className:"max-w-md",children:[(0,b.jsx)(i.DialogHeader,{children:(0,b.jsx)(i.DialogTitle,{children:"Transaksi Berhasil"})}),(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)("div",{className:"text-green-600 text-lg font-bold",children:"✓ Pembayaran Berhasil"}),M&&(0,b.jsxs)("p",{className:"text-sm text-gray-600",children:["Kode Transaksi: ",M.code]})]}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)(e.Button,{variant:"outline",onClick:()=>P(!1),className:"flex-1",children:"Tutup"}),(0,b.jsxs)(e.Button,{onClick:()=>{let b,c,d,e,f,g,h;if(!M)return;let i=window.open("","_blank");if(!i)return;let j=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Struk Transaksi - ${M.code}</title>
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
            <h2>${Y?.storeName||"GITA FASHION"}</h2>
            <p>${Y?.storeAddress||"Jl. Fashion Street No. 123"}</p>
            <p>Telp: ${Y?.storePhone||"(021) 123-4567"}</p>
            <p>================================</p>
          </div>
          
          <div class="transaction-info">
            <div class="item"><span>No. Transaksi:</span><span>${M.code}</span></div>
            <div class="item"><span>Tanggal:</span><span>${new Date().toLocaleString("id-ID")}</span></div>
            <div class="item"><span>Kasir:</span><span>${a?.name||"Kasir"}</span></div>
            <p>================================</p>
          </div>

          <div class="items">
            ${(M.items||[]).map(a=>{let b="percentage"===a.discountType?a.price*a.quantity*a.discount/100:a.discount;return`
                <div class="item">
                  <span>${a.name}</span>
                </div>
                <div class="item">
                  <span>${a.quantity} x Rp ${a.price.toLocaleString("id-ID")}</span>
                  <span>Rp ${(a.quantity*a.price).toLocaleString("id-ID")}</span>
                </div>
                ${a.discount>0?`<div class="item"><span>Diskon ${"percentage"===a.discountType?a.discount+"%":"Rp "+a.discount.toLocaleString("id-ID")}:</span><span>-Rp ${b.toLocaleString("id-ID")}</span></div>`:""}
              `}).join("")}
          </div>

          <div class="total">
            ${(c=(b=M.items||[]).reduce((a,b)=>a+b.price*b.quantity,0),e=c-(d=b.reduce((a,b)=>a+("percentage"===b.discountType?b.price*b.quantity*b.discount/100:b.discount),0)),f=M.cashAmount||0,h=Math.max(0,f+(g=M.transferAmount||0)-e),`
                <div class="item"><span>Subtotal:</span><span>Rp ${c.toLocaleString("id-ID")}</span></div>
                ${d>0?`<div class="item"><span>Total Diskon:</span><span>-Rp ${d.toLocaleString("id-ID")}</span></div>`:""}
                <div class="item"><strong><span>TOTAL:</span><span>Rp ${e.toLocaleString("id-ID")}</span></strong></div>
                <p>================================</p>
                ${f>0?`<div class="item"><span>Tunai:</span><span>Rp ${f.toLocaleString("id-ID")}</span></div>`:""}
                ${g>0?`<div class="item"><span>Transfer:</span><span>Rp ${g.toLocaleString("id-ID")}</span></div>`:""}
                <div class="item"><span>Kembalian:</span><span>Rp ${h.toLocaleString("id-ID")}</span></div>
              `)}
          </div>

          <div class="footer">
            <p>${Y?.footerText||"Terima kasih atas kunjungan Anda!"}</p>
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
    `;i.document.open(),i.document.write(j),i.document.close()},className:"flex-1",children:[(0,b.jsx)(u.Printer,{className:"h-4 w-4 mr-2"}),"Cetak Struk"]})]})]})]})})]})}a.s(["default",()=>v],95259)}];

//# sourceMappingURL=src_app_dashboard_pos_page_tsx_d1e30dd3._.js.map