'use client';

export default function Philosophy() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Philosophy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding principles that drive excellence in patient care and surgical outcomes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-6 mx-auto">
              <i className="ri-heart-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Patient-Centered Care</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Every patient deserves personalized attention, compassionate care, and treatment plans tailored to their unique needs and circumstances.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-6 mx-auto">
              <i className="ri-microscope-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Evidence-Based Practice</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              All surgical decisions are grounded in the latest research, proven techniques, and best practices in gastrointestinal surgery.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mb-6 mx-auto">
              <i className="ri-graduation-cap-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continuous Learning</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Medicine evolves constantly, and staying updated with innovations ensures patients receive the most advanced care available.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-6 mx-auto">
              <i className="ri-team-line text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Collaborative Approach</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              The best outcomes are achieved through teamwork, involving multidisciplinary collaboration and clear communication.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-6 mx-auto">
              <i className="ri-shield-check-line text-2xl text-red-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Safety First</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Patient safety is paramount in every procedure, with meticulous attention to detail and comprehensive risk management.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-6 mx-auto">
              <i className="ri-lightbulb-line text-2xl text-teal-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Innovation</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Embracing new technologies and techniques to improve surgical outcomes and enhance patient recovery experiences.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "Surgery is not just about technical skill—it's about understanding each patient's story, respecting their trust, and dedicating ourselves to their healing journey with both expertise and compassion."
          </blockquote>
          <cite className="block mt-6 text-lg font-semibold text-blue-900">— Dr. Narendra Pandit</cite>
        </div>
      </div>
    </section>
  );
}