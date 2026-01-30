import React, { useEffect, useState } from 'react';

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Usamos requestAnimationFrame para máxima suavidad
      window.requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .group, .logo-box')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* El Orbe Difuminado (Glow) */}
      <div 
        className={`
          -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out
          ${isHovering 
            ? 'w-40 h-40 bg-cyber-pink/20 blur-[60px]' 
            : 'w-24 h-24 bg-golden/10 blur-[40px]'}
        `}
      />

      {/* Punto de precisión central muy sutil */}
      <div 
        className={`
          absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/40 transition-opacity duration-500
          ${isHovering ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
};