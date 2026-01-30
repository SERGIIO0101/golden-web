import React from 'react';
import { ArrowRight, Fingerprint, CpuIcon } from 'lucide-react';
import { ButtonGold } from '../components/ButtonGold';
import { SystemBadge } from '../components/SystemBadge';

export const Hero = () => {
  return (
    <header id="hero" className="h-screen flex flex-col justify-center px-10 md:px-24 relative overflow-hidden bg-black">
      
      {/* --- CAPA DE INGENIERÍA VISUAL (BACKEND ESTÉTICO) --- */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          <path d="M0 200 L150 200 L200 250 L400 250" stroke="#D4AF37" strokeWidth="0.5" fill="none" className="animate-pulse" />
          <path d="M1000 600 L850 600 L800 550 L600 550" stroke="#ff00ff" strokeWidth="0.5" fill="none" className="opacity-30" />
        </svg>

        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-golden/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-cyber-pink/5 rounded-full blur-[100px]" />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="max-w-5xl relative z-10">
        
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 bg-cyber-pink animate-pulse"></span>
          <SystemBadge text="SISTEMA_OPERATIVO_ALTO_RENDIMIENTO" />
        </div>

        {/* CLAVE: Se añadió 'glitch-hover' para activar el CSS */}
        <h1 className="glitch-hover text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none text-white transition-all cursor-default group">
          SOLUCIONES QUE <br /> 
          <span className="text-golden text-glow-golden italic uppercase transition-all duration-300 group-hover:text-cyber-pink">
            Escalan tu éxito.
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-golden/20 pl-6 backdrop-blur-sm">
              No solo creamos sitios web. Diseñamos la <span className="text-white font-medium italic">ingeniería digital</span> que tu marca necesita para dominar su industria con precisión y exclusividad.
            </p>
            
            <div className="flex gap-4 font-mono text-[9px] text-gray-600 uppercase tracking-widest bg-black/40 w-fit p-2 border border-white/5">
              <span className="flex items-center gap-1">
                <Fingerprint size={12} className="text-cyber-pink"/> Auth_Verified
              </span>
              <span className="flex items-center gap-1">
                <CpuIcon size={12} className="text-golden"/> Gold_Standard_v2.6
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 relative">
            <ButtonGold 
              text="INICIAR PROYECTO" 
              icon={ArrowRight} 
              href="https://wa.me/573152157034"
            />
            <p className="text-[10px] font-mono text-gray-500 text-center md:text-left tracking-tighter uppercase opacity-50">
              // Disponibilidad limitada para proyectos de alta fidelidad
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none hidden lg:block">
        <span className="text-[25vw] font-black text-white select-none tracking-tighter">GOLDEN</span>
      </div>
    </header>
  );
};