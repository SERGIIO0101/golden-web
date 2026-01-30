import React from 'react';
import { ExternalLink, Code2, Zap } from 'lucide-react';

const projects = [
{
  title: "Jenny Montoya | Identidad Digital",
  client: "Jenny Montoya",
  category: "Bio-Architecture & UX Design",
  description: "Ecosistema visual y narrativa digital para psicóloga clínica. Estructuración de activos para la marca 'Transformando distancias en raíces'.",
  tech: ["React", "Netlify Deployment", "UI/UX"],
  link: "https://jenny-montoya.netlify.app/", // <--- ¡Link verificado!
  image: "/imagen1.png",
  isFeatured: true
},
  {
    title: "E-Commerce System v1",
    client: "Retail Solutions",
    category: "High-Performance Sales",
    description: "Infraestructura escalable orientada a la conversión. Interfaz optimizada para tiempos de carga inferiores a 1s.",
    tech: ["Node.js", "Tailwind CSS", "Stripe API"],
    link: "#",
    image: null, // Si no hay imagen, el diseño se ajusta automáticamente
    isFeatured: false
  }
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Proyectos_<br />
              <span className="text-golden italic">Seleccionados</span>
            </h2>
            <div className="h-1 w-24 bg-cyber-pink"></div>
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] max-w-xs">
            // Exposición de activos digitales y despliegues verificados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div 
              key={index} 
              className="group relative border border-white/5 bg-white/[0.01] overflow-hidden flex flex-col transition-all duration-500 hover:border-golden/30 reveal"
            >
              {/* Visualización de Imagen (Si existe) */}
              {item.image ? (
                <div className="relative h-72 overflow-hidden border-b border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
              ) : (
                <div className="h-20 flex items-center px-10 pt-10">
                   <Zap className="text-white/10 group-hover:text-golden/40 transition-colors" size={40} />
                </div>
              )}

              {/* Contenido de la Card */}
              <div className="p-10 flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 border border-golden/20 bg-golden/5 text-golden">
                    <Code2 size={20} />
                  </div>
                  <a href={item.link} className="p-2 text-gray-600 hover:text-cyber-pink transition-colors">
                    <ExternalLink size={20} />
                  </a>
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

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono px-3 py-1 border border-white/10 text-gray-500 bg-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Borde animado inferior */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-golden w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};