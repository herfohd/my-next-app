'use client';

export default function ExperienceHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20surgeon%20in%20modern%20hospital%20operating%20room%2C%20experienced%20doctor%20with%20surgical%20team%2C%20advanced%20medical%20facility%20with%20state-of-the-art%20equipment%2C%20professional%20healthcare%20environment%20with%20blue%20lighting&width=1920&height=1080&seq=experience-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            Clinical Experience
          </h1>
          <p className="text-xl md:text-2xl text-teal-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Over 15 years of dedicated service in gastrointestinal surgery, combining clinical excellence with academic leadership at Birat Medical College
          </p>
          <div className="flex justify-center space-x-8 mt-12">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-surgical-mask-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-teal-200">2000+ Surgeries</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-hospital-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-teal-200">Birat Medical</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-teal-200">100+ Students</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating medical elements */}
      <div className="absolute top-20 left-10 w-12 h-12 flex items-center justify-center text-white/20 animate-bounce">
        <i className="ri-heart-line text-2xl"></i>
      </div>
      <div className="absolute bottom-20 right-10 w-12 h-12 flex items-center justify-center text-white/20 animate-bounce" style={{animationDelay: '1s'}}>
        <i className="ri-medicine-bottle-line text-2xl"></i>
      </div>
    </section>
  );
}