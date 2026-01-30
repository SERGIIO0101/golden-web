import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 px-10 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-16 uppercase tracking-tighter">
          Voces_<span className="text-golden">Autorizadas</span>
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* TESTIMONIO DE JENNY MONTOYA */}
          <div className="p-10 border border-white/5 bg-white/[0.02] relative group">
            <div className="absolute top-0 left-0 w-1 h-0 bg-golden group-hover:h-full transition-all duration-700"></div>
            <Quote className="text-cyber-pink mb-6 opacity-30" size={32} />
            
            <p className="text-xl md:text-2xl text-gray-300 italic mb-10 font-light leading-relaxed">
              "Trabajar con el equipo de GOLDEN fue transformar una visión en una estructura digital impecable. Entienden que el software, al igual que los libros, debe conectar con el mundo."
            </p>
            
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center font-black text-golden border border-golden/50">
                JM
              </div>
              <div>
                <p className="text-white font-black text-lg tracking-tighter uppercase">Jenny Montoya</p>
                <p className="text-golden font-mono text-xs uppercase tracking-[0.2em]">Autora de #SomosDelMundo</p>
              </div>
            </div>
          </div>

          {/* ESPACIO PARA UN SEGUNDO TESTIMONIO O LOGO DEL LIBRO */}
          <div className="hidden lg:flex items-center justify-center opacity-20 hover:opacity-40 transition-opacity">
            <span className="text-[10vw] font-black text-white tracking-tighter select-none">#SDM</span>
          </div>
        </div>
      </div>
    </section>
  );
};