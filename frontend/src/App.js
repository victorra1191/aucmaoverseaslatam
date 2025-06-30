import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { 
  Header, 
  HeroSection, 
  ProductSection, 
  TechSection, 
  AboutSection, 
  ProductModal, 
  QuotationModal,
  CertificationsSection,
  TestimonialsSection,
  Footer,
  FAQsPage 
} from './components';
import './App.css';

// Página de inicio
const HomePage = ({ onProductSelect, selectedProduct, onCloseModal, onRequestQuote, isQuotationOpen, onCloseQuotation, quotationProduct }) => (
  <>
    <HeroSection />
    <CertificationsSection />
    <ProductSection onProductSelect={onProductSelect} onRequestQuote={onRequestQuote} />
    <TechSection />
    <TestimonialsSection />
    <AboutSection />
    {selectedProduct && (
      <ProductModal product={selectedProduct} onClose={onCloseModal} onRequestQuote={onRequestQuote} />
    )}
    <QuotationModal 
      isOpen={isQuotationOpen} 
      onClose={onCloseQuotation} 
      initialProduct={quotationProduct} 
    />
  </>
);

// Página de productos 
const ProductsPage = ({ onProductSelect, selectedProduct, onCloseModal, onRequestQuote, isQuotationOpen, onCloseQuotation, quotationProduct }) => (
  <div className="pt-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Catálogo Completo AUCMA
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre toda nuestra línea de electrodomésticos 
          para Latinoamérica
        </p>
      </div>
    </div>
    <ProductSection onProductSelect={onProductSelect} onRequestQuote={onRequestQuote} />
    {selectedProduct && (
      <ProductModal product={selectedProduct} onClose={onCloseModal} onRequestQuote={onRequestQuote} />
    )}
    <QuotationModal 
      isOpen={isQuotationOpen} 
      onClose={onCloseQuotation} 
      initialProduct={quotationProduct} 
    />
  </div>
);

// Página sobre AUCMA
const AboutPage = () => (
  <div className="pt-28">
    <AboutSection />
    <CertificationsSection />
    <TechSection />
    <TestimonialsSection />
  </div>
);

// Página de contacto
const ContactPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    
    alert(`¡Gracias ${nombre}! Tu consulta ha sido recibida.\n\nTe contactaremos pronto via:\n📱 WhatsApp: +507 6868-5234\n📧 Email: gerencia@aucmalatam.com`);
    
    e.target.reset();
  };

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white border-opacity-20">
              <span className="text-yellow-400 mr-2">🏆</span>
              <span className="text-sm font-medium text-white">Certificado ISO 9001:2015 • 35+ años de experiencia</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contacto
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Soporte técnico especializado y asesoría comercial para distribuidores 
              y clientes corporativos en toda Latinoamérica
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border-l-4 border-red-600">
            <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Soporte Técnico</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border-l-4 border-green-600">
            <div className="text-3xl font-bold text-green-600 mb-2">&lt; 2hrs</div>
            <div className="text-gray-600 font-medium">Tiempo de Respuesta</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border-l-4 border-blue-600">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Países Atendidos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border-l-4 border-yellow-600">
            <div className="text-3xl font-bold text-yellow-600 mb-2">2 años</div>
            <div className="text-gray-600 font-medium">Garantía Extendida</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <span className="text-4xl mr-3">🏢</span>
                Información Corporativa
              </h2>
              <p className="text-red-100 text-left">
                Oficinas centrales de AUCMA para Latinoamérica. Contamos con un equipo técnico especializado, 
                certificaciones internacionales y más de tres décadas de experiencia en la industria de electrodomésticos. 
                Nuestro compromiso es brindar soporte integral a distribuidores autorizados y clientes corporativos 
                en toda la región, con atención personalizada y respuesta inmediata a sus necesidades comerciales.
              </p>
            </div>
            
            <div className="p-8 space-y-8 text-left">
              <div className="flex items-start group">
                <div className="bg-red-100 p-4 rounded-xl mr-4 flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-left">
                  <strong className="text-lg block mb-2 text-gray-800 text-left">Sede Principal:</strong>
                  <p className="text-gray-600 leading-relaxed text-left">
                    Nuestra oficina principal se encuentra estratégicamente ubicada en el corazón financiero de Panamá, 
                    facilitando las operaciones comerciales y logísticas hacia toda Latinoamérica.<br/><br/>
                    <strong>Dirección:</strong><br/>
                    Calle 50 con Calle 53 Marbella<br/>
                    Plaza 2000, Piso 11, Oficina 6<br/>
                    Ciudad de Panamá, Panamá<br/>
                    <span className="text-sm text-gray-500">Zona Financiera Internacional • Fácil acceso desde el aeropuerto</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-green-100 p-4 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <strong className="text-lg block mb-2 text-gray-800 text-left">WhatsApp Corporativo:</strong>
                  <p className="text-gray-600 text-left mb-3">
                    Línea directa para consultas comerciales, soporte técnico y atención a distribuidores. 
                    Nuestro equipo especializado está disponible las 24 horas para atender emergencias 
                    y consultas urgentes de nuestros socios comerciales.
                  </p>
                  <a href="https://wa.me/50768685234" className="text-green-600 hover:text-green-700 font-bold text-xl transition-colors flex items-center">
                    +507 6868-5234
                    <span className="ml-2 text-sm bg-green-100 px-2 py-1 rounded-full">Activo 24/7</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-blue-100 p-4 rounded-xl mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <strong className="text-lg block mb-3 text-gray-800 text-left">Canales Especializados:</strong>
                  <p className="text-gray-600 text-left mb-4">
                    Mantenemos canales de comunicación especializados para diferentes tipos de consultas, 
                    asegurando que cada solicitud sea atendida por el departamento más adecuado con 
                    la experiencia necesaria para brindar soluciones efectivas.
                  </p>
                  <div className="space-y-3 text-left">
                    <div>
                      <span className="text-sm font-medium text-gray-500 text-left">Gerencia y Nuevos Distribuidores:</span>
                      <a href="mailto:gerencia@aucmalatam.com" className="block text-blue-600 hover:text-blue-700 transition-colors text-left">
                        gerencia@aucmalatam.com
                      </a>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500 text-left">Soporte Técnico y Garantías:</span>
                      <a href="mailto:atencion@aucmalatam.com" className="block text-blue-600 hover:text-blue-700 transition-colors text-left">
                        atencion@aucmalatam.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-yellow-100 p-4 rounded-xl mr-4 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">🕒</span>
                </div>
                <div className="text-left">
                  <strong className="text-lg block mb-2 text-gray-800 text-left">Horarios de Atención:</strong>
                  <p className="text-gray-600 text-left">
                    Nuestro equipo de atención al cliente opera en horario comercial estándar de Panamá, 
                    con disponibilidad extendida para emergencias técnicas a través de WhatsApp.<br/><br/>
                    <span className="font-medium">Lunes a Viernes:</span> 8:00 AM - 5:00 PM<br/>
                    <span className="text-sm text-gray-500">GMT-5 (Zona Horaria de Panamá)</span><br/>
                    <span className="text-sm text-green-600 font-medium">WhatsApp disponible 24/7 para emergencias</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center border-t">
              <p className="text-gray-700 font-semibold mb-2">
                <strong>Distribuido oficialmente por:</strong>
              </p>
              <p className="text-2xl font-bold text-red-600 mb-1">Nabo International Services</p>
              <p className="text-sm text-gray-500">
                República de Panamá • Licencia Comercial #155655335-2-2017<br/>
                Representante autorizado AUCMA para Latinoamérica
              </p>
            </div>
          </motion.div>
          
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Envíanos tu consulta</h2>
              <p className="text-gray-300">
                Complete el formulario y nuestro equipo técnico le responderá en menos de 2 horas
              </p>
            </div>
            
            <form className="p-8 space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre y apellido" 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input 
                    type="tel" 
                    name="telefono" 
                    placeholder="+507 1234-5678" 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email corporativo *
                </label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="nombre@empresa.com" 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa / Organización
                  </label>
                  <input 
                    type="text" 
                    name="empresa" 
                    placeholder="Nombre de empresa" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    País *
                  </label>
                  <select 
                    name="pais"
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Seleccionar país</option>
                    <option value="Panama">🇵🇦 Panamá</option>
                    <option value="Costa Rica">🇨🇷 Costa Rica</option>
                    <option value="Guatemala">🇬🇹 Guatemala</option>
                    <option value="Honduras">🇭🇳 Honduras</option>
                    <option value="El Salvador">🇸🇻 El Salvador</option>
                    <option value="Nicaragua">🇳🇮 Nicaragua</option>
                    <option value="Mexico">🇲🇽 México</option>
                    <option value="Colombia">🇨🇴 Colombia</option>
                    <option value="Venezuela">🇻🇪 Venezuela</option>
                    <option value="Ecuador">🇪🇨 Ecuador</option>
                    <option value="Peru">🇵🇪 Perú</option>
                    <option value="Bolivia">🇧🇴 Bolivia</option>
                    <option value="Chile">🇨🇱 Chile</option>
                    <option value="Argentina">🇦🇷 Argentina</option>
                    <option value="Uruguay">🇺🇾 Uruguay</option>
                    <option value="Paraguay">🇵🇾 Paraguay</option>
                    <option value="Brasil">🇧🇷 Brasil</option>
                    <option value="Otro">🌎 Otro país</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de consulta *
                </label>
                <select 
                  name="tipo_consulta" 
                  required 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Seleccionar tipo de consulta</option>
                  <option value="cotizacion">💰 Cotización de productos</option>
                  <option value="distribuidor">🤝 Información para distribuidores</option>
                  <option value="soporte">🔧 Soporte técnico</option>
                  <option value="garantia">🛡️ Garantía y servicio</option>
                  <option value="producto">📱 Información de producto específico</option>
                  <option value="comercial">🏢 Consulta comercial/corporativa</option>
                  <option value="otro">❓ Otro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje detallado *
                </label>
                <textarea 
                  name="mensaje" 
                  placeholder="Describe tu consulta con el mayor detalle posible. Si es para productos específicos, incluye modelos de interés..." 
                  required 
                  rows="4" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all"
                ></textarea>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">ℹ️</span>
                  <div className="text-sm text-blue-800">
                    <strong>Compromiso de respuesta:</strong> Nuestro equipo técnico especializado se compromete a responder su consulta en un máximo de 2 horas en horario laboral, o el siguiente día hábil.
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📤 Enviar Consulta
              </button>
            </form>
            
            <div className="bg-gray-50 p-6 text-center border-t">
              <p className="text-gray-600 mb-4 font-medium">También puede contactarnos directamente:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a 
                  href="https://wa.me/50768685234" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  📱 WhatsApp Inmediato
                </a>
                <a 
                  href="mailto:gerencia@aucmalatam.com" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  ✉️ Email Directo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);
  const [quotationProduct, setQuotationProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleRequestQuote = (product) => {
    setQuotationProduct(product);
    setIsQuotationOpen(true);
    setSelectedProduct(null); // Close product modal if open
  };

  const handleCloseQuotation = () => {
    setIsQuotationOpen(false);
    setQuotationProduct(null);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onProductSelect={handleProductSelect}
                selectedProduct={selectedProduct}
                onCloseModal={handleCloseModal}
                onRequestQuote={handleRequestQuote}
                isQuotationOpen={isQuotationOpen}
                onCloseQuotation={handleCloseQuotation}
                quotationProduct={quotationProduct}
              />
            } 
          />
          <Route 
            path="/productos" 
            element={
              <ProductsPage 
                onProductSelect={handleProductSelect}
                selectedProduct={selectedProduct}
                onCloseModal={handleCloseModal}
                onRequestQuote={handleRequestQuote}
                isQuotationOpen={isQuotationOpen}
                onCloseQuotation={handleCloseQuotation}
                quotationProduct={quotationProduct}
              />
            } 
          />
          <Route path="/sobre-aucma" element={<AboutPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// FORCE DEPLOYMENT TO AUCMALATAM.COM - v2.0 - FINAL CHANGES
export default App;
