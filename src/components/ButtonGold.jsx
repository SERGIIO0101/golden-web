import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export const ButtonGold = ({ 
  text = "Agendar Consultoría", 
  phone = "573000000000", 
  className = "" 
}) => {
  
  const message = encodeURIComponent("Hola GOLDEN, estoy interesado en elevar mi presencia digital con una infraestructura de alto impacto.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center gap-4 px-10 py-5
        bg-black text-golden font-black uppercase tracking-[0.2em]
        text-xs transition-all duration-700 overflow-hidden isolation-auto
        border border-golden/30 hover:border-golden
        hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]
        ${className}
      `}
    >
      {/* 1. FONDO DE ESCANEO DINÁMICO */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* 2. RELLENO DE PROGRESO AL HOVER (Sube desde abajo) */}
      <div className="absolute inset-0 bg-golden translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* 3. CONTENIDO (Cambia de color al invertirse el fondo) */}
      <div className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
        <MessageSquare size={16} className="group-hover:rotate-[15deg] transition-transform duration-500" />
        <span>{text}</span>
        <ArrowUpRight size={14} className="opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 delay-100" />
      </div>

      {/* 4. ESQUINAS TÉCNICAS (Detalle de visor) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-golden opacity-50 group-hover:opacity-100" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-golden opacity-50 group-hover:opacity-100" />

      {/* 5. LÍNEA DE CARGA (Acento fucsia sutil) */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-cyber-pink w-0 group-hover:w-full transition-all duration-700 delay-200" />
    </a>
  );
};