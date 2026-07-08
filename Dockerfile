FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY japan-site/ /usr/share/caddy/

EXPOSE 80 443

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
