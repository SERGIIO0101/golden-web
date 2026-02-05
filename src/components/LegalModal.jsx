import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export const LegalModal = ({ isOpen, onClose, title, content }) => {
  // Bloquear el scroll del body cuando el modal está activo para evitar el "Scroll Chaining"
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Cerrar con la tecla ESC (Estándar de UX Senior)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Fondo desenfocado con animación de entrada */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Contenedor del Modal */}
      <div className="relative bg-[#050505] border border-golden/20 w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(212,175,55,0.05)] animate-modal-up">
        
        {/* Línea de escaneo decorativa */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-golden to-transparent opacity-50 animate-scan" aria-hidden="true"></div>

        {/* Header con ID para vinculación ARIA */}
        <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <div className="flex items-center gap-3">
            <ShieldCheck size={14} className="text-golden animate-pulse" aria-hidden="true" />
            <h2 id="modal-title" className="text-golden font-mono text-[10px] uppercase tracking-[0.4em]">
              {title || "LEGAL_DOCUMENT_ENCRYPTED"}
            </h2>
          </div>
          <button 
            onClick={onClose}
            aria-label="Cerrar documento legal"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 text-gray-500 hover:text-golden transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-golden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Contenido con Scroll Personalizado */}
        <div className="p-8 overflow-y-auto text-gray-400 font-light text-sm leading-relaxed scrollbar-thin scrollbar-thumb-golden/20 scrollbar-track-transparent">
          <div className="space-y-6 whitespace-pre-line font-mono text-[12px] opacity-80">
            {content}
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/5 opacity-20" aria-hidden="true">
            <p className="text-[10px] font-mono uppercase tracking-widest text-center">
              --- Fin del Protocolo de Datos ---
            </p>
          </div>
        </div>

        {/* Footer con metadata de sistema (Contraste corregido para accesibilidad) */}
        <div className="p-4 border-t border-white/5 bg-black/50 flex justify-between items-center px-8">
          <p className="text-[9px] font-mono text-gray-400 uppercase tracking-tighter">
            ESTADO: <span className="text-green-500">ACCESO_AUTORIZADO</span>
          </p>
          <p className="text-[9px] font-mono text-gray-500 uppercase">
            GOLDEN_LEGAL_SYSTEM_v2.6 // 2026
          </p>
        </div>
      </div>
    </div>
  );
};