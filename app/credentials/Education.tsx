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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Background</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A distinguished medical education foundation built through prestigious institutions in Nepal and India
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="md:flex">
                <div className={`${edu.color} p-8 md:w-1/3 text-white flex flex-col justify-center`}>
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
                    <i className={`${edu.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-white/90 text-lg">{edu.year}</p>
                  <div className="mt-4 inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
                    {edu.grade}
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <a 
                      href={edu.institutionUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      {edu.institution}
                      <i className="ri-external-link-line ml-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">{edu.description}</p>
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-map-pin-line text-lg mr-2 text-blue-600"></i>
                      <span>Institution Accredited</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-star-line text-lg mr-2 text-blue-600"></i>
                      <span>Academic Excellence</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-link text-lg mr-2 text-blue-600"></i>
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
        
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Academic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">19+</div>
              <div className="text-blue-200">Years of Medical Practice</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">71</div>
              <div className="text-blue-200">Published Research Papers</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">FACS</div>
              <div className="text-blue-200">Fellow of American College of Surgeons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}