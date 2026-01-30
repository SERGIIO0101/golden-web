export const WhatsAppButton = ({ phone }) => (
  <a 
    href={`https://wa.me/${phone}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 group"
  >
    <div className="absolute inset-0 bg-cyber-pink rounded-full blur-xl opacity-40 group-hover:opacity-80 animate-pulse transition-opacity" />
    <div className="relative bg-black border border-golden/50 p-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
      <svg className="w-6 h-6 text-golden group-hover:text-cyber-pink transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.764-5.766zm3.392 8.157c-.144.406-.833.784-1.145.828-.312.045-.609.043-.912-.043-.302-.085-.604-.171-1.347-.478-1.284-.531-2.112-1.849-2.176-1.934-.064-.085-.515-.685-.515-1.306 0-.622.327-.927.443-1.054.117-.128.254-.16.339-.16.085 0 .171.002.245.006.082.004.184-.03.288.22.107.256.368.895.4 1.019.032.124.053.268-.032.437-.085.17-.128.276-.255.424-.128.149-.267.33-.382.443-.128.127-.261.266-.112.523.15.257.665 1.096 1.428 1.774.981.872 1.811 1.141 2.068 1.269.257.127.406.106.556-.064.15-.17.639-.744.811-1.019.171-.276.342-.234.577-.149.234.085 1.492.701 1.748.828.256.128.426.191.49.302.064.111.064.639-.08 1.045z"/>
      </svg>
    </div>
  </a>
);