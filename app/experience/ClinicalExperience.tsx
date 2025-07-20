'use client';

export default function ClinicalExperience() {
  const surgicalStats = [
    { category: "Laparoscopic Procedures", count: 320, icon: "ri-scissors-cut-line", color: "blue" },
    { category: "Open GI Surgeries", count: 280, icon: "ri-surgical-mask-line", color: "red" },
    { category: "Emergency Procedures", count: 150, icon: "ri-alarm-warning-line", color: "orange" },
    { category: "Oncological Surgeries", count: 95, icon: "ri-heart-pulse-line", color: "purple" }
  ];

  const complexCases = [
    {
      title: "Pancreaticoduodenectomy (Whipple)",
      description: "Complex pancreatic surgery for malignant conditions",
      cases: 18,
      successRate: "89%",
      avgTime: "6.2 hours",
      complications: "22%"
    },
    {
      title: "Hepatic Resections",
      description: "Liver resection for tumors and benign conditions",
      cases: 25,
      successRate: "92%",
      avgTime: "4.5 hours",
      complications: "16%"
    },
    {
      title: "Esophageal Surgeries",
      description: "Including esophagectomy and repair procedures",
      cases: 12,
      successRate: "83%",
      avgTime: "5.8 hours",
      complications: "25%"
    },
    {
      title: "Biliary Reconstructions",
      description: "Complex biliary tract reconstructive procedures",
      cases: 32,
      successRate: "94%",
      avgTime: "3.2 hours",
      complications: "12%"
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500",
      red: "bg-red-500",
      orange: "bg-orange-500",
      purple: "bg-purple-500"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-500";
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Clinical Experience</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Over 15 years of surgical experience in gastroenterology and hepatobiliary procedures
          </p>
        </div>
        
        {/* Surgical Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {surgicalStats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`${getColorClass(stat.color)} w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-full mx-auto mb-3 sm:mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <i className={`${stat.icon} text-xl sm:text-2xl text-white`}></i>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.count}+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight break-words">{stat.category}</div>
            </div>
          ))}
        </div>
        
        {/* Complex Cases */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 lg:mb-12">Specialized Procedures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {complexCases.map((procedure, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">{procedure.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{procedure.description}</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900">{procedure.cases}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Cases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">{procedure.successRate}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-600">{procedure.avgTime}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Avg Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">{procedure.complications}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Complications</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Academic & Research */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">Academic Contributions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">70+</div>
              <div className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Publications</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">Peer-reviewed articles in international journals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-2">15+</div>
              <div className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Years Teaching</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">Associate Professor at leading medical institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-900 mb-2">5+</div>
              <div className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Research Projects</div>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">Principal investigator on clinical studies</div>
            </div>
          </div>
        </div>
        
        {/* Patient Care Philosophy */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 text-white">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Patient Care Philosophy</h3>
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Committed to providing evidence-based surgical care with a focus on patient safety, 
              optimal outcomes, and compassionate treatment throughout the healing journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-heart-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Patient-Centered Care</h4>
              <p className="text-sm sm:text-base text-blue-200 leading-relaxed">Individualized treatment plans tailored to each patient's needs</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-shield-check-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Evidence-Based Practice</h4>
              <p className="text-sm sm:text-base text-blue-200 leading-relaxed">Incorporating latest research and best practices in surgical care</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-graduation-cap-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Continuous Learning</h4>
              <p className="text-sm sm:text-base text-blue-200 leading-relaxed">Staying current with advances in surgical techniques and technology</p>
            </div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-base sm:text-lg lg:text-xl italic text-blue-100 mb-3 sm:mb-4 leading-relaxed px-2 sm:px-4">
              "Surgery is not just about technical skill, but about understanding each patient's unique journey toward healing."
            </blockquote>
            <cite className="text-base sm:text-lg font-semibold">— Dr. Narendra Pandit</cite>
          </div>
        </div>
      </div>
    </section>
  );
}