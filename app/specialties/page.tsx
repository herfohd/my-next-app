'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SpecialtiesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Ensure client-side rendering for window access
  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/specialties', label: 'Specialties' },
    { href: '/credentials', label: 'Credentials' },
    { href: '/research', label: 'Research' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  const specialties = [
    {
      title: "Hepatobiliary Surgery",
      description: "Advanced surgical procedures for liver, gallbladder, and bile duct conditions",
      icon: "🫀",
      procedures: [
        "Laparoscopic Cholecystectomy",
        "Liver Resection",
        "Bile Duct Reconstruction",
        "Hepatic Cyst Management"
      ]
    },
    {
      title: "Pancreatic Surgery",
      description: "Complex pancreatic procedures including minimally invasive techniques",
      icon: "🔬",
      procedures: [
        "Pancreaticoduodenectomy (Whipple)",
        "Distal Pancreatectomy",
        "Pancreatic Cyst Drainage",
        "Chronic Pancreatitis Surgery"
      ]
    },
    {
      title: "Gastrointestinal Surgery",
      description: "Comprehensive surgical treatment for digestive system disorders",
      icon: "⚕️",
      procedures: [
        "Colorectal Surgery",
        "Upper GI Surgery",
        "Hernia Repair",
        "Bowel Resection"
      ]
    },
    {
      title: "Minimally Invasive Surgery",
      description: "Advanced laparoscopic and robotic surgical techniques",
      icon: "🔧",
      procedures: [
        "Laparoscopic Surgery",
        "Endoscopic Procedures",
        "Single-Port Surgery",
        "Robotic-Assisted Surgery"
      ]
    }
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  // Safe scroll function that only works on client
  const handleScrollToSection = (sectionId: string) => {
    if (isClient && typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-xl sm:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
              >
                Dr. Narendra Pandit
              </Link>
              <span className="ml-2 text-xs sm:text-sm text-gray-600 hidden sm:inline">MBBS, MS, MCh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActiveLink(item.href)
                        ? 'text-blue-900 font-semibold'
                        : 'text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - Only render on client */}
            {isClient && (
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle mobile menu"
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
            )}
          </div>
        </div>

        {/* Mobile Menu - Only render on client */}
        {isClient && (
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
              <span className="block px-3 py-2 text-xs text-gray-600 sm:hidden">MBBS, MS, MCh</span>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded-md w-full text-left ${
                    isActiveLink(item.href)
                      ? 'text-blue-900 bg-blue-50 hover:text-blue-700 hover:bg-blue-100 font-semibold'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Surgical Specialties
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Advanced surgical expertise in hepatobiliary, pancreatic, and gastrointestinal procedures
          </p>
          {isClient && (
            <button
              onClick={() => handleScrollToSection('specialties-grid')}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg transition-colors font-medium"
            >
              Explore Specialties
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties-grid" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive surgical care with specialized expertise in complex procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{specialty.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-center mb-4">Key Procedures:</h4>
                  {specialty.procedures.map((procedure, procIndex) => (
                    <div key={procIndex} className="flex items-center bg-blue-50 rounded-lg p-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Specialized Surgical Care?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Schedule a consultation to discuss your treatment options
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              View Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}