import React from 'react';
import { Terminal, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const PipelineStep = ({ number, title, description, icon: Icon, isLast }) => (
  <div className="flex gap-6 md:gap-10 group reveal">
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Nodo de fase con brillo */}
        <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:border-golden group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500 relative z-10">
          {Icon ? <Icon className="text-gray-500 group-hover:text-golden transition-colors" size={22} /> : <div className="w-2 h-2 bg-golden rounded-full" />}
        </div>
        
        {/* Conector de datos dinámico */}
        {!isLast && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-golden via-golden/20 to-transparent">
            {/* Animación de pulso de datos descendente */}
            <div className="w-full h-8 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse absolute top-0" />
          </div>
        )}
      </div>
    </div>

    <div className="pt-2 pb-16">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[10px] text-cyber-pink tracking-[0.3em] uppercase opacity-70">
          Phase_{number}
        </span>
        <div className="h-[1px] w-8 bg-white/10" />
        <CheckCircle size={10} className="text-golden opacity-50" />
      </div>
      <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-golden transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-500 text-sm md:text-base max-w-md font-light leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  </div>
);

export const Pipeline = () => {
  return (
    <section id="proceso" className="py-24 px-10 md:px-24 bg-black relative overflow-hidden">
      
      {/* --- ATMÓSFERA DE FONDO --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[40vw] h-[40vw] bg-golden/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Título Sticky con Estilo de Ingeniería */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-3 w-3 bg-golden rounded-full animate-ping" />
            <p className="text-gray-500 font-mono text-xs tracking-[0.5em] uppercase">Protocolo_de_Ejecución</p>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-8">
            INGENIERÍA <br /> 
            <span className="text-golden italic text-glow-golden">PASO A PASO.</span>
          </h2>
          
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest opacity-40">
            //_Pipeline_Status: Running_v.2.6
          </p>
        </div>

        {/* Pasos del Pipeline */}
        <div className="mt-8 lg:mt-0">
          <PipelineStep number="01" icon={Lightbulb} title="Estrategia" description="Auditoría de ADN digital para identificar oportunidades de mercado y definir el núcleo técnico del proyecto." />
          <PipelineStep number="02" icon={Terminal} title="Arquitectura" description="Diseño técnico estructural y prototipado de alta fidelidad antes de la primera línea de código." />
          <PipelineStep number="03" icon={Code} title="Desarrollo" description="Construcción bajo estándares de oro, utilizando el stack de grado industrial (React/Node) para rendimiento extremo." />
          <PipelineStep number="04" icon={Rocket} isLast={true} title="Despliegue" description="Lanzamiento oficial, monitoreo de métricas y optimización continua de sistemas en vivo." />
        </div>
      </div>
    </section>
  );
};