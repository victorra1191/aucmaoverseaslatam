#!/bin/bash

# 🚀 Script de deployment para AUCMA Overseas Latinoamérica

echo "🌎 Preparando AUCMA Overseas Latinoamérica para deployment..."

# Verificar que estamos en el directorio correcto
if [ ! -f "SETUP_INSTRUCTIONS.md" ]; then
    echo "❌ Error: Ejecuta este script desde el directorio aucmaoverseaslatam"
    exit 1
fi

echo "✅ Directorio correcto"

# Verificar git remote
git remote -v

echo ""
echo "🎯 SIGUIENTE PASO:"
echo "1. Ve a: https://github.com/new"
echo "2. Repository name: aucmaoverseaslatam"
echo "3. Crea el repositorio (sin README)"
echo "4. Ejecuta: git push -u origin main"
echo ""
echo "🚀 ¡El proyecto estará listo para deploy!"

# Mostrar estadísticas del proyecto
echo ""
echo "📊 ESTADÍSTICAS DEL PROYECTO:"
echo "- Archivos: $(find . -type f | wc -l)"
echo "- Componentes React: $(find frontend/src -name "*.js" | wc -l)"
echo "- Productos: 11 (motos ocultas)"
echo "- Certificaciones: ISO 9001:2015, CE, FCC, RoHS"

echo ""
echo "✅ Proyecto AUCMA Overseas Latinoamérica listo para deployment!"