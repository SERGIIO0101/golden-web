import React, { useState, useEffect } from 'react';

// Componentes Globales
import { Navbar } from './components/Navbar';
import { MouseFollower } from './components/MouseFollower';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LegalModal } from './components/LegalModal';

// Secciones del Pipeline
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { TechStack } from './sections/TechStack';
import { Pipeline } from './sections/Pipeline';
import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  const [modalConfig, setModalConfig] = useState({ 
    isOpen: false, 
    title: '', 
    content: '' 
  });

  // --- GESTIÓN LEGAL CENTRALIZADA ---
  const openLegal = (type) => {
    const legalData = {
      privacidad: {
        title: "PROTOCOLO_DE_PRIVACIDAD_Y_HABEAS_DATA",
        content: `ESTADO_DEL_SISTEMA: PROTECCIÓN_DE_DATOS_PERSONALES (LEY 1581 DE 2012)\n\n1. IDENTIDAD DEL RESPONSABLE: GOLDEN, Cartagena, Colombia.\n2. FINALIDAD: Gestión de consultas técnicas y presupuestos.\n3. DERECHOS: Acceso, rectificación y supresión de datos.`
      },
      terminos: {
        title: "TÉRMINOS_Y_CONDICIONES_DE_SERVICIO",
        content: `ESTADO_DEL_SISTEMA: TÉRMINOS_Y_CONDICIONES_DE_DESPLIEGUE\n\n1. PROPIEDAD: El código es propiedad de GOLDEN hasta la liquidación.\n2. SOPORTE: 30 días de garantía técnica post-lanzamiento.`
      }
    };

    if (legalData[type]) {
      setModalConfig({ 
        isOpen: true, 
        title: legalData[type].title, 
        content: legalData[type].content 
      });
    }
  };

  // --- MOTOR DE ANIMACIÓN POR SCROLL (Intersection Observer) ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const handleReveal = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Una vez revelado, dejamos de observar para ahorrar recursos
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleReveal, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden selection:bg-golden selection:text-black font-sans antialiased text-gray-200">
      
      {/* CAPA 0: UTILIDADES Y SEGUIDORES (GPU Accelerated) */}
      <MouseFollower />
      <Navbar />
      
      {/* CAPA 1: MAIN PIPELINE */}
      <main role="main">
        <section id="hero" className="reveal"><Hero /></section>
        <section id="servicios" className="reveal"><Services /></section>
        <section id="tecnologia" className="reveal"><TechStack /></section>
        <section id="proceso" className="reveal"><Pipeline /></section>
        <section id="proyectos" className="reveal"><Projects /></section>
        <section id="testimonios" className="reveal"><Testimonials /></section>
        
        <section id="contacto" className="reveal">
          <Contact onOpenLegal={openLegal} />
        </section>
      </main>

      {/* CAPA 2: CIERRE Y LEGAL */}
      <Footer onOpenLegal={openLegal} />

      {/* COMPONENTES DE INTERFAZ SOBREPUESTA */}
      <LegalModal 
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
        title={modalConfig.title}
        content={modalConfig.content}
      />

      <WhatsAppButton phone="573152157034" />

      {/* ESTILOS GLOBALES DE REVELADO (Injectados o en CSS) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </div>
  );
}

export default App;