import React from 'react';
import { TechCard } from '../components/TechCard';
import { Layout, Rocket, Shield, LineChart } from 'lucide-react';

export const Services = () => {
  return (
    <section id="servicios" className="py-24 px-10 md:px-24 bg-black relative overflow-hidden">
      
      {/* --- CAPA DE GLOW (Atmósfera de Datos) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbe Dorado - Visualización de flujo */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-golden/5 rounded-full blur-[120px] animate-pulse" />
        {/* Orbe Cyber-Pink - Pulso de sistema */}
        <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] bg-cyber-pink/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-gray-500 font-mono text-[10px] mb-4 tracking-[0.5em] uppercase">
            //_Ecosistema_de_Soluciones
          </p>
          
          {/* Título con Nodo de Red Interconectada */}
          <h2 className="relative inline-block text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none group">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full animate-ping opacity-75" />
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full" />
            Infraestructura para el <br />
            <span className="text-golden text-glow-golden italic italic">Crecimiento.</span>
          </h2>
        </div>

        {/* Grid de Servicios con efecto de profundidad */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard 
            icon={Layout}
            tag="VALOR_01"
            title="Presencia Exclusiva"
            desc="Landings de alta fidelidad diseñadas para posicionar tu marca en el mercado premium."
            colorClass="cyber-pink"
          />
          <TechCard 
            icon={Rocket}
            tag="VALOR_02"
            title="Performance Extremo"
            desc="Velocidad de carga optimizada mediante arquitectura moderna para evitar la pérdida de clientes."
            colorClass="golden"
          />
          <TechCard 
            icon={Shield}
            tag="VALOR_03"
            title="Seguridad Blindada"
            desc="Protegemos tus datos y los de tus usuarios con los estándares más altos de la industria."
            colorClass="cyber-pink"
          />
          <TechCard 
            icon={LineChart}
            tag="VALOR_04"
            title="Escalabilidad"
            desc="Código sólido preparado para crecer al mismo ritmo que tus ambiciones de negocio."
            colorClass="golden"
          />
        </div>
      </div>
    </section>
  );
};