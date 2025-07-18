'use client';

export default function SpecialtiesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Advanced%20laparoscopic%20surgery%20equipment%20in%20modern%20operating%20theater%2C%20high-tech%20surgical%20instruments%20with%203D%20visualization%20systems%2C%20futuristic%20medical%20technology%20with%20blue%20ambient%20lighting%2C%20minimally%20invasive%20surgery%20setup&width=1920&height=1080&seq=specialties-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            Surgical Specialties
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Advanced gastrointestinal surgery expertise with minimally invasive techniques for optimal patient outcomes
          </p>
          <div className="flex justify-center space-x-8 mt-12">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-scissors-cut-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-blue-200">Laparoscopic Surgery</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-heart-pulse-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-blue-200">GI Oncology</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-hospital-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-blue-200">Emergency Surgery</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated medical elements */}
      <div className="absolute top-20 left-10 w-12 h-12 flex items-center justify-center text-white/20 animate-pulse">
        <i className="ri-capsule-line text-2xl"></i>
      </div>
      <div className="absolute bottom-20 right-10 w-12 h-12 flex items-center justify-center text-white/20 animate-pulse" style={{animationDelay: '1s'}}>
        <i className="ri-dna-line text-2xl"></i>
      </div>
    </section>
  );
}