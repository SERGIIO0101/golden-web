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
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbe de procesamiento central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-golden/5 rounded-full blur-[140px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-24 mb-16 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
            //_Tech_Infrastructure_Core
          </p>
          
          {/* Título de Nodo Interconectado */}
          <h2 className="relative inline-block text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none group">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full animate-ping opacity-75" />
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-golden rounded-full" />
            Tecnologías de <br />
            <span className="text-golden text-glow-golden italic italic">Grado Industrial.</span>
          </h2>
        </div>
      </div>
      
      {/* Carrusel Infinito con Efecto de Máscara */}
      <div className="relative flex">
        {/* Máscaras laterales para desvanecer el contenido en los bordes (Efecto de red infinita) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-right from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-left from-black to-transparent z-20 pointer-events-none" />

        <div className="flex animate-scroll gap-20 items-center">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-4 min-w-[200px] group">
              <div className="p-3 bg-white/[0.02] border border-white/5 group-hover:border-golden/40 transition-all duration-500 rounded-lg">
                {tech.icon && <tech.icon className="text-gray-600 group-hover:text-golden group-hover:scale-110 transition-all duration-500" size={32} />}
              </div>
              <span className="text-gray-600 group-hover:text-white font-black uppercase tracking-tighter text-2xl transition-all duration-500">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};