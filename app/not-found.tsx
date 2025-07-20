'use client';

import Link from 'next/link';
import React from 'react';

export default function NotFound(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Inline styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .delay-1 { animation-delay: 1s; }
          .delay-2 { animation-delay: 2s; }
          .delay-0-5 { animation-delay: 0.5s; }
          .delay-1-5 { animation-delay: 1.5s; }
          .delay-2-5 { animation-delay: 2.5s; }
        `
      }} />

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-1/4 right-16 w-16 h-16 bg-purple-100 rounded-full opacity-40 animate-pulse delay-1"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-30 animate-pulse delay-2"></div>
      <div className="absolute bottom-16 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-40 animate-pulse delay-0-5"></div>

      {/* Medical icons floating */}
      <div className="absolute top-20 right-1/4 text-blue-200 opacity-60 animate-bounce delay-1-5">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-16 text-purple-200 opacity-60 animate-bounce delay-2-5">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none animate-pulse">
            404
          </h1>
        </div>

        {/* Main message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            This page has not been generated
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Tell me what you would like on this page
          </p>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            This section of Dr. Narendra Pandit's website is still being developed. 
            We're working to bring you comprehensive medical information and services.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link 
            href="/" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            Return Home
          </Link>
          
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/specialties" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Specialties
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              About Dr. Pandit
            </Link>
            <Link href="/credentials" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Credentials
            </Link>
            <Link href="/research" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Research
            </Link>
            <Link href="/experience" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Experience
            </Link>
          </div>
        </div>
      </div>

      {/* Medical cross decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300">
        <div className="relative">
          <div className="w-12 h-1 bg-current"></div>
          <div className="w-1 h-12 bg-current absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}