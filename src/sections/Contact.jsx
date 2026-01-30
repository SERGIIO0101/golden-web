import React, { useState } from 'react';
import { Send, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

export const Contact = ({ onOpenLegal }) => {
  // Estado para controlar la validación legal
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleSubmit = (e) => {
    if (!hasAccepted) {
      e.preventDefault();
      alert("Por favor, acepte los términos y condiciones antes de enviar.");
      return;
    }
    // Lógica de envío aquí
  };

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      
      {/* --- EFECTO DE FONDO (Circuitos/Glow) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-cyber-pink/5 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        
        {/* COLUMNA IZQUIERDA: IDENTIDAD Y PROPÓSITO */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
            //_Inhibidor_de_Fricción_Comercial
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            ¿Listo para el <br />
            <span className="text-golden italic">Siguiente Nivel?</span>
          </h2>
          
          <p className="text-gray-400 mb-12 max-w-md font-light leading-relaxed">
            Estamos listos para procesar tus requerimientos. Iniciemos la fase de consultoría para tu próximo activo digital.
          </p>

          {/* BLOQUE DE ACCESIBILIDAD (Diferenciador GOLDEN) */}
          <div className="mb-12 p-6 border-l-2 border-golden bg-white/[0.02] backdrop-blur-sm reveal">
            <h4 className="text-golden font-mono text-[10px] tracking-widest uppercase mb-2">
              Iniciativa_Accesibilidad_ 
            </h4>
            <p className="text-white font-bold text-lg mb-2 tracking-tighter">
              Precios accesibles para que nadie se quede atrás.
            </p>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Sabemos que comenzar puede ser un reto. Por eso ofrecemos <span className="text-white">tarifas optimizadas</span>, pensadas para emprendedores y profesionales de <span className="text-golden font-medium underline">Colombia</span> que buscan excelencia sin barreras de entrada.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-golden transition-all duration-500">
                <MapPin className="text-golden" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Ubicación_</p>
                <p className="text-white text-sm uppercase font-medium">Cartagena, Colombia</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-cyber-pink transition-all duration-500">
                <MessageSquare className="text-cyber-pink" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email_Directo</p>
                <p className="text-white text-sm font-medium">proyectos@golden.web</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO DE INGENIERÍA */}
        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden self-start backdrop-blur-lg">
          {/* Decoración Estilo 'Blueprint' */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-golden/30"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-golden/30"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-golden uppercase tracking-[0.2em]">Nombre_</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm focus:border-golden focus:outline-none transition-colors"
                  placeholder="USER_NAME"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-golden uppercase tracking-[0.2em]">Email_</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm focus:border-golden focus:outline-none transition-colors"
                  placeholder="EMAIL@SISTEMA.COM"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-golden uppercase tracking-[0.2em]">Mensaje_</label>
              <textarea 
                rows="4"
                required
                className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm focus:border-golden focus:outline-none transition-colors"
                placeholder="DESCRIBE_TU_PROYECTO..."
              ></textarea>
            </div>

            {/* CONTROL DE HABEAS DATA */}
            <div className="flex items-start gap-4 p-4 bg-white/[0.01] border border-white/5 group">
              <div className="relative flex items-center mt-1">
                <input 
                  type="checkbox" 
                  id="habeasData" 
                  checked={hasAccepted}
                  onChange={(e) => setHasAccepted(e.target.checked)}
                  className="w-5 h-5 border-2 border-golden/30 bg-transparent appearance-none rounded checked:bg-golden transition-all cursor-pointer"
                />
                {hasAccepted && <ShieldCheck size={14} className="absolute text-black left-[3px] pointer-events-none" />}
              </div>
              <label htmlFor="habeasData" className="text-[10px] text-gray-500 font-mono leading-relaxed cursor-pointer select-none">
                ACEPTO EL TRATAMIENTO DE DATOS SEGÚN LA <button type="button" onClick={() => onOpenLegal('privacidad')} className="text-golden underline hover:text-white transition-colors">POLÍTICA DE PRIVACIDAD</button> Y LOS <button type="button" onClick={() => onOpenLegal('terminos')} className="text-golden underline hover:text-white transition-colors">TÉRMINOS DE SERVICIO</button>.
              </label>
            </div>

            {/* BOTÓN DE ACCIÓN DINÁMICO */}
            <button 
              type="submit"
              disabled={!hasAccepted}
              className={`relative w-full overflow-hidden group py-4 border border-golden font-black uppercase tracking-[0.3em] text-xs transition-all duration-500
                ${hasAccepted ? 'bg-transparent text-golden cursor-pointer' : 'opacity-20 grayscale cursor-not-allowed border-gray-600 text-gray-600'}
              `}
            >
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                <Send size={16} /> Enviar_Solicitud_
              </span>
              <div className={`absolute inset-0 bg-golden translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out -z-0`} />
            </button>
            
            {!hasAccepted && (
              <p className="text-[9px] font-mono text-cyber-pink/60 text-center animate-pulse tracking-tighter">
                [!] SISTEMA BLOQUEADO: REQUIERE AUTORIZACIÓN LEGAL_
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};