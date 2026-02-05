import React from 'react';
import { ExternalLink, Code2, Zap } from 'lucide-react';

const projects = [
  {
    title: "Jenny Montoya | Identidad Digital",
    client: "Jenny Montoya",
    category: "Bio-Architecture & UX Design",
    description: "Ecosistema visual y narrativa digital para psicóloga clínica. Estructuración de activos para la marca 'Transformando distancias en raíces'.",
    tech: ["React", "Netlify", "UI/UX"],
    link: "https://jenny-montoya.netlify.app/",
    image: "/imagen1.png", // Sugerencia: Convierte esto a .webp para performance 100/100
    isFeatured: true
  },
  {
    title: "E-Commerce System v1",
    client: "Retail Solutions",
    category: "High-Performance Sales",
    description: "Infraestructura escalable orientada a la conversión. Interfaz optimizada para tiempos de carga inferiores a 1s con métricas LCP de grado industrial.",
    tech: ["Node.js", "Tailwind CSS", "Stripe API"],
    link: "#",
    image: null,
    isFeatured: false
  }
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera Semántica */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Proyectos_<br />
              <span className="text-golden italic">Seleccionados</span>
            </h2>
            <div className="h-1 w-24 bg-cyber-pink" aria-hidden="true"></div>
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] max-w-xs">
            // Exposición de activos digitales y despliegues verificados.
          </p>
        </header>

        {/* Grid de Proyectos */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <article 
              key={index} 
              className="group relative border border-white/5 bg-white/[0.01] overflow-hidden flex flex-col transition-all duration-500 hover:border-golden/30 reveal"
            >
              {/* Visualización de Imagen Optimizada */}
              {item.image ? (
                <div className="relative h-72 overflow-hidden border-b border-white/5 bg-neutral-900">
                  <img 
                    src={item.image} 
                    alt={`Captura de pantalla del proyecto ${item.title}`}
                    width="800"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" aria-hidden="true"></div>
                </div>
              ) : (
                <div className="h-72 flex items-center justify-center bg-white/[0.02] border-b border-white/5">
                   <Zap className="text-white/10 group-hover:text-golden/40 transition-colors" size={60} />
                </div>
              )}

              {/* Contenido de la Card */}
              <div className="p-10 flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 border border-golden/20 bg-golden/5 text-golden" aria-hidden="true">
                    <Code2 size={20} />
                  </div>
                  {item.link !== "#" && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visitar sitio web oficial de ${item.title}`}
                      className="p-2 text-gray-600 hover:text-cyber-pink transition-colors focus-visible:outline-2 focus-visible:outline-golden"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <span className="text-[10px] font-mono text-cyber-pink uppercase tracking-widest block mb-2">
                  {item.category}
                </span>
                <h3 className="text-3xl font-black text-white mb-4 uppercase group-hover:text-golden transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                  {item.description}
                </p>

                <footer className="flex flex-wrap gap-2 mt-auto">
                  {item.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] font-mono px-3 py-1 border border-white/10 text-gray-500 bg-black group-hover:border-golden/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </footer>
              </div>

              {/* Borde animado inferior (Pure CSS Performance) */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-golden w-0 group-hover:w-full transition-all duration-700" aria-hidden="true"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};