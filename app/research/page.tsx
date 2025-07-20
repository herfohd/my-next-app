'use client';

import { useState } from 'react';

export default function ResearchPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer">Dr. Narendra Pandit</a>
              <span className="ml-2 text-xs sm:text-sm text-gray-600">MBBS, MS, MCh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">About</a>
                <a href="/specialties" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Specialties</a>
                <a href="/credentials" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Credentials</a>
                <a href="/research" className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Research</a>
                <a href="/experience" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Experience</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
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

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                <a 
                  href="/" 
                  className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/specialties" 
                  className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Specialties
                </a>
                <a 
                  href="/credentials" 
                  className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Credentials
                </a>
                <a 
                  href="/research" 
                  className="text-blue-900 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Research
                </a>
                <a 
                  href="/experience" 
                  className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
                <a 
                  href="/contact" 
                  className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sample content sections - replace with your actual components */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Research Activities</h1>
        <p className="text-xl">Leading research in hepatobiliary and pancreatic surgery</p>
      </div>
      
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Publications</h2>
        <p className="text-gray-600">Peer-reviewed publications and research papers</p>
      </div>
      
      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Research Interests</h2>
        <p className="text-gray-600">Areas of clinical and academic focus</p>
      </div>
      
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ongoing Projects</h2>
        <p className="text-gray-600">Current research initiatives and studies</p>
      </div>
    </div>
  );
}