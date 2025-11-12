(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3281,e=>{"use strict";let t=(0,e.i(75254).default)("printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);e.s(["Printer",()=>t],3281)},93479,48425,e=>{"use strict";var t=e.i(43476),a=e.i(75157);function n({className:e,type:n,...i}){return(0,t.jsx)("input",{type:n,"data-slot":"input",className:(0,a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...i})}e.s(["Input",()=>n],93479);var i=e.i(71645),s=e.i(74080),r=e.i(91918),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,a)=>{let n=(0,r.createSlot)(`Primitive.${a}`),s=i.forwardRef((e,i)=>{let{asChild:s,...r}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(s?n:a,{...r,ref:i})});return s.displayName=`Primitive.${a}`,{...e,[a]:s}},{});function l(e,t){e&&s.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>o,"dispatchDiscreteCustomEvent",()=>l],48425)},10204,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(48425),i=a.forwardRef((e,a)=>(0,t.jsx)(n.Primitive.label,{...e,ref:a,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var s=e.i(75157);function r({className:e,...a}){return(0,t.jsx)(i,{"data-slot":"label",className:(0,s.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...a})}e.s(["Label",()=>r],10204)},96626,e=>{"use strict";var t=e.i(71645),a=e.i(20783),n=e.i(34620),i=e=>{var i;let r,o,{present:l,children:d}=e,c=function(e){var a,i;let[r,o]=t.useState(),l=t.useRef(null),d=t.useRef(e),c=t.useRef("none"),[p,u]=(a=e?"mounted":"unmounted",i={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,t)=>i[e][t]??e,a));return t.useEffect(()=>{let e=s(l.current);c.current="mounted"===p?e:"none"},[p]),(0,n.useLayoutEffect)(()=>{let t=l.current,a=d.current;if(a!==e){let n=c.current,i=s(t);e?u("MOUNT"):"none"===i||t?.display==="none"?u("UNMOUNT"):a&&n!==i?u("ANIMATION_OUT"):u("UNMOUNT"),d.current=e}},[e,u]),(0,n.useLayoutEffect)(()=>{if(r){let e,t=r.ownerDocument.defaultView??window,a=a=>{let n=s(l.current).includes(CSS.escape(a.animationName));if(a.target===r&&n&&(u("ANIMATION_END"),!d.current)){let a=r.style.animationFillMode;r.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=a)})}},n=e=>{e.target===r&&(c.current=s(l.current))};return r.addEventListener("animationstart",n),r.addEventListener("animationcancel",a),r.addEventListener("animationend",a),()=>{t.clearTimeout(e),r.removeEventListener("animationstart",n),r.removeEventListener("animationcancel",a),r.removeEventListener("animationend",a)}}u("ANIMATION_END")},[r,u]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:t.useCallback(e=>{l.current=e?getComputedStyle(e):null,o(e)},[])}}(l),p="function"==typeof d?d({present:c.isPresent}):t.Children.only(d),u=(0,a.useComposedRefs)(c.ref,(i=p,(o=(r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?i.ref:(o=(r=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?i.props.ref:i.props.ref||i.ref));return"function"==typeof d||c.isPresent?t.cloneElement(p,{ref:u}):null};function s(e){return e?.animationName||"none"}i.displayName="Presence",e.s(["Presence",()=>i])},87486,e=>{"use strict";var t=e.i(43476),a=e.i(91918),n=e.i(25913),i=e.i(75157);let s=(0,n.cva)("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function r({className:e,variant:n,asChild:r=!1,...o}){let l=r?a.Slot:"span";return(0,t.jsx)(l,{"data-slot":"badge",className:(0,i.cn)(s({variant:n}),e),...o})}e.s(["Badge",()=>r])},76639,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(81140),i=e.i(20783),s=e.i(30030),r=e.i(10772),o=e.i(69340),l=e.i(26330),d=e.i(65491),c=e.i(74606),p=e.i(96626),u=e.i(48425),m=e.i(3536),h=e.i(85369),x=e.i(86312),g=e.i(91918),f="Dialog",[v,j]=(0,s.createContextScope)(f),[y,b]=v(f),N=e=>{let{__scopeDialog:n,children:i,open:s,defaultOpen:l,onOpenChange:d,modal:c=!0}=e,p=a.useRef(null),u=a.useRef(null),[m,h]=(0,o.useControllableState)({prop:s,defaultProp:l??!1,onChange:d,caller:f});return(0,t.jsx)(y,{scope:n,triggerRef:p,contentRef:u,contentId:(0,r.useId)(),titleId:(0,r.useId)(),descriptionId:(0,r.useId)(),open:m,onOpenChange:h,onOpenToggle:a.useCallback(()=>h(e=>!e),[h]),modal:c,children:i})};N.displayName=f;var w="DialogTrigger",k=a.forwardRef((e,a)=>{let{__scopeDialog:s,...r}=e,o=b(w,s),l=(0,i.useComposedRefs)(a,o.triggerRef);return(0,t.jsx)(u.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":_(o.open),...r,ref:l,onClick:(0,n.composeEventHandlers)(e.onClick,o.onOpenToggle)})});k.displayName=w;var S="DialogPortal",[T,C]=v(S,{forceMount:void 0}),D=e=>{let{__scopeDialog:n,forceMount:i,children:s,container:r}=e,o=b(S,n);return(0,t.jsx)(T,{scope:n,forceMount:i,children:a.Children.map(s,e=>(0,t.jsx)(p.Presence,{present:i||o.open,children:(0,t.jsx)(c.Portal,{asChild:!0,container:r,children:e})}))})};D.displayName=S;var R="DialogOverlay",P=a.forwardRef((e,a)=>{let n=C(R,e.__scopeDialog),{forceMount:i=n.forceMount,...s}=e,r=b(R,e.__scopeDialog);return r.modal?(0,t.jsx)(p.Presence,{present:i||r.open,children:(0,t.jsx)(L,{...s,ref:a})}):null});P.displayName=R;var I=(0,g.createSlot)("DialogOverlay.RemoveScroll"),L=a.forwardRef((e,a)=>{let{__scopeDialog:n,...i}=e,s=b(R,n);return(0,t.jsx)(h.RemoveScroll,{as:I,allowPinchZoom:!0,shards:[s.contentRef],children:(0,t.jsx)(u.Primitive.div,{"data-state":_(s.open),...i,ref:a,style:{pointerEvents:"auto",...i.style}})})}),M="DialogContent",O=a.forwardRef((e,a)=>{let n=C(M,e.__scopeDialog),{forceMount:i=n.forceMount,...s}=e,r=b(M,e.__scopeDialog);return(0,t.jsx)(p.Presence,{present:i||r.open,children:r.modal?(0,t.jsx)(A,{...s,ref:a}):(0,t.jsx)(E,{...s,ref:a})})});O.displayName=M;var A=a.forwardRef((e,s)=>{let r=b(M,e.__scopeDialog),o=a.useRef(null),l=(0,i.useComposedRefs)(s,r.contentRef,o);return a.useEffect(()=>{let e=o.current;if(e)return(0,x.hideOthers)(e)},[]),(0,t.jsx)($,{...e,ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,n.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:(0,n.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,n.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),E=a.forwardRef((e,n)=>{let i=b(M,e.__scopeDialog),s=a.useRef(!1),r=a.useRef(!1);return(0,t.jsx)($,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(s.current||i.triggerRef.current?.focus(),t.preventDefault()),s.current=!1,r.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(s.current=!0,"pointerdown"===t.detail.originalEvent.type&&(r.current=!0));let a=t.target;i.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})}),$=a.forwardRef((e,n)=>{let{__scopeDialog:s,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:c,...p}=e,u=b(M,s),h=a.useRef(null),x=(0,i.useComposedRefs)(n,h);return(0,m.useFocusGuards)(),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.FocusScope,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:c,children:(0,t.jsx)(l.DismissableLayer,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":_(u.open),...p,ref:x,onDismiss:()=>u.onOpenChange(!1)})}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W,{titleId:u.titleId}),(0,t.jsx)(J,{contentRef:h,descriptionId:u.descriptionId})]})]})}),z="DialogTitle",B=a.forwardRef((e,a)=>{let{__scopeDialog:n,...i}=e,s=b(z,n);return(0,t.jsx)(u.Primitive.h2,{id:s.titleId,...i,ref:a})});B.displayName=z;var F="DialogDescription";a.forwardRef((e,a)=>{let{__scopeDialog:n,...i}=e,s=b(F,n);return(0,t.jsx)(u.Primitive.p,{id:s.descriptionId,...i,ref:a})}).displayName=F;var q="DialogClose",H=a.forwardRef((e,a)=>{let{__scopeDialog:i,...s}=e,r=b(q,i);return(0,t.jsx)(u.Primitive.button,{type:"button",...s,ref:a,onClick:(0,n.composeEventHandlers)(e.onClick,()=>r.onOpenChange(!1))})});function _(e){return e?"open":"closed"}H.displayName=q;var U="DialogTitleWarning",[K,V]=(0,s.createContext)(U,{contentName:M,titleName:z,docsSlug:"dialog"}),W=({titleId:e})=>{let t=V(U),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return a.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},J=({contentRef:e,descriptionId:t})=>{let n=V("DialogDescriptionWarning"),i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return a.useEffect(()=>{let a=e.current?.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(i))},[i,e,t]),null},G=e.i(41947),G=G,Q=e.i(75157);function Y({...e}){return(0,t.jsx)(N,{"data-slot":"dialog",...e})}function Z({...e}){return(0,t.jsx)(k,{"data-slot":"dialog-trigger",...e})}function X({...e}){return(0,t.jsx)(D,{"data-slot":"dialog-portal",...e})}function ee({className:e,...a}){return(0,t.jsx)(P,{"data-slot":"dialog-overlay",className:(0,Q.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...a})}function et({className:e,children:a,showCloseButton:n=!0,...i}){return(0,t.jsxs)(X,{"data-slot":"dialog-portal",children:[(0,t.jsx)(ee,{}),(0,t.jsxs)(O,{"data-slot":"dialog-content",className:(0,Q.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...i,children:[a,n&&(0,t.jsxs)(H,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,t.jsx)(G.default,{}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function ea({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"dialog-header",className:(0,Q.cn)("flex flex-col gap-2 text-center sm:text-left",e),...a})}function en({className:e,...a}){return(0,t.jsx)(B,{"data-slot":"dialog-title",className:(0,Q.cn)("text-lg leading-none font-semibold",e),...a})}e.s(["Dialog",()=>Y,"DialogContent",()=>et,"DialogHeader",()=>ea,"DialogTitle",()=>en,"DialogTrigger",()=>Z],76639)},27612,e=>{"use strict";let t=(0,e.i(75254).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);e.s(["Trash2",()=>t],27612)},7233,e=>{"use strict";let t=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],7233)},5271,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(67181),i=e.i(19455),s=e.i(93479),r=e.i(15288),o=e.i(84774),l=e.i(76639),d=e.i(67489),c=e.i(10204),p=e.i(87486),u=e.i(27612),m=e.i(7233),h=e.i(75254);let x=(0,h.default)("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);var g=e.i(1928);let f=(0,h.default)("scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);var v=e.i(88844);let j=(0,h.default)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);var y=e.i(3281);function b(){let{user:e}=(0,n.useAuth)(),[h,b]=(0,a.useState)(""),[N,w]=(0,a.useState)([]),[k,S]=(0,a.useState)([]),[T,C]=(0,a.useState)(!1),[D,R]=(0,a.useState)(!1),[P,I]=(0,a.useState)("cash"),[L,M]=(0,a.useState)(0),[O,A]=(0,a.useState)(0),[E,$]=(0,a.useState)(""),[z,B]=(0,a.useState)(null),[F,q]=(0,a.useState)(!1),[H,_]=(0,a.useState)(!1),[U,K]=(0,a.useState)(null),[V,W]=(0,a.useState)(0),[J,G]=(0,a.useState)("percentage"),[Q,Y]=(0,a.useState)(null);(0,a.useEffect)(()=>{X(),Z()},[]);let Z=async()=>{try{let e=await fetch("/api/settings/public");if(e.ok){let t=await e.json();Y(t)}}catch(e){console.error("Error fetching store settings:",e)}},X=async()=>{try{let e=await fetch("/api/products",{credentials:"include"});if(e.ok){let t=await e.json();S(Array.isArray(t)?t.slice(0,10):[])}}catch(e){console.error("Error fetching products:",e),S([])}},ee=e=>{if(e.currentStock<=0)return void alert("Stok produk habis!");let t=N.find(t=>t.barcode===e.barcode);if(t){if(t.quantity>=e.currentStock)return void alert("Quantity melebihi stok yang tersedia!");w(N.map(t=>t.barcode===e.barcode?{...t,quantity:t.quantity+1}:t))}else w([...N,{id:e.id,barcode:e.barcode,name:e.name,price:e.sellPrice,quantity:1,discount:0,discountType:"percentage"}])},et=async()=>{if(h.trim())try{let e=await fetch(`/api/products/${h}`,{credentials:"include"});if(e.ok){let t=await e.json();ee(t),b("")}else alert("Produk tidak ditemukan!")}catch(e){console.error("Error scanning barcode:",e),alert("Terjadi kesalahan saat scan barcode")}},ea=(e,t)=>{if(t<=0)return void en(e);let a=k.find(t=>t.barcode===e);a&&t>a.currentStock?alert("Quantity melebihi stok yang tersedia!"):w(N.map(a=>a.barcode===e?{...a,quantity:t}:a))},en=e=>{w(N.filter(t=>t.barcode!==e))},ei=()=>{w([])},es=e=>{let t=e.price*e.quantity;return"percentage"===e.discountType?t*e.discount/100:e.discount},er=()=>N.reduce((e,t)=>e+t.price*t.quantity-es(t),0),eo=()=>N.reduce((e,t)=>e+es(t),0),el=e=>{let t=er();"cash"===e?(M(t),A(0)):"transfer"===e&&(A(t),M(0))},ed=async()=>{if(0===N.length)return void alert("Keranjang kosong!");let t=er();if(L+O<t)return void alert("Jumlah pembayaran kurang!");C(!0);try{let a=L>0?Math.min(L,t):0,n=O>0?t-a:0,i={items:N.map(e=>({barcode:e.barcode,name:e.name,quantity:e.quantity,price:e.price,discount:e.discount,discountPercent:"percentage"===e.discountType?e.discount:0,discountAmount:es(e)})),cashAmount:a,transferAmount:n,bankName:O>0?E:null},s=await fetch("/api/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),credentials:"include"});if(s.ok){let t={...await s.json(),items:N,cashAmount:L,transferAmount:O,user:e};B(t),R(!1),q(!0),ei(),M(0),A(0),$(""),alert("Transaksi berhasil!")}else{let e=await s.json();alert(`Gagal memproses transaksi: ${e.error||"Unknown error"}`)}}catch(e){console.error("Error processing payment:",e),alert("Terjadi kesalahan saat memproses pembayaran")}finally{C(!1)}};return(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Point of Sale"}),(0,t.jsx)("p",{className:"text-gray-600",children:"Sistem kasir Gita Fashion"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"lg:col-span-2 space-y-6",children:[(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsxs)(r.CardTitle,{className:"flex items-center gap-2",children:[(0,t.jsx)(f,{className:"h-5 w-5"}),"Scanner Barcode"]})}),(0,t.jsx)(r.CardContent,{children:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(s.Input,{placeholder:"Scan atau ketik barcode produk...",value:h,onChange:e=>b(e.target.value),onKeyPress:e=>"Enter"===e.key&&et(),className:"flex-1"}),(0,t.jsx)(i.Button,{onClick:et,children:(0,t.jsx)(f,{className:"h-4 w-4"})})]})})]}),(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsxs)(r.CardTitle,{className:"flex items-center gap-2",children:[(0,t.jsx)(v.Package,{className:"h-5 w-5"}),"Produk Populer"]})}),(0,t.jsx)(r.CardContent,{children:0===k.length?(0,t.jsx)("div",{className:"text-center py-8 text-gray-500",children:"Tidak ada produk tersedia"}):(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)(o.Table,{children:[(0,t.jsx)(o.TableHeader,{children:(0,t.jsxs)(o.TableRow,{children:[(0,t.jsx)(o.TableHead,{children:"Barcode"}),(0,t.jsx)(o.TableHead,{children:"Nama Produk"}),(0,t.jsx)(o.TableHead,{children:"Kategori"}),(0,t.jsx)(o.TableHead,{children:"Stok"}),(0,t.jsx)(o.TableHead,{children:"Harga"}),(0,t.jsx)(o.TableHead,{children:"Aksi"})]})}),(0,t.jsx)(o.TableBody,{children:k.map(e=>(0,t.jsxs)(o.TableRow,{children:[(0,t.jsx)(o.TableCell,{className:"font-mono text-sm",children:e.barcode}),(0,t.jsx)(o.TableCell,{className:"font-medium",children:e.name}),(0,t.jsx)(o.TableCell,{children:e.category}),(0,t.jsx)(o.TableCell,{children:(0,t.jsx)(p.Badge,{variant:e.currentStock<=5?"destructive":"secondary",children:e.currentStock})}),(0,t.jsxs)(o.TableCell,{children:["Rp ",e.sellPrice.toLocaleString()]}),(0,t.jsx)(o.TableCell,{children:(0,t.jsx)(i.Button,{size:"sm",onClick:()=>ee(e),disabled:e.currentStock<=0,children:(0,t.jsx)(m.Plus,{className:"h-4 w-4"})})})]},e.id))})]})})})]})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsxs)(r.CardTitle,{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(g.ShoppingCart,{className:"h-5 w-5"}),"Keranjang (",N.length,")"]}),N.length>0&&(0,t.jsx)(i.Button,{variant:"outline",size:"sm",onClick:ei,children:(0,t.jsx)(u.Trash2,{className:"h-4 w-4"})})]})}),(0,t.jsx)(r.CardContent,{children:0===N.length?(0,t.jsx)("div",{className:"text-center py-8 text-gray-500",children:"Keranjang kosong"}):(0,t.jsx)("div",{className:"space-y-4",children:N.map(e=>{let a=e.price*e.quantity,n=es(e),s=a-n;return(0,t.jsxs)("div",{className:"p-3 border rounded space-y-2",children:[(0,t.jsx)("div",{className:"flex items-start justify-between",children:(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h4",{className:"font-medium text-sm",children:e.name}),(0,t.jsx)("p",{className:"text-xs text-gray-500",children:e.barcode}),(0,t.jsxs)("p",{className:"text-sm",children:["Rp ",e.price.toLocaleString()," x ",e.quantity]}),e.discount>0&&(0,t.jsxs)("p",{className:"text-xs text-red-600",children:["Diskon: ","percentage"===e.discountType?`${e.discount}%`:`Rp ${e.discount.toLocaleString()}`," ","(-Rp ",n.toLocaleString(),")"]}),(0,t.jsxs)("p",{className:"text-sm font-bold",children:["Total: Rp ",s.toLocaleString()]})]})}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(i.Button,{size:"sm",variant:"outline",onClick:()=>ea(e.barcode,e.quantity-1),children:(0,t.jsx)(x,{className:"h-3 w-3"})}),(0,t.jsx)("span",{className:"w-8 text-center text-sm",children:e.quantity}),(0,t.jsx)(i.Button,{size:"sm",variant:"outline",onClick:()=>ea(e.barcode,e.quantity+1),children:(0,t.jsx)(m.Plus,{className:"h-3 w-3"})})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(i.Button,{size:"sm",variant:"outline",onClick:()=>{K(e),W(e.discount),G(e.discountType),_(!0)},title:"Diskon",children:"%"}),(0,t.jsx)(i.Button,{size:"sm",variant:"destructive",onClick:()=>en(e.barcode),children:(0,t.jsx)(u.Trash2,{className:"h-3 w-3"})})]})]})]},e.barcode)})})})]}),N.length>0&&(0,t.jsxs)(r.Card,{children:[(0,t.jsx)(r.CardHeader,{children:(0,t.jsx)(r.CardTitle,{children:"Total Pembayaran"})}),(0,t.jsxs)(r.CardContent,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Subtotal:"}),(0,t.jsxs)("span",{children:["Rp ",N.reduce((e,t)=>e+t.price*t.quantity,0).toLocaleString()]})]}),eo()>0&&(0,t.jsxs)("div",{className:"flex justify-between text-red-600",children:[(0,t.jsx)("span",{children:"Diskon:"}),(0,t.jsxs)("span",{children:["-Rp ",eo().toLocaleString()]})]}),(0,t.jsxs)("div",{className:"flex justify-between font-bold text-lg border-t pt-2",children:[(0,t.jsx)("span",{children:"Total:"}),(0,t.jsxs)("span",{children:["Rp ",er().toLocaleString()]})]})]}),(0,t.jsxs)(i.Button,{className:"w-full",onClick:()=>R(!0),disabled:0===N.length,children:[(0,t.jsx)(j,{className:"h-4 w-4 mr-2"}),"Proses Pembayaran"]})]})]})]})]}),(0,t.jsx)(l.Dialog,{open:D,onOpenChange:R,children:(0,t.jsxs)(l.DialogContent,{className:"max-w-md",children:[(0,t.jsx)(l.DialogHeader,{children:(0,t.jsx)(l.DialogTitle,{children:"Proses Pembayaran"})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("div",{className:"p-4 bg-gray-50 rounded",children:(0,t.jsxs)("div",{className:"flex justify-between font-bold text-lg",children:[(0,t.jsx)("span",{children:"Total Bayar:"}),(0,t.jsxs)("span",{children:["Rp ",er().toLocaleString()]})]})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Label,{htmlFor:"paymentMethod",children:"Metode Pembayaran"}),(0,t.jsxs)(d.Select,{value:P,onValueChange:I,children:[(0,t.jsx)(d.SelectTrigger,{children:(0,t.jsx)(d.SelectValue,{})}),(0,t.jsxs)(d.SelectContent,{children:[(0,t.jsx)(d.SelectItem,{value:"cash",children:"Tunai"}),(0,t.jsx)(d.SelectItem,{value:"transfer",children:"Transfer"}),(0,t.jsx)(d.SelectItem,{value:"split",children:"Tunai + Transfer"})]})]})]}),("cash"===P||"split"===P)&&(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(c.Label,{htmlFor:"cashAmount",children:"Jumlah Tunai"}),"cash"===P&&(0,t.jsx)(i.Button,{type:"button",size:"sm",variant:"outline",onClick:()=>el("cash"),children:"Pas"})]}),(0,t.jsx)(s.Input,{id:"cashAmount",type:"number",value:L,onChange:e=>M(parseFloat(e.target.value)||0),placeholder:"0"})]}),("transfer"===P||"split"===P)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(c.Label,{htmlFor:"transferAmount",children:"Jumlah Transfer"}),"transfer"===P&&(0,t.jsx)(i.Button,{type:"button",size:"sm",variant:"outline",onClick:()=>el("transfer"),children:"Pas"})]}),(0,t.jsx)(s.Input,{id:"transferAmount",type:"number",value:O,onChange:e=>A(parseFloat(e.target.value)||0),placeholder:"0"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Label,{htmlFor:"bankName",children:"Nama Bank"}),(0,t.jsx)(s.Input,{id:"bankName",value:E,onChange:e=>$(e.target.value),placeholder:"Contoh: BCA, Mandiri, BRI"})]})]}),L+O>er()&&(0,t.jsx)("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Kembalian:"}),(0,t.jsxs)("span",{className:"font-bold",children:["Rp ",(L+O-er()).toLocaleString()]})]})})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(i.Button,{variant:"outline",onClick:()=>R(!1),className:"flex-1",children:"Batal"}),(0,t.jsx)(i.Button,{onClick:ed,disabled:T||L+O<er(),className:"flex-1",children:T?"Memproses...":"Bayar"})]})]})]})}),(0,t.jsx)(l.Dialog,{open:H,onOpenChange:_,children:(0,t.jsxs)(l.DialogContent,{className:"max-w-md",children:[(0,t.jsx)(l.DialogHeader,{children:(0,t.jsx)(l.DialogTitle,{children:"Atur Diskon"})}),U&&(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium",children:U.name}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Harga: Rp ",U.price.toLocaleString()]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Quantity: ",U.quantity]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Subtotal: Rp ",(U.price*U.quantity).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(c.Label,{children:"Jenis Diskon"}),(0,t.jsxs)(d.Select,{value:J,onValueChange:e=>G(e),children:[(0,t.jsx)(d.SelectTrigger,{children:(0,t.jsx)(d.SelectValue,{})}),(0,t.jsxs)(d.SelectContent,{children:[(0,t.jsx)(d.SelectItem,{value:"percentage",children:"Persentase (%)"}),(0,t.jsx)(d.SelectItem,{value:"amount",children:"Nominal (Rp)"})]})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)(c.Label,{htmlFor:"discountValue",children:["Nilai Diskon ","percentage"===J?"(%)":"(Rp)"]}),(0,t.jsx)(s.Input,{id:"discountValue",type:"number",value:V,onChange:e=>W(parseFloat(e.target.value)||0),placeholder:"0",min:"0",max:"percentage"===J?100:U.price*U.quantity})]}),V>0&&(0,t.jsxs)("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[(0,t.jsxs)("p",{className:"text-sm",children:["Diskon: ","percentage"===J?`${V}% = Rp ${(U.price*U.quantity*V/100).toLocaleString()}`:`Rp ${V.toLocaleString()}`]}),(0,t.jsxs)("p",{className:"text-sm font-bold",children:["Total setelah diskon: Rp ",(U.price*U.quantity-("percentage"===J?U.price*U.quantity*V/100:V)).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(i.Button,{variant:"outline",onClick:()=>_(!1),className:"flex-1",children:"Batal"}),(0,t.jsx)(i.Button,{onClick:()=>{U&&(w(N.map(e=>e.barcode===U.barcode?{...e,discount:V,discountType:J}:e)),_(!1),K(null),W(0))},className:"flex-1",children:"Terapkan Diskon"})]})]})]})}),(0,t.jsx)(l.Dialog,{open:F,onOpenChange:q,children:(0,t.jsxs)(l.DialogContent,{className:"max-w-md",children:[(0,t.jsx)(l.DialogHeader,{children:(0,t.jsx)(l.DialogTitle,{children:"Transaksi Berhasil"})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"text-green-600 text-lg font-bold",children:"✓ Pembayaran Berhasil"}),z&&(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Kode Transaksi: ",z.code]})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(i.Button,{variant:"outline",onClick:()=>q(!1),className:"flex-1",children:"Tutup"}),(0,t.jsxs)(i.Button,{onClick:()=>{let t,a,n,i,s,r,o;if(!z)return;let l=window.open("","_blank");if(!l)return;let d=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Struk Transaksi - ${z.code}</title>
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
            <h2>${Q?.storeName||"GITA FASHION"}</h2>
            <p>${Q?.storeAddress||"Jl. Fashion Street No. 123"}</p>
            <p>Telp: ${Q?.storePhone||"(021) 123-4567"}</p>
            <p>================================</p>
          </div>
          
          <div class="transaction-info">
            <div class="item"><span>No. Transaksi:</span><span>${z.code}</span></div>
            <div class="item"><span>Tanggal:</span><span>${new Date().toLocaleString("id-ID")}</span></div>
            <div class="item"><span>Kasir:</span><span>${e?.name||"Kasir"}</span></div>
            <p>================================</p>
          </div>

          <div class="items">
            ${(z.items||[]).map(e=>{let t="percentage"===e.discountType?e.price*e.quantity*e.discount/100:e.discount;return`
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
            ${(a=(t=z.items||[]).reduce((e,t)=>e+t.price*t.quantity,0),i=a-(n=t.reduce((e,t)=>e+("percentage"===t.discountType?t.price*t.quantity*t.discount/100:t.discount),0)),s=z.cashAmount||0,o=Math.max(0,s+(r=z.transferAmount||0)-i),`
                <div class="item"><span>Subtotal:</span><span>Rp ${a.toLocaleString("id-ID")}</span></div>
                ${n>0?`<div class="item"><span>Total Diskon:</span><span>-Rp ${n.toLocaleString("id-ID")}</span></div>`:""}
                <div class="item"><strong><span>TOTAL:</span><span>Rp ${i.toLocaleString("id-ID")}</span></strong></div>
                <p>================================</p>
                ${s>0?`<div class="item"><span>Tunai:</span><span>Rp ${s.toLocaleString("id-ID")}</span></div>`:""}
                ${r>0?`<div class="item"><span>Transfer:</span><span>Rp ${r.toLocaleString("id-ID")}</span></div>`:""}
                <div class="item"><span>Kembalian:</span><span>Rp ${o.toLocaleString("id-ID")}</span></div>
              `)}
          </div>

          <div class="footer">
            <p>${Q?.footerText||"Terima kasih atas kunjungan Anda!"}</p>
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
    `;l.document.open(),l.document.write(d),l.document.close()},className:"flex-1",children:[(0,t.jsx)(y.Printer,{className:"h-4 w-4 mr-2"}),"Cetak Struk"]})]})]})]})})]})}e.s(["default",()=>b],5271)}]);