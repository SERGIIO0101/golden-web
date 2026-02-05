import React, { useEffect, useState, useRef } from 'react';

export const MouseFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  // Usamos useRef para la posición para evitar re-renders constantes de React
  // que podrían saturar el hilo principal.
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Manipulación directa del DOM para rendimiento crítico (60-120 FPS)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      // Optimizamos la detección de interactuables
      const isInteractable = e.target.closest('a, button, .group, .logo-box, [role="button"]');
      setIsHovering(!!isInteractable);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform hidden lg:block"
      style={{ transition: 'transform 0.15s ease-out' }} // Suavizado mecánico
    >
      {/* El Orbe Atmosférico */}
      <div 
        className={`
          -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1)
          ${isHovering 
            ? 'w-48 h-48 bg-cyber-pink/20 blur-[80px]' 
            : 'w-24 h-24 bg-golden/10 blur-[40px]'}
        `}
      />

      {/* Punto de precisión (Solo visible en hover) */}
      <div 
        className={`
          absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/60 transition-opacity duration-500
          ${isHovering ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
};