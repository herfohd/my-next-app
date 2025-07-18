'use client';

import Link from 'next/link';
import SpecialtiesHero from './SpecialtiesHero';
import CoreSpecialties from './CoreSpecialties';
import ProceduresOffered from './ProceduresOffered';
import TechnologyApproach from './TechnologyApproach';

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-900 cursor-pointer">Dr. Narendra Pandit</Link>
              <span className="ml-2 text-sm text-gray-600">MBBS, MS, MCh</span>
            </div>
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