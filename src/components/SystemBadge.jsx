import React from 'react';

/**
 * SystemBadge: Indicador de estado de sistema con estética técnica.
 * @param {string} text - Contenido del badge.
 * @param {string} className - Extensión de estilos opcional.
 */
export const SystemBadge = ({ text, className = "" }) => (
  <span 
    className={`
      inline-block
      text-[10px] 
      font-mono 
      text-cyber-pink 
      tracking-[0.4em] 
      font-black 
      uppercase 
      bg-cyber-pink/5 
      px-3 
      py-1 
      border-l 
      border-cyber-pink/30
      backdrop-blur-sm
      ${className}
    `}
  >
    {/* Añadimos un pequeño espacio al final para el tracking */}
    {text}
  </span>
);