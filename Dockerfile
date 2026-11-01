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

# Copy seed script
COPY --from=builder --chown=nextjs:nodejs /app/scripts/seed-production.js ./scripts/seed-production.js

# Copy init script and entrypoint
COPY --chown=nextjs:nodejs init-db.sh ./init-db.sh
COPY --chown=nextjs:nodejs docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./init-db.sh ./docker-entrypoint.sh

# Install su-exec for privilege dropping in the entrypoint
RUN apk add --no-cache su-exec

# Create data directory for SQLite and set ownership
RUN mkdir -p /app/data && chown -R nextjs:nodejs /app/data

# Runs as root: the entrypoint fixes /app/data ownership then drops to nextjs
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV DATABASE_URL="file:/app/data/sqlite.db"

# Run entrypoint (fixes data dir ownership, drops privileges) then start server
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["sh", "-c", "./init-db.sh && node server.js"]
