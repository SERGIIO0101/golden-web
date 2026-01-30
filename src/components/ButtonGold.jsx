export const ButtonGold = ({ text, icon: Icon, href }) => (
  <a 
    href={href}
    className="bg-golden text-black px-8 py-4 font-black uppercase tracking-[0.2em] flex items-center justify-between group hover:bg-white transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)] cursor-pointer"
  >
    {text}
    {Icon && <Icon className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />}
  </a>
);