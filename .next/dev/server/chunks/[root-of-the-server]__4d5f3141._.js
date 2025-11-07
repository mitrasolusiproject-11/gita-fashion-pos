module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}),
"[project]/src/lib/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "categoriesRelations",
    ()=>categoriesRelations,
    "expenses",
    ()=>expenses,
    "outgoingItems",
    ()=>outgoingItems,
    "outgoingItemsRelations",
    ()=>outgoingItemsRelations,
    "products",
    ()=>products,
    "productsRelations",
    ()=>productsRelations,
    "settings",
    ()=>settings,
    "shifts",
    ()=>shifts,
    "transactions",
    ()=>transactions,
    "transactionsRelations",
    ()=>transactionsRelations,
    "users",
    ()=>users,
    "usersRelations",
    ()=>usersRelations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/columns/real.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)");
;
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('users', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('email').notNull().unique(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('name').notNull(),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('password').notNull(),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('role', {
        enum: [
            'ADMIN',
            'MANAGER',
            'CASHIER'
        ]
    }).notNull().default('CASHIER'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('categories', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('name').notNull().unique(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('products', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    barcode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('barcode').notNull().unique(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('name').notNull(),
    categoryId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('category_id').references(()=>categories.id),
    initialStock: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('initial_stock').notNull().default(0),
    currentStock: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('current_stock').notNull().default(0),
    sellPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('sell_price').notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const transactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('transactions', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('code').notNull().unique(),
    transactionDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('transaction_date', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    totalItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('total_items').notNull(),
    cashAmount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('cash_amount').notNull().default(0),
    transferAmount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('transfer_amount').notNull().default(0),
    bankName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('bank_name'),
    paymentProof: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('payment_proof'),
    paymentStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('payment_status', {
        enum: [
            'PENDING',
            'PAID',
            'CANCELLED'
        ]
    }).notNull().default('PENDING'),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>users.id),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const outgoingItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('outgoing_items', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('date', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    barcode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('barcode').notNull(),
    productName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('product_name').notNull(),
    quantity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('quantity').notNull(),
    transactionCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('transaction_code').notNull().references(()=>transactions.code),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('price').notNull(),
    discountPercent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('discount_percent').notNull().default(0),
    discountAmount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('discount_amount').notNull().default(0),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('settings', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('key').notNull().unique(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('value').notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const shifts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('shifts', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>users.id),
    startTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('start_time', {
        mode: 'timestamp'
    }).notNull(),
    endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('end_time', {
        mode: 'timestamp'
    }),
    startingCash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('starting_cash').notNull().default(0),
    endingCash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('ending_cash'),
    totalSales: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('total_sales').default(0),
    totalTransactions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('total_transactions').default(0),
    totalExpenses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('total_expenses').default(0),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('status', {
        enum: [
            'OPEN',
            'CLOSED'
        ]
    }).notNull().default('OPEN'),
    notes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('notes'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const expenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])('expenses', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    shiftId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('shift_id').references(()=>shifts.id),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('user_id').notNull().references(()=>users.id),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('category').notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('description').notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])('amount').notNull(),
    receipt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])('receipt'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const usersRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(users, ({ many })=>({
        transactions: many(transactions)
    }));
const categoriesRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(categories, ({ many })=>({
        products: many(products)
    }));
const productsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(products, ({ one, many })=>({
        category: one(categories, {
            fields: [
                products.categoryId
            ],
            references: [
                categories.id
            ]
        }),
        outgoingItems: many(outgoingItems)
    }));
const transactionsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(transactions, ({ one, many })=>({
        user: one(users, {
            fields: [
                transactions.userId
            ],
            references: [
                users.id
            ]
        }),
        outgoingItems: many(outgoingItems)
    }));
const outgoingItemsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(outgoingItems, ({ one })=>({
        transaction: one(transactions, {
            fields: [
                outgoingItems.transactionCode
            ],
            references: [
                transactions.code
            ]
        }),
        product: one(products, {
            fields: [
                outgoingItems.barcode
            ],
            references: [
                products.barcode
            ]
        })
    }));
}),
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$better$2d$sqlite3$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/better-sqlite3/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schema.ts [app-route] (ecmascript)");
;
;
;
const sqlite = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"]('sqlite.db');
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$better$2d$sqlite3$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(sqlite, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
});
const __TURBOPACK__default__export__ = db;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/src/lib/auth-simple.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createToken",
    ()=>createToken,
    "getSession",
    ()=>getSession,
    "signIn",
    ()=>signIn,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'gita-fashion-secret-key-2024';
async function signIn(email, password) {
    try {
        const [user] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].email, email)).limit(1);
        if (!user) {
            return null;
        }
        const isPasswordValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
        if (!isPasswordValid) {
            return null;
        }
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        };
    } catch (error) {
        console.error('Sign in error:', error);
        return null;
    }
}
function createToken(user) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(user, JWT_SECRET, {
        expiresIn: '7d'
    });
}
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
async function getSession(request) {
    try {
        let token;
        if (request) {
            // For API routes with request object
            token = request.cookies.get('auth-token')?.value;
        } else {
            // For server components - simplified approach
            try {
                const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
                token = cookieStore.get('auth-token')?.value;
            } catch (cookieError) {
                // Fallback - return null if cookies not available
                return null;
            }
        }
        if (!token) {
            return null;
        }
        return verifyToken(token);
    } catch (error) {
        console.error('Get session error:', error);
        return null;
    }
}
}),
"[project]/src/app/api/shifts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$simple$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-simple.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/select.js [app-route] (ecmascript)");
;
;
;
;
;
async function GET(request) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$simple$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])(request);
        if (!session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const baseQuery = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].id,
            userId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].userId,
            startTime: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].startTime,
            endTime: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].endTime,
            startingCash: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].startingCash,
            endingCash: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].endingCash,
            totalSales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].totalSales,
            totalTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].totalTransactions,
            totalExpenses: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].totalExpenses,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].status,
            notes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].notes,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].createdAt,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].updatedAt,
            user: {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].name,
                email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].email,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].role
            }
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"]).leftJoin(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].userId, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id));
        let allShifts;
        if (status) {
            allShifts = await baseQuery.where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].status, status)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].createdAt));
        } else {
            allShifts = await baseQuery.orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].createdAt));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(allShifts);
    } catch (error) {
        console.error('Error fetching shifts:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$simple$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])(request);
        if (!session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const { action, startingCash, endingCash, notes } = body;
        if (action === 'start') {
            // Check if user already has an open shift
            const [existingShift] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].userId, session.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].status, 'OPEN'))).limit(1);
            if (existingShift) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'You already have an open shift'
                }, {
                    status: 400
                });
            }
            // Create new shift
            const [newShift] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"]).values({
                userId: session.id,
                startTime: new Date(),
                startingCash: startingCash || 0,
                status: 'OPEN'
            }).returning();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newShift, {
                status: 201
            });
        }
        if (action === 'close') {
            // Find open shift for user
            const [openShift] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].userId, session.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].status, 'OPEN'))).limit(1);
            if (!openShift) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'No open shift found'
                }, {
                    status: 400
                });
            }
            // Calculate shift statistics
            const shiftStart = openShift.startTime;
            const shiftEnd = new Date();
            // Get transactions during this shift
            const shiftTransactions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"].userId, session.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gte"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"].createdAt, shiftStart), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lte"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactions"].createdAt, shiftEnd)));
            const totalSales = shiftTransactions.reduce((sum, t)=>sum + t.cashAmount + t.transferAmount, 0);
            const totalTransactions = shiftTransactions.length;
            // Get expenses during this shift
            const shiftExpenses = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["expenses"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["expenses"].userId, session.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gte"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["expenses"].createdAt, shiftStart), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lte"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["expenses"].createdAt, shiftEnd)));
            const totalExpenses = shiftExpenses.reduce((sum, e)=>sum + e.amount, 0);
            // Update shift
            const [closedShift] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"]).set({
                endTime: shiftEnd,
                endingCash: endingCash || 0,
                totalSales,
                totalTransactions,
                totalExpenses,
                status: 'CLOSED',
                notes: notes || null,
                updatedAt: new Date()
            }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shifts"].id, openShift.id)).returning();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                shift: closedShift,
                summary: {
                    totalSales,
                    totalTransactions,
                    totalExpenses,
                    netCash: openShift.startingCash + totalSales - totalExpenses,
                    actualCash: endingCash || 0,
                    difference: (endingCash || 0) - (openShift.startingCash + totalSales - totalExpenses)
                }
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid action'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('Error managing shift:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
const runtime = 'nodejs';
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4d5f3141._.js.map