'use client';

export default function LocationInfo() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Visit Our Facility</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Located at Birat Medical College, our state-of-the-art facility provides comprehensive gastrointestinal surgical care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-64 sm:h-72 lg:h-80 xl:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113659.47784799958!2d87.2718582!3d26.4522951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75c7e5e4b9a1%3A0x5b3b3b3b3b3b3b3b!2sBirat%20Medical%20College%20%26%20Teaching%20Hospital!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Birat Medical College Location"
              ></iframe>
            </div>
          </div>
          
          {/* Location Details */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Hospital Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                    <i className="ri-map-pin-line text-lg sm:text-xl text-blue-600"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Birat Medical College & Teaching Hospital<br />
                      Tankisinuwari, Morang<br />
                      Biratnagar, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                    <i className="ri-hospital-line text-lg sm:text-xl text-green-600"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Department</h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Gastrointestinal Surgery Department<br />
                      3rd Floor, Surgical Wing<br />
                      Room 301-305
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0">
                    <i className="ri-car-line text-lg sm:text-xl text-purple-600"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Parking</h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Free parking available<br />
                      Visitor parking spaces<br />
                      Accessible parking available
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-100 rounded-full flex-shrink-0">
                    <i className="ri-wheelchair-line text-lg sm:text-xl text-orange-600"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Accessibility</h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Wheelchair accessible<br />
                      Elevator access<br />
                      Disabled-friendly facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Directions */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Getting Here</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-blue-100 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                    <i className="ri-plane-line text-xs sm:text-sm text-blue-600"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">By Air</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Biratnagar Airport - 15 minutes drive</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-green-100 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                    <i className="ri-bus-line text-xs sm:text-sm text-green-600"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">By Bus</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Regular bus service from Kathmandu and other major cities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-purple-100 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                    <i className="ri-car-line text-xs sm:text-sm text-purple-600"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">By Car</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Located on the main highway, easily accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}