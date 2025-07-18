'use client';

export default function ResearchHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Medical%20research%20laboratory%20with%20scientific%20equipment%2C%20microscopes%20and%20research%20papers%2C%20modern%20medical%20research%20facility%20with%20digital%20displays%20showing%20data%20analysis%2C%20professional%20healthcare%20research%20environment&width=1920&height=1080&seq=research-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            Research & Publications
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Contributing to medical advancement through innovative research in gastrointestinal surgery and minimally invasive techniques
          </p>
          <div className="flex justify-center space-x-8 mt-12">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-article-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-purple-200">Publications</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-microscope-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-purple-200">Research Projects</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                <i className="ri-presentation-line text-2xl text-white"></i>
              </div>
              <p className="text-sm text-purple-200">Presentations</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated research elements */}
      <div className="absolute top-20 left-10 w-12 h-12 flex items-center justify-center text-white/20 animate-pulse">
        <i className="ri-flask-line text-2xl"></i>
      </div>
      <div className="absolute bottom-20 right-10 w-12 h-12 flex items-center justify-center text-white/20 animate-pulse" style={{animationDelay: '1s'}}>
        <i className="ri-bar-chart-line text-2xl"></i>
      </div>
    </section>
  );
}