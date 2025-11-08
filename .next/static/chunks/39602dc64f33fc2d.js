(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3281,e=>{"use strict";let t=(0,e.i(75254).default)("printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);e.s(["Printer",()=>t],3281)},93479,48425,e=>{"use strict";var t=e.i(43476),a=e.i(932),n=e.i(75157);function s(e){let s,i,r,l,o,d=(0,a.c)(10);return d[0]!==e?({className:s,type:r,...i}=e,d[0]=e,d[1]=s,d[2]=i,d[3]=r):(s=d[1],i=d[2],r=d[3]),d[4]!==s?(l=(0,n.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),d[4]=s,d[5]=l):l=d[5],d[6]!==i||d[7]!==l||d[8]!==r?(o=(0,t.jsx)("input",{type:r,"data-slot":"input",className:l,...i}),d[6]=i,d[7]=l,d[8]=r,d[9]=o):o=d[9],o}e.s(["Input",()=>s],93479);var i=e.i(71645),r=e.i(74080),l=e.i(91918),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,a)=>{let n=(0,l.createSlot)(`Primitive.${a}`),s=i.forwardRef((e,s)=>{let{asChild:i,...r}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(i?n:a,{...r,ref:s})});return s.displayName=`Primitive.${a}`,{...e,[a]:s}},{});function d(e,t){e&&r.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>o,"dispatchDiscreteCustomEvent",()=>d],48425)},10204,e=>{"use strict";var t=e.i(43476),a=e.i(932),n=e.i(71645),s=e.i(48425),i=n.forwardRef((e,a)=>(0,t.jsx)(s.Primitive.label,{...e,ref:a,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var r=e.i(75157);function l(e){let n,s,l,o,d=(0,a.c)(8);return d[0]!==e?({className:n,...s}=e,d[0]=e,d[1]=n,d[2]=s):(n=d[1],s=d[2]),d[3]!==n?(l=(0,r.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),d[3]=n,d[4]=l):l=d[4],d[5]!==s||d[6]!==l?(o=(0,t.jsx)(i,{"data-slot":"label",className:l,...s}),d[5]=s,d[6]=l,d[7]=o):o=d[7],o}e.s(["Label",()=>l],10204)},76639,e=>{"use strict";var t=e.i(43476),a=e.i(932),n=e.i(71645),s=e.i(81140),i=e.i(20783),r=e.i(30030),l=e.i(10772),o=e.i(69340),d=e.i(26330),c=e.i(65491),p=e.i(74606),u=e.i(96626),m=e.i(48425),h=e.i(3536),x=e.i(85369),g=e.i(86312),f=e.i(91918),j="Dialog",[v,y]=(0,r.createContextScope)(j),[b,N]=v(j),w=e=>{let{__scopeDialog:a,children:s,open:i,defaultOpen:r,onOpenChange:d,modal:c=!0}=e,p=n.useRef(null),u=n.useRef(null),[m,h]=(0,o.useControllableState)({prop:i,defaultProp:r??!1,onChange:d,caller:j});return(0,t.jsx)(b,{scope:a,triggerRef:p,contentRef:u,contentId:(0,l.useId)(),titleId:(0,l.useId)(),descriptionId:(0,l.useId)(),open:m,onOpenChange:h,onOpenToggle:n.useCallback(()=>h(e=>!e),[h]),modal:c,children:s})};w.displayName=j;var k="DialogTrigger",C=n.forwardRef((e,a)=>{let{__scopeDialog:n,...r}=e,l=N(k,n),o=(0,i.useComposedRefs)(a,l.triggerRef);return(0,t.jsx)(m.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":K(l.open),...r,ref:o,onClick:(0,s.composeEventHandlers)(e.onClick,l.onOpenToggle)})});C.displayName=k;var S="DialogPortal",[T,D]=v(S,{forceMount:void 0}),R=e=>{let{__scopeDialog:a,forceMount:s,children:i,container:r}=e,l=N(S,a);return(0,t.jsx)(T,{scope:a,forceMount:s,children:n.Children.map(i,e=>(0,t.jsx)(u.Presence,{present:s||l.open,children:(0,t.jsx)(p.Portal,{asChild:!0,container:r,children:e})}))})};R.displayName=S;var P="DialogOverlay",I=n.forwardRef((e,a)=>{let n=D(P,e.__scopeDialog),{forceMount:s=n.forceMount,...i}=e,r=N(P,e.__scopeDialog);return r.modal?(0,t.jsx)(u.Presence,{present:s||r.open,children:(0,t.jsx)(L,{...i,ref:a})}):null});I.displayName=P;var $=(0,f.createSlot)("DialogOverlay.RemoveScroll"),L=n.forwardRef((e,a)=>{let{__scopeDialog:n,...s}=e,i=N(P,n);return(0,t.jsx)(x.RemoveScroll,{as:$,allowPinchZoom:!0,shards:[i.contentRef],children:(0,t.jsx)(m.Primitive.div,{"data-state":K(i.open),...s,ref:a,style:{pointerEvents:"auto",...s.style}})})}),z="DialogContent",B=n.forwardRef((e,a)=>{let n=D(z,e.__scopeDialog),{forceMount:s=n.forceMount,...i}=e,r=N(z,e.__scopeDialog);return(0,t.jsx)(u.Presence,{present:s||r.open,children:r.modal?(0,t.jsx)(A,{...i,ref:a}):(0,t.jsx)(q,{...i,ref:a})})});B.displayName=z;var A=n.forwardRef((e,a)=>{let r=N(z,e.__scopeDialog),l=n.useRef(null),o=(0,i.useComposedRefs)(a,r.contentRef,l);return n.useEffect(()=>{let e=l.current;if(e)return(0,g.hideOthers)(e)},[]),(0,t.jsx)(E,{...e,ref:o,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,s.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:(0,s.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,s.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),q=n.forwardRef((e,a)=>{let s=N(z,e.__scopeDialog),i=n.useRef(!1),r=n.useRef(!1);return(0,t.jsx)(E,{...e,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(i.current||s.triggerRef.current?.focus(),t.preventDefault()),i.current=!1,r.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(i.current=!0,"pointerdown"===t.detail.originalEvent.type&&(r.current=!0));let a=t.target;s.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})}),E=n.forwardRef((e,a)=>{let{__scopeDialog:s,trapFocus:r,onOpenAutoFocus:l,onCloseAutoFocus:o,...p}=e,u=N(z,s),m=n.useRef(null),x=(0,i.useComposedRefs)(a,m);return(0,h.useFocusGuards)(),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.FocusScope,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:l,onUnmountAutoFocus:o,children:(0,t.jsx)(d.DismissableLayer,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":K(u.open),...p,ref:x,onDismiss:()=>u.onOpenChange(!1)})}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U,{titleId:u.titleId}),(0,t.jsx)(Q,{contentRef:m,descriptionId:u.descriptionId})]})]})}),M="DialogTitle",F=n.forwardRef((e,a)=>{let{__scopeDialog:n,...s}=e,i=N(M,n);return(0,t.jsx)(m.Primitive.h2,{id:i.titleId,...s,ref:a})});F.displayName=M;var H="DialogDescription";n.forwardRef((e,a)=>{let{__scopeDialog:n,...s}=e,i=N(H,n);return(0,t.jsx)(m.Primitive.p,{id:i.descriptionId,...s,ref:a})}).displayName=H;var O="DialogClose",_=n.forwardRef((e,a)=>{let{__scopeDialog:n,...i}=e,r=N(O,n);return(0,t.jsx)(m.Primitive.button,{type:"button",...i,ref:a,onClick:(0,s.composeEventHandlers)(e.onClick,()=>r.onOpenChange(!1))})});function K(e){return e?"open":"closed"}_.displayName=O;var V="DialogTitleWarning",[J,G]=(0,r.createContext)(V,{contentName:z,titleName:M,docsSlug:"dialog"}),U=({titleId:e})=>{let t=G(V),a=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return n.useEffect(()=>{e&&(document.getElementById(e)||console.error(a))},[a,e]),null},Q=({contentRef:e,descriptionId:t})=>{let a=G("DialogDescriptionWarning"),s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${a.contentName}}.`;return n.useEffect(()=>{let a=e.current?.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(s))},[s,e,t]),null},W=e.i(41947),W=W,Y=e.i(75157);function Z(e){let n,s,i=(0,a.c)(4);return i[0]!==e?({...n}=e,i[0]=e,i[1]=n):n=i[1],i[2]!==n?(s=(0,t.jsx)(w,{"data-slot":"dialog",...n}),i[2]=n,i[3]=s):s=i[3],s}function X(e){let n,s,i=(0,a.c)(4);return i[0]!==e?({...n}=e,i[0]=e,i[1]=n):n=i[1],i[2]!==n?(s=(0,t.jsx)(C,{"data-slot":"dialog-trigger",...n}),i[2]=n,i[3]=s):s=i[3],s}function ee(e){let n,s,i=(0,a.c)(4);return i[0]!==e?({...n}=e,i[0]=e,i[1]=n):n=i[1],i[2]!==n?(s=(0,t.jsx)(R,{"data-slot":"dialog-portal",...n}),i[2]=n,i[3]=s):s=i[3],s}function et(e){let n,s,i,r,l=(0,a.c)(8);return l[0]!==e?({className:n,...s}=e,l[0]=e,l[1]=n,l[2]=s):(n=l[1],s=l[2]),l[3]!==n?(i=(0,Y.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),l[3]=n,l[4]=i):i=l[4],l[5]!==s||l[6]!==i?(r=(0,t.jsx)(I,{"data-slot":"dialog-overlay",className:i,...s}),l[5]=s,l[6]=i,l[7]=r):r=l[7],r}function ea(e){let n,s,i,r,l,o,d,c,p=(0,a.c)(15);p[0]!==e?({className:s,children:n,showCloseButton:r,...i}=e,p[0]=e,p[1]=n,p[2]=s,p[3]=i,p[4]=r):(n=p[1],s=p[2],i=p[3],r=p[4]);let u=void 0===r||r;return p[5]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)(et,{}),p[5]=l):l=p[5],p[6]!==s?(o=(0,Y.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",s),p[6]=s,p[7]=o):o=p[7],p[8]!==u?(d=u&&(0,t.jsxs)(_,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,t.jsx)(W.default,{}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]}),p[8]=u,p[9]=d):d=p[9],p[10]!==n||p[11]!==i||p[12]!==o||p[13]!==d?(c=(0,t.jsxs)(ee,{"data-slot":"dialog-portal",children:[l,(0,t.jsxs)(B,{"data-slot":"dialog-content",className:o,...i,children:[n,d]})]}),p[10]=n,p[11]=i,p[12]=o,p[13]=d,p[14]=c):c=p[14],c}function en(e){let n,s,i,r,l=(0,a.c)(8);return l[0]!==e?({className:n,...s}=e,l[0]=e,l[1]=n,l[2]=s):(n=l[1],s=l[2]),l[3]!==n?(i=(0,Y.cn)("flex flex-col gap-2 text-center sm:text-left",n),l[3]=n,l[4]=i):i=l[4],l[5]!==s||l[6]!==i?(r=(0,t.jsx)("div",{"data-slot":"dialog-header",className:i,...s}),l[5]=s,l[6]=i,l[7]=r):r=l[7],r}function es(e){let n,s,i,r,l=(0,a.c)(8);return l[0]!==e?({className:n,...s}=e,l[0]=e,l[1]=n,l[2]=s):(n=l[1],s=l[2]),l[3]!==n?(i=(0,Y.cn)("text-lg leading-none font-semibold",n),l[3]=n,l[4]=i):i=l[4],l[5]!==s||l[6]!==i?(r=(0,t.jsx)(F,{"data-slot":"dialog-title",className:i,...s}),l[5]=s,l[6]=i,l[7]=r):r=l[7],r}e.s(["Dialog",()=>Z,"DialogContent",()=>ea,"DialogHeader",()=>en,"DialogTitle",()=>es,"DialogTrigger",()=>X],76639)},27612,e=>{"use strict";let t=(0,e.i(75254).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);e.s(["Trash2",()=>t],27612)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},5271,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(67181),s=e.i(19455),i=e.i(93479),r=e.i(15288),l=e.i(84774),o=e.i(76639),d=e.i(67489),c=e.i(10204),p=e.i(87486),u=e.i(27612),m=e.i(7233),h=e.i(75254);let x=(0,h.default)("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var g=e.i(1928);let f=(0,h.default)("scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);var j=e.i(88844);let v=(0,h.default)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);var y=e.i(3281);function b(){let{user:e}=(0,n.useAuth)(),[h,b]=(0,a.useState)(""),[N,w]=(0,a.useState)([]),[k,C]=(0,a.useState)([]),[S,T]=(0,a.useState)(!1),[D,R]=(0,a.useState)(!1),[P,I]=(0,a.useState)("cash"),[$,L]=(0,a.useState)(0),[z,B]=(0,a.useState)(0),[A,q]=(0,a.useState)(""),[E,M]=(0,a.useState)(null),[F,H]=(0,a.useState)(!1),[O,_]=(0,a.useState)(!1),[K,V]=(0,a.useState)(null),[J,G]=(0,a.useState)(0),[U,Q]=(0,a.useState)("percentage"),[W,Y]=(0,a.useState)(null);(0,a.useEffect)(()=>{X(),Z()},[]);let Z=async()=>{try{let e=await fetch("/api/settings/public");if(e.ok){let t=await e.json();Y(t)}}catch(e){console.error("Error fetching store settings:",e)}},X=async()=>{try{let e=await fetch("/api/products",{credentials:"include"});if(e.ok){let t=await e.json();C(Array.isArray(t)?t.slice(0,10):[])}}catch(e){console.error("Error fetching products:",e),C([])}},ee=e=>{if(e.currentStock<=0)return void alert("Stok produk habis!");let t=N.find(t=>t.barcode===e.barcode);if(t){if(t.quantity>=e.currentStock)return void alert("Quantity melebihi stok yang tersedia!");w(N.map(t=>t.barcode===e.barcode?{...t,quantity:t.quantity+1}:t))}else w([...N,{id:e.id,barcode:e.barcode,name:e.name,price:e.sellPrice,quantity:1,discount:0,discountType:"percentage"}])},et=async()=>{if(h.trim())try{let e=await fetch(`/api/products/${h}`,{credentials:"include"});if(e.ok){let t=await e.json();ee(t),b("")}else alert("Produk tidak ditemukan!")}catch(e){console.error("Error scanning barcode:",e),alert("Terjadi kesalahan saat scan barcode")}},ea=(e,t)=>{if(t<=0)return void en(e);let a=k.find(t=>t.barcode===e);a&&t>a.currentStock?alert("Quantity melebihi stok yang tersedia!"):w(N.map(a=>a.barcode===e?{...a,quantity:t}:a))},en=e=>{w(N.filter(t=>t.barcode!==e))},es=()=>{w([])},ei=e=>{let t=e.price*e.quantity;return"percentage"===e.discountType?t*e.discount/100:e.discount},er=()=>N.reduce((e,t)=>e+t.price*t.quantity-ei(t),0),el=()=>N.reduce((e,t)=>e+ei(t),0),eo=e=>{let t=er();"cash"===e?(L(t),B(0)):"transfer"===e&&(B(t),L(0))},ed=async()=>{if(0===N.length)return void alert("Keranjang kosong!");if($+z<er())return void alert("Jumlah pembayaran kurang!");T(!0);try{let t={items:N.map(e=>({barcode:e.barcode,name:e.name,quantity:e.quantity,price:e.price,discount:e.discount,discountPercent:"percentage"===e.discountType?e.discount:0,discountAmount:ei(e)})),cashAmount:$,transferAmount:z,bankName:z>0?A:null},a=await fetch("/api/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"});if(a.ok){let t={...await a.json(),items:N,cashAmount:$,transferAmount:z,user:e};M(t),R(!1),H(!0),es(),L(0),B(0),q(""),alert("Transaksi berhasil!")}else{let e=await a.json();alert(`Gagal memproses transaksi: ${e.error||"Unknown error"}`)}}catch(e){console.error("Error processing payment:",e),alert("Terjadi kesalahan saat memproses pembayaran")}finally{T(!1)}};return(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Point of Sale"}),(0,t.jsx)("p",{className:"text-gray-600",children:"Sistem kasir Gita Fashion"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsxs)(r.CardTitle,{className:"flex items-center gap-2",children:[(0,t.jsx)(f,{className:"h-5 w-5"}),"Scanner Barcode"]})}),(0,t.jsx)(r.CardContent,{children:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(i.Input,{placeholder:"Scan atau ketik barcode produk...",value:h,onChange:e=>b(e.target.value),onKeyPress:e=>"Enter"===e.key&&et(),className:"flex-1"}),(0,t.jsx)(s.Button,{onClick:et,children:(0,t.jsx)(f,{className:"h-4 w-4"})})]})})]}),(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsxs)(r.CardTitle,{className:"flex items-center gap-2",children:[(0,t.jsx)(j.Package,{className:"h-5 w-5"}),"Produk Populer"]})}),(0,t.jsx)(r.CardContent,{children:0===k.length?(0,t.jsx)("div",{className:"text-center py-8 text-gray-500",children:"Tidak ada produk tersedia"}):(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)(l.Table,{children:[(0,t.jsx)(l.TableHeader,{children:(0,t.jsxs)(l.TableRow,{children:[(0,t.jsx)(l.TableHead,{children:"Barcode"}),(0,t.jsx)(l.TableHead,{children:"Nama Produk"}),(0,t.jsx)(l.TableHead,{children:"Kategori"}),(0,t.jsx)(l.TableHead,{children:"Stok"}),(0,t.jsx)(l.TableHead,{children:"Harga"}),(0,t.jsx)(l.TableHead,{children:"Aksi"})]})}),(0,t.jsx)(l.TableBody,{children:k.map(e=>(0,t.jsxs)(l.TableRow,{children:[(0,t.jsx)(l.TableCell,{className:"font-mono text-sm",children:e.barcode}),(0,t.jsx)(l.TableCell,{className:"font-medium",children:e.name}),(0,t.jsx)(l.TableCell,{children:e.category}),(0,t.jsx)(l.TableCell,{children:(0,t.jsx)(p.Badge,{variant:e.currentStock<=5?"destructive":"secondary",children:e.currentStock})}),(0,t.jsxs)(l.TableCell,{children:["Rp ",e.sellPrice.toLocaleString()]}),(0,t.jsx)(l.TableCell,{children:(0,t.jsx)(s.Button,{size:"sm",onClick:()=>ee(e),disabled:e.currentStock<=0,children:(0,t.jsx)(m.Plus,{className:"h-4 w-4"})})})]},e.id))})]})})})]})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsxs)(r.CardTitle,{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(g.ShoppingCart,{className:"h-5 w-5"}),"Keranjang (",N.length,")"]}),N.length>0&&(0,t.jsx)(s.Button,{variant:"outline",size:"sm",onClick:es,children:(0,t.jsx)(u.Trash2,{className:"h-4 w-4"})})]})}),(0,t.jsx)(r.CardContent,{children:0===N.length?(0,t.jsx)("div",{className:"text-center py-8 text-gray-500",children:"Keranjang kosong"}):(0,t.jsx)("div",{className:"space-y-4",children:N.map(e=>{let a=e.price*e.quantity,n=ei(e),i=a-n;return(0,t.jsxs)("div",{className:"p-3 border rounded space-y-2",children:[(0,t.jsx)("div",{className:"flex items-start justify-between",children:(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h4",{className:"font-medium text-sm",children:e.name}),(0,t.jsx)("p",{className:"text-xs text-gray-500",children:e.barcode}),(0,t.jsxs)("p",{className:"text-sm",children:["Rp ",e.price.toLocaleString()," x ",e.quantity]}),e.discount>0&&(0,t.jsxs)("p",{className:"text-xs text-red-600",children:["Diskon: ","percentage"===e.discountType?`${e.discount}%`:`Rp ${e.discount.toLocaleString()}`," ","(-Rp ",n.toLocaleString(),")"]}),(0,t.jsxs)("p",{className:"text-sm font-bold",children:["Total: Rp ",i.toLocaleString()]})]})}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(s.Button,{size:"sm",variant:"outline",onClick:()=>ea(e.barcode,e.quantity-1),children:(0,t.jsx)(x,{className:"h-3 w-3"})}),(0,t.jsx)("span",{className:"w-8 text-center text-sm",children:e.quantity}),(0,t.jsx)(s.Button,{size:"sm",variant:"outline",onClick:()=>ea(e.barcode,e.quantity+1),children:(0,t.jsx)(m.Plus,{className:"h-3 w-3"})})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(s.Button,{size:"sm",variant:"outline",onClick:()=>{V(e),G(e.discount),Q(e.discountType),_(!0)},title:"Diskon",children:"%"}),(0,t.jsx)(s.Button,{size:"sm",variant:"destructive",onClick:()=>en(e.barcode),children:(0,t.jsx)(u.Trash2,{className:"h-3 w-3"})})]})]})]},e.barcode)})})})]}),N.length>0&&(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsx)(r.CardTitle,{children:"Total Pembayaran"})}),(0,t.jsxs)(r.CardContent,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Subtotal:"}),(0,t.jsxs)("span",{children:["Rp ",N.reduce((e,t)=>e+t.price*t.quantity,0).toLocaleString()]})]}),el()>0&&(0,t.jsxs)("div",{className:"flex justify-between text-red-600",children:[(0,t.jsx)("span",{children:"Diskon:"}),(0,t.jsxs)("span",{children:["-Rp ",el().toLocaleString()]})]}),(0,t.jsxs)("div",{className:"flex justify-between font-bold text-lg border-t pt-2",children:[(0,t.jsx)("span",{children:"Total:"}),(0,t.jsxs)("span",{children:["Rp ",er().toLocaleString()]})]})]}),(0,t.jsxs)(s.Button,{className:"w-full",onClick:()=>R(!0),disabled:0===N.length,children:[(0,t.jsx)(v,{className:"h-4 w-4 mr-2"}),"Proses Pembayaran"]})]})]})]})]}),(0,t.jsx)(o.Dialog,{open:D,onOpenChange:R,children:(0,t.jsxs)(o.DialogContent,{className:"max-w-md",children:[(0,t.jsx)(o.DialogHeader,{children:(0,t.jsx)(o.DialogTitle,{children:"Proses Pembayaran"})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("div",{className:"p-4 bg-gray-50 rounded",children:(0,t.jsxs)("div",{className:"flex justify-between font-bold text-lg",children:[(0,t.jsx)("span",{children:"Total Bayar:"}),(0,t.jsxs)("span",{children:["Rp ",er().toLocaleString()]})]})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Label,{htmlFor:"paymentMethod",children:"Metode Pembayaran"}),(0,t.jsxs)(d.Select,{value:P,onValueChange:I,children:[(0,t.jsx)(d.SelectTrigger,{children:(0,t.jsx)(d.SelectValue,{})}),(0,t.jsxs)(d.SelectContent,{children:[(0,t.jsx)(d.SelectItem,{value:"cash",children:"Tunai"}),(0,t.jsx)(d.SelectItem,{value:"transfer",children:"Transfer"}),(0,t.jsx)(d.SelectItem,{value:"split",children:"Tunai + Transfer"})]})]})]}),("cash"===P||"split"===P)&&(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(c.Label,{htmlFor:"cashAmount",children:"Jumlah Tunai"}),"cash"===P&&(0,t.jsx)(s.Button,{type:"button",size:"sm",variant:"outline",onClick:()=>eo("cash"),children:"Pas"})]}),(0,t.jsx)(i.Input,{id:"cashAmount",type:"number",value:$,onChange:e=>L(parseFloat(e.target.value)||0),placeholder:"0"})]}),("transfer"===P||"split"===P)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(c.Label,{htmlFor:"transferAmount",children:"Jumlah Transfer"}),"transfer"===P&&(0,t.jsx)(s.Button,{type:"button",size:"sm",variant:"outline",onClick:()=>eo("transfer"),children:"Pas"})]}),(0,t.jsx)(i.Input,{id:"transferAmount",type:"number",value:z,onChange:e=>B(parseFloat(e.target.value)||0),placeholder:"0"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Label,{htmlFor:"bankName",children:"Nama Bank"}),(0,t.jsx)(i.Input,{id:"bankName",value:A,onChange:e=>q(e.target.value),placeholder:"Contoh: BCA, Mandiri, BRI"})]})]}),$+z>er()&&(0,t.jsx)("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Kembalian:"}),(0,t.jsxs)("span",{className:"font-bold",children:["Rp ",($+z-er()).toLocaleString()]})]})})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(s.Button,{variant:"outline",onClick:()=>R(!1),className:"flex-1",children:"Batal"}),(0,t.jsx)(s.Button,{onClick:ed,disabled:S||$+z<er(),className:"flex-1",children:S?"Memproses...":"Bayar"})]})]})]})}),(0,t.jsx)(o.Dialog,{open:O,onOpenChange:_,children:(0,t.jsxs)(o.DialogContent,{className:"max-w-md",children:[(0,t.jsx)(o.DialogHeader,{children:(0,t.jsx)(o.DialogTitle,{children:"Atur Diskon"})}),K&&(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium",children:K.name}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Harga: Rp ",K.price.toLocaleString()]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Quantity: ",K.quantity]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Subtotal: Rp ",(K.price*K.quantity).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Label,{children:"Jenis Diskon"}),(0,t.jsxs)(d.Select,{value:U,onValueChange:e=>Q(e),children:[(0,t.jsx)(d.SelectTrigger,{children:(0,t.jsx)(d.SelectValue,{})}),(0,t.jsxs)(d.SelectContent,{children:[(0,t.jsx)(d.SelectItem,{value:"percentage",children:"Persentase (%)"}),(0,t.jsx)(d.SelectItem,{value:"amount",children:"Nominal (Rp)"})]})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)(c.Label,{htmlFor:"discountValue",children:["Nilai Diskon ","percentage"===U?"(%)":"(Rp)"]}),(0,t.jsx)(i.Input,{id:"discountValue",type:"number",value:J,onChange:e=>G(parseFloat(e.target.value)||0),placeholder:"0",min:"0",max:"percentage"===U?100:K.price*K.quantity})]}),J>0&&(0,t.jsxs)("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[(0,t.jsxs)("p",{className:"text-sm",children:["Diskon: ","percentage"===U?`${J}% = Rp ${(K.price*K.quantity*J/100).toLocaleString()}`:`Rp ${J.toLocaleString()}`]}),(0,t.jsxs)("p",{className:"text-sm font-bold",children:["Total setelah diskon: Rp ",(K.price*K.quantity-("percentage"===U?K.price*K.quantity*J/100:J)).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(s.Button,{variant:"outline",onClick:()=>_(!1),className:"flex-1",children:"Batal"}),(0,t.jsx)(s.Button,{onClick:()=>{K&&(w(N.map(e=>e.barcode===K.barcode?{...e,discount:J,discountType:U}:e)),_(!1),V(null),G(0))},className:"flex-1",children:"Terapkan Diskon"})]})]})]})}),(0,t.jsx)(o.Dialog,{open:F,onOpenChange:H,children:(0,t.jsxs)(o.DialogContent,{className:"max-w-md",children:[(0,t.jsx)(o.DialogHeader,{children:(0,t.jsx)(o.DialogTitle,{children:"Transaksi Berhasil"})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"text-green-600 text-lg font-bold",children:"✓ Pembayaran Berhasil"}),E&&(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Kode Transaksi: ",E.code]})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(s.Button,{variant:"outline",onClick:()=>H(!1),className:"flex-1",children:"Tutup"}),(0,t.jsxs)(s.Button,{onClick:()=>{let t,a,n,s,i,r,l;if(!E)return;let o=window.open("","_blank");if(!o)return;let d=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Struk Transaksi - ${E.code}</title>
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
            <h2>${W?.storeName||"GITA FASHION"}</h2>
            <p>${W?.storeAddress||"Jl. Fashion Street No. 123"}</p>
            <p>Telp: ${W?.storePhone||"(021) 123-4567"}</p>
            <p>================================</p>
          </div>
          
          <div class="transaction-info">
            <div class="item"><span>No. Transaksi:</span><span>${E.code}</span></div>
            <div class="item"><span>Tanggal:</span><span>${new Date().toLocaleString("id-ID")}</span></div>
            <div class="item"><span>Kasir:</span><span>${e?.name||"Kasir"}</span></div>
            <p>================================</p>
          </div>

          <div class="items">
            ${(E.items||[]).map(e=>{let t="percentage"===e.discountType?e.price*e.quantity*e.discount/100:e.discount;return`
                <div class="item">
                  <span>${e.name}</span>
                </div>
                <div class="item">
                  <span>${e.quantity} x Rp ${e.price.toLocaleString("id-ID")}</span>
                  <span>Rp ${(e.quantity*e.price).toLocaleString("id-ID")}</span>
                </div>
                ${e.discount>0?`<div class="item"><span>Diskon ${"percentage"===e.discountType?e.discount+"%":"Rp "+e.discount.toLocaleString("id-ID")}:</span><span>-Rp ${t.toLocaleString("id-ID")}</span></div>`:""}
              `}).join("")}
          </div>

          <div class="total">
            ${(a=(t=E.items||[]).reduce((e,t)=>e+t.price*t.quantity,0),s=a-(n=t.reduce((e,t)=>e+("percentage"===t.discountType?t.price*t.quantity*t.discount/100:t.discount),0)),i=E.cashAmount||0,l=Math.max(0,i+(r=E.transferAmount||0)-s),`
                <div class="item"><span>Subtotal:</span><span>Rp ${a.toLocaleString("id-ID")}</span></div>
                ${n>0?`<div class="item"><span>Total Diskon:</span><span>-Rp ${n.toLocaleString("id-ID")}</span></div>`:""}
                <div class="item"><strong><span>TOTAL:</span><span>Rp ${s.toLocaleString("id-ID")}</span></strong></div>
                <p>================================</p>
                ${i>0?`<div class="item"><span>Tunai:</span><span>Rp ${i.toLocaleString("id-ID")}</span></div>`:""}
                ${r>0?`<div class="item"><span>Transfer:</span><span>Rp ${r.toLocaleString("id-ID")}</span></div>`:""}
                <div class="item"><span>Kembalian:</span><span>Rp ${l.toLocaleString("id-ID")}</span></div>
              `)}
          </div>

          <div class="footer">
            <p>${W?.footerText||"Terima kasih atas kunjungan Anda!"}</p>
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
    `;o.document.open(),o.document.write(d),o.document.close()},className:"flex-1",children:[(0,t.jsx)(y.Printer,{className:"h-4 w-4 mr-2"}),"Cetak Struk"]})]})]})]})})]})}e.s(["default",()=>b],5271)}]);