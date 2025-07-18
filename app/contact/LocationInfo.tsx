'use client';

export default function LocationInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located at Birat Medical College, our state-of-the-art facility provides comprehensive gastrointestinal surgical care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
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
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hospital Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                    <i className="ri-map-pin-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-700">
                      Birat Medical College & Teaching Hospital<br />
                      Tankisinuwari, Morang<br />
                      Biratnagar, Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
                    <i className="ri-hospital-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Department</h4>
                    <p className="text-gray-700">
                      Gastrointestinal Surgery Department<br />
                      3rd Floor, Surgical Wing<br />
                      Room 301-305
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
                    <i className="ri-car-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Parking</h4>
                    <p className="text-gray-700">
                      Free parking available<br />
                      Visitor parking spaces<br />
                      Accessible parking available
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full">
                    <i className="ri-wheelchair-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Accessibility</h4>
                    <p className="text-gray-700">
                      Wheelchair accessible<br />
                      Elevator access<br />
                      Disabled-friendly facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Directions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Here</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mt-1">
                    <i className="ri-plane-line text-sm text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Air</h4>
                    <p className="text-gray-700 text-sm">Biratnagar Airport - 15 minutes drive</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mt-1">
                    <i className="ri-bus-line text-sm text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Bus</h4>
                    <p className="text-gray-700 text-sm">Regular bus service from Kathmandu and other major cities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full mt-1">
                    <i className="ri-car-line text-sm text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Car</h4>
                    <p className="text-gray-700 text-sm">Located on the main highway, easily accessible</p>
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