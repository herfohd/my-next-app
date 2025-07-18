'use client';

export default function CredentialsHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Medical%20graduation%20ceremony%20with%20diplomas%20and%20certificates%2C%20academic%20achievement%20in%20medical%20education%2C%20professional%20medical%20qualifications%20and%20degrees%2C%20university%20medical%20school%20setting&width=1920&height=1080&seq=credentials-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            Academic Credentials
          </h1>
          <p className="text-xl md:text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive educational background and professional qualifications in gastrointestinal surgery
          </p>
          <div className="flex justify-center space-x-8 mt-12">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-graduation-cap-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-green-200">MBBS</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-hospital-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-green-200">MS Surgery</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-green-200">MCh GI Surgery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}