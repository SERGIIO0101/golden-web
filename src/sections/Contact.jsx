import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, MapPin, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';

export const Contact = ({ onOpenLegal }) => {
  const formRef = useRef(); 
  const [hasAccepted, setHasAccepted] = useState(false);
  const [status, setStatus] = useState('IDLE'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasAccepted) return;

    setStatus('SENDING');

    const SERVICE_ID = "service_3zbii8r";
    const TEMPLATE_ID = "template_5p1tp0y"; 
    const PUBLIC_KEY = "IAW2LnbK7F4go4P8q"; 

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('SUCCESS');
      e.target.reset(); 
      setHasAccepted(false); 
    } catch (error) {
      console.error("Fallo en la comunicación:", error);
      setStatus('ERROR');
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5">
      
      {/* CAPA ATMOSFÉRICA OPTIMIZADA v4 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[10%] -right-[10%] w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw]
                        bg-[radial-gradient(circle,var(--color-cyber-pink)_0%,transparent_70%)] 
                        opacity-0 animate-fade-in md:opacity-20 blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-golden/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
        
        {/* COLUMNA IZQUIERDA: IDENTIDAD (PASO 2) */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 font-mono text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4 text-center md:text-left">
            //_Inhibidor_de_Fricción_Comercial
          </p>
          
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.95] md:leading-[0.9] text-center md:text-left">
            ¿Listo para el <br />
            <span className="text-golden italic text-glow-golden">Siguiente Nivel?</span>
          </h2>
          
          <p className="text-gray-400 mb-10 max-w-md font-light leading-relaxed text-center md:text-left mx-auto md:mx-0 text-sm md:text-base">
            Estamos listos para procesar tus requerimientos. Iniciemos la fase de consultoría para transformar tu visión en un <span className="text-white italic">activo digital</span> de alto rendimiento.
          </p>

          <div className="mb-12 p-6 border-l-2 border-golden bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-golden font-mono text-[10px] tracking-widest uppercase mb-2">Iniciativa_Accesibilidad_</h4>
              <p className="text-white font-bold text-lg mb-2 tracking-tighter">Excelencia sin barreras de entrada.</p>
              <p className="text-gray-500 text-sm font-light">
                Tarifas optimizadas para profesionales en <span className="text-golden font-medium underline decoration-golden/30">Colombia</span>.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 mb-12 md:mb-0">
            <ContactInfo icon={MapPin} label="Ubicación_" value="Cartagena, Colombia" color="text-golden" />
            <ContactInfo icon={MessageSquare} label="Email_Directo" value="sergioseveriche1321@hotmail.com" color="text-cyber-pink" />
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO (PASO 1) */}
        <div className="bg-[#050505] border border-white/5 p-6 md:p-12 relative self-start backdrop-blur-xl shadow-2xl will-change-transform">
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-golden/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-golden/30" />

          {status === 'SUCCESS' ? (
            <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
              <ShieldCheck className="text-golden mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-black text-white uppercase mb-2">Solicitud_Procesada</h3>
              <p className="text-gray-500 font-mono text-xs">Transmisión exitosa. Responderemos en breve.</p>
              <button onClick={() => setStatus('IDLE')} className="mt-8 text-golden font-mono text-[10px] underline uppercase">Enviar otro mensaje_</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField 
                  label="Nombre_" 
                  name="user_name" 
                  placeholder="USER_NAME" 
                  type="text" 
                />
                <InputField 
                  label="Email_" 
                  name="user_email" 
                  placeholder="EMAIL@SISTEMA.COM" 
                  type="email" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-golden uppercase tracking-[0.2em]">Mensaje_</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-black border border-white/10 p-4 text-base md:text-sm text-white focus:border-golden focus:ring-1 focus:ring-golden/20 outline-none transition-all resize-none placeholder:opacity-20 min-h-[120px]"
                  placeholder="DESCRIBE_TU_PROYECTO..."
                />
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5">
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    id="habeasData" 
                    checked={hasAccepted}
                    onChange={(e) => setHasAccepted(e.target.checked)}
                    className="w-5 h-5 border border-white/20 bg-black appearance-none rounded checked:bg-golden transition-all cursor-pointer"
                  />
                  {hasAccepted && <ShieldCheck size={14} className="absolute text-black left-[3px] pointer-events-none" />}
                </div>
                <label htmlFor="habeasData" className="text-[10px] text-gray-500 font-mono leading-relaxed cursor-pointer select-none">
                  ACEPTO EL TRATAMIENTO DE DATOS SEGÚN LA <button type="button" onClick={() => onOpenLegal('privacidad')} className="text-golden underline hover:text-white transition-colors">POLÍTICA DE PRIVACIDAD</button> Y LOS <button type="button" onClick={() => onOpenLegal('terminos')} className="text-golden underline hover:text-white transition-colors">TÉRMINOS</button>.
                </label>
              </div>

              <button 
                type="submit"
                disabled={!hasAccepted || status === 'SENDING'}
                className={`relative w-full overflow-hidden group py-5 md:py-4 border font-black uppercase tracking-[0.3em] text-xs transition-all duration-500
                  ${hasAccepted ? 'border-golden text-golden' : 'opacity-20 border-gray-600 text-gray-600 cursor-not-allowed'}
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                  {status === 'SENDING' ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <><Send size={16} /> Enviar_Solicitud_</>
                  )}
                </span>
                {hasAccepted && <div className="absolute inset-0 bg-golden translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center gap-6 group">
    <div className={`w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-current transition-all duration-500 ${color}`}>
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{label}</p>
      <p className="text-white text-sm uppercase font-medium tracking-tight">{value}</p>
    </div>
  </div>
);

const InputField = ({ label, name, ...props }) => (
  <div className="space-y-2 w-full">
    <label className="text-[10px] font-mono text-golden uppercase tracking-[0.2em]">
      {label}
    </label>
    <input 
      {...props}
      name={name}
      required
      className="w-full bg-black border border-white/10 p-4 text-base md:text-sm text-white focus:border-golden focus:ring-1 focus:ring-golden/20 outline-none transition-all placeholder:opacity-20 h-14 md:h-12"
    />
  </div>
);