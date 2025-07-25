'use client';

export default function TechnologyApproach() {
  const technologies = [
    {
      name: "Laparoscopic Cholecystectomy",
      description: "Minimally invasive gallbladder removal with advanced laparoscopic techniques for faster recovery",
      icon: "🔬",
      benefits: ["Clipless technique", "Smaller incisions", "Same-day discharge"]
    },
    {
      name: "Pancreatic Necrosectomy",
      description: "Open pancreatic necrosectomy using step-up approach for treating pancreatic necrosis safely",
      icon: "🩺",
      benefits: ["Step-up approach", "Proven safety", "Lower mortality"]
    },
    {
      name: "Enhanced Recovery After Surgery (ERAS)",
      description: "Evidence-based ERAS protocols specifically developed for pancreatic and hepatobiliary surgery",
      icon: "⚕️",
      benefits: ["Reduced complications", "Shorter hospital stay", "Better outcomes"]
    },
    {
      name: "Hepatobiliary Surgery",
      description: "Major hepatectomies and complex bile duct reconstructions with specialized techniques",
      icon: "👥",
      benefits: ["Liver resection", "Bile duct repair", "Portal reconstruction"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Advanced Technology & Approach
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Utilizing cutting-edge medical technology to deliver superior surgical outcomes
          </p>
        </div>
        
        {/* Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {technologies.map((tech, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4 sm:mb-6 h-48 sm:h-56 lg:h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: index === 0 ? `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')` :
                                   index === 1 ? `url('https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')` :
                                   index === 2 ? `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')` :
                                   `url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {tech.name}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Patient-Centered Care Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Patient-Centered Surgical Care
          </h3>
          <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Our approach combines advanced technology with personalized care, ensuring each patient receives the most appropriate treatment for their specific condition. We prioritize safety, effectiveness, and rapid recovery.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-shield-check-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Safety First
              </h4>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Comprehensive safety protocols and risk management
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-timer-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Faster Recovery
              </h4>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Minimally invasive techniques for quicker healing
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-award-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                Excellence
              </h4>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Commitment to the highest surgical standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}