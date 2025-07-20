'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">About</a>
                <a href="/specialties" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Specialties</a>
                <a href="/credentials" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Credentials</a>
                <a href="/research" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Research</a>
                <a href="/experience" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Experience</a>
                <a href="/contact" className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <a 
              href="/" 
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors rounded-md cursor-pointer"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors rounded-md cursor-pointer"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="/specialties" 
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors rounded-md cursor-pointer"
              onClick={closeMobileMenu}
            >
              Specialties
            </a>
            <a 
              href="/credentials" 
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors rounded-md cursor-pointer"
              onClick={closeMobileMenu}
            >
              Credentials
            </a>
            <a 
              href="/research" 
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors rounded-md cursor-pointer"
              onClick={closeMobileMenu}
            >
              Research
            </a>
            <a 
              href="/experience" 
              className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors rounded-md cursor-pointer"
              onClick={closeMobileMenu}
            >
              Experience
            </a>
            <a 
              href="/contact" 
              className="text-blue-900 hover:text-blue-700 hover:bg-blue-50 block px-3 py-2 text-base font-medium transition-colors rounded-md cursor-pointer"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="space-y-0">
        {/* Contact Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Schedule a consultation with Dr. Narendra Pandit for expert gastrointestinal surgical care
            </p>
          </div>
        </section>

        {/* Contact Form Placeholder */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Form</h2>
              <p className="text-gray-600">Please replace with your ContactForm component</p>
            </div>
          </div>
        </section>

        {/* Location Info Placeholder */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Location Information</h2>
              <p className="text-gray-600">Please replace with your LocationInfo component</p>
            </div>
          </div>
        </section>

        {/* Appointment Info Placeholder */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Information</h2>
              <p className="text-gray-600">Please replace with your AppointmentInfo component</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}