'use client';

export default function ProceduresOffered() {
  const procedures = [
    {
      category: "Hepatobiliary Surgery",
      icon: "🫀",
      color: "from-green-600 to-emerald-700",
      description: "Advanced liver and bile duct procedures with expertise in complex reconstructions",
      items: [
        "Major Hepatectomy & Liver Resection",
        "Biliary Reconstruction Surgery",
        "Hepatolithiasis Treatment",
        "Portal Hypertension Surgery",
        "Bile Duct Injury Repair",
        "Liver Tumor Resection"
      ]
    },
    {
      category: "Pancreatic Surgery",
      icon: "🔬",
      color: "from-blue-600 to-blue-700",
      description: "Specialized pancreatic procedures including complex necrosectomy and cancer surgery",
      items: [
        "Pancreaticoduodenectomy (Whipple)",
        "Open Pancreatic Necrosectomy",
        "Pancreatic Cancer Surgery",
        "Chronic Pancreatitis Surgery",
        "Pancreatic Cyst Management",
        "ERAS Protocol Implementation"
      ]
    },
    {
      category: "Gastrointestinal Oncology",
      icon: "🎯",
      color: "from-red-600 to-red-700",
      description: "Comprehensive cancer surgery with multidisciplinary approach",
      items: [
        "Gallbladder Cancer Surgery",
        "Colorectal Cancer Resection",
        "Extended TME for Rectal Cancer",
        "Gastric Cancer Surgery",
        "GIST Tumor Removal",
        "Neoadjuvant Therapy Management"
      ]
    },
    {
      category: "Laparoscopic Surgery",
      icon: "🔧",
      color: "from-purple-600 to-purple-700",
      description: "Minimally invasive techniques for faster recovery and better outcomes",
      items: [
        "Laparoscopic Cholecystectomy",
        "Laparoscopic Hernia Repair",
        "Clipless Laparoscopic Procedures",
        "Laparoscopic Appendectomy",
        "Complex Laparoscopic Surgery",
        "Port Site Complications Management"
      ]
    },
    {
      category: "Emergency GI Surgery",
      icon: "🚨",
      color: "from-orange-600 to-orange-700",
      description: "24/7 urgent surgical care for acute gastrointestinal conditions",
      items: [
        "Acute Pancreatitis Management",
        "Bowel Obstruction Surgery",
        "GI Perforation Repair",
        "Trauma Surgery",
        "Emergency Cholecystectomy",
        "Bleeding Control Procedures"
      ]
    },
    {
      category: "Specialized Procedures",
      icon: "⚕️",
      color: "from-teal-600 to-teal-700",
      description: "Complex and rare procedures requiring specialized expertise",
      items: [
        "Choledochal Cyst Surgery",
        "IBD Surgery (Crohn's Disease)",
        "Stoma Creation & Closure",
        "Esophageal Surgery",
        "Foreign Body Removal",
        "Fistula Repair"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Procedures Offered</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of surgical procedures using the latest techniques and technology
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {procedures.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">{category.category}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 mt-0.5 sm:mt-1 flex-shrink-0">
                      <i className="ri-check-line text-xs sm:text-sm text-blue-600"></i>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text Content */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Surgical Excellence in Action
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Watch our state-of-the-art surgical procedures and learn about the advanced techniques used at Birat Medical College. Our commitment to excellence is evident in every operation.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="ri-play-circle-line text-lg mr-2 text-blue-600"></i>
                  <span>HD Quality</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-lg mr-2 text-blue-600"></i>
                  <span>Educational Content</span>
                </div>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="relative h-48 sm:h-64 lg:h-auto order-1 lg:order-2">
              <a
                href="https://www.facebook.com/watch/?v=374131885647681"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative group"
              >
                <img
                  src="/video-thumbnail.jpg"
                  alt="Watch Surgical Video on Facebook"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-play-fill text-2xl sm:text-3xl text-blue-600 ml-1"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}