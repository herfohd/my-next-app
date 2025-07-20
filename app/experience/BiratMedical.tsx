'use client';

export default function BiratMedicalEnhanced() {
  const achievements = [
    {
      title: "Associate Professor - Surgical Gastroenterology",
      description: "Currently serving as Associate Professor of Surgical Gastroenterology at Birat Medical College Teaching Hospital since April 2021",
      icon: "ri-team-line",
      stats: "Current Position",
      link: "https://bmcteachinghospital.com/departments/"
    },
    {
      title: "Advanced Surgical Training",
      description: "MCh in Surgical Gastroenterology from PGIMER, Chandigarh, India (2012-2015) with scholarship award as foreign nation",
      icon: "ri-surgical-mask-line",
      stats: "MCh Surgical Gastroenterology",
      link: "https://www.researchgate.net/profile/Narendra-Pandit"
    },
    {
      title: "Research Excellence",
      description: "Principal investigator of multiple research projects including ERAS protocol studies and pancreatic surgery outcomes",
      icon: "ri-research-line",
      stats: "70+ Publications",
      link: "https://www.researchgate.net/profile/Narendra-Pandit"
    },
    {
      title: "Academic Recognition",
      description: "Prof. Damber B. Karki Gold Medal for Medicine and multiple scholarship awards throughout medical career",
      icon: "ri-graduation-cap-line",
      stats: "Multiple Awards",
      link: "https://www.hamrodoctor.com/doctor/dr-narendra-pandit"
    }
  ];

  const facilities = [
    {
      name: "Surgical Gastroenterology Department",
      description: "Specialized department offering advanced gastrointestinal surgical procedures and minimally invasive techniques",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop&crop=center",
      link: "https://bmcteachinghospital.com/departments/"
    },
    {
      name: "Teaching Hospital Facilities",
      description: "State-of-the-art teaching hospital providing comprehensive medical education and clinical training",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
      link: "https://bmcteachinghospital.com/"
    },
    {
      name: "Research Facilities",
      description: "Active research programs in surgical gastroenterology, pancreatic surgery, and enhanced recovery protocols",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center",
      link: "https://biratmedicalcollege.edu.np/"
    }
  ];

  const timeline = [
    { year: "1998", title: "SLC", description: "Monastic HSEB School, Janakpurdham, Nepal" },
    { year: "1998–2000", title: "+2 (HSEB)", description: "National School of Sciences (NSS), Lainchour, Kathmandu" },
    { year: "Dec 2000 – Jul 2005", title: "M.B.B.S", description: "B.P. Koirala Institute of Health Sciences (BPKIHS), Dharan" },
    { year: "Sep 2005 – Aug 2006", title: "Internship", description: "Kathmandu Medical College Teaching Hospital (KMCTH), Kathmandu" },
    { year: "Sep 2006 – Apr 2007", title: "Medical Officer (MO)", description: "KMCTH, Kathmandu" },
    { year: "Jul 2007 – Jun 2010", title: "MS in General Surgery", description: "PGIMER, Chandigarh, India" },
    { year: "Jul 2010 – Jun 2012", title: "Residency in General Surgery", description: "PGIMER, Chandigarh, India" },
    { year: "Jul 2012 – Jun 2015", title: "MCh in Surgical Gastroenterology", description: "PGIMER, Chandigarh, India" },
    { year: "Dec 2015 – Apr 2021", title: "Associate Professor", description: "B P Koirala Institute of Health Sciences (BPKIHS), Dharan" },
    { year: "Apr 2021 – Present", title: "Associate Professor, Surgical Gastroenterology", description: "Birat Medical College Teaching Hospital, Biratnagar" }
  ];

  const publications = [
    "Recurrent pyogenic cholangitis - Clinical Case Reports (2023)",
    "Extended Total Mesorectal Excision (e-TME) for Locally Advanced Rectal Cancer (2022)",
    "Open Pancreatic Necrosectomy: Safe and Effective Treatment - Indian Journal of Surgery (2021)",
    "Resectability and prognosis of gallbladder cancer - Annals of Medicine and Surgery (2023)",
    "Management of chylous ascites following pancreaticobiliary surgery - JGH Open (2019)"
  ];

  const memberships = [
    "Nepal Medical Association (NMA)",
    "Society of Surgeons of Nepal (SSN)",
    "Nepalese Association of Surgical Gastroenterology (NASG)",
    "Fellow of American College of Surgeons (FACS)"
  ];

  const contactInfo = {
    hospital: {
      name: "Birat Medical College Teaching Hospital",
      address: "Tankisinwari, Biratnagar, Morang, Nepal",
      phone: "+977-21-422601",
      email: "info@bmcteachinghospital.com",
      website: "https://bmcteachinghospital.com/"
    },
    doctor: {
      email: "narendrapandit111@gmail.com",
      phone: "+977-9807683033",
      nmc: "6121"
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with Better Cover Photo */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
          </div>
          
          <div className="relative text-center py-10 sm:py-16 lg:py-20 px-4 sm:px-8 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">Dr. Narendra Pandit</h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-blue-200">
              Associate Professor of Surgical Gastroenterology
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block max-w-full">
              <p className="text-sm sm:text-base lg:text-lg mb-2">MBBS, MS, MCh (Surgical Gastroenterology)</p>
              <p className="text-blue-200 mb-2 text-sm sm:text-base">Nepal Medical Council Registration: {contactInfo.doctor.nmc}</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <a 
                  href={`mailto:${contactInfo.doctor.email}`}
                  className="hover:text-blue-300 transition-colors underline break-all"
                >
                  {contactInfo.doctor.email}
                </a>
                <span className="hidden sm:inline">|</span>
                <a 
                  href={`tel:${contactInfo.doctor.phone}`}
                  className="hover:text-blue-300 transition-colors underline"
                >
                  {contactInfo.doctor.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Achievements with Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {achievements.map((achievement, index) => (
            <a 
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors shrink-0">
                  <i className={`${achievement.icon} text-lg sm:text-xl lg:text-2xl text-blue-600`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors break-words">
                    {achievement.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">{achievement.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium group-hover:bg-blue-200 transition-colors">
                    {achievement.stats}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Enhanced Facilities Section with Better Images and Links */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12 lg:mb-16">
          <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 p-4 sm:p-6 lg:p-8 text-white text-center">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop&crop=center')"
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                <a 
                  href={contactInfo.hospital.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors break-words"
                >
                  Birat Medical College Teaching Hospital
                </a>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-blue-200 mb-3 sm:mb-4">
                Advanced medical education and surgical gastroenterology services
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <span className="break-words">{contactInfo.hospital.address}</span>
                <span className="hidden sm:inline">|</span>
                <a 
                  href={`tel:${contactInfo.hospital.phone}`}
                  className="hover:text-blue-300 transition-colors underline"
                >
                  {contactInfo.hospital.phone}
                </a>
                <span className="hidden sm:inline">|</span>
                <a 
                  href={`mailto:${contactInfo.hospital.email}`}
                  className="hover:text-blue-300 transition-colors underline break-all"
                >
                  {contactInfo.hospital.email}
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
            {facilities.map((facility, index) => (
              <a 
                key={index}
                href={facility.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg mb-4 h-40 sm:h-44 lg:h-48">
                  <img 
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <h4 className="text-base sm:text-lg font-bold group-hover:text-blue-200 transition-colors break-words">
                      {facility.name}
                    </h4>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                  {facility.description}
                </p>
              </a>
            ))}
          </div>
        </div>
        
        {/* Educational & Professional Timeline */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 lg:mb-12 px-4">Educational & Professional Journey</h3>
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {timeline.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} px-4 md:px-0`}>
                    <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">{milestone.year}</div>
                      <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 break-words">{milestone.title}</div>
                      <p className="text-sm sm:text-base text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Research & Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <i className="ri-file-text-line text-blue-600 mr-2 sm:mr-3"></i>
              Recent Publications
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{pub}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 text-center">
              <a 
                href="https://www.researchgate.net/profile/Narendra-Pandit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                View All Publications
                <i className="ri-external-link-line ml-1 sm:ml-2"></i>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <i className="ri-group-line text-blue-600 mr-2 sm:mr-3"></i>
              Professional Memberships
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {memberships.map((membership, index) => (
                <div key={index} className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full mr-3 sm:mr-4 shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium break-words">{membership}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-white mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Academic Excellence</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-blue-100">
                <li>• Prof. Damber B. Karki Gold Medal for Medicine (2005)</li>
                <li>• Highest marks in ENT & Pharmacology (2002-2004)</li>
                <li>• MBBS Scholarship Award from Ministry of Education (2000)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">International Recognition</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-blue-100">
                <li>• MS Scholarship Award as Foreign Nation - PGIMER (2007)</li>
                <li>• MCh Scholarship Award as Foreign Nation - PGIMER (2012)</li>
                <li>• Fellow of American College of Surgeons (FACS)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Appointment Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Book an Appointment</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100">
            For consultation and surgical gastroenterology services
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a 
              href={`tel:${contactInfo.doctor.phone}`}
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 rounded-full text-sm sm:text-base font-medium hover:bg-blue-50 transition-colors"
            >
              <i className="ri-phone-line mr-1 sm:mr-2"></i>
              Call Doctor
            </a>
            <a 
              href={`tel:${contactInfo.hospital.phone}`}
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-green-600 rounded-full text-sm sm:text-base font-medium hover:bg-green-50 transition-colors"
            >
              <i className="ri-hospital-line mr-1 sm:mr-2"></i>
              Call Hospital
            </a>
            <a 
              href={contactInfo.hospital.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors"
            >
              <i className="ri-global-line mr-1 sm:mr-2"></i>
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}