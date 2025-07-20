"use client"
import { useState } from 'react';

export default function MobileResponsiveNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (page: string) => {
    console.log(`Navigating to: ${page}`);
    closeMobileMenu();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => handleNavigation('home')} 
                className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer hover:text-blue-700 transition-colors"
              >
                Dr. Narendra Pandit
              </button>
              <span className="ml-2 text-xs sm:text-sm text-gray-600 hidden sm:inline">MBBS, MS, MCh</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => handleNavigation('home')} className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Home</button>
                <button onClick={() => handleNavigation('about')} className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">About</button>
                <button onClick={() => handleNavigation('specialties')} className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Specialties</button>
                <button onClick={() => handleNavigation('credentials')} className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Credentials</button>
                <button onClick={() => handleNavigation('research')} className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Research</button>
                <button onClick={() => handleNavigation('experience')} className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Experience</button>
                <button onClick={() => handleNavigation('contact')} className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
            <span className="block px-3 py-2 text-xs text-gray-600 sm:hidden">MBBS, MS, MCh</span>
            <button 
              onClick={() => handleNavigation('home')}
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('specialties')}
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
            >
              Specialties
            </button>
            <button 
              onClick={() => handleNavigation('credentials')}
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
            >
              Credentials
            </button>
            <button 
              onClick={() => handleNavigation('research')}
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
            >
              Research
            </button>
            <button 
              onClick={() => handleNavigation('experience')}
              className="text-blue-900 bg-blue-50 hover:text-blue-700 hover:bg-blue-100 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300 leading-tight">
              Clinical Experience
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-teal-200 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              Over 15 years of dedicated service in gastrointestinal surgery, combining clinical excellence with academic leadership at Birat Medical College
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 md:space-x-8 mt-8 sm:mt-12 space-y-6 sm:space-y-0">
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                  <i className="ri-surgical-mask-line text-xl sm:text-2xl text-white"></i>
                </div>
                <p className="text-xs sm:text-sm text-teal-200 whitespace-nowrap">2000+ Surgeries</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                  <i className="ri-hospital-line text-xl sm:text-2xl text-white"></i>
                </div>
                <p className="text-xs sm:text-sm text-teal-200 whitespace-nowrap">Birat Medical</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                  <i className="ri-team-line text-xl sm:text-2xl text-white"></i>
                </div>
                <p className="text-xs sm:text-sm text-teal-200 whitespace-nowrap">100+ Students</p>
              </div>
            </div>
          </div>
        </div>
               
        {/* Floating medical elements */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white/20 animate-bounce">
          <i className="ri-heart-line text-lg sm:text-xl md:text-2xl"></i>
        </div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white/20 animate-bounce" style={{animationDelay: '1s'}}>
          <i className="ri-medicine-bottle-line text-lg sm:text-xl md:text-2xl"></i>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This is where your other components (BiratMedical, ClinicalExperience, TeachingExperience) would be integrated. 
              The mobile responsive navigation is now working and ready for your content sections.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}