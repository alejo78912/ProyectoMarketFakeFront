###############################
#  FRONTEND  –  ANGULAR + NGINX
###############################

########## 1) Build stage #########################################
FROM node:20-alpine3.18 AS builder

# Desactiva analíticas de Angular CLI
ENV NG_CLI_ANALYTICS=false

WORKDIR /app

# Instalamos dependencias con versión exacta (package-lock.json)
COPY package*.json ./
RUN npm ci

# Copiamos el código y construimos en modo producción
COPY . .
RUN npm run build -- --configuration=production --base-href=/ --verbose

# --> Artefactos listos en /app/dist/***
###################################################################

########## 2) Runtime stage #######################################
FROM nginx:1.25-alpine

# 2‑a) Generar un certificado autofirmado válido para “localhost”
RUN apk add --no-cache openssl && \
    mkdir -p /etc/nginx/certs && \
    openssl req -x509 -nodes -newkey rsa:2048 -days 365 \
        -subj "/CN=localhost" \
        -keyout /etc/nginx/certs/privkey.pem \
        -out   /etc/nginx/certs/fullchain.pem

# 2‑b) Copiar los estáticos compilados
COPY --from=builder /app/dist/*/ /usr/share/nginx/html/

# 2‑c) Copiar configuración de Nginx (incluye HTTP→HTTPS + proxy API)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
###################################################################