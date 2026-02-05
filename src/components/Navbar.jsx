import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimización de rendimiento: Usar useCallback para la función de scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Bloquear scroll cuando el menú móvil está abierto (UX Senior)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
        ? 'py-3 bg-black/95 backdrop-blur-md border-b border-white/10' 
        : 'py-6 bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <a 
          href="#hero" 
          className="flex items-center group cursor-pointer"
          aria-label="Ir al inicio"
        >
          <div className="relative" aria-hidden="true">
            <div className="logo-box w-9 h-9 border border-golden/50 bg-golden/5 rotate-[45deg] group-hover:rotate-0 group-hover:border-cyber-pink group-hover:bg-cyber-pink/10 flex items-center justify-center transition-all duration-500">
              <span className="text-xl font-black text-golden transition-all duration-500 rotate-[-45deg] group-hover:rotate-0 group-hover:text-white select-none">
                G
              </span>
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white ml-3 group-hover:text-golden transition-colors duration-300">
            GOLDEN
          </span>
        </a>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 hover:text-golden transition-all focus-visible:text-golden outline-none"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="#contacto" 
            className="px-6 py-2 border border-golden/50 text-golden text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-golden hover:text-black transition-all focus-visible:ring-1 focus-visible:ring-golden outline-none"
          >
            Contacto_
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <button 
          className="md:hidden text-white p-2 focus-visible:text-golden outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-black z-[110] transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Botón de cierre interno para mejor UX móvil */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white p-2"
          aria-label="Cerrar menú"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-white uppercase tracking-tighter hover:text-golden transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-black text-golden uppercase tracking-tighter"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};