'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResearchPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/', key: 'home' },
    { name: 'About', href: '/about', key: 'about' },
    { name: 'Specialties', href: '/specialties', key: 'specialties' },
    { name: 'Credentials', href: '/credentials', key: 'credentials' },
    { name: 'Research', href: '/research', key: 'research' },
    { name: 'Experience', href: '/experience', key: 'experience' },
    { name: 'Contact', href: '/contact', key: 'contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const researchAreas = [
    {
      title: "Hepatobiliary Surgery",
      description: "Advanced surgical techniques for liver, gallbladder, and bile duct procedures",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: "Pancreatic Surgery",
      description: "Minimally invasive approaches to complex pancreatic conditions",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
        </svg>
      )
    },
    {
      title: "Laparoscopic Techniques",
      description: "Research in advanced minimally invasive surgical approaches",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      )
    }
  ];

  const publications = [
    {
      year: "2024",
      title: "Advanced Laparoscopic Techniques in Hepatobiliary Surgery: A Comprehensive Review",
      journal: "Journal of Minimally Invasive Surgery",
      authors: "Pandit N., Kumar A., Singh R."
    },
    {
      year: "2023",
      title: "Outcomes of Pancreaticoduodenectomy: A 10-Year Institutional Experience",
      journal: "Indian Journal of Gastroenterology",
      authors: "Pandit N., Sharma M., Gupta P."
    },
    {
      year: "2023",
      title: "Robotic vs. Laparoscopic Approach in Complex Gallbladder Surgery",
      journal: "Surgical Endoscopy International",
      authors: "Kumar S., Pandit N., Thapa R."
    },
    {
      year: "2022",
      title: "Management of Bile Duct Injuries: Current Perspectives and Future Directions",
      journal: "World Journal of Surgery",
      authors: "Pandit N., Acharya B., Pradhan S."
    }
  ];

  const ongoingProjects = [
    {
      title: "Multicenter Study on Laparoscopic Liver Resection",
      description: "A collaborative study examining outcomes and safety of laparoscopic hepatectomy across multiple centers in Nepal.",
      status: "Ongoing",
      collaborators: "Tribhuvan University Teaching Hospital, Grande International Hospital"
    },
    {
      title: "AI-Assisted Surgical Planning in HPB Surgery",
      description: "Research into the application of artificial intelligence in preoperative planning for complex hepatobiliary procedures.",
      status: "Phase II",
      collaborators: "Institute of Engineering, Pulchowk Campus"
    },
    {
      title: "Cost-Effectiveness Analysis of Minimally Invasive Surgery",
      description: "Comprehensive analysis of economic benefits of laparoscopic approaches in the Nepali healthcare context.",
      status: "Data Collection",
      collaborators: "Nepal Health Economics Association"
    }
  ];

  // Mobile menu button component to ensure proper client-side handling
  const MobileMenuButton = () => (
    <button
      onClick={toggleMenu}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
      aria-expanded={isMenuOpen}
      aria-label="Toggle navigation menu"
      type="button"
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
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-900">
                Dr. Narendra Pandit
              </Link>
              <span className="ml-2 text-xs sm:text-sm text-gray-600">MBBS, MS, MCh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-blue-900 border-b-2 border-blue-600'
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
              <MobileMenuButton />
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-blue-900 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Activities</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Advancing the field of hepatobiliary and pancreatic surgery through innovative research and clinical excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#publications"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Publications
              </Link>
              <Link
                href="#research-areas"
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Research Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section id="research-areas" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Interests</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our research focuses on advancing surgical techniques and improving patient outcomes across multiple specialties
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Publications</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Peer-reviewed publications contributing to the advancement of surgical science
              </p>
            </div>

            <div className="space-y-6">
              {publications.map((publication, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3">
                          {publication.year}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">{publication.title}</h3>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{publication.journal}</p>
                      <p className="text-gray-600">{publication.authors}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                        type="button"
                      >
                        View Abstract
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/publications"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Publications
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Research Projects</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Current research initiatives and collaborative studies driving innovation in surgical care
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {ongoingProjects.map((project, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex-1">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ml-4 ${
                      project.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                      project.status === 'Phase II' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Collaborators:</span> {project.collaborators}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Impact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our research contributions to the medical community and patient care advancement
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Published Papers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600">Ongoing Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
                <div className="text-gray-600">Collaborations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Citations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Collaborate with Us</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Interested in research collaboration or learning more about our ongoing studies? Get in touch to explore opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Contact for Collaboration
              </Link>
              <Link
                href="/publications"
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View All Publications
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}