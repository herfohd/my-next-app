'use client';

import Link from 'next/link';
import { useState } from 'react';
import AboutHero from './AboutHero';
import PersonalBackground from './PersonalBackground';
import ProfessionalJourney from './ProfessionalJourney';
import Philosophy from './Philosophy';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer">
                Dr. Narendra Pandit
              </Link>
              <span className="hidden sm:inline ml-2 text-sm text-gray-600">MBBS, MS, MCh</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/specialties", label: "Specialties" },
                  { href: "/credentials", label: "Credentials" },
                  { href: "/research", label: "Research" },
                  { href: "/experience", label: "Experience" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`${
                      href === "/about" ? "text-blue-900" : "text-gray-700"
                    } hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors cursor-pointer`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-700 p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/specialties", label: "Specialties" },
                  { href: "/credentials", label: "Credentials" },
                  { href: "/research", label: "Research" },
                  { href: "/experience", label: "Experience" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`${
                      href === "/about" ? "text-blue-900 bg-blue-50" : "text-gray-700"
                    } hover:text-blue-700 hover:bg-blue-50 block px-3 py-2 text-base font-medium transition-colors cursor-pointer rounded-md`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <AboutHero />

      {/* Page Sections Wrapped in Container */}
      <div className="container-custom section-padding space-y-20">
        <PersonalBackground />
        <ProfessionalJourney />
        <Philosophy />
      </div>
    </div>
  );
}