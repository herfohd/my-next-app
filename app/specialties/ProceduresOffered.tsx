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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Procedures Offered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of surgical procedures using the latest techniques and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {procedures.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 mt-1">
                      <i className="ri-check-line text-sm text-blue-600"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Surgical Excellence in Action</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Watch our state-of-the-art surgical procedures and learn about the advanced techniques used at Birat Medical College. Our commitment to excellence is evident in every operation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
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

            {/* Clickable Facebook Video Thumbnail */}
            <div className="relative h-64 lg:h-auto">
              <a
                href="https://www.facebook.com/watch/?v=374131885647681"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
              >
                <img
                  src="/video-thumbnail.jpg"
                  alt="Watch Surgical Video on Facebook"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <i className="ri-play-fill text-3xl text-blue-600 ml-1"></i>
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