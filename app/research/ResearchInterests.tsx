'use client';

export default function ResearchInterests() {
  const interests = [
    {
      title: "Recurrent Pyogenic Cholangitis",
      description: "Comprehensive case study on recurrent pyogenic cholangitis management and treatment outcomes.",
      projects: [
        "Recurrent pyogenic cholangitis",
        "Clin Case Rep. 2023 Jun 15;11(6):e7584"
      ],
      icon: "ri-heart-pulse-line",
      color: "red",
      articleUrl: "https://doi.org/10.1002/ccr3.7584"
    },
    {
      title: "Gallbladder Cancer Prognosis Study",
      description: "Cross-sectional study analyzing resectability and prognosis of gallbladder cancer from Eastern Nepal.",
      projects: [
        "Resectability and prognosis of gallbladder cancer: a cross-sectional study of 100 cases",
        "Ann Med Surg (Lond). 2023 Apr 17;85(5):1755-1760"
      ],
      icon: "ri-hospital-line",
      color: "blue",
      articleUrl: "https://doi.org/10.1016/j.amsu.2023.04.024"
    },
    {
      title: "Chylous Ascites Management",
      description: "Management strategies for chylous ascites following pancreaticobiliary surgery.",
      projects: [
        "Management of chylous ascites following pancreaticobiliary surgery",
        "JGH Open. 2019 Apr 24;3(5):425-428"
      ],
      icon: "ri-first-aid-kit-line",
      color: "green",
      articleUrl: "https://doi.org/10.1002/jgh3.12174"
    },
    {
      title: "Choledochal Cyst Analysis",
      description: "Retrospective study of 30 choledochal cyst cases analyzing clinical presentation and outcomes.",
      projects: [
        "Choledochal Cyst: A Retrospective Study of 30 Cases From Nepal",
        "Cureus. 2020 Nov 10;12(11):e11414"
      ],
      icon: "ri-clipboard-line",
      color: "purple",
      articleUrl: "https://doi.org/10.7759/cureus.11414"
    },
    {
      title: "Abdominal Cocoon Syndrome",
      description: "Rare case study of abdominal cocoon syndrome with military tuberculosis complication.",
      projects: [
        "Abdominal cocoon syndrome with military tuberculosis",
        "Clin J Gastroenterol. 2021 Apr;14(2):577-580"
      ],
      icon: "ri-stethoscope-line",
      color: "orange",
      articleUrl: "https://doi.org/10.1007/s12328-020-01332-4"
    },
    {
      title: "Postcholecystectomy Bile Leak Management",
      description: "Current scenario of bile leak and bile duct injury management at tertiary care referral centre.",
      projects: [
        "Current Scenario of Postcholecystectomy Bile Leak and Bile Duct Injury",
        "Minim Invasive Surg. 2020 Apr 21;2020:4382307"
      ],
      icon: "ri-surgical-mask-line",
      color: "teal",
      articleUrl: "https://doi.org/10.1155/2020/4382307"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", light: "bg-blue-100", text: "text-blue-600" },
      red: { bg: "bg-red-500", light: "bg-red-100", text: "text-red-600" },
      green: { bg: "bg-green-500", light: "bg-green-100", text: "text-green-600" },
      purple: { bg: "bg-purple-500", light: "bg-purple-100", text: "text-purple-600" },
      orange: { bg: "bg-orange-500", light: "bg-orange-100", text: "text-orange-600" },
      teal: { bg: "bg-teal-500", light: "bg-teal-100", text: "text-teal-600" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Principal investigator in clinical and surgical research advancing patient care and academic insight
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const colors = getColorClasses(interest.color);
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => handleCardClick(interest.articleUrl)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(interest.articleUrl);
                  }
                }}
              >
                <div className={`${colors.bg} p-6 text-white relative`}>
                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
                    <i className={`${interest.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{interest.title}</h3>
                  <p className="text-white/90 leading-relaxed">{interest.description}</p>
                  
                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-external-link-line text-white/80 text-lg"></i>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Details:</h4>
                  <ul className="space-y-3">
                    {interest.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`w-6 h-6 flex items-center justify-center ${colors.light} rounded-full mr-3 mt-0.5`}>
                          <i className={`ri-arrow-right-s-line text-sm ${colors.text}`}></i>
                        </div>
                        <span className="text-gray-700">{project}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Subtle click to view hint */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      <i className="ri-file-text-line mr-2"></i>
                      <span>Click to view published article</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Research Focus & Impact</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Committed to advancing hepatobiliary and pancreatic surgery through clinical research, case studies, and evidence-based practice improvements.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <i className="ri-file-text-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Published Research</h4>
                <p className="text-gray-600 text-sm">6 peer-reviewed publications in clinical journals</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <i className="ri-hospital-line text-2xl text-green-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Clinical Expertise</h4>
                <p className="text-gray-600 text-sm">Hepatobiliary & pancreatic surgery specialization</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <i className="ri-microscope-line text-2xl text-purple-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Research Areas</h4>
                <p className="text-gray-600 text-sm">Bile duct pathology & surgical outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}