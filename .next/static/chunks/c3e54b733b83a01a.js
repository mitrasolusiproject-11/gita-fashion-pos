(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,93479,48425,e=>{"use strict";var t=e.i(43476),a=e.i(75157);function n({className:e,type:n,...s}){return(0,t.jsx)("input",{type:n,"data-slot":"input",className:(0,a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...s})}e.s(["Input",()=>n],93479);var s=e.i(71645),i=e.i(74080),r=e.i(91918),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,a)=>{let n=(0,r.createSlot)(`Primitive.${a}`),i=s.forwardRef((e,s)=>{let{asChild:i,...r}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(i?n:a,{...r,ref:s})});return i.displayName=`Primitive.${a}`,{...e,[a]:i}},{});function l(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}e.s(["Primitive",()=>o,"dispatchDiscreteCustomEvent",()=>l],48425)},87486,e=>{"use strict";var t=e.i(43476),a=e.i(91918),n=e.i(25913),s=e.i(75157);let i=(0,n.cva)("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function r({className:e,variant:n,asChild:r=!1,...o}){let l=r?a.Slot:"span";return(0,t.jsx)(l,{"data-slot":"badge",className:(0,s.cn)(i({variant:n}),e),...o})}e.s(["Badge",()=>r])},96626,e=>{"use strict";var t=e.i(71645),a=e.i(20783),n=e.i(34620),s=e=>{var s;let r,o,{present:l,children:d}=e,c=function(e){var a,s;let[r,o]=t.useState(),l=t.useRef(null),d=t.useRef(e),c=t.useRef("none"),[p,u]=(a=e?"mounted":"unmounted",s={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,t)=>s[e][t]??e,a));return t.useEffect(()=>{let e=i(l.current);c.current="mounted"===p?e:"none"},[p]),(0,n.useLayoutEffect)(()=>{let t=l.current,a=d.current;if(a!==e){let n=c.current,s=i(t);e?u("MOUNT"):"none"===s||t?.display==="none"?u("UNMOUNT"):a&&n!==s?u("ANIMATION_OUT"):u("UNMOUNT"),d.current=e}},[e,u]),(0,n.useLayoutEffect)(()=>{if(r){let e,t=r.ownerDocument.defaultView??window,a=a=>{let n=i(l.current).includes(CSS.escape(a.animationName));if(a.target===r&&n&&(u("ANIMATION_END"),!d.current)){let a=r.style.animationFillMode;r.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=a)})}},n=e=>{e.target===r&&(c.current=i(l.current))};return r.addEventListener("animationstart",n),r.addEventListener("animationcancel",a),r.addEventListener("animationend",a),()=>{t.clearTimeout(e),r.removeEventListener("animationstart",n),r.removeEventListener("animationcancel",a),r.removeEventListener("animationend",a)}}u("ANIMATION_END")},[r,u]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:t.useCallback(e=>{l.current=e?getComputedStyle(e):null,o(e)},[])}}(l),p="function"==typeof d?d({present:c.isPresent}):t.Children.only(d),u=(0,a.useComposedRefs)(c.ref,(s=p,(o=(r=Object.getOwnPropertyDescriptor(s.props,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?s.ref:(o=(r=Object.getOwnPropertyDescriptor(s,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?s.props.ref:s.props.ref||s.ref));return"function"==typeof d||c.isPresent?t.cloneElement(p,{ref:u}):null};function i(e){return e?.animationName||"none"}s.displayName="Presence",e.s(["Presence",()=>s])},76639,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(81140),s=e.i(20783),i=e.i(30030),r=e.i(10772),o=e.i(69340),l=e.i(26330),d=e.i(65491),c=e.i(74606),p=e.i(96626),u=e.i(48425),m=e.i(3536),x=e.i(85369),h=e.i(86312),f=e.i(91918),g="Dialog",[j,v]=(0,i.createContextScope)(g),[b,y]=j(g),w=e=>{let{__scopeDialog:n,children:s,open:i,defaultOpen:l,onOpenChange:d,modal:c=!0}=e,p=a.useRef(null),u=a.useRef(null),[m,x]=(0,o.useControllableState)({prop:i,defaultProp:l??!1,onChange:d,caller:g});return(0,t.jsx)(b,{scope:n,triggerRef:p,contentRef:u,contentId:(0,r.useId)(),titleId:(0,r.useId)(),descriptionId:(0,r.useId)(),open:m,onOpenChange:x,onOpenToggle:a.useCallback(()=>x(e=>!e),[x]),modal:c,children:s})};w.displayName=g;var N="DialogTrigger",T=a.forwardRef((e,a)=>{let{__scopeDialog:i,...r}=e,o=y(N,i),l=(0,s.useComposedRefs)(a,o.triggerRef);return(0,t.jsx)(u.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":B(o.open),...r,ref:l,onClick:(0,n.composeEventHandlers)(e.onClick,o.onOpenToggle)})});T.displayName=N;var D="DialogPortal",[S,k]=j(D,{forceMount:void 0}),C=e=>{let{__scopeDialog:n,forceMount:s,children:i,container:r}=e,o=y(D,n);return(0,t.jsx)(S,{scope:n,forceMount:s,children:a.Children.map(i,e=>(0,t.jsx)(p.Presence,{present:s||o.open,children:(0,t.jsx)(c.Portal,{asChild:!0,container:r,children:e})}))})};C.displayName=D;var R="DialogOverlay",A=a.forwardRef((e,a)=>{let n=k(R,e.__scopeDialog),{forceMount:s=n.forceMount,...i}=e,r=y(R,e.__scopeDialog);return r.modal?(0,t.jsx)(p.Presence,{present:s||r.open,children:(0,t.jsx)(L,{...i,ref:a})}):null});A.displayName=R;var I=(0,f.createSlot)("DialogOverlay.RemoveScroll"),L=a.forwardRef((e,a)=>{let{__scopeDialog:n,...s}=e,i=y(R,n);return(0,t.jsx)(x.RemoveScroll,{as:I,allowPinchZoom:!0,shards:[i.contentRef],children:(0,t.jsx)(u.Primitive.div,{"data-state":B(i.open),...s,ref:a,style:{pointerEvents:"auto",...s.style}})})}),P="DialogContent",E=a.forwardRef((e,a)=>{let n=k(P,e.__scopeDialog),{forceMount:s=n.forceMount,...i}=e,r=y(P,e.__scopeDialog);return(0,t.jsx)(p.Presence,{present:s||r.open,children:r.modal?(0,t.jsx)(O,{...i,ref:a}):(0,t.jsx)($,{...i,ref:a})})});E.displayName=P;var O=a.forwardRef((e,i)=>{let r=y(P,e.__scopeDialog),o=a.useRef(null),l=(0,s.useComposedRefs)(i,r.contentRef,o);return a.useEffect(()=>{let e=o.current;if(e)return(0,h.hideOthers)(e)},[]),(0,t.jsx)(H,{...e,ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,n.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:(0,n.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,n.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),$=a.forwardRef((e,n)=>{let s=y(P,e.__scopeDialog),i=a.useRef(!1),r=a.useRef(!1);return(0,t.jsx)(H,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(i.current||s.triggerRef.current?.focus(),t.preventDefault()),i.current=!1,r.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(i.current=!0,"pointerdown"===t.detail.originalEvent.type&&(r.current=!0));let a=t.target;s.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})}),H=a.forwardRef((e,n)=>{let{__scopeDialog:i,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:c,...p}=e,u=y(P,i),x=a.useRef(null),h=(0,s.useComposedRefs)(n,x);return(0,m.useFocusGuards)(),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.FocusScope,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:c,children:(0,t.jsx)(l.DismissableLayer,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":B(u.open),...p,ref:h,onDismiss:()=>u.onOpenChange(!1)})}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{titleId:u.titleId}),(0,t.jsx)(W,{contentRef:x,descriptionId:u.descriptionId})]})]})}),M="DialogTitle",z=a.forwardRef((e,a)=>{let{__scopeDialog:n,...s}=e,i=y(M,n);return(0,t.jsx)(u.Primitive.h2,{id:i.titleId,...s,ref:a})});z.displayName=M;var F="DialogDescription";a.forwardRef((e,a)=>{let{__scopeDialog:n,...s}=e,i=y(F,n);return(0,t.jsx)(u.Primitive.p,{id:i.descriptionId,...s,ref:a})}).displayName=F;var _="DialogClose",U=a.forwardRef((e,a)=>{let{__scopeDialog:s,...i}=e,r=y(_,s);return(0,t.jsx)(u.Primitive.button,{type:"button",...i,ref:a,onClick:(0,n.composeEventHandlers)(e.onClick,()=>r.onOpenChange(!1))})});function B(e){return e?"open":"closed"}U.displayName=_;var q="DialogTitleWarning",[G,K]=(0,i.createContext)(q,{contentName:P,titleName:M,docsSlug:"dialog"}),V=({titleId:e})=>{let t=K(q),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return a.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},W=({contentRef:e,descriptionId:t})=>{let n=K("DialogDescriptionWarning"),s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return a.useEffect(()=>{let a=e.current?.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(s))},[s,e,t]),null},J=e.i(41947),J=J,Z=e.i(75157);function Q({...e}){return(0,t.jsx)(w,{"data-slot":"dialog",...e})}function Y({...e}){return(0,t.jsx)(T,{"data-slot":"dialog-trigger",...e})}function X({...e}){return(0,t.jsx)(C,{"data-slot":"dialog-portal",...e})}function ee({className:e,...a}){return(0,t.jsx)(A,{"data-slot":"dialog-overlay",className:(0,Z.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...a})}function et({className:e,children:a,showCloseButton:n=!0,...s}){return(0,t.jsxs)(X,{"data-slot":"dialog-portal",children:[(0,t.jsx)(ee,{}),(0,t.jsxs)(E,{"data-slot":"dialog-content",className:(0,Z.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...s,children:[a,n&&(0,t.jsxs)(U,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,t.jsx)(J.default,{}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function ea({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"dialog-header",className:(0,Z.cn)("flex flex-col gap-2 text-center sm:text-left",e),...a})}function en({className:e,...a}){return(0,t.jsx)(z,{"data-slot":"dialog-title",className:(0,Z.cn)("text-lg leading-none font-semibold",e),...a})}e.s(["Dialog",()=>Q,"DialogContent",()=>et,"DialogHeader",()=>ea,"DialogTitle",()=>en,"DialogTrigger",()=>Y],76639)},3281,e=>{"use strict";let t=(0,e.i(75254).default)("printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);e.s(["Printer",()=>t],3281)},86536,e=>{"use strict";let t=(0,e.i(75254).default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>t],86536)},50627,e=>{"use strict";let t=(0,e.i(75254).default)("receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);e.s(["Receipt",()=>t],50627)},87316,e=>{"use strict";let t=(0,e.i(75254).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],87316)},21737,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(15288),s=e.i(84774),i=e.i(87486),r=e.i(19455),o=e.i(93479),l=e.i(67489),d=e.i(76639),c=e.i(50627),p=e.i(86536);let u=(0,e.i(75254).default)("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);var m=e.i(87316),x=e.i(3281);function h(){let[e,h]=(0,a.useState)([]),[f,g]=(0,a.useState)(null),[j,v]=(0,a.useState)(!1),[b,y]=(0,a.useState)(""),[w,N]=(0,a.useState)("ALL"),[T,D]=(0,a.useState)(!1),[S,k]=(0,a.useState)(null);(0,a.useEffect)(()=>{R(),C()},[]);let C=async()=>{try{let e=await fetch("/api/settings/public");if(e.ok){let t=await e.json();k(t)}}catch(e){console.error("Error fetching store settings:",e)}},R=async()=>{try{let e=await fetch("/api/transactions",{credentials:"include"});if(e.ok){let t=await e.json();h(Array.isArray(t)?t:[])}}catch(e){console.error("Error fetching transactions:",e),h([])}},A=async e=>{try{console.log("Fetching transaction detail for code:",e);let t=await fetch(`/api/transactions/${e}`,{credentials:"include"});if(console.log("Response status:",t.status),t.ok){let e=await t.json();console.log("Transaction data:",e),g(e),v(!0)}else try{let e=await t.json();console.error("Error response:",e),alert(`Gagal mengambil detail transaksi: ${e?.error||"Server error"}`)}catch(e){console.error("Failed to parse error response:",e),alert(`Gagal mengambil detail transaksi: HTTP ${t.status}`)}}catch(e){console.error("Error fetching transaction detail:",e),alert("Terjadi kesalahan saat mengambil detail transaksi")}},I=async e=>{try{console.log("Fetching transaction for receipt, code:",e);let t=await fetch(`/api/transactions/${e}`,{credentials:"include"});if(console.log("Receipt response status:",t.status),t.ok){let e=await t.json();console.log("Receipt transaction data:",e),g(e),D(!0)}else try{let e=await t.json();console.error("Receipt error response:",e),alert(`Gagal mengambil data transaksi: ${e?.error||"Server error"}`)}catch(e){console.error("Failed to parse receipt error response:",e),alert(`Gagal mengambil data transaksi: HTTP ${t.status}`)}}catch(e){console.error("Error fetching transaction for receipt:",e),alert("Terjadi kesalahan saat mengambil data transaksi")}},L=e.filter(e=>{let t=e.code.toLowerCase().includes(b.toLowerCase()),a="ALL"===w||e.paymentStatus===w;return t&&a}),P=L.length,E=L.reduce((e,t)=>e+t.cashAmount+t.transferAmount,0),O=L.filter(e=>"PAID"===e.paymentStatus).length;return(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Riwayat Transaksi"}),(0,t.jsx)("p",{className:"text-gray-600",children:"Kelola dan pantau semua transaksi penjualan"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[(0,t.jsxs)(n.Card,{children:[(0,t.jsxs)(n.CardHeader,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(n.CardTitle,{className:"text-sm font-medium",children:"Total Transaksi"}),(0,t.jsx)(c.Receipt,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsxs)(n.CardContent,{children:[(0,t.jsx)("div",{className:"text-2xl font-bold",children:P}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"Transaksi hingga hari ini"})]})]}),(0,t.jsxs)(n.Card,{children:[(0,t.jsxs)(n.CardHeader,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(n.CardTitle,{className:"text-sm font-medium",children:"Total Penjualan"}),(0,t.jsx)(m.Calendar,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsxs)(n.CardContent,{children:[(0,t.jsxs)("div",{className:"text-2xl font-bold",children:["Rp ",E.toLocaleString()]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"Penjualan hingga hari ini"})]})]}),(0,t.jsxs)(n.Card,{children:[(0,t.jsxs)(n.CardHeader,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(n.CardTitle,{className:"text-sm font-medium",children:"Transaksi Lunas"}),(0,t.jsx)(u,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsxs)(n.CardContent,{children:[(0,t.jsx)("div",{className:"text-2xl font-bold",children:O}),(0,t.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Dari ",P," transaksi"]})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 mb-6",children:[(0,t.jsx)(o.Input,{placeholder:"Cari kode transaksi...",value:b,onChange:e=>y(e.target.value),className:"flex-1"}),(0,t.jsxs)(l.Select,{value:w,onValueChange:N,children:[(0,t.jsx)(l.SelectTrigger,{className:"w-full sm:w-48",children:(0,t.jsx)(l.SelectValue,{placeholder:"Filter status"})}),(0,t.jsxs)(l.SelectContent,{children:[(0,t.jsx)(l.SelectItem,{value:"ALL",children:"Semua Status"}),(0,t.jsx)(l.SelectItem,{value:"PAID",children:"Lunas"}),(0,t.jsx)(l.SelectItem,{value:"PENDING",children:"Pending"}),(0,t.jsx)(l.SelectItem,{value:"CANCELLED",children:"Dibatalkan"})]})]})]}),(0,t.jsxs)(n.Card,{children:[(0,t.jsx)(n.CardHeader,{children:(0,t.jsx)(n.CardTitle,{children:"Daftar Transaksi"})}),(0,t.jsx)(n.CardContent,{children:0===L.length?(0,t.jsx)("div",{className:"text-center py-8 text-gray-500",children:b||"ALL"!==w?"Tidak ada transaksi yang sesuai dengan filter":"Belum ada transaksi"}):(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)(s.Table,{children:[(0,t.jsx)(s.TableHeader,{children:(0,t.jsxs)(s.TableRow,{children:[(0,t.jsx)(s.TableHead,{children:"Kode Transaksi"}),(0,t.jsx)(s.TableHead,{children:"Tanggal"}),(0,t.jsx)(s.TableHead,{children:"Total Item"}),(0,t.jsx)(s.TableHead,{children:"Total Bayar"}),(0,t.jsx)(s.TableHead,{children:"Status"}),(0,t.jsx)(s.TableHead,{children:"Aksi"})]})}),(0,t.jsx)(s.TableBody,{children:L.map(e=>(0,t.jsxs)(s.TableRow,{children:[(0,t.jsx)(s.TableCell,{className:"font-medium",children:e.code}),(0,t.jsx)(s.TableCell,{children:new Date(e.transactionDate).toLocaleDateString("id-ID")}),(0,t.jsxs)(s.TableCell,{children:[e.totalItems," item"]}),(0,t.jsxs)(s.TableCell,{children:["Rp ",(e.cashAmount+e.transferAmount).toLocaleString()]}),(0,t.jsx)(s.TableCell,{children:(0,t.jsx)(i.Badge,{variant:"PAID"===e.paymentStatus?"default":"PENDING"===e.paymentStatus?"secondary":"destructive",children:"PAID"===e.paymentStatus?"Lunas":"PENDING"===e.paymentStatus?"Pending":"Dibatalkan"})}),(0,t.jsx)(s.TableCell,{children:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(r.Button,{size:"sm",variant:"outline",onClick:()=>A(e.code),children:(0,t.jsx)(p.Eye,{className:"h-4 w-4"})}),(0,t.jsx)(r.Button,{size:"sm",variant:"outline",onClick:()=>I(e.code),children:(0,t.jsx)(x.Printer,{className:"h-4 w-4"})})]})})]},e.id))})]})})})]}),(0,t.jsx)(d.Dialog,{open:j,onOpenChange:v,children:(0,t.jsxs)(d.DialogContent,{className:"max-w-2xl",children:[(0,t.jsx)(d.DialogHeader,{children:(0,t.jsx)(d.DialogTitle,{children:"Detail Transaksi"})}),f&&(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-600",children:"Kode Transaksi"}),(0,t.jsx)("p",{className:"font-medium",children:f.code})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-600",children:"Tanggal"}),(0,t.jsx)("p",{className:"font-medium",children:new Date(f.transactionDate).toLocaleString("id-ID")})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-600",children:"Kasir"}),(0,t.jsx)("p",{className:"font-medium",children:f.cashierName||"Unknown"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-600",children:"Status"}),(0,t.jsx)(i.Badge,{variant:"PAID"===f.paymentStatus?"default":"secondary",children:"PAID"===f.paymentStatus?"Lunas":"Pending"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"font-medium mb-2",children:"Item Transaksi"}),(0,t.jsxs)(s.Table,{children:[(0,t.jsx)(s.TableHeader,{children:(0,t.jsxs)(s.TableRow,{children:[(0,t.jsx)(s.TableHead,{children:"Produk"}),(0,t.jsx)(s.TableHead,{children:"Qty"}),(0,t.jsx)(s.TableHead,{children:"Harga"}),(0,t.jsx)(s.TableHead,{children:"Subtotal"})]})}),(0,t.jsx)(s.TableBody,{children:(f.items||[]).map(e=>(0,t.jsxs)(s.TableRow,{children:[(0,t.jsx)(s.TableCell,{children:e.product?.name||"Unknown Product"}),(0,t.jsx)(s.TableCell,{children:e.quantity}),(0,t.jsxs)(s.TableCell,{children:["Rp ",e.price.toLocaleString()]}),(0,t.jsxs)(s.TableCell,{children:["Rp ",(e.quantity*e.price-(e.discount||0)).toLocaleString()]})]},e.id))})]})]}),(0,t.jsxs)("div",{className:"border-t pt-4",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Subtotal:"}),(0,t.jsxs)("span",{children:["Rp ",(f.subtotal||0).toLocaleString()]})]}),(f.totalDiscount||0)>0&&(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Total Diskon:"}),(0,t.jsxs)("span",{children:["-Rp ",(f.totalDiscount||0).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"flex justify-between font-bold text-lg",children:[(0,t.jsx)("span",{children:"Total:"}),(0,t.jsxs)("span",{children:["Rp ",(f.totalAmount||0).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"mt-2 space-y-1",children:[f.cashAmount>0&&(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Tunai:"}),(0,t.jsxs)("span",{children:["Rp ",f.cashAmount.toLocaleString()]})]}),f.transferAmount>0&&(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Transfer:"}),(0,t.jsxs)("span",{children:["Rp ",f.transferAmount.toLocaleString()]})]})]})]})]})]})}),(0,t.jsx)(d.Dialog,{open:T,onOpenChange:D,children:(0,t.jsxs)(d.DialogContent,{className:"max-w-md",children:[(0,t.jsx)(d.DialogHeader,{children:(0,t.jsx)(d.DialogTitle,{children:"Cetak Struk"})}),f&&(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"text-center border-b pb-4",children:[(0,t.jsx)("h3",{className:"font-bold",children:"GITA FASHION"}),(0,t.jsx)("p",{className:"text-sm text-gray-600",children:"Jl. Fashion Street No. 123"}),(0,t.jsx)("p",{className:"text-sm text-gray-600",children:"Telp: (021) 123-4567"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"No. Transaksi:"}),(0,t.jsx)("span",{children:f.code})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Tanggal:"}),(0,t.jsx)("span",{children:new Date(f.transactionDate).toLocaleString("id-ID")})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Kasir:"}),(0,t.jsx)("span",{children:f.cashierName||"Unknown"})]})]}),(0,t.jsx)("div",{className:"border-t border-b py-2",children:(f.items||[]).map(e=>(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("div",{className:"flex justify-between",children:(0,t.jsx)("span",{className:"text-sm",children:e.product?.name||"Unknown Product"})}),(0,t.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,t.jsxs)("span",{children:[e.quantity," x Rp ",e.price.toLocaleString()]}),(0,t.jsxs)("span",{children:["Rp ",(e.quantity*e.price).toLocaleString()]})]}),(e.discount||0)>0&&(0,t.jsxs)("div",{className:"flex justify-between text-sm text-red-600",children:[(0,t.jsx)("span",{children:"Diskon:"}),(0,t.jsxs)("span",{children:["-Rp ",(e.discount||0).toLocaleString()]})]})]},e.id))}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Subtotal:"}),(0,t.jsxs)("span",{children:["Rp ",(f.subtotal||0).toLocaleString()]})]}),(f.totalDiscount||0)>0&&(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Total Diskon:"}),(0,t.jsxs)("span",{children:["-Rp ",(f.totalDiscount||0).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"flex justify-between font-bold",children:[(0,t.jsx)("span",{children:"TOTAL:"}),(0,t.jsxs)("span",{children:["Rp ",(f.totalAmount||0).toLocaleString()]})]}),f.cashAmount>0&&(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Tunai:"}),(0,t.jsxs)("span",{children:["Rp ",f.cashAmount.toLocaleString()]})]}),f.transferAmount>0&&(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{children:"Transfer:"}),(0,t.jsxs)("span",{children:["Rp ",f.transferAmount.toLocaleString()]})]})]}),(0,t.jsx)("div",{className:"flex justify-end",children:(0,t.jsxs)(r.Button,{onClick:()=>{if(!f)return;let e=window.open("","_blank");if(!e)return;let t=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Struk Transaksi - ${f.code}</title>
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
            <h2>${S?.storeName||"GITA FASHION"}</h2>
            <p>${S?.storeAddress||"Jl. Fashion Street No. 123"}</p>
            <p>Telp: ${S?.storePhone||"(021) 123-4567"}</p>
            <p>================================</p>
          </div>
          
          <div class="transaction-info">
            <div class="item"><span>No. Transaksi:</span><span>${f.code}</span></div>
            <div class="item"><span>Tanggal:</span><span>${new Date(f.transactionDate).toLocaleString("id-ID")}</span></div>
            <div class="item"><span>Kasir:</span><span>${f.cashierName||"Unknown"}</span></div>
            <p>================================</p>
          </div>

          <div class="items">
            ${(f.items||[]).map(e=>`
              <div class="item">
                <span>${e.product?.name||"Unknown Product"}</span>
              </div>
              <div class="item">
                <span>${e.quantity} x ${e.price.toLocaleString("id-ID")}</span>
                <span>${(e.quantity*e.price).toLocaleString("id-ID")}</span>
              </div>
              ${e.discount>0?`<div class="item"><span>Diskon:</span><span>-${e.discount.toLocaleString("id-ID")}</span></div>`:""}
            `).join("")}
          </div>

          <div class="total">
            <div class="item"><span>Subtotal:</span><span>Rp ${(f.subtotal||0).toLocaleString("id-ID")}</span></div>
            ${(f.totalDiscount||0)>0?`<div class="item"><span>Total Diskon:</span><span>-Rp ${(f.totalDiscount||0).toLocaleString("id-ID")}</span></div>`:""}
            <div class="item"><strong><span>TOTAL:</span><span>Rp ${(f.totalAmount||0).toLocaleString("id-ID")}</span></strong></div>
            <p>================================</p>
            ${f.cashAmount>0?`<div class="item"><span>Tunai:</span><span>Rp ${f.cashAmount.toLocaleString("id-ID")}</span></div>`:""}
            ${f.transferAmount>0?`<div class="item"><span>Transfer:</span><span>Rp ${f.transferAmount.toLocaleString("id-ID")}</span></div>`:""}
          </div>

          <div class="footer">
            <p>${S?.footerText||"Terima kasih atas kunjungan Anda!"}</p>
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
    `;e.document.open(),e.document.write(t),e.document.close()},children:[(0,t.jsx)(x.Printer,{className:"h-4 w-4 mr-2"}),"Cetak Struk"]})})]})]})})]})}e.s(["default",()=>h],21737)}]);