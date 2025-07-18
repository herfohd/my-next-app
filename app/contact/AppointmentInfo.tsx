'use client';

export default function AppointmentInfo() {
  const appointmentTypes = [
    {
      type: "General Consultation",
      duration: "30-45 minutes",
      cost: "NPR 2,000",
      description: "Initial consultation for diagnosis and treatment planning",
      includes: ["Medical history review", "Physical examination", "Diagnostic recommendations", "Treatment plan discussion"],
      icon: "ri-user-heart-line"
    },
    {
      type: "Surgical Consultation",
      duration: "45-60 minutes",
      cost: "NPR 3,000",
      description: "Comprehensive evaluation for surgical procedures",
      includes: ["Detailed surgical assessment", "Risk evaluation", "Procedure explanation", "Pre-operative planning"],
      icon: "ri-surgical-mask-line"
    },
    {
      type: "Follow-up Visit",
      duration: "15-30 minutes",
      cost: "NPR 1,500",
      description: "Post-treatment or post-operative follow-up",
      includes: ["Progress evaluation", "Medication review", "Recovery assessment", "Next steps planning"],
      icon: "ri-calendar-check-line"
    },
    {
      type: "Emergency Consultation",
      duration: "Immediate",
      cost: "Variable",
      description: "Urgent medical care for acute conditions",
      includes: ["Immediate assessment", "Emergency treatment", "Stabilization", "Further care planning"],
      icon: "ri-alarm-warning-line"
    }
  ];

  const insurancePartners = [
    "National Health Insurance",
    "Prabhu Insurance",
    "Oriental Insurance",
    "Shikhar Insurance",
    "Sagarmatha Insurance",
    "IME General Insurance"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Appointment Information</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our consultation types, scheduling process, and what to expect during your visit
          </p>
        </div>
        
        {/* Appointment Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {appointmentTypes.map((appointment, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                  <i className={`${appointment.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{appointment.type}</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {appointment.duration}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {appointment.cost}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{appointment.description}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Includes:</h4>
                <ul className="space-y-2">
                  {appointment.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full mr-3 flex items-center justify-center">
                        <i className="ri-check-line text-xs text-green-600"></i>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Appointment Process */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Appointment Process</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", description: "Call, email, or use our online form", icon: "ri-phone-line" },
              { step: "2", title: "Schedule", description: "We'll find a convenient time for you", icon: "ri-calendar-line" },
              { step: "3", title: "Prepare", description: "Gather medical records and documents", icon: "ri-file-list-line" },
              { step: "4", title: "Visit", description: "Arrive for your consultation", icon: "ri-hospital-line" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto group-hover:bg-blue-200 transition-colors">
                    <i className={`${item.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Insurance and Payment */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Insurance Partners</h3>
            <p className="text-gray-700 mb-6">We accept most major insurance plans. Please verify coverage before your appointment.</p>
            
            <div className="grid grid-cols-2 gap-4">
              {insurancePartners.map((partner, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full">
                    <i className="ri-check-line text-sm text-green-600"></i>
                  </div>
                  <span className="text-sm text-gray-700">{partner}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Options</h3>
            <p className="text-gray-700 mb-6">We offer flexible payment options for your convenience.</p>
            
            <div className="space-y-4">
              {[
                { method: "Cash Payment", description: "Pay directly at the time of service", icon: "ri-money-dollar-circle-line" },
                { method: "Credit/Debit Cards", description: "Visa, MasterCard, and local cards accepted", icon: "ri-bank-card-line" },
                { method: "Bank Transfer", description: "Direct bank transfer available", icon: "ri-bank-line" },
                { method: "Insurance Direct Billing", description: "We bill your insurance directly", icon: "ri-shield-check-line" }
              ].map((payment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                    <i className={`${payment.icon} text-blue-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{payment.method}</h4>
                    <p className="text-sm text-gray-600">{payment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Emergency Contact</h3>
          <p className="text-xl text-red-200 mb-8">
            For urgent medical situations requiring immediate surgical attention
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Emergency Hotline</h4>
              <a 
                href="tel:021-423182" 
                className="text-red-200 hover:text-white transition-colors duration-300 text-lg font-medium underline decoration-red-200 hover:decoration-white"
              >
                021-423182
              </a>
              <p className="text-red-200 text-sm mt-1">Available 24/7</p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <i className="ri-hospital-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Emergency Department</h4>
              <p className="text-red-200">Birat Medical College ER</p>
              <p className="text-red-200 text-sm">Ground Floor, Main Building</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}