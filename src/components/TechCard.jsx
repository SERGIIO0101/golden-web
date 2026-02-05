import React from 'react';

/**
 * TechCard: Módulo de exhibición tecnológica.
 * Nota: En Tailwind, las clases dinámicas (text-${colorClass}) no se generan 
 * a menos que el nombre completo de la clase esté en el código.
 */
export const TechCard = ({ icon: Icon, title, desc, tag, colorClass = "cyber-pink" }) => {
  
  // Mapeo de colores para asegurar que Tailwind detecte las clases en el build
  const colors = {
    "cyber-pink": "group-hover:border-cyber-pink text-cyber-pink group-hover:text-cyber-pink",
    "golden": "group-hover:border-golden text-golden group-hover:text-golden"
  };

  const selectedColor = colors[colorClass] || colors["cyber-pink"];

  return (
    <div className="glass-panel p-8 relative overflow-hidden group h-full flex flex-col transition-all duration-500">
      {/* Efecto Scanner Animado */}
      <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          {/* Icon Container */}
          <div className={`p-3 bg-white/5 border border-white/10 transition-all duration-500 ${selectedColor.split(' ')[0]}`}>
            {Icon && (
              <Icon 
                className={`text-gray-400 transition-all duration-500 ${selectedColor.split(' ').slice(1).join(' ')}`} 
                size={28} 
                aria-hidden="true"
              />
            )}
          </div>
          {/* Tag de Sistema */}
          <span className={`text-[10px] font-mono tracking-[0.3em] font-black uppercase ${selectedColor.split(' ')[1]}`}>
            {tag}
          </span>
        </div>

        {/* Contenido Textual */}
        <h3 className="text-xl font-black mb-4 text-white uppercase tracking-tight group-hover:text-glow-golden transition-all">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light flex-grow">
          {desc}
        </p>
      </div>
    </div>
  );
};