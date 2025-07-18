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
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Examiner Roles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Academic Examiner Roles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {examinerRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{role.title}</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {role.year}
                  </span>
                </div>
                <p className="text-lg text-blue-600 font-semibold mb-2">{role.program}</p>
                <p className="text-gray-600 mb-3">{role.institution}</p>
                <p className="text-gray-700 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to advancing surgical gastroenterology through education, research, and clinical excellence
          </p>
        </div>
        
        {/* Teaching Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {teachingStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-green-600`}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Academic Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Academic Positions</h3>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:scale-102 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h4>
                    <p className="text-lg text-blue-600 font-semibold">{position.institution}</p>
                    <p className="text-gray-600">{position.department}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {position.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Research Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Research Projects (Principal Investigator)</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 ml-2">
                    {project.year}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                <p className="text-sm text-blue-600 font-medium">{project.institution}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Teaching Recognition */}
        <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Teaching Recognition</h3>
            <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
              Recognition for outstanding contributions to medical education and student development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Academic Excellence</h4>
              <p className="text-green-200">MCh Programme Coordinator</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-star-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Research Leadership</h4>
              <p className="text-green-200">71 Published Papers</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Educational Innovation</h4>
              <p className="text-green-200">ERAS Protocol Implementation</p>
            </div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-xl italic text-green-100 mb-4">
              "Teaching is not just about sharing knowledge—it's about inspiring the next generation to pursue excellence and make a difference in patients' lives."
            </blockquote>
            <cite className="text-lg font-semibold">— Dr. Narendra Pandit</cite>
          </div>
        </div>
      </div>
    </section>
  );
}