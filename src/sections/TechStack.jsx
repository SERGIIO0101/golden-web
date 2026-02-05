import React from 'react';
import { Cpu, Database, Globe, Layers, Layout, Maximize, Smartphone, Zap, Shield } from 'lucide-react';

const technologies = [
  { name: 'React', icon: Layout },
  { name: 'Tailwind CSS', icon: Maximize },
  { name: 'Node.js', icon: Cpu },
  { name: 'MongoDB', icon: Database },
  { name: 'TypeScript', icon: Shield },
  { name: 'Vite', icon: Zap },
  { name: 'Framer Motion', icon: Layers },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-y border-white/5">
      
      {/* --- ATMÓSFERA DE DATOS (GLOW) --- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-golden/5 rounded-full blur-[140px] opacity-60 will-change-transform" />
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-24 mb-20 relative z-10">
        <div className="flex flex-col items-center md:items-start reveal">
          <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
            //_Tech_Infrastructure_Core
          </p>
          
          <h2 className="relative inline-block text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none group">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full animate-ping opacity-75" aria-hidden="true" />
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full" aria-hidden="true" />
            Tecnologías de <br />
            <span className="text-golden text-glow-golden italic">Grado Industrial.</span>
          </h2>
        </div>
      </div>
      
      {/* Contenedor del Carrusel con Máscaras de Gradiente */}
      <div className="relative flex overflow-hidden">
        {/* Máscaras de desvanecimiento (Corregido: Tailwind usa from-black to-transparent) */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        {/* Carrusel Infinito Doble */}
        <div className="flex animate-scroll-continuous whitespace-nowrap">
          {/* Renderizamos la lista dos veces para un loop perfecto */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 px-10 group cursor-default select-none"
            >
              <div className="p-4 bg-white/[0.02] border border-white/5 group-hover:border-golden/40 transition-all duration-700 rounded-xl relative">
                {/* Reflejo interno sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {tech.icon && (
                  <tech.icon 
                    className="text-gray-600 group-hover:text-golden group-hover:scale-110 transition-all duration-700 relative z-10" 
                    size={32} 
                    aria-hidden="true"
                  />
                )}
              </div>
              <span className="text-gray-700 group-hover:text-white font-black uppercase tracking-tighter text-3xl md:text-4xl transition-all duration-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos específicos para la animación infinita si no usas librerías externas */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-continuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-continuous {
          animation: scroll-continuous 30s linear infinite;
          will-change: transform;
        }
        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};