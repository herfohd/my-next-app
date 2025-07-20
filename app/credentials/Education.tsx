'use client';

export default function Education() {
  const education = [
    {
      degree: "Master of Chirurgiae (MCh) in Surgical Gastroenterology",
      institution: "Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh, India",
      institutionUrl: "https://pgimer.edu.in/",
      year: "2012-2015",
      description: "Advanced specialized training in surgical gastroenterology including hepatobiliary surgery, pancreatic surgery, and gastrointestinal oncology with comprehensive clinical experience",
      grade: "MCh Scholarship Award as Foreign Nation",
      icon: "ri-award-line",
      color: "bg-purple-500"
    },
    {
      degree: "Master of Surgery (MS) in General Surgery",
      institution: "Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh, India",
      institutionUrl: "https://pgimer.edu.in/",
      year: "2007-2010",
      description: "Comprehensive training in general surgical procedures, emergency surgery, and surgical techniques with extensive hands-on clinical experience and research",
      grade: "MS Scholarship Award as Foreign Nation",
      icon: "ri-surgical-mask-line",
      color: "bg-blue-500"
    },
    {
      degree: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
      institution: "Kathmandu Medical College, Kathmandu University, Nepal",
      institutionUrl: "https://kmc.edu.np/",
      year: "2000-2005",
      description: "Foundation medical education with clinical rotations in various specialties. Achieved highest marks in Medicine and received multiple academic awards",
      grade: "Prof. Damber B. Karki Gold Medal for Medicine",
      icon: "ri-graduation-cap-line",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Educational Background
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A distinguished medical education foundation built through prestigious institutions in Nepal and India
          </p>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col md:flex-row">
                <div className={`${edu.color} p-6 sm:p-8 md:w-1/3 text-white flex flex-col justify-center`}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mb-3 sm:mb-4">
                    <i className={`${edu.icon} text-xl sm:text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 leading-tight">{edu.degree}</h3>
                  <p className="text-white/90 text-base sm:text-lg">{edu.year}</p>
                  <div className="mt-3 sm:mt-4 inline-block bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {edu.grade}
                  </div>
                </div>
                <div className="p-6 sm:p-8 md:w-2/3">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-blue-600 transition-colors">
                    <a 
                      href={edu.institutionUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      <span className="leading-tight">{edu.institution}</span>
                      <i className="ri-external-link-line ml-2 text-base sm:text-lg opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></i>
                    </a>
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">{edu.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <i className="ri-map-pin-line text-base sm:text-lg mr-2 text-blue-600"></i>
                      <span>Institution Accredited</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <i className="ri-star-line text-base sm:text-lg mr-2 text-blue-600"></i>
                      <span>Academic Excellence</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <i className="ri-link text-base sm:text-lg mr-2 text-blue-600"></i>
                      <a 
                        href={edu.institutionUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Visit Institution
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Academic Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">19+</div>
              <div className="text-blue-200 text-sm sm:text-base">Years of Medical Practice</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">71</div>
              <div className="text-blue-200 text-sm sm:text-base">Published Research Papers</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">FACS</div>
              <div className="text-blue-200 text-sm sm:text-base">Fellow of American College of Surgeons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}