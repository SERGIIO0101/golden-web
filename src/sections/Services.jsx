import React from 'react';
import { TechCard } from '../components/TechCard';
import { Layout, Rocket, Shield, LineChart } from 'lucide-react';

export const Services = () => {
  return (
    <section id="servicios" className="py-24 px-10 md:px-24 bg-black relative overflow-hidden">
      
      {/* --- CAPA DE GLOW (Atmósfera de Datos) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Orbe Dorado - Visualización de flujo (Optimizado para GPU) */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-golden/5 rounded-full blur-[120px] animate-pulse will-change-transform" />
        {/* Orbe Cyber-Pink - Pulso de sistema */}
        <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] bg-cyber-pink/5 rounded-full blur-[100px] will-change-transform" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 reveal">
          <p className="text-gray-500 font-mono text-[10px] mb-4 tracking-[0.5em] uppercase">
            //_Ecosistema_de_Soluciones
          </p>
          
          {/* Título con Nodo de Red Interconectada */}
          <h2 className="relative inline-block text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none group">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full animate-ping opacity-75" aria-hidden="true" />
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full" aria-hidden="true" />
            Infraestructura para el <br />
            <span className="text-golden text-glow-golden italic">Crecimiento.</span>
          </h2>
        </header>

        {/* Grid de Servicios con Semántica SEO (Article) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <article>
            <TechCard 
              icon={Layout}
              tag="VALOR_01"
              title="Presencia Exclusiva"
              desc="Landings de alta fidelidad con arquitectura orientada a la conversión y posicionamiento premium."
              colorClass="cyber-pink"
            />
          </article>
          
          <article>
            <TechCard 
              icon={Rocket}
              tag="VALOR_02"
              title="Performance Extremo"
              desc="Optimización crítica de Core Web Vitals para garantizar tiempos de carga inferiores a 1.2s."
              colorClass="golden"
            />
          </article>

          <article>
            <TechCard 
              icon={Shield}
              tag="VALOR_03"
              title="Seguridad Blindada"
              desc="Implementación de protocolos SSL/TLS y estándares de seguridad para la protección de activos digitales."
              colorClass="cyber-pink"
            />
          </article>

          <article>
            <TechCard 
              icon={LineChart}
              tag="VALOR_04"
              title="Escalabilidad"
              desc="Desarrollo modular con clean code, preparado para evolucionar junto a las demandas del mercado."
              colorClass="golden"
            />
          </article>
        </div>
      </div>
    </section>
  );
};