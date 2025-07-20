'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Helper function to handle mobile menu close
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Dr. Narendra Pandit</h1>
              <span className="ml-2 text-xs sm:text-sm text-gray-600 hidden xs:block">MBBS, MS, MCh</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">About</Link>
                <Link href="/specialties" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Specialties</Link>
                <Link href="/credentials" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Credentials</Link>
                <Link href="/research" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Research</Link>
                <Link href="/experience" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Experience</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    className={!mobileMenuOpen ? 'block' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={mobileMenuOpen ? 'block' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - FIXED */}
          <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              <div onClick={handleMobileMenuClose}>
                <Link href="/" className="text-blue-900 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">Home</Link>
              </div>
              <div onClick={handleMobileMenuClose}>
                <Link href="/about" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">About</Link>
              </div>
              <div onClick={handleMobileMenuClose}>
                <Link href="/specialties" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">Specialties</Link>
              </div>
              <div onClick={handleMobileMenuClose}>
                <Link href="/credentials" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">Credentials</Link>
              </div>
              <div onClick={handleMobileMenuClose}>
                <Link href="/research" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">Research</Link>
              </div>
              <div onClick={handleMobileMenuClose}>
                <Link href="/experience" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">Experience</Link>
              </div>
              <div onClick={handleMobileMenuClose}>
                <Link href="/contact" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20medical%20facility%20with%20advanced%20surgical%20equipment%2C%20clean%20white%20hospital%20corridors%20with%20blue%20lighting%20accents%2C%20professional%20healthcare%20environment%20with%203D%20medical%20technology%20displays%2C%20futuristic%20medical%20center%20interior%20design&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: isClient && window.innerWidth > 768 ? 'fixed' : 'scroll'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Dr. Narendra Pandit
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 mb-4 lg:mb-6 font-light">
                MBBS, MS, MCh - GI Surgeon
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 lg:mb-8 leading-relaxed">
                Expert Gastrointestinal Surgeon specializing in advanced laparoscopic procedures and complex GI surgeries at Birat Medical College
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-center cursor-pointer"
                >
                  Learn More About Me
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/profile1.jpg"
                  alt="Dr. Narendra Pandit"
                  className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top shadow-2xl border-4 sm:border-8 border-white/20 mx-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-60 h-60 sm:w-72 sm:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-60 h-60 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Floating Medical Icons - Hidden on small screens */}
        <div className="hidden md:block absolute top-20 left-10 w-12 h-12 flex items-center justify-center text-white/30 animate-bounce" style={{animationDelay: '0s'}}>
          <i className="ri-stethoscope-line text-2xl"></i>
        </div>
        <div className="hidden md:block absolute top-40 right-20 w-12 h-12 flex items-center justify-center text-white/30 animate-bounce" style={{animationDelay: '1s'}}>
          <i className="ri-heart-pulse-line text-2xl"></i>
        </div>
        <div className="hidden md:block absolute bottom-40 left-20 w-12 h-12 flex items-center justify-center text-white/30 animate-bounce" style={{animationDelay: '2s'}}>
          <i className="ri-microscope-line text-2xl"></i>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Excellence in Gastrointestinal Surgery</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Providing world-class surgical care with advanced techniques and compassionate treatment
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors">
                <i className="ri-surgical-mask-line text-2xl sm:text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Advanced Surgery</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Specializing in minimally invasive laparoscopic procedures with faster recovery times and better outcomes
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                <i className="ri-hospital-line text-2xl sm:text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Teaching and mentoring the next generation of surgeons at Birat Medical College with years of experience
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors">
                <i className="ri-research-line text-2xl sm:text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Research Focus</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Contributing to medical advancement through research in gastrointestinal surgery and innovative techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">15+</div>
              <div className="text-blue-200 text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">2000+</div>
              <div className="text-blue-200 text-sm sm:text-base">Successful Surgeries</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">70+</div>
              <div className="text-blue-200 text-sm sm:text-base">Research Publications</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">98%</div>
              <div className="text-blue-200 text-sm sm:text-base">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8">
            Schedule a consultation to discuss your treatment options with Dr. Pandit
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer inline-block"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}