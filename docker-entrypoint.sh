#!/bin/sh
set -e

# If running as root (needed because mounted volumes/disks are usually owned
# by root on the host), fix ownership and drop privileges to the app user.
if [ "$(id -u)" = "0" ]; then
    mkdir -p /app/data
    chown -R nextjs:nodejs /app/data 2>/dev/null || true
    exec su-exec nextjs "$@"
fi

exec "$@"
