export const TechCard = ({ icon: Icon, title, desc, tag, colorClass = "cyber-pink" }) => (
  <div className="glass-panel p-8 relative overflow-hidden group">
    <div className="scanner-line opacity-0 group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-8">
        <div className={`p-3 bg-white/5 border border-white/10 group-hover:border-${colorClass} transition-colors`}>
          {Icon && <Icon className={`text-golden group-hover:text-${colorClass} transition-colors duration-500`} size={28} />}
        </div>
        <span className={`text-[10px] font-mono text-${colorClass} tracking-[0.3em] font-bold`}>{tag}</span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);