'use client';

import { JSX } from 'react';

export default function ProfessionalJourney() {
  const milestones = [
    {
      year: "2005",
      title: "MBBS Graduation",
      description: "Completed Bachelor of Medicine and Bachelor of Surgery from Kathmandu Medical College with highest honors, receiving Prof. Damber B. Karki Gold Medal",
      icon: "graduation-cap" as const
    },
    {
      year: "2006-2007",
      title: "Medical Officer & Internship",
      description: "Served as Medical Officer in Department of Surgery at Kathmandu Medical College Teaching Hospital, gaining foundational clinical experience",
      icon: "stethoscope" as const
    },
    {
      year: "2010",
      title: "MS in General Surgery",
      description: "Earned Master of Surgery from PGIMER, Chandigarh, India with Foreign Nation Scholarship. Completed thesis on cardiac function in renal transplant patients",
      icon: "award" as const
    },
    {
      year: "2010-2012",
      title: "General Surgeon",
      description: "Worked as General Surgeon at Narayani Sub-Regional Hospital, Birgunj, Nepal, providing comprehensive surgical care to the community",
      icon: "hospital" as const
    },
    {
      year: "2015",
      title: "MCh in Surgical Gastroenterology",
      description: "Completed Master of Chirurgiae in Surgical Gastroenterology from PGIMER, Chandigarh with Foreign Nation Scholarship, specializing in advanced GI procedures",
      icon: "microscope" as const
    },
    {
      year: "2015-2021",
      title: "Associate Professor at BPKIHS",
      description: "Served as Associate Professor in Surgical Gastroenterology Division at B P Koirala Institute of Health Sciences, Dharan, combining clinical excellence with medical education",
      icon: "school" as const
    },
    {
      year: "2021-Present",
      title: "Associate Professor at Birat Medical College",
      description: "Currently serving as Associate Professor at Birat Medical College Teaching Hospital, Biratnagar, leading surgical gastroenterology department and mentoring future surgeons",
      icon: "users" as const
    },
    {
      year: "2023",
      title: "Research Excellence",
      description: "Published over 71 research papers in international journals, contributing significantly to surgical gastroenterology literature and evidence-based practice",
      icon: "book-open" as const
    }
  ];

  const iconComponents: Record<string, JSX.Element> = {
    "graduation-cap": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
      </svg>
    ),
    "stethoscope": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM10 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm2 2V5h1v1h-1zM10 13a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3zm2 2v-1h1v1h-1z" clipRule="evenodd"/>
      </svg>
    ),
    "award": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ),
    "hospital": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 011-1h4a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm8 0v2h2V4h-2zM9 8H7v2h2V8zm0 4H7v2h2v-2zm4-4h-2v2h2V8zm0 4h-2v2h2v-2z" clipRule="evenodd"/>
      </svg>
    ),
    "microscope": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a4.992 4.992 0 00-.804 1.558C5.389 10.454 4.708 11 4 11a1 1 0 100 2c1.059 0 2.07-.672 2.586-1.826A5.028 5.028 0 007 12c.339 0 .675-.027 1-.08v.559A2 2 0 0010 14h2a2 2 0 002-2v-.057a4.979 4.979 0 00.616-1.999C15.392 10.676 16.293 11 17 11a1 1 0 100-2c-.708 0-1.389-.546-2.196-1.270A4.992 4.992 0 0014 5.172V4.414l.707-.707A1 1 0 0013 2h-2a1 1 0 00-.707 1.707L11 4.414v.758a3 3 0 00-2 0v-.758L9.707 3.707A1 1 0 009 2H7zM9 6a3 3 0 106 0 3 3 0 00-6 0z" clipRule="evenodd"/>
      </svg>
    ),
    "school": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
      </svg>
    ),
    "users": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
      </svg>
    ),
    "book-open": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V4.804z"/>
      </svg>
    )
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A timeline of dedication, learning, and achievement in the field of surgical gastroenterology
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
          
          {/* Mobile timeline line - visible only on mobile */}
          <div className="md:hidden absolute left-8 top-0 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-start`}>
                {/* Mobile layout */}
                <div className="md:hidden w-full pl-16">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start sm:items-center mb-4 flex-col sm:flex-row">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full sm:mr-4 mb-3 sm:mb-0 flex-shrink-0">
                        <div className="text-blue-600">
                          {iconComponents[milestone.icon]}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-xl sm:text-2xl font-bold text-blue-900">{milestone.year}</div>
                        <div className="text-base sm:text-lg font-semibold text-gray-800">{milestone.title}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className={`hidden md:block w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mr-4">
                        <div className="text-blue-600">
                          {iconComponents[milestone.icon]}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-900">{milestone.year}</div>
                        <div className="text-lg font-semibold text-gray-800">{milestone.title}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dots */}
                {/* Mobile dot */}
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Desktop dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}