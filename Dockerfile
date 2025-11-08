# Gita Fashion POS - Production Dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy all source files
COPY . .

# Set build-time environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_ENV_VALIDATION=1
ENV DATABASE_URL=file:./data/sqlite.db
ENV NEXTAUTH_SECRET=build-time-secret-min-32-chars-long
ENV NEXTAUTH_URL=http://localhost:3000

# Debug: Show environment and run build with verbose output
RUN echo "Building Next.js application..." && \
    echo "Node version: $(node --version)" && \
    echo "NPM version: $(npm --version)" && \
    npm run build || (echo "Build failed! Check logs above." && exit 1)

# Production image
FROM base AS runner
WORKDIR /app

# Install runtime dependencies for better-sqlite3
RUN apk add --no-cache libc6-compat python3 make g++

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy package files for production dependencies
COPY --from=builder /app/package.json /app/package-lock.json* ./

# Install ONLY production dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy database files and lib
COPY --from=builder --chown=nextjs:nodejs /app/drizzle ./drizzle
COPY --from=builder --chown=nextjs:nodejs /app/drizzle.config.ts ./
COPY --from=builder --chown=nextjs:nodejs /app/src/lib ./src/lib

# Copy initialization scripts
COPY --from=builder --chown=nextjs:nodejs /app/scripts ./scripts

# Create data directory for SQLite
RUN mkdir -p /app/data && chown -R nextjs:nodejs /app/data

# Copy healthcheck and startup scripts
COPY --from=builder --chown=nextjs:nodejs /app/healthcheck.js ./
COPY --from=builder --chown=nextjs:nodejs /app/start.sh ./
RUN chmod +x /app/start.sh /app/scripts/init-db.js

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node healthcheck.js || exit 1

CMD ["/app/start.sh"]