import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Star, ShoppingCart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Plus, Minus, Send } from 'lucide-react';

// Mock Data - Real AUCMA Products (17 productos total)
const products = [
  // Batidoras Parada (3 productos)
  {
    id: 1,
    name: 'ASMP-SPA1',
    type: 'Batidora Parada',
    category: 'Batidoras',
    image: '/assets/productos/ASMP-SPA1.jpg',
    price: '$291.66',
    specs: [
      'Bol de acero inoxidable 304 (4.5L)',
      '6 velocidades + función pulso',
      'Luz indicadora LED',
      'Engranajes 100% metálicos',
      'Incluye molino de carne y licuadora',
      'Protección contra sobrecarga'
    ],
    description: '🥩 ¡Incluye molino de carne y licuadora! 💡 Luz LED para control preciso 🍹 Prepara desde hamburguesas hasta smoothies',
    rating: 4.9,
    technical: {
      bowl: 'Bol de acero inoxidable 304 de 4.5L',
      speeds: '6 velocidades + función pulso',
      accessories: 'Gancho amasar, batidor plano, batidor varillas, tapa bol, jarra vidrio 1.5L, molino de carne'
    }
  },
  {
    id: 2,
    name: 'HH9108S',
    type: 'Batidora Parada',
    category: 'Batidoras',
    image: '/assets/productos/HH9108S.jpg',
    price: '$116.00',
    specs: [
      'Cuerpo de metal fundido',
      'Bol de acero inoxidable 304 (6.5L)',
      '6 velocidades + 10 adicionales + función pulso',
      'Motor AC/DC',
      'Engranajes 100% metálicos',
      'Ruido: 68-75 dB'
    ],
    description: '🥇 Robusta como profesional: metal fundido 🔊 Silenciosa (68 dB) ⚙️ 16 velocidades + pulso para texturas perfectas',
    rating: 4.8,
    technical: {
      bowl: 'Bol de acero inoxidable 304 de 6.5L',
      speeds: '16 velocidades + función pulso',
      accessories: 'Gancho amasar aleación, batidor plano aleación, batidor varillas acero, tapa bol'
    }
  },
  {
    id: 3,
    name: 'SM-1541',
    type: 'Batidora Parada',
    category: 'Batidoras',
    image: '/assets/productos/SM-1541.jpg',
    price: '$62.24',
    specs: [
      'Carcasa ABS resistente',
      'Motor de cobre de aluminio AC',
      'Bol de acero inoxidable 304 (5L)',
      '10 velocidades + función pulso',
      'Rotación planetaria',
      'Cabezal inclinable con apagado automático'
    ],
    description: '🌪️ Rotación planetaria: ¡nada se escapa! 🔝 Cabezal inclinable con seguridad automática 🎨 Personalizable: elige tu color favorito',
    rating: 4.7,
    technical: {
      bowl: 'Bol de acero inoxidable 304 de 5L',
      speeds: '10 velocidades + función pulso',
      accessories: 'Gancho amasar, batidor plano, batidor varillas'
    }
  },
  // Cafeteras (1 producto)
  {
    id: 4,
    name: 'CMD0001-UL',
    type: 'Cafetera',
    category: 'Cafeteras',
    image: '/assets/productos/CMD0001-UL.jpg',
    price: '$27.49',
    specs: [
      'Luz indicadora de encendido/apagado',
      'Jarra de vidrio Duralife™ (12 tazas)',
      'Tecnología Sneak-a-Cup™',
      'Placa calefactora antiadherente',
      'Apto para lavavajillas',
      'Filtro permanente incluido'
    ],
    description: '☕ Café siempre listo sin derrames 🫙 Jarra ultraresistente Duralife™ 🧼 Fácil limpieza: ¡apta para lavavajillas!',
    rating: 4.5,
    technical: {
      capacity: 'Jarra de vidrio Duralife™ 12 tazas',
      features: 'Tecnología Sneak-a-Cup™, placa antiadherente',
      color: 'Blanco'
    }
  },
  // Arroceras (2 productos)
  {
    id: 5,
    name: 'CYD50-9022',
    type: 'Arrocera',
    category: 'Arroceras',
    image: '/assets/productos/CYD50-9022.jpg',
    price: '$121.66',
    specs: [
      'Cuerpo de acero inoxidable (SUS)',
      'Olla interior antiadherente (aluminio)',
      'Cocción a presión multifunción',
      'Estructura para alimentos ahumados',
      'Incluye canasta para alimentos',
      'Copa para carbonizado incluida'
    ],
    description: '🔥 Cocina ahumada profesional en casa 🍚 4-in-1: arroz, presión, ahumados y más 📦 Incluye todos los accesorios esenciales',
    rating: 4.6,
    technical: {
      material: 'Cuerpo acero inoxidable SUS',
      functions: 'Cocción a presión multifunción',
      accessories: 'Canasta alimentos, copa carbonizado, taza medidora, cuchara'
    }
  },
  {
    id: 6,
    name: 'DRC-8ESL032',
    type: 'Arrocera',
    category: 'Arroceras',
    image: '/assets/productos/DRC-8ESL032.jpg',
    price: '$108.33',
    specs: [
      'Capacidad: 18 L / 10 tazas',
      '14 funciones programables',
      'Olla interior antiadherente',
      'Carcasa de acero inoxidable cepillado',
      'Pantalla LED',
      'Tapa interior extraíble'
    ],
    description: '🍲 14 programas para todo tipo de cocción 🔍 Pantalla LED intuitiva 🍱 Ideal para banquetes: ¡18L de capacidad!',
    rating: 4.7,
    technical: {
      capacity: '18L / 10 tazas',
      functions: '14 funciones: arroz blanco/integral/sushi/granos/rápido/cereales/quinua/saltear/vapor/sopa/dorar/cocción lenta',
      accessories: 'Taza medidora, cuchara, vaporizador de plástico'
    }
  },
  // Licuadoras (2 productos)
  {
    id: 7,
    name: 'LB6108A',
    type: 'Licuadora',
    category: 'Licuadoras',
    image: '/assets/productos/LB6108A.jpg',
    price: '$54.16',
    specs: [
      'Licuadora Clásica Cromada',
      'Potencia: 1000W',
      'Capacidad: 1.7L',
      'Perilla ergonómica 3 velocidades',
      'Peso neto: 3.58 kg',
      'Cuerpo cromado resistente'
    ],
    description: '💪 1000W para triturar hasta hielo 🔘 Perilla ergonómica antideslizante 🪖 Cuerpo cromado irrompible',
    rating: 4.4,
    technical: {
      capacity: '1.7L',
      power: '1000W',
      features: '3 velocidades, cuerpo cromado'
    }
  },
  {
    id: 8,
    name: 'LB6113',
    type: 'Licuadora',
    category: 'Licuadoras',
    image: '/assets/productos/LB6113.jpg',
    price: '$54.16',
    specs: [
      'Licuadora Clásica Cromada',
      'Potencia: 1000W',
      'Capacidad: 1.5L',
      'Perilla ergonómica 3 velocidades',
      'Peso neto: 3.63 kg',
      'Optimizada para transporte'
    ],
    description: '🧊 Tritura hielo en segundos 📦 Optimizada para transporte seguro 🍹 Perfecta para smoothies y salsas espesas',
    rating: 4.4,
    technical: {
      capacity: '1.5L',
      power: '1000W',
      features: '3 velocidades, diseño compacto'
    }
  },
  // Air Fryers (2 productos)
  {
    id: 9,
    name: 'AF-9002D',
    type: 'Freidora de Aire',
    category: 'Air Fryers',
    image: '/assets/productos/AF-9002D.jpg',
    price: '$75.64',
    specs: [
      'Freidora de Aire Dual',
      'Potencia: 1800W',
      'Capacidad: 7.6L (2 cestas x 3.8L)',
      'Revestimiento DiamondForce',
      'Temp. máxima: 200°C/400°F',
      '6 funciones programables'
    ],
    description: '🍟 Dual: cocina dos platos simultáneos 💎 DiamondForce: cero adherencias ⏱️ 60 min de temporizador digital',
    rating: 4.5,
    technical: {
      capacity: '7.6L total (2 cestas de 3.8L)',
      power: '1800W',
      features: '6 funciones, panel digital, revestimiento DiamondForce'
    }
  },
  {
    id: 10,
    name: 'HIC-AF-2252',
    type: 'Freidora de Aire',
    category: 'Air Fryers',
    image: '/assets/productos/HIC-AF-2252.jpg',
    price: '$31.85',
    specs: [
      'Freidora de Aire Manual',
      'Capacidad: 4L (4.2 qt)',
      'Control: Doble perilla (tiempo/temperatura)',
      'Bandeja: Aluminio ALCO 0.5mm',
      'Revestimiento: Teflón negro antiadherente',
      'Calentador: Resistencia circular 1480W'
    ],
    description: '💸 Económica y esencial 👵 Ideal para principiantes y adultos mayores 🍗 Crujiente perfecto con 1480W de potencia',
    rating: 4.3,
    technical: {
      capacity: '4L (4.2 qt)',
      power: '1480W',
      features: 'Control manual con doble perilla, carcasa polipropileno'
    }
  },
  // Ventiladores (1 producto)
  {
    id: 11,
    name: 'YH-42F',
    type: 'Ventilador',
    category: 'Ventiladores',
    image: '/assets/productos/YH-42F.jpg',
    price: '$54.16',
    specs: [
      'Diámetro: 32 pulgadas',
      '3 velocidades ajustables',
      'Cobertura máxima de aire',
      'Motor silencioso',
      'Diseño elegante',
      'Bajo consumo energético'
    ],
    description: '🌬️ Frescura máxima: 32 pulgadas de cobertura 🌀 3 niveles de brisa ajustable ❄️ Tu aliado contra el calor',
    rating: 4.2,
    technical: {
      diameter: '32 pulgadas',
      speeds: '3 velocidades',
      features: 'Motor silencioso, bajo consumo'
    }
  },
  // Motos Eléctricas (6 productos)
  {
    id: 12,
    name: 'Lobo',
    type: 'Moto Eléctrica',
    category: 'Motos Eléctricas',
    image: '/assets/productos/Lobo.jpg',
    price: '$1,210.00',
    specs: [
      'Motor: 1000W',
      'Batería: 48V/60V',
      'Velocidad máxima: 45 km/h',
      'Frenos: Tambor delantero/trasero',
      'Suspensión hidráulica',
      'Pantalla LED avanzada'
    ],
    description: '🐺 Potencia salvaje con 1000W 💡 Pantalla LED de última generación 🔐 Bloqueo de rueda trasera antirobo',
    rating: 4.9,
    technical: {
      motor: '1000W, 1D pulgadas, 27H',
      battery: '48V/60V',
      features: 'USB, 3 velocidades, modo P, reversa, encendido sin llave, control crucero, alarma antirrobo'
    }
  },
  {
    id: 13,
    name: 'Commander II',
    type: 'Moto Eléctrica',
    category: 'Motos Eléctricas',
    image: '/assets/productos/Commander-II.jpg',
    price: '$1,040.00',
    specs: [
      'Motor: 1000W',
      'Batería: 48V/60V',
      'Velocidad máxima: 45 km/h',
      'Frenos: Tambor delantero/trasero',
      'Suspensión hidráulica',
      'Encendido sin llave'
    ],
    description: '🚀 Versión mejorada: más potencia y confort 📲 Encendido sin llave y panel LED 🔄 Reversa para maniobras en espacios reducidos',
    rating: 4.8,
    technical: {
      motor: '1000W, 1D pulgadas, 27H',
      battery: '48V/60V',
      features: 'USB, 3 velocidades, modo P, reversa, encendido sin llave, control crucero, alarma antirrobo'
    }
  },
  {
    id: 14,
    name: 'Águila Veloz',
    type: 'Moto Eléctrica',
    category: 'Motos Eléctricas',
    image: '/assets/productos/aguila-veloz.jpg',
    price: '$1,040.00',
    specs: [
      'Motor: 1000W',
      'Batería: 48V/60V',
      'Velocidad máxima: 45 km/h',
      'Frenos: Tambor delantero/trasero',
      'Suspensión hidráulica',
      'Puerto USB integrado'
    ],
    description: '🦅 Velocidad ágil (45 km/h) 🔌 Puerto USB para dispositivos ⏱️ Control crucero para viajes largos sin fatiga',
    rating: 4.6,
    technical: {
      motor: '1000W, 1D pulgadas, 27H',
      battery: '48V/60V',
      features: 'USB, 3 velocidades, modo P, reversa, encendido sin llave, control crucero, alarma antirrobo'
    }
  },
  {
    id: 15,
    name: 'Warrior',
    type: 'Moto Eléctrica',
    category: 'Motos Eléctricas',
    image: '/assets/productos/Warrior.jpg',
    price: '$920.00',
    specs: [
      'Motor: 1000W',
      'Batería: 48V/60V',
      'Velocidad máxima: 45 km/h',
      'Frenos: Tambor delantero/trasero',
      'Suspensión hidráulica',
      'Alarma antirrobo completa'
    ],
    description: '⚔️ Combina potencia y agilidad urbana 🔋 Doble voltaje (48V/60V) para largos recorridos 🔒 Seguridad máxima: alarmas antirrobo y de asiento',
    rating: 4.6,
    technical: {
      motor: '1000W, 1D pulgadas, 27H',
      battery: '48V/60V',
      features: 'USB, 3 velocidades, modo P, reversa, encendido sin llave, control crucero, alarma antirrobo'
    }
  },
  {
    id: 16,
    name: 'Commander',
    type: 'Moto Eléctrica',
    category: 'Motos Eléctricas',
    image: '/assets/productos/Commander.jpg',
    price: '$920.00',
    specs: [
      'Motor: 1000W',
      'Batería: 48V/60V',
      'Velocidad máxima: 45 km/h',
      'Frenos: Tambor delantero/trasero',
      'Suspensión hidráulica',
      'Tablero LED'
    ],
    description: '🎖️ Comando total de la carretera ⚡ Aceleración suave con 3 velocidades 🛡️ Frenos de tambor duales para paradas seguras',
    rating: 4.6,
    technical: {
      motor: '1000W, 1D pulgadas, 27H',
      battery: '48V/60V',
      features: 'USB, 3 velocidades, modo P, reversa, encendido sin llave, control crucero, alarma antirrobo'
    }
  },
  {
    id: 17,
    name: 'King',
    type: 'Moto Eléctrica',
    category: 'Motos Eléctricas',
    image: '/assets/productos/King.jpg',
    price: '$920.00',
    specs: [
      'Motor: 1000W',
      'Batería: 48V/60V',
      'Velocidad máxima: 45 km/h',
      'Frenos: Tambor delantero/trasero',
      'Suspensión hidráulica',
      'Modo P optimizado'
    ],
    description: '👑 Elegancia real en dos ruedas 🌊 Suspensión hidráulica para terrenos irregulares ⚙️ Modo P: optimiza el rendimiento energético',
    rating: 4.6,
    technical: {
      motor: '1000W, 1D pulgadas, 27H',
      battery: '48V/60V',
      features: 'USB, 3 velocidades, modo P, reversa, encendido sin llave, control crucero, alarma antirrobo'
    }
  }
];

const categories = [
  { name: 'Batidoras', icon: '🥄', active: true },
  { name: 'Cafeteras', icon: '☕', active: false },
  { name: 'Arroceras', icon: '🍚', active: false },
  { name: 'Licuadoras', icon: '🥤', active: false },
  { name: 'Air Fryers', icon: '🍟', active: false },
  { name: 'Ventiladores', icon: '🌀', active: false },
  { name: 'Todos los Productos', icon: '📱', active: false }
];

const techSpecs = [
  {
    icon: '🥄',
    temp: '16',
    title: 'Velocidades + Pulso',
    description: 'Control total para texturas perfectas en batidoras profesionales'
  },
  {
    icon: '☕',
    temp: '1000W',
    title: 'Potencia Industrial',
    description: 'Motores de alta potencia para licuadoras y electrodomésticos'
  },
  {
    icon: '🍚',
    temp: '14',
    title: 'Funciones Programables',
    description: 'Arroceras multifunción con programas inteligentes'
  },
  {
    icon: '🍟',
    temp: '200°C',
    title: 'Temperatura Máxima',
    description: 'Air fryers con control preciso de temperatura'
  },
  {
    icon: '🎯',
    temp: '304',
    title: 'Acero Inoxidable',
    description: 'Materiales de grado alimentario para máxima durabilidad'
  },
  {
    icon: '🔧',
    temp: '100%',
    title: 'Engranajes Metálicos',
    description: 'Construcción robusta para años de uso intensivo'
  }
];

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
      {/* Professional Top Bar */}
      <div className="bg-gray-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              gerencia@aucmalatam.com
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +507 6868-5234
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">🏆 35+ años de experiencia</span>
            <span className="text-gray-300">🤝 ¿Quieres volverte un distribuidor en tu país?</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section Enhanced */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/assets/logos/aucma-logo.png"
              alt="AUCMA Logo"
              className="h-24 w-auto" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          </div>

          {/* Desktop Navigation Enhanced */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="/sobre-aucma" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors relative group">
              Sobre AUCMA
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="/productos" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors relative group">
              Productos
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="/faqs" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors relative group">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="/contacto" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/50768685234"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Inicio</a>
              <a href="/sobre-aucma" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Sobre AUCMA</a>
              <a href="/productos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Productos</a>
              <a href="/faqs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">FAQs</a>
              <a href="/contacto" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600">Contacto</a>
              <a 
                href="https://wa.me/50768685234"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium bg-green-600 text-white rounded mx-3 text-center mt-4"
              >
                📱 Contactar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component Enhanced
export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: 'https://images.unsplash.com/photo-1589763472885-46dd5b282f52',
      title: 'AUCMA',
      subtitle: 'Líder en Electrodomésticos Profesionales para Latinoamérica',
      description: 'Más de 35 años de innovación, calidad superior y tecnología avanzada respaldados por certificaciones internacionales',
      cta: 'Explorar Catálogo',
      stats: [
        { number: '35+', label: 'Años de experiencia' },
        { number: '100+', label: 'Países atendidos' },
        { number: '10M+', label: 'Productos vendidos' }
      ]
    },
    {
      background: 'https://images.unsplash.com/photo-1598292977405-b31b7062aeee',
      title: 'Batidoras Profesionales',
      subtitle: 'Engranajes 100% metálicos, hasta 16 velocidades + función pulso',
      description: 'Certificadas ISO 9001:2015 • Garantía extendida 2 años • Servicio técnico especializado',
      cta: 'Ver Batidoras',
      stats: [
        { number: '1000W', label: 'Potencia máxima' },
        { number: '16', label: 'Velocidades disponibles' },
        { number: '304', label: 'Acero inoxidable grado' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center max-w-6xl mx-auto px-4">
          {/* Professional Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white border-opacity-20"
          >
            <span className="text-yellow-400 mr-2">🏆</span>
            <span className="text-sm font-medium">Certificado ISO 9001:2015 • CE • FCC • RoHS</span>
          </motion.div>

          <motion.h1
            key={currentSlide}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-wider"
            style={{ 
              background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          <motion.h2
            key={`subtitle-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold mb-6 text-gray-100"
          >
            {slides[currentSlide].subtitle}
          </motion.h2>
          
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200"
          >
            {slides[currentSlide].description}
          </motion.p>

          {/* Professional Stats */}
          <motion.div
            key={`stats-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mb-8 max-w-2xl mx-auto"
          >
            {slides[currentSlide].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {slides[currentSlide].cta}
            </button>
            <a
              href="https://wa.me/50768685234"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Asesoría Gratuita
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Professional Trust Indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-4 text-white text-xs">
        <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
          🛡️ Garantía 2 años
        </span>
        <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
          📞 Soporte 24/7
        </span>
      </div>
    </section>
  );
};

// Product Section Component
export const ProductSection = ({ onProductSelect, onRequestQuote }) => {
  const [activeCategory, setActiveCategory] = useState('Batidoras');

  const filteredProducts = activeCategory === 'Todos los Productos' 
    ? products.filter(product => product.category !== 'Motos Eléctricas')
    : products.filter(product => product.category === activeCategory && product.category !== 'Motos Eléctricas');

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Encuentra tu producto ideal.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde batidoras de grado industrial hasta electrodomésticos innovadores de última generación
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover sm:object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-48 items-center justify-center text-center">
                  <div>
                    <div className="text-6xl mb-2">
                      {product.category === 'Batidoras' ? '🥄' : 
                       product.category === 'Motos Eléctricas' ? '🏍️' : 
                       product.category === 'Cafeteras' ? '☕' :
                       product.category === 'Arroceras' ? '🍚' :
                       product.category === 'Licuadoras' ? '🥤' :
                       product.category === 'Air Fryers' ? '🍟' :
                       product.category === 'Ventiladores' ? '🌀' : '🏠'}
                    </div>
                    <p className="text-gray-500 text-sm">Subir imagen a GitHub</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{product.category}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600 font-medium">{product.type}</p>
                </div>
                
                <p className="text-xl font-bold text-red-600 mb-4">{product.price}</p>
                
                <div className="space-y-2">
                  <button
                    onClick={() => onProductSelect(product)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    Ver Detalles
                  </button>
                  <button
                    onClick={() => onRequestQuote(product)}
                    className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cotizar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Professional Certifications Component
export const CertificationsSection = () => {
  const certifications = [
    {
      icon: '🏆',
      title: 'ISO 9001:2015',
      description: 'Gestión de Calidad Certificada'
    },
    {
      icon: '✅',
      title: 'CE Certified',
      description: 'Estándares Europeos de Seguridad'
    },
    {
      icon: '🔒',
      title: 'FCC Compliant',
      description: 'Certificación Regulatoria USA'
    },
    {
      icon: '🌿',
      title: 'RoHS Compliant',
      description: 'Amigable con el Medio Ambiente'
    },
    {
      icon: '🛡️',
      title: '2 Años Garantía',
      description: 'Respaldo Total del Fabricante'
    },
    {
      icon: '📞',
      title: 'Soporte 24/7',
      description: 'Asistencia Técnica Especializada'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Certificaciones y Garantías Profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respaldamos cada producto con certificaciones internacionales y el compromiso de calidad AUCMA
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">{cert.title}</h3>
              <p className="text-xs text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      company: 'Restaurante El Buen Sabor',
      country: 'Panamá',
      text: 'Las batidoras AUCMA han transformado nuestra cocina. La robustez y potencia son excepcionales para uso comercial diario.',
      rating: 5
    },
    {
      name: 'María Rodriguez',
      company: 'Hogar',
      country: 'Costa Rica',
      text: 'Mi moto eléctrica AUCMA ha sido perfecta para movilizarme en San José. Excelente autonomía y cero mantenimiento.',
      rating: 5
    },
    {
      name: 'José García',
      company: 'Panadería Los Alpes',
      country: 'Guatemala',
      text: 'Después de 3 años de uso intensivo, nuestra batidora HH9108S sigue funcionando como el primer día. Calidad garantizada.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Miles de clientes satisfechos en toda Latinoamérica confían en la calidad AUCMA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-600"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <p className="text-xs text-red-600 font-medium">{testimonial.country}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-red-50 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="text-red-600 font-semibold">4.8/5 promedio en satisfacción del cliente</span>
            <span className="text-gray-500 ml-2">(+2,500 reseñas)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export const TechSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Expertos en Tecnología de Precisión
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Más de 35 años perfeccionando batidoras de grado profesional y desarrollando motos eléctricas de alto rendimiento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techSpecs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <div className="text-4xl mb-4">{spec.icon}</div>
              <div className="text-2xl font-bold text-white mb-2">{spec.temp}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
              <p className="text-blue-100 text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
export const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573164574230-db1d5e960238)' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-8">Sobre AUCMA</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">35+ Años de Excelencia</h3>
            <p className="text-lg text-gray-300 mb-6">
              Desde 1987, AUCMA ha sido pionera en la fabricación de electrodomésticos de alta calidad, 
              especializándose en batidoras de grado industrial, sistemas de cocción inteligentes y la más amplia gama de electrodomésticos para Latinoamérica.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Con sede en Qingdao, China, y una fuerte presencia en más de 100 países, 
              AUCMA se enorgullece de liderar el mercado latinoamericano con electrodomésticos de acero inoxidable 304, 
              motores de 1000W y tecnología innovadora que incluye motos eléctricas eco-friendly.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400">100+</div>
                <div className="text-gray-300">Países atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400">35+</div>
                <div className="text-gray-300">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400">10M+</div>
                <div className="text-gray-300">Productos vendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400">500+</div>
                <div className="text-gray-300">Modelos disponibles</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">Electrodomésticos Profesionales</h4>
              <p className="text-gray-300">
                Desde batidoras de engranajes 100% metálicos hasta arroceras multifunción con 14 programas, licuadoras de 1000W, air fryers con tecnología DiamondForce y cafeteras con jarra Duralife™.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">Enfoque en Latinoamérica</h4>
              <p className="text-gray-300">
                Productos diseñados para el clima y estilo de vida latinoamericano,
                con servicio técnico especializado y garantías extendidas en toda la región.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Product Modal Component
export const ProductModal = ({ product, onClose, onRequestQuote }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
              <div className="bg-gray-100 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[450px] object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-[450px] items-center justify-center text-center rounded-lg">
                  <div>
                    <div className="text-8xl mb-4">
                      {product.category === 'Batidoras' ? '🥄' : 
                       product.category === 'Motos Eléctricas' ? '🏍️' : 
                       product.category === 'Cafeteras' ? '☕' :
                       product.category === 'Arroceras' ? '🍚' :
                       product.category === 'Licuadoras' ? '🥤' :
                       product.category === 'Air Fryers' ? '🍟' :
                       product.category === 'Ventiladores' ? '🌀' : '🏠'}
                    </div>
                    <p className="text-gray-500">Subir imagen a GitHub</p>
                    <p className="text-gray-400 text-sm mt-1">{product.name}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-lg font-semibold">{product.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                  <p className="text-lg text-gray-600 font-medium">{product.type}</p>
                </div>
                
                <p className="text-2xl font-bold text-red-600 mb-6">{product.price}</p>
                
                <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Especificaciones:</h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {product.technical && (
                  <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Detalles Técnicos:</h3>
                    <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                      {Object.entries(product.technical).map(([key, value], index) => (
                        <div key={index} className="flex">
                          <span className="font-medium capitalize mr-2">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => onRequestQuote(product)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Solicitar Cotización
                  </button>
                  <button className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Contactar Distribuidor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Quotation Modal Component
export const QuotationModal = ({ isOpen, onClose, initialProduct = null }) => {
  const [cart, setCart] = useState(initialProduct ? [{ ...initialProduct, quantity: 1 }] : []);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: ''
  });

  useEffect(() => {
    if (initialProduct && !cart.find(item => item.id === initialProduct.id)) {
      setCart([{ ...initialProduct, quantity: 1 }]);
    }
  }, [initialProduct]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create quotation summary
    const quotationSummary = cart.map(item => 
      `${item.name} - Cantidad: ${item.quantity} - Precio: ${item.price}`
    ).join('\n');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const whatsappMessage = encodeURIComponent(
      `🛒 SOLICITUD DE COTIZACIÓN AUCMA\n\n` +
      `👤 Cliente: ${customerInfo.name}\n` +
      `📧 Email: ${customerInfo.email}\n` +
      `📱 Teléfono: ${customerInfo.phone}\n` +
      `🏢 Empresa: ${customerInfo.company || 'No especificada'}\n` +
      `🌎 País: ${customerInfo.country}\n\n` +
      `📦 PRODUCTOS SOLICITADOS:\n${quotationSummary}\n\n` +
      `📊 Total artículos: ${totalItems}\n\n` +
      `💬 Mensaje adicional:\n${customerInfo.message || 'Ninguno'}\n\n` +
      `¡Favor enviar cotización formal con precios, disponibilidad y tiempos de entrega!`
    );
    
    // Open WhatsApp
    window.open(`https://wa.me/50768685234?text=${whatsappMessage}`, '_blank');
    
    // Reset form and close modal
    setCart([]);
    setCustomerInfo({
      name: '', email: '', phone: '', company: '', country: '', message: ''
    });
    onClose();
    
    alert('¡Cotización enviada por WhatsApp! Te contactaremos pronto con la información solicitada.');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  🛒 Solicitar Cotización
                </h2>
                <p className="text-gray-600">
                  Selecciona productos y completa tus datos para recibir una cotización personalizada
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Products Selection */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📦 Productos Seleccionados</h3>
                  
                  {/* Add More Products */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3">Agregar más productos:</h4>
                    <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                      {products.filter(p => !cart.find(item => item.id === p.id)).map(product => (
                        <button
                          key={product.id}
                          onClick={() => addToCart(product)}
                          className="text-left p-2 bg-white rounded text-sm hover:bg-blue-50 transition-colors"
                        >
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-gray-600">{product.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Cart Items */}
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {cart.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <ShoppingCart className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                        <p>No has seleccionado productos aún</p>
                      </div>
                    ) : (
                      cart.map(item => (
                        <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.type}</p>
                            <p className="text-lg font-bold text-red-600">{item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-lg px-3">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-2 text-red-600 hover:text-red-800"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total artículos:</span>
                        <span className="text-xl font-bold text-red-600">
                          {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Customer Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Información de Contacto</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="tu.email@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="+507 1234-5678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa (opcional)
                      </label>
                      <input
                        type="text"
                        value={customerInfo.company}
                        onChange={(e) => setCustomerInfo({...customerInfo, company: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        País *
                      </label>
                      <select
                        required
                        value={customerInfo.country}
                        onChange={(e) => setCustomerInfo({...customerInfo, country: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Selecciona tu país</option>
                        <option value="Panama">Panamá</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Mexico">México</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Peru">Perú</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Chile">Chile</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje adicional
                      </label>
                      <textarea
                        value={customerInfo.message}
                        onChange={(e) => setCustomerInfo({...customerInfo, message: e.target.value})}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                        placeholder="Información adicional sobre tu consulta..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={cart.length === 0}
                      className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-colors flex items-center justify-center ${
                        cart.length === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      📱 Enviar por WhatsApp
                    </button>
                    
                    <div className="text-xs text-gray-500 text-center">
                      Al enviar, serás redirigido a WhatsApp para completar tu solicitud
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
// Footer Component Enhanced
export const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        if (data.status === 'already_subscribed') {
          setStatus('info');
          setMessage('Este email ya está suscrito a nuestro newsletter.');
        } else {
          setStatus('success');
          setMessage('¡Suscripción exitosa! Recibirás nuestras novedades en tu email.');
          setEmail('');
        }
      } else {
        setStatus('error');
        setMessage(data.detail || 'Error al procesar la suscripción');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Por favor, intenta nuevamente.');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Mantente actualizado con AUCMA
          </h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Recibe las últimas novedades, promociones exclusivas y consejos técnicos directamente en tu email
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.email@ejemplo.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              disabled={status === 'loading'}
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
            </button>
          </form>
          
          {message && (
            <div className={`mt-4 p-3 rounded-lg max-w-md mx-auto text-sm ${
              status === 'success' 
                ? 'bg-green-100 border border-green-400 text-green-700' 
                : status === 'info'
                ? 'bg-blue-100 border border-blue-400 text-blue-700'
                : 'bg-red-100 border border-red-400 text-red-700'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info Enhanced */}
            <div className="col-span-1 md:col-span-2 text-left">
              <div className="flex justify-start items-center mb-6">
                <img 
                  src="/assets/logos/aucma-logo.png"
                  alt="AUCMA Logo"
                  className="h-20 w-auto filter brightness-0 invert"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-left">
                <strong>Líder en electrodomésticos para Latinoamérica.</strong> 
                35+ años de innovación, calidad superior certificada ISO 9001:2015 y servicio técnico especializado desde 1987.
              </p>

              {/* Professional Certifications Icons */}
              <div className="flex flex-wrap gap-3 mb-6 justify-start">
                <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">🏆 ISO 9001:2015</span>
                <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">✅ CE Certified</span>
                <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">🔒 FCC Compliant</span>
                <span className="bg-gray-800 px-3 py-1 rounded text-xs border border-gray-700">🌿 RoHS</span>
              </div>
              
              {/* Social Media Professional */}
              <div className="flex justify-start space-x-4">
                <a href="https://facebook.com/aucmalatam" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-red-600">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/aucmalatam" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-red-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/50768685234" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:gerencia@aucmalatam.com" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-red-600">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links Professional */}
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 text-left">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-left">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Inicio
                </a></li>
                <li><a href="/productos" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Catálogo de Productos
                </a></li>
                <li><a href="/sobre-aucma" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Sobre AUCMA
                </a></li>
                <li><a href="/faqs" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Preguntas Frecuentes
                </a></li>
                <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contacto y Soporte
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Servicio Técnico
                </a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Garantías
                </a></li>
              </ul>
            </div>
            
            {/* Contact Information Professional */}
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 text-left">Contacto Profesional</h4>
              <div className="space-y-4 text-left">
                <div className="flex items-start text-left">
                  <MapPin className="w-5 h-5 mr-3 text-red-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm leading-relaxed text-left">
                    <strong className="text-white block">Oficina Principal:</strong>
                    Calle 50 con Calle 53 Marbella<br/>
                    Plaza 2000, Piso 11, Oficina 6<br/>
                    Ciudad de Panamá, Panamá
                  </div>
                </div>
                
                <div className="flex items-center text-left">
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  <div className="text-left">
                    <a href="https://wa.me/50768685234" className="text-gray-300 hover:text-white transition-colors">
                      <strong className="text-white">WhatsApp:</strong><br/>
                      +507 6868-5234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start text-left">
                  <Mail className="w-5 h-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm text-left">
                    <div className="mb-2">
                      <strong className="text-white">Gerencia:</strong><br/>
                      <a href="mailto:gerencia@aucmalatam.com" className="hover:text-white transition-colors">
                        gerencia@aucmalatam.com
                      </a>
                    </div>
                    <div>
                      <strong className="text-white">Atención al Cliente:</strong><br/>
                      <a href="mailto:atencion@aucmalatam.com" className="hover:text-white transition-colors">
                        atencion@aucmalatam.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 text-left">
                  <p className="text-green-400 font-semibold text-sm">✅ Horarios de Atención:</p>
                  <p className="text-gray-300 text-sm">Lunes a Viernes: 8:00 AM - 5:00 PM (GMT-5)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional Footer Bottom */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© 2024 AUCMA Latinoamérica. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Política de Garantías</a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-gray-300 text-sm mb-1">
                <strong className="text-white">Distribuido oficialmente por:</strong>
              </div>
              <div className="text-red-400 font-bold text-lg">Nabo International Services</div>
              <div className="text-gray-400 text-xs">República de Panamá • Licencia Comercial #155655335-2-2017</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// FAQs Page Component
export const FAQsPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqSections = [
    {
      id: 'batidoras',
      title: '🥄 Batidoras de Pedestal',
      icon: '🥄',
      faqs: [
        {
          q: '¿Por qué mi batidora AUCMA no enciende?',
          a: 'Verifique que esté correctamente conectada a la corriente. Asegúrese de que el cabezal esté bien colocado y bloqueado en posición. En modelos como SM-1541, el sistema de seguridad impide el funcionamiento si el cabezal no está correctamente inclinado hacia abajo.'
        },
        {
          q: '¿Qué significa que tenga engranajes 100% metálicos?',
          a: 'Los engranajes metálicos en nuestras batidoras (especialmente HH9108S y ASMP-SPA1) garantizan mayor durabilidad y resistencia comparado con engranajes plásticos. Esto permite un uso intensivo y profesional sin desgaste prematuro.'
        },
        {
          q: '¿Cuál es la diferencia entre 6, 10 y 16 velocidades?',
          a: 'SM-1541 tiene 10 velocidades para uso doméstico frecuente. HH9108S tiene 16 velocidades (6+10 adicionales) para uso semi-profesional. ASMP-SPA1 tiene 6 velocidades + pulso, optimizada para múltiples funciones incluyendo molino de carne.'
        },
        {
          q: '¿Puedo usar mi batidora AUCMA todos los días?',
          a: 'Sí, están diseñadas para uso intensivo diario. El motor AC/DC y la construcción robusta permiten operación continua. Recomendamos descansos de 2-3 minutos cada 10 minutos de uso continuo en preparaciones pesadas.'
        },
        {
          q: '¿El bol de acero inoxidable 304 es seguro para alimentos?',
          a: 'Absolutamente. El acero inoxidable 304 es grado alimentario, no tóxico, resistente a la corrosión y fácil de limpiar. Es el mismo material usado en cocinas profesionales.'
        }
      ]
    },
    {
      id: 'motos',
      title: '🏍️ Motos Eléctricas',
      icon: '🏍️',
      faqs: [
        {
          q: '¿Cuál es la autonomía real de las motos AUCMA?',
          a: 'Con batería 48V: 35-40 km en condiciones normales. Con 60V: 45-55 km. La autonomía depende del peso del conductor, terreno, velocidad y condiciones climáticas. En modo económico puede extenderse hasta 20% más.'
        },
        {
          q: '¿Cuánto tiempo tarda en cargar completamente?',
          a: 'Carga completa: 6-8 horas desde 0%. Carga del 20% al 80%: 4-5 horas. Recomendamos no descargar completamente la batería para prolongar su vida útil.'
        },
        {
          q: '¿Puedo usar mi moto AUCMA bajo la lluvia?',
          a: 'Nuestras motos tienen protección IPX4 contra salpicaduras, pero no recomendamos uso bajo lluvia intensa. Evite sumergir componentes eléctricos. En caso de mojarse, seque bien antes de cargar.'
        },
        {
          q: '¿Qué significa la suspensión hidráulica?',
          a: 'La suspensión hidráulica en nuestros modelos absorbe impactos y vibraciones del terreno, proporcionando mayor comodidad y estabilidad. Es especialmente útil en calles irregulares comunes en Latinoamérica.'
        },
        {
          q: '¿Necesito licencia para conducir una moto eléctrica AUCMA?',
          a: 'Depende de la legislación local. En muchos países de Latinoamérica, motos hasta 50km/h requieren licencia de motocicleta. Consulte las leyes de tránsito de su país antes de comprar.'
        },
        {
          q: '¿Qué incluye el sistema de alarma antirrobo?',
          a: 'Incluye: alarma sonora al mover la moto sin llave, bloqueo de rueda trasera, alarma de asiento si se levanta sin autorización, y en modelos premium como Lobo y Commander II, encendido sin llave con código.'
        }
      ]
    },
    {
      id: 'electrodomesticos',
      title: '🏠 Electrodomésticos',
      icon: '🏠',
      faqs: [
        {
          q: '¿Por qué mi arrocera DRC-8ESL032 no enciende?',
          a: 'Verifique que la olla interior esté correctamente colocada y que la tapa esté bien cerrada. El sistema de seguridad impide el funcionamiento si no detecta la olla interior de acero inoxidable.'
        },
        {
          q: '¿Cuántas tazas de arroz puedo cocinar en la arrocera de 18L?',
          a: 'La DRC-8ESL032 puede cocinar hasta 10 tazas de arroz crudo (aproximadamente 20 tazas de arroz cocido), ideal para familias grandes o pequeños eventos.'
        },
        {
          q: '¿Mi licuadora LB6108A puede triturar hielo?',
          a: 'Sí, con 1000W de potencia y cuchillas reforzadas, puede triturar hielo fácilmente. Use la velocidad máxima en pulsos cortos para mejores resultados y evitar sobrecalentamiento.'
        },
        {
          q: '¿Qué es la tecnología DiamondForce en air fryers?',
          a: 'Es un revestimiento antiadherente multicapa extremadamente resistente que evita que los alimentos se peguen y facilita la limpieza. Es más duradero que revestimientos convencionales.'
        },
        {
          q: '¿Puedo cocinar dos platos diferentes simultáneamente en la AF-9002D?',
          a: 'Sí, la freidora dual tiene 2 cestas independientes de 3.8L cada una con controles separados de tiempo y temperatura. Perfecta para cocinar entrada y plato principal al mismo tiempo.'
        },
        {
          q: '¿La cafetera CMD0001-UL funciona con café molido?',
          a: 'Sí, está diseñada para café molido. Incluye filtro permanente, pero también acepta filtros de papel. La tecnología Sneak-a-Cup™ permite servir sin derrames mientras está funcionando.'
        }
      ]
    },
    {
      id: 'garantia',
      title: '🛡️ Garantía y Servicio',
      icon: '🛡️',
      faqs: [
        {
          q: '¿Cuál es el período de garantía de productos AUCMA?',
          a: 'Electrodomésticos: 2 años por defectos de fabricación. Motos eléctricas: 1 año en motor y electrónicos, 6 meses en batería. La garantía cubre piezas y mano de obra en centros autorizados.'
        },
        {
          q: '¿Qué cubre exactamente la garantía?',
          a: 'Cubre defectos de materiales y fabricación bajo uso normal. No cubre: daños por mal uso, golpes, modificaciones no autorizadas, desgaste normal por uso, o daños por voltaje inadecuado.'
        },
        {
          q: '¿Dónde puedo obtener servicio técnico en Latinoamérica?',
          a: 'Nabo International Services en Panamá es nuestro distribuidor oficial. Para servicio técnico, contacte: atencion@aucmalatam.com o WhatsApp +507 6868-5234. Tenemos técnicos certificados en principales ciudades.'
        },
        {
          q: '¿Cómo reclamo la garantía?',
          a: 'Conserve su factura de compra. Contacte nuestro servicio al cliente con: modelo del producto, número de serie, descripción del problema y foto de la factura. Evaluaremos si aplica garantía.'
        },
        {
          q: '¿Hay repuestos disponibles para productos AUCMA?',
          a: 'Sí, mantenemos inventario de repuestos originales para todos nuestros productos. Los repuestos más comunes están disponibles inmediatamente. Piezas especiales pueden tardar 7-15 días.'
        },
        {
          q: '¿Puedo reparar mi producto en cualquier taller?',
          a: 'Para mantener la garantía, debe usar centros de servicio autorizados AUCMA. Reparaciones no autorizadas anulan la garantía. Contáctenos para ubicar el centro más cercano.'
        }
      ]
    },
    {
      id: 'instalacion',
      title: '🔧 Instalación y Mantenimiento',
      icon: '🔧',
      faqs: [
        {
          q: '¿Qué voltaje necesitan los productos AUCMA?',
          a: 'Electrodomésticos: 110V-120V (estándar Latinoamérica). Motos eléctricas: cargador 110V-220V automático. Todos incluyen cable de alimentación apropiado para su región.'
        },
        {
          q: '¿Cómo limpio mi batidora de acero inoxidable?',
          a: 'Bol y accesorios: lavables en lavavajillas o a mano con agua tibia y jabón. Base del motor: limpie solo con paño húmedo. Nunca sumerja la base en agua. Seque completamente antes de guardar.'
        },
        {
          q: '¿Con qué frecuencia debo limpiar mi air fryer?',
          a: 'Después de cada uso: retire y lave las cestas. Limpie el interior con paño húmedo. Semanalmente: limpie resistencia superior con cepillo suave. Use agua tibia y jabón, nunca productos abrasivos.'
        },
        {
          q: '¿Cómo mantengo la batería de mi moto eléctrica?',
          a: 'Cargue regularmente, no deje descargar completamente. Almacene en lugar seco y fresco. En desuso prolongado, cargue al 50-60% cada 2 meses. Evite temperaturas extremas (+40°C o -10°C).'
        },
        {
          q: '¿Qué aceite usa la suspensión hidráulica de las motos?',
          a: 'Usa aceite hidráulico especial incluido de fábrica. Mantenimiento cada 12 meses o 5,000 km. Solo use aceite original AUCMA o equivalente especificado en manual. El cambio debe hacerlo personal técnico.'
        },
        {
          q: '¿Puedo usar mi arrocera para otros alimentos además de arroz?',
          a: 'Sí, especialmente la DRC-8ESL032 con 14 funciones: quinua, cereales, vapor (verduras, pescado), sopas, guisos de cocción lenta. La CYD50-9022 además permite ahumar alimentos.'
        }
      ]
    },
    {
      id: 'compra',
      title: '🛒 Compra y Distribución',
      icon: '🛒',
      faqs: [
        {
          q: '¿Dónde puedo comprar productos AUCMA en Latinoamérica?',
          a: 'A través de nuestro distribuidor oficial Nabo International Services. Contacto: gerencia@aucmalatam.com. También trabajamos con distribuidores autorizados en cada país. Verifique autenticidad del vendedor.'
        },
        {
          q: '¿Hacen envíos internacionales dentro de Latinoamérica?',
          a: 'Sí, coordinamos envíos desde Panamá a toda Latinoamérica. Costos y tiempos varían por destino. Productos grandes (batidoras, motos) pueden requerir carga marítima. Consulte disponibilidad por país.'
        },
        {
          q: '¿Aceptan pagos en cuotas?',
          a: 'Sí, trabajamos con planes de financiamiento según el país. Aceptamos tarjetas de crédito, transferencias bancarias y en algunos países, financiamiento directo. Consulte opciones disponibles en su región.'
        },
        {
          q: '¿Cómo verifico que mi producto AUCMA es original?',
          a: 'Productos originales incluyen: manual en español, garantía oficial, número de serie registrable, empaque con códigos QR verificables. Desconfíe de precios muy bajos o vendedores no autorizados.'
        },
        {
          q: '¿Ofrecen capacitación para uso de productos profesionales?',
          a: 'Sí, para batidoras de uso comercial (HH9108S, ASMP-SPA1) ofrecemos capacitación básica. También proporcionamos manuales detallados y videos tutoriales en nuestro canal de YouTube.'
        },
        {
          q: '¿Qué incluye la compra de una moto eléctrica?',
          a: 'Incluye: moto completamente ensamblada, cargador original, manual en español, herramientas básicas, certificado de garantía. Las llaves de repuesto y accesorios adicionales se venden por separado.'
        }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las consultas más comunes sobre productos AUCMA, 
            garantía, instalación y mantenimiento
          </p>
        </motion.div>

        {/* Contact Banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 mb-12 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿No encuentras tu respuesta?</h3>
              <p className="text-red-100">Nuestro equipo técnico está listo para ayudarte</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50768685234"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: +507 6868-5234
              </a>
              <a
                href="mailto:atencion@aucmalatam.com"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                atencion@aucmalatam.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openSection === section.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>

              {/* FAQ Items */}
              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-8 py-6">
                      <div className="space-y-6">
                        {section.faqs.map((faq, faqIndex) => (
                          <motion.div
                            key={faqIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: faqIndex * 0.1, duration: 0.5 }}
                            className="border-l-4 border-red-500 pl-6"
                          >
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                              {faq.q}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Soporte Técnico Especializado
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestros técnicos certificados están disponibles para resolver problemas complejos, 
              instalaciones especiales y mantenimiento preventivo de equipos comerciales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Soporte Inmediato</h4>
                <p className="text-sm text-gray-600">Lun-Vie 8AM-5PM GMT-5</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Servicio a Domicilio</h4>
                <p className="text-sm text-gray-600">En principales ciudades</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Garantía Extendida</h4>
                <p className="text-sm text-gray-600">Disponible para todos los productos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Image Test Page Component
export const ImageTestPage = () => {
  const testImages = [
    'https://raw.githubusercontent.com/victorra1191/Aucmalatam/main/frontend/public/assets/logos/aucma-logo.png',
    '/assets/productos/ASMP-SPA1.jpg',
    '/assets/productos/HH9108S.jpg',
    '/assets/productos/Commander-II.jpg',
    '/assets/productos/aguila-veloz.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">🔍 Test de Imágenes GitHub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testImages.map((url, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-semibold mb-2">Imagen {index + 1}</h3>
              <img
                src={url}
                alt={`Test ${index + 1}`}
                className="w-full h-48 object-cover border rounded"
                onLoad={() => console.log(`✅ Imagen ${index + 1} cargada`)}
                onError={() => console.log(`❌ Imagen ${index + 1} falló`)}
              />
              <p className="text-xs text-gray-500 mt-2 break-all">{url}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">📊 Diagnóstico Rápido:</h3>
          <ul className="text-sm space-y-1">
            <li>• Si ves las imágenes: ✅ Todo funciona</li>
            <li>• Si ves marcos vacíos: ❌ Problema de URL o cache</li>
            <li>• Abre la consola del navegador (F12) para ver errores</li>
          </ul>
        </div>
      </div>
    </div>
  );
};