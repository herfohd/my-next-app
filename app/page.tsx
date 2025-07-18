
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Dr. Narendra Pandit</h1>
              <span className="ml-2 text-sm text-gray-600">MBBS, MS, MCh</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">About</Link>
                <Link href="/specialties" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Specialties</Link>
                <Link href="/credentials" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Credentials</Link>
                <Link href="/research" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Research</Link>
                <Link href="/experience" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Experience</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20medical%20facility%20with%20advanced%20surgical%20equipment%2C%20clean%20white%20hospital%20corridors%20with%20blue%20lighting%20accents%2C%20professional%20healthcare%20environment%20with%203D%20medical%20technology%20displays%2C%20futuristic%20medical%20center%20interior%20design&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Dr. Narendra Pandit
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-light">
                MBBS, MS, MCh - GI Surgeon
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Expert Gastrointestinal Surgeon specializing in advanced laparoscopic procedures and complex GI surgeries at Birat Medical College
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Learn More About Me
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/profile1.jpg"
                  alt="Dr. Narendra Pandit"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover object-top shadow-2xl border-8 border-white/20 mx-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute top-20 left-10 w-12 h-12 flex items-center justify-center text-white/30 animate-bounce" style={{animationDelay: '0s'}}>
          <i className="ri-stethoscope-line text-2xl"></i>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 flex items-center justify-center text-white/30 animate-bounce" style={{animationDelay: '1s'}}>
          <i className="ri-heart-pulse-line text-2xl"></i>
        </div>
        <div className="absolute bottom-40 left-20 w-12 h-12 flex items-center justify-center text-white/30 animate-bounce" style={{animationDelay: '2s'}}>
          <i className="ri-microscope-line text-2xl"></i>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Excellence in Gastrointestinal Surgery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing world-class surgical care with advanced techniques and compassionate treatment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <i className="ri-surgical-mask-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Surgery</h3>
              <p className="text-gray-600 leading-relaxed">
                Specializing in minimally invasive laparoscopic procedures with faster recovery times and better outcomes
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <i className="ri-hospital-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Teaching and mentoring the next generation of surgeons at Birat Medical College with years of experience
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <i className="ri-research-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Contributing to medical advancement through research in gastrointestinal surgery and innovative techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">2000+</div>
              <div className="text-blue-200">Successful Surgeries</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">70+</div>
              <div className="text-blue-200">Research Publications</div>
            </div>
            <div className="group hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">98%</div>
              <div className="text-blue-200">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation to discuss your treatment options with Dr. Pandit
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer inline-block"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
