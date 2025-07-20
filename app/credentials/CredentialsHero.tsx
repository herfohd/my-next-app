'use client';

import { useEffect, useState } from 'react';

export default function CredentialsHero() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size after component mounts
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Medical%20graduation%20ceremony%20with%20diplomas%20and%20certificates%2C%20academic%20achievement%20in%20medical%20education%2C%20professional%20medical%20qualifications%20and%20degrees%2C%20university%20medical%20school%20setting&width=1920&height=1080&seq=credentials-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isLargeScreen ? 'fixed' : 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300 px-2 leading-tight">
            Academic Credentials
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Comprehensive educational background and professional qualifications in gastrointestinal surgery
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 md:space-x-6 lg:space-x-8 mt-8 sm:mt-10 lg:mt-12 space-y-4 sm:space-y-0">
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-graduation-cap-line text-lg sm:text-xl md:text-2xl text-white"></i>
              </div>
              <p className="text-xs sm:text-sm text-green-200">MBBS</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-hospital-line text-lg sm:text-xl md:text-2xl text-white"></i>
              </div>
              <p className="text-xs sm:text-sm text-green-200">MS Surgery</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-award-line text-lg sm:text-xl md:text-2xl text-white"></i>
              </div>
              <p className="text-xs sm:text-sm text-green-200">MCh GI Surgery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}