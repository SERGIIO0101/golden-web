import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Mail } from 'lucide-react';

// Recibimos la función onOpenLegal como prop desde App.jsx
export const Footer = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* IDENTIDAD */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8 group cursor-pointer w-fit">
              <div className="w-9 h-9 border border-golden/50 rotate-[45deg] flex items-center justify-center group-hover:rotate-0 group-hover:border-cyber-pink transition-all duration-500">
                <span className="text-sm font-black text-golden rotate-[-45deg] group-hover:rotate-0 transition-all duration-500">G</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white ml-4">GOLDEN</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-light">
              Desarrollamos soluciones digitales de alto impacto. Ingeniería de software con un enfoque implacable en la estética y el rendimiento.
            </p>
          </div>

          {/* NAVEGACIÓN RÁPIDA */}
          <div>
            <h4 className="text-golden font-mono text-[10px] tracking-[0.4em] uppercase mb-8 opacity-70">Mapa_del_Sitio</h4>
            <ul className="space-y-4">
              {['Inicio', 'Servicios', 'Tecnología', 'Proceso'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-xs uppercase tracking-widest"
                  >
                    <ArrowUpRight size={14} className="text-cyber-pink" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CANALES DE CONTACTO */}
          <div>
            <h4 className="text-golden font-mono text-[10px] tracking-[0.4em] uppercase mb-8 opacity-70">Contacto_</h4>
            <div className="space-y-6">
              <a href="mailto:proyectos@golden.web" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="p-2 bg-white/5 border border-white/10 group-hover:border-cyber-pink/50 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-mono">proyectos@golden.web</span>
              </a>
              
              <div className="flex gap-3">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR CON MODALES ACTIVOS */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em]">
            © {currentYear} GOLDEN_CORP. ALL_SYSTEMS_OPERATIONAL.
          </span>
          
          <div className="flex gap-8 text-[9px] font-mono uppercase tracking-[0.2em]">
            {/* Botones que disparan la lógica legal de App.jsx */}
            <button 
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-golden transition-colors cursor-pointer border-none bg-transparent"
            >
              Privacy_Policy
            </button>
            <button 
              onClick={() => onOpenLegal('terminos')}
              className="hover:text-golden transition-colors cursor-pointer border-none bg-transparent"
            >
              Terms_of_Service
            </button>
          </div>
        </div>
      </div>

      {/* MARCA DE AGUA */}
      <div className="absolute -bottom-10 -left-10 pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[20vw] font-black text-white leading-none tracking-tighter uppercase italic">
          GOLDEN
        </h2>
      </div>
    </footer>
  );
};