import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonialData = [
  {
    initials: "JM",
    name: "Jenny Montoya",
    role: "Autora de #SomosDelMundo",
    text: "Trabajar con el equipo de GOLDEN fue transformar una visión en una estructura digital impecable. Entienden que el software debe conectar con el mundo.",
    highlight: "estructura digital impecable"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 px-6 md:px-24 bg-black relative overflow-hidden border-t border-white/5">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-golden/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 reveal">
          <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">//_Verificación_de_Socios</p>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Voces_<span className="text-golden italic">Autorizadas</span>
          </h2>
        </header>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {testimonialData.map((item, index) => (
            <article 
              key={index} 
              className="p-8 md:p-12 border border-white/5 bg-white/[0.01] backdrop-blur-sm relative group transition-all duration-500 hover:border-golden/20 reveal"
            >
              {/* Línea de acento lateral dinámica */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-golden group-hover:h-full transition-all duration-700" aria-hidden="true" />
              
              <div className="flex justify-between items-start mb-8">
                <Quote className="text-cyber-pink opacity-40 group-hover:opacity-100 transition-opacity" size={40} />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-golden text-golden" aria-hidden="true" />
                  ))}
                </div>
              </div>
              
              {/* El texto del testimonio con énfasis en la palabra clave */}
              <blockquote className="mb-12">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
                  "{item.text.split(item.highlight)[0]} 
                  <span className="text-white font-medium not-italic border-b border-golden/30">{item.highlight}</span>
                  {item.text.split(item.highlight)[1]}"
                </p>
              </blockquote>
              
              <footer className="flex items-center gap-5 border-t border-white/5 pt-8">
                <div className="w-14 h-14 bg-black border border-golden/30 rounded-lg flex items-center justify-center font-black text-golden group-hover:bg-golden group-hover:text-black transition-all duration-500 shadow-lg">
                  {item.initials}
                </div>
                <div>
                  <p className="text-white font-black text-xl tracking-tighter uppercase leading-none mb-1">
                    {item.name}
                  </p>
                  <p className="text-golden font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
                    {item.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}

          {/* ESPACIO DE BRANDING (Evolución de tu bloque SDM) */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full p-12 border border-dashed border-white/5 opacity-30 hover:opacity-100 transition-all duration-700">
             <span className="text-[8vw] font-black text-white tracking-tighter select-none leading-none">#SDM</span>
             <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.5em] mt-4">Case_Study_01</p>
          </div>
        </div>
      </div>
    </section>
  );
};