"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ExperiencePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (page: string) => {
    const path = page === 'home' ? '/' : `/${page}`;
    router.push(path);
    closeMobileMenu();
  };

  const navigationItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'About', path: '/about', key: 'about' },
    { name: 'Specialties', path: '/specialties', key: 'specialties' },
    { name: 'Credentials', path: '/credentials', key: 'credentials' },
    { name: 'Research', path: '/research', key: 'research' },
    { name: 'Experience', path: '/experience', key: 'experience' },
    { name: 'Contact', path: '/contact', key: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer hover:text-blue-700 transition-colors"
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
                    key={item.key}
                    href={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      item.key === 'experience'
                        ? 'text-blue-900 hover:text-blue-700'
                        : 'text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
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
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left ${
                  item.key === 'experience'
                    ? 'text-blue-900 bg-blue-50 hover:text-blue-700 hover:bg-blue-100'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-teal-200 whitespace-nowrap">2000+ Surgeries</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-teal-200 whitespace-nowrap">Birat Medical</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2 sm:mb-3 group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-teal-200 whitespace-nowrap">100+ Students</p>
              </div>
            </div>
          </div>
        </div>
               
        {/* Floating medical elements */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white/20 animate-bounce">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white/20 animate-bounce" style={{animationDelay: '1s'}}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
      </section>

      {/* Experience Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clinical Experience Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Birat Medical College</h3>
              <p className="text-gray-600 mb-4">Associate Professor & Head of Surgery Department</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 15+ years of clinical practice</li>
                <li>• 2000+ successful surgeries</li>
                <li>• GI & Laparoscopic specialist</li>
              </ul>
            </div>

            {/* Teaching Experience Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Leadership</h3>
              <p className="text-gray-600 mb-4">Medical Education & Student Mentorship</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 100+ students mentored</li>
                <li>• Curriculum development</li>
                <li>• Research supervision</li>
              </ul>
            </div>

            {/* Research & Innovation Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Innovation</h3>
              <p className="text-gray-600 mb-4">Advancing Surgical Techniques</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Published research papers</li>
                <li>• Conference presentations</li>
                <li>• Clinical innovations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Committed to Excellence in Healthcare
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Combining years of experience with cutting-edge techniques for the best patient outcomes
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors"
          >
            Schedule Consultation
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}