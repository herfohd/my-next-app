'use client';

export default function TeachingExperience() {
  const teachingStats = [
    { number: "15+", label: "Years of Teaching", icon: "ri-graduation-cap-line" },
    { number: "71", label: "Publications", icon: "ri-book-open-line" },
    { number: "4", label: "Research Projects", icon: "ri-research-line" },
    { number: "2", label: "Academic Institutions", icon: "ri-building-line" }
  ];

  const positions = [
    {
      title: "Associate Professor",
      institution: "Birat Medical College Teaching Hospital, Biratnagar",
      duration: "April 2021 - Present",
      department: "Surgical Gastroenterology",
      description: "Currently serving as Associate Professor, leading surgical gastroenterology education and clinical practice"
    },
    {
      title: "Associate Professor",
      institution: "B P Koirala Institute of Health Sciences (BPKIHS), Dharan",
      duration: "December 2015 - April 2021",
      department: "Surgical Gastroenterology Division",
      description: "Served as Associate Professor in Surgical Gastroenterology Division, contributing to medical education and research"
    },
    {
      title: "Teaching Programme Coordinator",
      institution: "B P Koirala Institute of Health Sciences (BPKIHS), Dharan",
      duration: "December 2016",
      department: "Department of Surgery",
      description: "Coordinated teaching programs and served as External (NAMS 2021) and Internal examiner for MCh (Surgical Gastroenterology) programme"
    }
  ];

  const researchProjects = [
    {
      title: "Impact of Renal Transplantation on Cardiac Function",
      type: "MS Thesis",
      year: "2010",
      institution: "PGIMER, Chandigarh, India",
      description: "Principal investigator studying cardiac function improvements in chronic renal failure patients post-transplantation"
    },
    {
      title: "FDG-PET/CT Efficacy in Rectal Cancer",
      type: "MCh Dissertation",
      year: "2015",
      institution: "PGIMER, Chandigarh, India",
      description: "Research on predicting response after neoadjuvant chemoradiation in rectal cancer using FDG-PET/CT scan"
    },
    {
      title: "Enhanced Recovery After Surgery (ERAS) Protocol",
      type: "Clinical Research",
      year: "2018",
      institution: "BPKIHS, Dharan, Nepal",
      description: "Impact study of ERAS protocol in patients undergoing pancreatic surgery"
    },
    {
      title: "Open Pancreatic Necrosectomy Study",
      type: "Retrospective Study",
      year: "2021",
      institution: "BPKIHS, Dharan, Nepal",
      description: "Safety and effectiveness of open pancreatic necrosectomy using step-up approach for pancreatic necrosis"
    }
  ];

  const memberships = [
    {
      name: "Nepal Medical Association (NMA)",
      role: "Life-time Member",
      icon: "ri-hospital-line"
    },
    {
      name: "Society of Surgeons of Nepal (SSN)",
      role: "Life-time Member",
      icon: "ri-surgical-mask-line"
    },
    {
      name: "Nepalese Association of Surgical Gastroenterology (NASG)",
      role: "Life-time Member",
      icon: "ri-microscope-line"
    },
    {
      name: "Fellow of American College of Surgeons (FACS)",
      role: "Fellow",
      icon: "ri-global-line"
    }
  ];

  const examinerRoles = [
    {
      title: "External Examiner",
      program: "MCh (Surgical Gastroenterology)",
      institution: "NAMS",
      year: "2021",
      description: "Served as external examiner for MCh programme evaluation"
    },
    {
      title: "Internal Examiner",
      program: "MCh (Surgical Gastroenterology)",
      institution: "BPKIHS, Dharan",
      year: "2016",
      description: "Internal examiner for postgraduate surgical gastroenterology assessments"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Examiner Roles */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Academic Examiner Roles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {examinerRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">{role.title}</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 self-start">
                    {role.year}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-blue-600 font-semibold mb-2">{role.program}</p>
                <p className="text-sm sm:text-base text-gray-600 mb-3">{role.institution}</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Teaching Experience</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Dedicated to advancing surgical gastroenterology through education, research, and clinical excellence
          </p>
        </div>
        
        {/* Teaching Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          {teachingStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-3 sm:mb-4">
                <i className={`${stat.icon} text-xl sm:text-2xl text-green-600`}></i>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Academic Positions */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Academic Positions</h3>
          <div className="space-y-6 sm:space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transform hover:scale-102 transition-all duration-300">
                <div className="flex flex-col space-y-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{position.title}</h4>
                      <p className="text-base sm:text-lg text-blue-600 font-semibold mb-1">{position.institution}</p>
                      <p className="text-sm sm:text-base text-gray-600">{position.department}</p>
                    </div>
                    <div className="sm:ml-4">
                      <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {position.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Research Projects */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Research Projects (Principal Investigator)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 flex-1 pr-0 sm:pr-2">{project.title}</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 self-start">
                    {project.year}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                    {project.type}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                <p className="text-xs sm:text-sm text-blue-600 font-medium">{project.institution}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Teaching Recognition */}
        <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Teaching Recognition</h3>
            <p className="text-lg sm:text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
              Recognition for outstanding contributions to medical education and student development
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-award-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Academic Excellence</h4>
              <p className="text-sm sm:text-base text-green-200">MCh Programme Coordinator</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-star-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Research Leadership</h4>
              <p className="text-sm sm:text-base text-green-200">71 Published Papers</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-book-open-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Educational Innovation</h4>
              <p className="text-sm sm:text-base text-green-200">ERAS Protocol Implementation</p>
            </div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-lg sm:text-xl italic text-green-100 mb-4 leading-relaxed">
              "Teaching is not just about sharing knowledge—it's about inspiring the next generation to pursue excellence and make a difference in patients' lives."
            </blockquote>
            <cite className="text-base sm:text-lg font-semibold">— Dr. Narendra Pandit</cite>
          </div>
        </div>
      </div>
    </section>
  );
}