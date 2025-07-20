'use client';
import Link from 'next/link';
import { useState } from 'react';
import SpecialtiesHero from './SpecialtiesHero';
import CoreSpecialties from './CoreSpecialties';
import ProceduresOffered from './ProceduresOffered';
import TechnologyApproach from './TechnologyApproach';

export default function SpecialtiesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-900 cursor-pointer">Dr. Narendra Pandit</Link>
              <span className="ml-2 text-sm text-gray-600 hidden sm:inline">MBBS, MS, MCh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">About</Link>
                <Link href="/specialties" className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Specialties</Link>
                <Link href="/credentials" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Credentials</Link>
                <Link href="/research" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Research</Link>
                <Link href="/experience" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Experience</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contact</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/specialties" 
              className="text-blue-900 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Specialties
            </Link>
            <Link 
              href="/credentials" 
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Credentials
            </Link>
            <Link 
              href="/research" 
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link 
              href="/experience" 
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <SpecialtiesHero />
      <CoreSpecialties />
      <ProceduresOffered />
      <TechnologyApproach />
    </div>
  );
}