'use client';

export default function Awards() {
  const awards = [
    {
      title: "MBBS Scholarship Award",
      organization: "Ministry of Education (MOE), Nepal",
      year: "2000",
      description: "Prestigious scholarship awarded for academic excellence to pursue medical education",
      icon: "ri-graduation-cap-line",
      category: "Scholarship"
    },
    {
      title: "Prof. Damber B. Karki Gold Medal for Medicine",
      organization: "Kathmandu Medical College, Kathmandu University",
      year: "2005",
      description: "Gold medal for securing the highest marks in Medicine in the Final MBBS Examination",
      icon: "ri-medal-line",
      category: "Academic Excellence"
    },
    {
      title: "ENT Excellence Award",
      organization: "Kathmandu Medical College, Kathmandu University",
      year: "2004",
      description: "Award certificate for securing the highest marks in ENT during MBBS course",
      icon: "ri-award-line",
      category: "Academic Excellence"
    },
    {
      title: "Pharmacology Excellence Award",
      organization: "Kathmandu Medical College, Kathmandu University",
      year: "2002",
      description: "Award certificate for securing the highest marks in Pharmacology during MBBS course",
      icon: "ri-capsule-line",
      category: "Academic Excellence"
    },
    {
      title: "MS (General Surgery) Scholarship Award",
      organization: "PGIMER, Chandigarh, India",
      year: "2007",
      description: "Foreign Nation scholarship for Master in Surgery specialization program",
      icon: "ri-scissors-cut-line",
      category: "International Scholarship"
    },
    {
      title: "MCh (Surgical Gastroenterology) Scholarship Award",
      organization: "PGIMER, Chandigarh, India",
      year: "2012",
      description: "Foreign Nation scholarship for super-specialization in Surgical Gastroenterology",
      icon: "ri-heart-pulse-line",
      category: "International Scholarship"
    },
    {
      title: "Teaching Programme Co-ordinator & External Examiner",
      organization: "B P Koirala Institute of Health Sciences (BPKIHS), Dharan, Nepal",
      year: "2016",
      description: "External (NAMS 2021) and Internal examiner of MCh (Surgical Gastroenterology) programme",
      icon: "ri-book-open-line",
      category: "Academic Leadership"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Scholarship": return "bg-green-100 text-green-800";
      case "Academic Excellence": return "bg-yellow-100 text-yellow-800";
      case "International Scholarship": return "bg-blue-100 text-blue-800";
      case "Academic Leadership": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Awards & Achievements
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Recognition for academic excellence, scholarly achievements, and contributions to medical education
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white flex-shrink-0">
                  <i className={`${award.icon} text-lg sm:text-xl`}></i>
                </div>
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-2 ${getCategoryColor(award.category)}`}>
                  {award.category}
                </span>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                {award.title}
              </h3>
              <p className="text-blue-600 font-semibold mb-2 text-xs sm:text-sm leading-tight">
                {award.organization}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 flex items-center">
                <i className="ri-calendar-line mr-1"></i>
                {award.year}
              </p>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
            <i className="ri-trophy-line text-lg sm:text-xl mr-2"></i>
            <span className="font-semibold text-sm sm:text-base">
              Lifetime Member of Multiple Professional Organizations
            </span>
          </div>
          <p className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
            Nepal Medical Association (NMA) • Society of Surgeons of Nepal (SSN) • 
            Nepalese Association of Surgical Gastroenterology (NASG) • Fellow of American College of Surgeons (FACS)
          </p>
        </div>
      </div>
    </section>
  );
}