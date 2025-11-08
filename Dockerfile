# Dockerfile untuk Coolify deployment
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Drizzle migrations
RUN npm run db:generate

# Build Next.js
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public folder
COPY --from=builder /app/public ./public

# Copy standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy drizzle migrations and config
COPY --from=builder --chown=nextjs:nodejs /app/drizzle ./drizzle
COPY --from=builder --chown=nextjs:nodejs /app/drizzle.config.ts ./drizzle.config.ts

# Copy node_modules for drizzle-kit
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Copy package.json
COPY --from=builder /app/package.json ./package.json

# Copy init script
COPY --chown=nextjs:nodejs init-db.sh ./init-db.sh
RUN chmod +x ./init-db.sh

USER nextjs

# Create data directory for SQLite (as nextjs user)
RUN mkdir -p /app/data

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Run init script then start server
CMD sh ./init-db.sh && node server.js
