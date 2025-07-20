'use client';

import Link from 'next/link';
import { useState } from 'react';
import CredentialsHero from './CredentialsHero';
import Education from './Education';
import Certifications from './Certifications';
import Memberships from './Memberships';

export default function CredentialsPage() {
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
              <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer">Dr. Narendra Pandit</Link>
              <span className="ml-2 text-xs sm:text-sm text-gray-600">MBBS, MS, MCh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">About</Link>
                <Link href="/specialties" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Specialties</Link>
                <Link href="/credentials" className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Credentials</Link>
                <Link href="/research" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Research</Link>
                <Link href="/experience" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Experience</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contact</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-900 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/specialties" 
                className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Specialties
              </Link>
              <Link 
                href="/credentials" 
                className="text-blue-900 bg-blue-50 hover:text-blue-700 hover:bg-blue-100 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Credentials
              </Link>
              <Link 
                href="/research" 
                className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link 
                href="/experience" 
                className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-700 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <CredentialsHero />
      <Education />
      <Certifications />
      <Memberships />
    </div>
  );
}