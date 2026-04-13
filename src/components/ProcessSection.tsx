export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/Ispartaorchard.webp)' }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Good weather. Good soil. Good apples.
        </h2>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          These natural conditions help apples grow with good color and taste
        </p>
      </div>
    </section>
  );
}
