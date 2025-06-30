# 🚀 CONFIGURACIÓN AUCMA OVERSEAS LATINOAMÉRICA

## 📋 PASOS PARA COMPLETAR EL SETUP:

### 1. CREAR REPOSITORIO EN GITHUB:
1. Ve a: https://github.com/new
2. Repository name: `aucmaoverseaslatam`
3. Description: `AUCMA Overseas Latinoamérica - Electrodomésticos Profesionales`
4. Public/Private: Tu elección
5. NO inicializar con README (ya lo tenemos)
6. Click "Create repository"

### 2. PUSH INICIAL (ejecutar desde este directorio):
```bash
git push -u origin main
```

### 3. CONFIGURAR VARIABLES DE ENTORNO:

#### Backend (.env):
- ✅ MAILCHIMP_API_KEY: Ya tienes el mismo token
- 🔄 MONGO_URL: Cambiar si quieres BD separada
- 🔄 DB_NAME: Cambiar a "aucma_overseas_db"

#### Frontend (.env):
- 🔄 REACT_APP_BACKEND_URL: Cambiar cuando tengas el dominio

### 4. CONFIGURACIÓN DIGITAL OCEAN:
1. Ve a: https://cloud.digitalocean.com/apps/new
2. Conecta GitHub repository: `victorra1191/aucmaoverseaslatam`
3. O usa el archivo `.do/app.yaml` (ya configurado)

### 5. PERSONALIZACIÓN OPCIONAL:

#### Cambiar información de contacto:
- 📧 Emails: Actualmente usa los mismos de aucmalatam.com
- 📱 Teléfonos: Mismos números
- 🏢 Empresa: Nabo International Services

#### Si quieres cambiar:
```bash
# Buscar y reemplazar en todo el proyecto:
find . -type f -name "*.js" -exec sed -i 's/aucmalatam.com/TUDOMINIO.com/g' {} \;
find . -type f -name "*.js" -exec sed -i 's/gerencia@aucmalatam.com/TU_EMAIL/g' {} \;
```

### 6. DOMINIO SUGERIDOS:
- ✅ aucmaoverseas.com
- ✅ aucmalatam.org  
- ✅ aucmaworld.com

### 7. TESTING LOCAL:
```bash
# Backend
cd backend && python server.py

# Frontend (nueva terminal)
cd frontend && yarn start
```

### 8. DIFERENCIAS CON AUCMALATAM:
- ✅ **Nombre:** aucmaoverseaslatam
- ✅ **Motos Eléctricas:** OCULTAS (igual que el original)
- ✅ **11 productos:** Solo electrodomésticos visibles
- ✅ **Mismo diseño:** Idéntico al original
- ✅ **Misma funcionalidad:** Newsletter, cotizaciones, etc.

## 🎯 ESTADO ACTUAL:
- ✅ **Código:** 100% clonado y configurado
- ✅ **Git:** Inicializado y listo para push
- ✅ **Configuración:** Digital Ocean preparada
- 🔄 **Pending:** Push a GitHub + Deploy

## 🚀 PRÓXIMO PASO:
**1.** Crea el repositorio en GitHub
**2.** Ejecuta: `git push -u origin main`
**3.** ¡Listo para deploy!

---
**© 2024 AUCMA Overseas Latinoamérica**