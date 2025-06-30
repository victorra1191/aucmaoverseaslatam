# 🚀 DESPLIEGUE DROPLET DIGITAL OCEAN - COMANDOS EXACTOS

## ⚡ **DROPLET DEPLOYMENT - 8 MINUTOS**

### 🔧 **PASO 1: Conectar al Droplet**
```bash
ssh root@TU_DROPLET_IP
```

### 🔧 **PASO 2: Preparar Ambiente (2 min)**
```bash
# Actualizar sistema
apt update && apt upgrade -y

# Instalar Node.js 18+ y Nginx
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs nginx git

# Instalar Yarn
npm install -g yarn

# Verificar instalación
node -v && npm -v && nginx -v
```

### 🔧 **PASO 3: Clonar y Build (3 min)**
```bash
# Ir a directorio web
cd /var/www/

# Clonar tu repositorio
git clone https://github.com/victorra1191/Aucmalatam.git
cd Aucmalatam/frontend

# Instalar dependencias
yarn install

# Crear build de producción
yarn build

# Mover build a nginx
rm -rf /var/www/html/*
cp -r build/* /var/www/html/

# Dar permisos
chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/
```

### 🔧 **PASO 4: Configurar Nginx (2 min)**
```bash
# Crear configuración optimizada
cat > /etc/nginx/sites-available/aucmalatam << 'EOF'
server {
    listen 80;
    server_name _;
    root /var/www/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript text/javascript application/json;

    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
}
EOF

# Activar sitio
ln -sf /etc/nginx/sites-available/aucmalatam /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Verificar configuración
nginx -t

# Reiniciar Nginx
systemctl restart nginx
systemctl enable nginx

# Verificar status
systemctl status nginx
```

### 🔧 **PASO 5: Verificar Despliegue (1 min)**
```bash
# Ver IP pública
curl -4 icanhazip.com

# Test local
curl http://localhost

# Ver logs si hay problemas
tail -f /var/log/nginx/error.log
```

---

## 🎯 **CONFIGURACIÓN DOMINIO (Opcional)**

Si tienes dominio, agrega en Nginx:
```bash
# Editar configuración
nano /etc/nginx/sites-available/aucmalatam

# Cambiar esta línea:
server_name tu-dominio.com www.tu-dominio.com;

# Reiniciar
systemctl reload nginx
```

---

## 🔥 **SSL GRATIS con Let's Encrypt (Bonus - 2 min)**
```bash
# Instalar Certbot
apt install -y certbot python3-certbot-nginx

# Obtener SSL (solo si tienes dominio)
certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# Auto-renovación
crontab -e
# Agregar: 0 12 * * * /usr/bin/certbot renew --quiet
```

---

## ✅ **RESULTADO FINAL:**

### **Sin dominio:**
```
http://TU_DROPLET_IP
```

### **Con dominio:**
```
https://tu-dominio.com
```

---

## 🚨 **SI HAY PROBLEMAS:**

```bash
# Ver logs de Nginx
tail -f /var/log/nginx/error.log

# Verificar archivos
ls -la /var/www/html/

# Test nginx config
nginx -t

# Reiniciar todo
systemctl restart nginx
```

---

## ⏰ **CRONÓMETRO:**
- **Paso 1**: 30 segundos (SSH)
- **Paso 2**: 2 minutos (instalación)
- **Paso 3**: 3 minutos (build)
- **Paso 4**: 2 minutos (nginx)
- **Paso 5**: 30 segundos (verificar)

**TOTAL: 8 MINUTOS** ⚡

**¿Tienes la IP del droplet lista? ¡Empezamos!** 🚀