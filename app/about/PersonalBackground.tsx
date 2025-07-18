'use client';

export default function PersonalBackground() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/profile.jpg"
              alt="Dr. Narendra Pandit"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover object-top transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200/50 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200/50 rounded-full blur-2xl"></div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Personal Background</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
              Dr. Narendra Pandit is a Senior Consultant, Gastrointestinal (GI), Hepato-Biliary-Pancreatic Surgery (HPB) and GI Oncology at the Department of GI Surgery in Birat Medical College Teaching Hospital (BMCTH) in Biratnagar, Nepal. He is one of the best GI surgeon in Biratnagar
                </p>
              <p className="text-lg">
              His expertise lies in all types of Gastrointestinal, liver, pancreas and biliary surgeries; which includes basic and complex laparoscopic surgeries. He has spent almost 10 years in Nepal ( post-MCh; superspecialization) working in some of the most renowned centers like BPKIHS, Dharan. Dr. Pandit completed his MBBS from Kathmandu Medical college (KMCTH), General Surgery training from prestigious Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh. Post completion of his MS, he pursued his MCh in Gastrointestinal and HPB Surgery from PGIMER, chandigarh. 
              </p>
              <p className="text-lg">
                Dr. Pandit is also dedicated to medical research to advance treatment options and patient education. He is a frequent speaker at many national meetings. Dr. Pandit has to his credit countless medical papers and publications in the field of Liver, Pancreas, Biliary diseases, and Gastrointestinal surgery Management.
              </p>
              <p className="text-lg">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}