// ===========================================
// HOME PAGE - /app/page.tsx
// ===========================================
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-900">Dr. Narendra Pandit</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Home
                </Link>
                <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/about' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  About
                </Link>
                <Link href="/experience" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/experience' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Experience
                </Link>
                <Link href="/specialties" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/specialties' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Specialties
                </Link>
                <Link href="/research" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/research' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Research
                </Link>
                <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link href="/" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Home
                </Link>
                <Link href="/about" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/about' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  About
                </Link>
                <Link href="/experience" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/experience' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Experience
                </Link>
                <Link href="/specialties" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/specialties' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Specialties
                </Link>
                <Link href="/research" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/research' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Research
                </Link>
                <Link href="/contact" onClick={closeMobileMenu} className="block bg-blue-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Dr. Narendra Pandit
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Leading Hepatobiliary & Pancreatic Surgeon
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
                Pioneering advanced surgical techniques in liver, bile duct, and pancreatic surgery 
                with over two decades of excellence in patient care and medical innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More About Dr. Pandit
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized care in complex hepatobiliary and pancreatic procedures
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Liver Surgery</h3>
                <p className="text-gray-600">
                  Advanced hepatic resections, liver transplantation, and treatment of liver tumors
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pancreatic Surgery</h3>
                <p className="text-gray-600">
                  Complex pancreaticoduodenectomy, distal pancreatectomy, and pancreatic tumor resection
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimally Invasive Surgery</h3>
                <p className="text-gray-600">
                  Laparoscopic and robotic surgical techniques for faster recovery and better outcomes
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/specialties" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                View All Specialties
              </Link>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experience & Achievement
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Two decades of surgical excellence and medical leadership
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">20+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">5000+</div>
                <div className="text-gray-600">Successful Surgeries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
                <div className="text-gray-600">Research Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-gray-600">Awards & Recognition</div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/experience" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                View Full Experience
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards expert care with personalized treatment options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Appointment
              </Link>
              <Link href="/research" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Research
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Dr. Narendra Pandit</h3>
              <p className="text-gray-400">
                Leading expertise in hepatobiliary and pancreatic surgery
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                <Link href="/specialties" className="block text-gray-400 hover:text-white transition-colors">Specialties</Link>
                <Link href="/research" className="block text-gray-400 hover:text-white transition-colors">Research</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@drnarendrapandit.com</p>
                <p>Phone: +977-1-XXXXXXX</p>
                <p>Location: Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dr. Narendra Pandit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ===========================================
// ABOUT PAGE - /app/about/page.tsx
// ===========================================
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-900">Dr. Narendra Pandit</span>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Home
                </Link>
                <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/about' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  About
                </Link>
                <Link href="/experience" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/experience' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Experience
                </Link>
                <Link href="/specialties" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/specialties' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Specialties
                </Link>
                <Link href="/research" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/research' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Research
                </Link>
                <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link href="/" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Home
                </Link>
                <Link href="/about" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/about' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  About
                </Link>
                <Link href="/experience" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/experience' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Experience
                </Link>
                <Link href="/specialties" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/specialties' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Specialties
                </Link>
                <Link href="/research" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === '/research' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'}`}>
                  Research
                </Link>
                <Link href="/contact" onClick={closeMenu} className="block bg-blue-900 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dr. Narendra Pandit</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                A distinguished career dedicated to advancing hepatobiliary and pancreatic surgery through innovation, research, and compassionate patient care.
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Journey
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Dr. Narendra Pandit stands as one of Nepal's most accomplished hepatobiliary and pancreatic surgeons, with over two decades of dedicated service to advancing surgical excellence in South Asia. His journey began with a passion for complex surgical challenges and has evolved into a career marked by innovation, teaching, and unwavering commitment to patient care.
                  </p>
                  <p className="mb-4">
                    After completing his medical degree with distinction, Dr. Pandit pursued specialized training in hepatobiliary and pancreatic surgery at leading medical institutions internationally. His early career was shaped by mentorship from renowned surgeons and exposure to cutting-edge surgical techniques that would later define his practice philosophy.
                  </p>
                  <p>
                    Throughout his career, Dr. Pandit has been instrumental in establishing Nepal as a regional center of excellence for complex hepatopancreaticobiliary procedures. His work has not only saved countless lives but has also trained a new generation of surgeons who carry forward his commitment to surgical excellence.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Pioneer in Minimally Invasive Surgery</h4>
                      <p className="text-gray-600">First to introduce advanced laparoscopic techniques for liver and pancreatic surgery in Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">International Recognition</h4>
                      <p className="text-gray-600">Recipient of multiple international awards for surgical innovation and patient care excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Research Leadership</h4>
                      <p className="text-gray-600">Principal investigator in over 50 clinical studies advancing surgical outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Medical Education</h4>
                      <p className="text-gray-600">Professor and mentor to over 200 surgical residents and fellows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Training */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education & Training
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive educational foundation built through rigorous training at world-class institutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Degree</h3>
                    <p className="text-blue-900 font-medium mb-1">MBBS - Institute of Medicine, Tribhuvan University</p>
                    <p className="text-gray-600 mb-2">Graduated with First Class Honors</p>
                    <p className="text-sm text-gray-500">Gold Medal in Surgery and Medicine</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Surgical Specialization</h3>
                    <p className="text-green-900 font-medium mb-1">MS General Surgery - National Academy of Medical Sciences</p>
                    <p className="text-gray-600 mb-2">Specialized training in advanced surgical techniques</p>
                    <p className="text-sm text-gray-500">Research focus on minimally invasive procedures</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9