'use client';

export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20medical%20doctor%20in%20modern%20hospital%20setting%2C%20clean%20white%20medical%20environment%20with%20soft%20blue%20lighting%2C%20doctor%20in%20white%20coat%20with%20stethoscope%2C%20professional%20healthcare%20photography%20with%20depth%20of%20field&width=1920&height=1080&seq=about-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            About Dr. Narendra Pandit
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            A dedicated surgeon committed to providing exceptional gastrointestinal surgical care through innovation, expertise, and compassionate patient treatment
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 flex items-center justify-center text-white/20 animate-bounce">
        <i className="ri-user-heart-line text-3xl"></i>
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 flex items-center justify-center text-white/20 animate-bounce" style={{animationDelay: '1s'}}>
        <i className="ri-award-line text-3xl"></i>
      </div>
    </section>
  );
}