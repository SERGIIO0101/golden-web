import React from 'react';

/**
 * WhatsAppButton: Floating Action Button (FAB) para conversión directa.
 */
export const WhatsAppButton = ({ phone = "573152157034" }) => {
  // Mensaje optimizado para leads de alta fidelidad
  const defaultMessage = encodeURIComponent("Hola GOLDEN, me gustaría agendar una consultoría técnica para un proyecto de alto rendimiento.");
  const waUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <a 
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group outline-none"
      aria-label="Contactar a GOLDEN por WhatsApp"
    >
      {/* Glow Atmosférico: Optimizado con will-change para evitar jank en scroll */}
      <div 
        className="absolute inset-0 bg-cyber-pink rounded-full blur-xl opacity-20 group-hover:opacity-60 animate-pulse transition-opacity duration-500 will-change-transform" 
        aria-hidden="true" 
      />
      
      {/* Contenedor del Icono */}
      <div className="relative bg-[#050505] border border-golden/40 p-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-cyber-pink group-focus-visible:ring-2 group-focus-visible:ring-golden shadow-2xl">
        <svg 
          className="w-6 h-6 text-golden group-hover:text-cyber-pink transition-colors duration-500" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.764-5.766zm3.392 8.157c-.144.406-.833.784-1.145.828-.312.045-.609.043-.912-.043-.302-.085-.604-.171-1.347-.478-1.284-.531-2.112-1.849-2.176-1.934-.064-.085-.515-.685-.515-1.306 0-.622.327-.927.443-1.054.117-.128.254-.16.339-.16.085 0 .171.002.245.006.082.004.184-.03.288.22.107.256.368.895.4 1.019.032.124.053.268-.032.437-.085.17-.128.276-.255.424-.128.149-.267.33-.382.443-.128.127-.261.266-.112.523.15.257.665 1.096 1.428 1.774.981.872 1.811 1.141 2.068 1.269.257.127.406.106.556-.064.15-.17.639-.744.811-1.019.171-.276.342-.234.577-.149.234.085 1.492.701 1.748.828.256.128.426.191.49.302.064.111.064.639-.08 1.045z"/>
        </svg>
      </div>

      {/* Tooltip dinámico (Opcional, añade un toque Pro) */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-golden text-black text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-black shadow-xl">
        Offline_Support
      </span>
    </a>
  );
};