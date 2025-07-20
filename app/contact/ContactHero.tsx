'use client';

export default function ContactHero() {
  const handleCallNow = () => {
    window.open('tel:+977-9807683033', '_self');
  };

  const handleVisitUs = () => {
    window.open('https://www.biratmedicalcollege.edu.np/', '_blank');
  };

  const handleBookAppointment = () => {
    window.open('mailto:narendrapandit111@gmail.com?subject=Appointment Request&body=Dear Dr. Pandit,%0D%0A%0D%0AI would like to schedule an appointment for consultation.%0D%0A%0D%0APlease let me know your available time slots.%0D%0A%0D%0AThank you.', '_self');
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20hospital%20reception%20and%20consultation%20area%2C%20professional%20medical%20facility%20entrance%20with%20comfortable%20seating%2C%20clean%20white%20medical%20environment%20with%20blue%20accent%20lighting&width=1920&height=1080&seq=contact-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
            Contact Dr. Pandit
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Schedule a consultation or get in touch for expert gastrointestinal surgical care at Birat Medical College
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 md:space-x-8 space-y-6 sm:space-y-0 mt-8 sm:mt-10 md:mt-12">
            <div 
              className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
              onClick={handleCallNow}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 group-hover:shadow-lg transition-all">
                <i className="ri-phone-line text-xl sm:text-2xl text-white"></i>
              </div>
              <p className="text-sm text-blue-200 group-hover:text-white transition-colors">Call Now</p>
              <p className="text-xs text-blue-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">+977-9807683033</p>
            </div>
            <div 
              className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
              onClick={handleBookAppointment}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 group-hover:shadow-lg transition-all">
                <i className="ri-calendar-line text-xl sm:text-2xl text-white"></i>
              </div>
              <p className="text-sm text-blue-200 group-hover:text-white transition-colors">Book Appointment</p>
              <p className="text-xs text-blue-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Email Dr. Pandit</p>
            </div>
            <div 
              className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
              onClick={handleVisitUs}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 group-hover:shadow-lg transition-all">
                <i className="ri-map-pin-line text-xl sm:text-2xl text-white"></i>
              </div>
              <p className="text-sm text-blue-200 group-hover:text-white transition-colors">Visit Us</p>
              <p className="text-xs text-blue-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Birat Medical College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}