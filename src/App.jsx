import React, { useState, useEffect } from 'react';
// Importación de componentes de navegación y globales
import { Navbar } from './components/Navbar';
import { MouseFollower } from './components/MouseFollower';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LegalModal } from './components/LegalModal';

// Importación de secciones
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { TechStack } from './sections/TechStack';
import { Pipeline } from './sections/Pipeline';
import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  // --- ESTADO PARA LOS MODALES LEGALES ---
  const [modalConfig, setModalConfig] = useState({ 
    isOpen: false, 
    title: '', 
    content: '' 
  });

  // --- LÓGICA DE REDACCIÓN TÉCNICA Y LEGAL ---
  const openLegal = (type) => {
    const legalData = {
      privacidad: {
        title: "PROTOCOLO_DE_PRIVACIDAD_Y_HABEAS_DATA",
        content: `ESTADO_DEL_SISTEMA: PROTECCIÓN_DE_DATOS_PERSONALES (LEY 1581 DE 2012)

1. IDENTIDAD DEL RESPONSABLE: 
GOLDEN, con domicilio en Cartagena, Colombia. Canal oficial: proyectos@golden.web.

2. FINALIDAD ESTRATÉGICA: 
Los datos recolectados mediante formularios o WhatsApp (+57 3152157034) se utilizarán exclusivamente para la gestión de consultas técnicas, elaboración de presupuestos de ingeniería digital y seguimiento de proyectos activos.

3. DERECHOS DEL TITULAR: 
Usted tiene derecho a conocer, actualizar y rectificar sus datos personales. Para ejercer estos derechos, contacte a nuestra línea de soporte técnico.

4. SEGURIDAD DE LA INFORMACIÓN: 
Implementamos protocolos de seguridad lógica para garantizar que su información no sea compartida ni transferida a terceros sin consentimiento previo.`
      },
      terminos: {
        title: "TÉRMINOS_Y_CONDICIONES_DE_SERVICIO",
        content: `ESTADO_DEL_SISTEMA: TÉRMINOS_Y_CONDICIONES_DE_DESPLIEGUE

1. PROPIEDAD INTELECTUAL: 
Todo código fuente, arquitectura de sistemas y activos visuales desarrollados por GOLDEN son propiedad de la marca hasta la liquidación total del proyecto.

2. CLÁUSULA DE PORTAFOLIO: 
GOLDEN se reserva el derecho de exhibir representaciones visuales y técnicas de los proyectos realizados (ej. Caso de Éxito: Jenny Montoya) como evidencia de capacidad técnica, salvo acuerdo de confidencialidad previo.

3. PROGRAMA DE ACCESIBILIDAD: 
Las tarifas para emprendedores están sujetas a evaluación de viabilidad técnica y disponibilidad en el pipeline de desarrollo.

4. GARANTÍA TÉCNICA: 
Se establece un periodo de soporte de 30 días post-despliegue para la corrección de errores de arquitectura (bugs) derivados de la implementación original.`
      }
    };

    setModalConfig({ 
      isOpen: true, 
      title: legalData[type].title, 
      content: legalData[type].content 
    });
  };

  // --- EFECTO DE REVELADO (SCROLL REVEAL) ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen relative overflow-hidden selection:bg-golden selection:text-black">
      {/* CAPAS GLOBALES */}
      <MouseFollower />
      <Navbar />
      
      {/* FLUJO DE NAVEGACIÓN */}
      <main>
        <div id="hero" className="reveal"><Hero /></div>
        <div id="servicios" className="reveal"><Services /></div>
        <div id="tecnologia" className="reveal"><TechStack /></div>
        <div id="proceso" className="reveal"><Pipeline /></div>
        
        {/* Sección de Proyectos donde está Jenny Montoya */}
        <div id="proyectos" className="reveal"><Projects /></div>
        
        <div id="testimonios" className="reveal"><Testimonials /></div>
        
        <div id="contacto" className="reveal">
          {/* Pasamos la función openLegal para que el checkbox del formulario pueda abrir los modales */}
          <Contact onOpenLegal={openLegal} />
        </div>
      </main>

      {/* FOOTER CON INYECCIÓN DE FUNCIONES */}
      <Footer onOpenLegal={openLegal} />

      {/* SISTEMA DE MODALES DE ALTA FIDELIDAD */}
      <LegalModal 
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        content={modalConfig.content}
      />

      {/* ACCESO DIRECTO A INGENIERÍA */}
      <WhatsAppButton phone="573152157034" />
    </div>
  );
}

export default App;