import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Enlaces actualizados para coincidir con tus IDs de secciones
  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' }, // Nuevo
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
        ? 'py-3 bg-black/95 backdrop-blur-md border-b border-white/10' 
        : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO AREA - Te lleva al inicio al hacer clic */}
        <a href="#hero" className="flex items-center group cursor-pointer">
          <div className="relative">
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
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 hover:text-golden transition-all"
            >
              {link.name}
            </a>
          ))}
          
          {/* Botón de contacto directo al ID #contacto */}
          <a 
            href="#contacto" 
            className="px-6 py-2 border border-golden/50 text-golden text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-golden hover:text-black transition-all"
          >
            Contacto_
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`fixed inset-0 bg-black transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
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