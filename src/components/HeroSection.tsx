export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: "url('/hero-orchard.webp')",
          filter: "blur(8px)"
        }}
      />
      
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 via-transparent to-brand-emerald/10" />

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 animate-fade-in-up">
          Apples from{" "}
          <span className="relative inline-block">
            Turkey
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 8C40 2 100 2 198 8" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up glass-dark rounded-full px-8 py-4" style={{ animationDelay: "0.3s" }}>
          Premium quality apples for small and medium wholesalers globally.
          Fresh from our orchards to your market.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="/contact"
            className="bg-brand-green-dark text-white font-semibold px-10 py-4 rounded-full text-lg shadow-xl shadow-brand-green/20 hover:bg-brand-green transition-colors duration-300"
          >
            Get a Quote
          </a>
          <a
            href="/apple-types"
            className="group glass-dark text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300"
          >
            Our Products
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
