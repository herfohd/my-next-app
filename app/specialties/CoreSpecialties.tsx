'use client';

import { useState } from 'react';

export default function DrPanditSpecialties() {
  const [activeSpecialty, setActiveSpecialty] = useState<number | null>(null);

  const specialties = [
    {
      title: "Surgical Gastroenterology",
      description: "Advanced surgical treatment for complex digestive system disorders with MCh specialization from PGIMER, Chandigarh",
      expertise: [
        "Complex Hepatobiliary Surgery",
        "Pancreatic Surgery & Necrosectomy", 
        "Colorectal Cancer Surgery",
        "Gastrointestinal Oncology"
      ],
      experience: "15+ years",
      icon: "🏥",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "Hepatobiliary Surgery",
      description: "Specialized expertise in liver, bile duct, and pancreatic surgical procedures",
      expertise: [
        "Liver Resection & Hepatectomy",
        "Biliary Reconstruction",
        "Pancreaticoduodenectomy",
        "Hepatolithiasis Treatment"
      ],
      experience: "Expert Level",
      icon: "🫀",
      gradient: "from-emerald-600 to-emerald-800"
    },
    {
      title: "Oncological Surgery",
      description: "Comprehensive surgical management of gastrointestinal and hepatobiliary cancers",
      expertise: [
        "Gallbladder Cancer Surgery",
        "Pancreatic Cancer Resection",
        "Colorectal Cancer Treatment",
        "Multidisciplinary Cancer Care"
      ],
      experience: "100+ Cancer Cases",
      icon: "🎯",
      gradient: "from-red-600 to-red-800"
    },
    {
      title: "Emergency GI Surgery",
      description: "Urgent surgical interventions for acute gastrointestinal conditions and trauma",
      expertise: [
        "Acute Pancreatitis Management",
        "Bile Duct Injuries",
        "GI Perforation Repair",
        "Trauma Surgery"
      ],
      experience: "24/7 Emergency Care",
      icon: "🚨",
      gradient: "from-orange-600 to-orange-800"
    },
    {
      title: "Minimally Invasive Surgery",
      description: "Advanced laparoscopic techniques for faster recovery and improved outcomes",
      expertise: [
        "Laparoscopic Cholecystectomy",
        "Minimal Access Surgery",
        "Endoscopic Procedures",
        "ERAS Protocol Implementation"
      ],
      experience: "Modern Techniques",
      icon: "🔬",
      gradient: "from-purple-600 to-purple-800"
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Dr. Narendra Pandit
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-2">
              MBBS, MS, MCh (Surgical Gastroenterology)
            </p>
            <p className="text-sm sm:text-base md:text-lg text-blue-300 px-2">
              Associate Professor | Fellow of American College of Surgeons (FACS)
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                15+ Years Experience
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                70+ Publications
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                PGIMER Trained
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Areas of Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Comprehensive surgical care combining advanced techniques, academic excellence, and compassionate patient care
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                activeSpecialty === index ? 'ring-4 ring-blue-500' : ''
              }`}
              onClick={() => setActiveSpecialty(activeSpecialty === index ? null : index)}
            >
              <div className={`bg-gradient-to-br ${specialty.gradient} p-4 sm:p-6 text-white`}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">{specialty.icon}</div>
                  <div className="text-xs sm:text-sm bg-white/20 px-2 sm:px-3 py-1 rounded-full">
                    {specialty.experience}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">{specialty.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{specialty.description}</p>
              </div>
              
              <div className="p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Key Expertise:
                </h4>
                <ul className="space-y-2">
                  {specialty.expertise.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeSpecialty === index && (
                <div className="absolute inset-0 bg-blue-600/95 text-white p-4 sm:p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{specialty.icon}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight">{specialty.title}</h3>
                    <p className="text-blue-100 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">{specialty.description}</p>
                    <div className="text-xs sm:text-sm">
                      <div className="font-semibold mb-2">Experience Level:</div>
                      <div className="text-blue-200">{specialty.experience}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Currently Practicing At
          </h3>
          <div className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
            <strong>Birat Medical College Teaching Hospital</strong>
          </div>
          <div className="text-gray-600 mb-4 sm:mb-6">
            Biratnagar, Nepal
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Nepal Medical Council Reg: 6121
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Available for Consultation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}