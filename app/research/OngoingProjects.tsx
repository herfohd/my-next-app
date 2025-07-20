'use client';

export default function OngoingProjects() {
  const projects = [
    {
      title: "Long-term Outcomes of Pancreaticobiliary Surgery",
      status: "Data Collection",
      duration: "2024-2026",
      description: "Prospective study tracking long-term surgical outcomes and quality of life measures in patients undergoing pancreaticobiliary procedures.",
      objectives: [
        "Monitor post-operative complications",
        "Assess quality of life measures",
        "Analyze survival outcomes",
        "Identify predictive factors"
      ],
      focus: "Clinical Outcomes Research"
    },
    {
      title: "Bile Duct Injury Prevention and Management",
      status: "Protocol Development",
      duration: "2024-2025",
      description: "Developing standardized protocols for prevention and management of bile duct injuries during laparoscopic cholecystectomy.",
      objectives: [
        "Establish prevention guidelines",
        "Create management protocols",
        "Train surgical teams",
        "Implement safety measures"
      ],
      focus: "Patient Safety"
    },
    {
      title: "Choledochal Cyst Management in Adult Patients",
      status: "Literature Review",
      duration: "2024-2025",
      description: "Comprehensive review of management strategies for choledochal cysts in adult patients, building on previous case series experience.",
      objectives: [
        "Review current literature",
        "Analyze treatment approaches",
        "Compare surgical outcomes",
        "Develop treatment guidelines"
      ],
      focus: "Clinical Review"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Data Collection":
        return "bg-blue-100 text-blue-800";
      case "Protocol Development":
        return "bg-yellow-100 text-yellow-800";
      case "Literature Review":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Current Research Activities</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Ongoing clinical research in hepatobiliary and pancreatic surgery
          </p>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-2 leading-tight">{project.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium w-fit ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">{project.duration}</span>
                    <span className="text-purple-600 font-semibold text-sm sm:text-base">Focus: {project.focus}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
              
              <div className="grid grid-cols-1 gap-4 sm:gap-8">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Research Objectives:</h4>
                  <ul className="space-y-2 sm:space-y-2">
                    {project.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-green-100 rounded-full mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                          <i className="ri-check-line text-xs sm:text-sm text-green-600"></i>
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Research Philosophy</h3>
          <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Committed to evidence-based practice and continuous improvement in surgical care through methodical clinical research and case study analysis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-microscope-line text-xl sm:text-2xl text-white"></i>
              </div>
              <div className="text-base sm:text-lg font-semibold mb-2">Evidence-Based</div>
              <div className="text-blue-200 text-xs sm:text-sm px-2">Clinical research driven by patient outcomes</div>
            </div>
            <div className="group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-team-line text-xl sm:text-2xl text-white"></i>
              </div>
              <div className="text-base sm:text-lg font-semibold mb-2">Collaborative</div>
              <div className="text-blue-200 text-xs sm:text-sm px-2">Working with medical institutions and peers</div>
            </div>
            <div className="group cursor-pointer sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-heart-line text-xl sm:text-2xl text-white"></i>
              </div>
              <div className="text-base sm:text-lg font-semibold mb-2">Patient-Centered</div>
              <div className="text-blue-200 text-xs sm:text-sm px-2">Focused on improving patient care quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}