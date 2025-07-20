'use client';

export default function Memberships() {
  const memberships = [
    {
      organization: "Nepal Medical Association (NMA)",
      role: "Life Member",
      since: "2006",
      description: "Active participation in advancing healthcare standards and medical education in Nepal"
    },
    {
      organization: "Society of Surgeons of Nepal (SSN)",
      role: "Life Member",
      since: "2010",
      description: "Contributing to surgical excellence and professional development in Nepal"
    },
    {
      organization: "Nepalese Association of Surgical Gastroenterology (NASG)",
      role: "Life Member",
      since: "2015",
      description: "Promoting advancement in surgical gastroenterology practices and research"
    },
    {
      organization: "Fellow of American College of Surgeons (FACS)",
      role: "Fellow",
      since: "2018",
      description: "International recognition for surgical excellence and commitment to quality patient care"
    }
  ];

  const awards = [
    {
      title: "MBBS Scholarship Award",
      organization: "Ministry of Education (MOE), Nepal",
      year: "2000",
      description: "Merit-based scholarship for excellence in medical education"
    },
    {
      title: "Prof. Damber B. Karki Gold Medal",
      organization: "Kathmandu Medical College",
      year: "2005",
      description: "Awarded for securing highest marks in Medicine in Final MBBS Examination"
    },
    {
      title: "Award Certificate - ENT Excellence",
      organization: "Kathmandu Medical College",
      year: "2004",
      description: "Recognition for securing highest marks in ENT during MBBS course"
    },
    {
      title: "Award Certificate - Pharmacology Excellence",
      organization: "Kathmandu Medical College",
      year: "2002",
      description: "Recognition for securing highest marks in Pharmacology during MBBS course"
    },
    {
      title: "MS (General Surgery) Scholarship",
      organization: "PGIMER, Chandigarh, India",
      year: "2007",
      description: "Foreign Nation Scholarship for Master's in Surgery program"
    },
    {
      title: "MCh (Surgical Gastroenterology) Scholarship",
      organization: "PGIMER, Chandigarh, India",
      year: "2012",
      description: "Foreign Nation Scholarship for Master of Chirurgiae in Surgical Gastroenterology"
    }
  ];

  const academicRoles = [
    {
      title: "Teaching Programme Co-ordinator",
      organization: "NAMS & BPKIHS",
      year: "2021",
      description: "External and Internal examiner for MCh (Surgical Gastroenterology) programme"
    },
    {
      title: "Associate Professor",
      organization: "Birat Medical College Teaching Hospital",
      period: "April 2021 - Present",
      description: "Leading surgical gastroenterology education and clinical practice"
    },
    {
      title: "Associate Professor",
      organization: "BPKIHS, Dharan",
      period: "Dec 2015 - April 2021",
      description: "Surgical Gastroenterology Division leadership and academic excellence"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Professional Memberships */}
          <div>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                Professional Memberships
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                Life-time memberships in leading medical organizations
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {memberships.map((membership, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight pr-2">{membership.organization}</h3>
                    <span className="text-xs sm:text-sm text-blue-600 bg-blue-100 px-2 sm:px-3 py-1 rounded-full self-start flex-shrink-0">Since {membership.since}</span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">{membership.role}</p>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{membership.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Awards and Recognition */}
          <div>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                Awards & Recognition
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                Excellence in medical education and surgical practice
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6 max-h-80 sm:max-h-96 overflow-y-auto">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-yellow-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-yellow-100 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-lg font-bold text-gray-900 leading-tight">{award.title}</h3>
                      <p className="text-yellow-600 font-semibold text-xs sm:text-sm">{award.organization} • {award.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Academic Roles Section */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Academic Leadership
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
              Teaching and administrative roles in medical education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {academicRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">{role.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">{role.organization}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">{role.period || role.year}</p>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Research and Publications Stats */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Research & Publications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">71+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Published Papers</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">4</div>
              <div className="text-gray-600 text-xs sm:text-sm">Principal Investigator Research</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">15+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Years Experience</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">MCh</div>
              <div className="text-gray-600 text-xs sm:text-sm">Surgical Gastroenterology</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}