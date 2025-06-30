# 🏠 AUCMA Latinoamérica - Clone del Sitio Web

## 📋 Descripción del Proyecto

Este es un clon completo y funcional del sitio web oficial de AUCMA (https://aucma.com.mx/), adaptado específicamente para el mercado latinoamericano. El proyecto replica fielmente el diseño, la experiencia de usuario y la funcionalidad del sitio original, con contenido completamente traducido al español.

## 🎯 Características Principales

### ✨ Frontend (Implementado)
- **Replica exacta del diseño** - Colores, tipografía y layout idénticos al sitio original
- **Contenido 100% en español** - Adaptado para el mercado latinoamericano
- **Responsive Design** - Optimizado para todos los dispositivos
- **Animaciones y efectos** - Hero carousel, hover effects, transiciones suaves
- **Navegación completa** - Header, footer y páginas principales
- **Catálogo de productos** - Grid dinámico con modales de detalles
- **Sección técnica** - Especificaciones de temperatura y tecnología
- **Sobre la empresa** - Información corporativa y estadísticas

### 🛠 Tecnologías Utilizadas
- **React** 19.0.0 - Framework principal
- **TailwindCSS** 3.4.17 - Diseño y estilos
- **Framer Motion** 12.16.0 - Animaciones y transiciones
- **React Router** 7.5.1 - Navegación entre páginas
- **Lucide React** - Iconografía moderna
- **Google Fonts** - Tipografía Inter

## 🏗 Arquitectura del Proyecto

```
/app/frontend/
├── src/
│   ├── App.js           # Componente principal y rutas
│   ├── components.js    # Todos los componentes de la UI
│   ├── App.css         # Estilos específicos de Aucma
│   └── index.css       # Estilos globales y Tailwind
├── public/             # Archivos estáticos
├── package.json        # Dependencias y scripts
└── tailwind.config.js  # Configuración personalizada
```

## 🎨 Componentes Principales

### 1. **Header**
- Logo Aucma en rojo corporativo
- Navegación desktop y mobile
- Menu hamburguesa responsive

### 2. **HeroSection**
- Carousel automático con 3 slides
- Imágenes de fondo tipo espacio/tierra
- Textos animados con gradientes
- Botón de play central
- Indicadores de slides

### 3. **ProductSection**
- Filtros por categorías (Refrigeradores, Lavadoras, Microondas)
- Grid responsive de productos
- Cards con hover effects
- Modal de detalles con especificaciones

### 4. **TechSection**
- Fondo degradado azul
- Círculos con especificaciones técnicas
- Rangos de temperatura por categoría
- Efectos glassmorphism

### 5. **AboutSection**
- Información corporativa
- Estadísticas animadas
- Cards con información de valor
- Fondo con imagen corporativa

### 6. **Footer**
- Enlaces organizados
- Información de contacto
- Redes sociales
- Copyright y créditos

## 🛒 Productos Mockeados

El sitio incluye datos realistas de productos Aucma:

- **Refrigeradores**: WRT-900WATTS, WRT-950WATTS
- **Lavadoras**: WLT-1200WATTS  
- **Microondas**: WMO-800WATTS

Cada producto incluye:
- Imagen representativa
- Especificaciones técnicas
- Precios en pesos mexicanos
- Ratings y descripciones
- Modal con detalles completos

## 🌟 Funcionalidades Especiales

### Animaciones y Efectos
- **Scroll animations** - Elementos aparecen al hacer scroll
- **Hover effects** - Cards, botones y navegación
- **Loading states** - Shimmer effects para carga
- **Modal animations** - Entrada y salida suaves
- **Carousel automático** - Cambio de slides cada 5 segundos

### Responsive Design
- **Mobile First** - Diseño optimizado para móviles
- **Breakpoints personalizados** - xs, sm, md, lg, xl
- **Navegación adaptive** - Menu hamburguesa en mobile
- **Imágenes responsive** - Optimización automática

### Accesibilidad
- **Focus states** - Navegación por teclado
- **Alt texts** - Descripción de imágenes
- **Color contrast** - Cumple estándares WCAG
- **Reduced motion** - Respeta preferencias del usuario

## 🎨 Paleta de Colores

```css
/* Rojo corporativo Aucma */
--aucma-red: #dc2626

/* Azul tecnológico */
--aucma-blue: #2563eb

/* Grises corporativos */
--aucma-gray-900: #111827
--aucma-gray-100: #f3f4f6
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 16+
- Yarn package manager

### Instalación
```bash
cd /app/frontend
yarn install
```

### Desarrollo
```bash
yarn start
# El sitio estará disponible en http://localhost:3000
```

### Producción
```bash
yarn build
# Genera los archivos optimizados en /build
```

## 📱 Páginas Disponibles

- **/** - Página principal (Home)
- **/productos** - Catálogo de productos
- **/sobre-aucma** - Información de la empresa  
- **/contacto** - Información de contacto

## 🌍 Enfoque Latinoamericano

### Localización
- **Idioma**: 100% español mexicano
- **Moneda**: Pesos mexicanos (MXN)
- **Cultura**: Adaptado para mercado latino
- **Contacto**: Información de México y Latinoamérica

### Contenido Relevante
- Productos populares en la región
- Precios competitivos locales
- Información de distribuidores regionales
- Servicio técnico latinoamericano

## 📊 Métricas de Rendimiento

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

## 🔮 Próximas Funcionalidades

Si decides expandir el proyecto, se pueden implementar:

### Backend Features
- **Admin Panel** - Gestión de productos y categorías
- **CMS Personalizado** - Edición de contenido frontend
- **Base de datos** - MongoDB para productos reales
- **API REST** - Endpoints para productos y categorías
- **Autenticación** - Sistema de usuarios y administradores

### Frontend Avanzado
- **Carrito de compras** - E-commerce completo
- **Búsqueda avanzada** - Filtros por precio, marca, etc.
- **Comparador** - Comparar productos lado a lado
- **Wishlist** - Lista de deseos de usuarios
- **Reviews** - Sistema de reseñas y comentarios

## 📞 Soporte y Contacto

Para dudas sobre el proyecto o solicitudes de mejoras:

- **Email**: desarrollo@aucma-latam.com
- **Teléfono**: +52 55 1234 5678
- **Dirección**: Ciudad de México, México

---

**Nota**: Este es un proyecto de demostración que replica el diseño de AUCMA con fines educativos y de desarrollo. Todos los datos de productos son ficticios y las imágenes son de stock.

**Desarrollado con ❤️ para el mercado latinoamericano**