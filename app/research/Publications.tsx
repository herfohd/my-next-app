'use client';

export default function Publications() {
  const publications = [
    {
      title: "Recurrent pyogenic cholangitis",
      journal: "Clin Case Rep.",
      year: "2023",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "Clinical case of recurrent biliary infection highlighting management strategies.",
      citations: 10,
      doi: "https://doi.org/10.1002/ccr3.7584"
    },
    {
      title: "Abdominal cocoon syndrome with military tuberculosis",
      journal: "Clin J Gastroenterol.",
      year: "2021",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "A rare presentation of abdominal cocoon with concurrent TB infection.",
      citations: 6,
      doi: "https://doi.org/10.1007/s12328-020-01227-6"
    },
    {
      title: "Management of chylous ascites following pancreaticobiliary surgery",
      journal: "JGH Open",
      year: "2019",
      type: "Clinical Study",
      impact: "High Impact",
      abstract: "A multi-center analysis on managing post-surgical chylous ascites.",
      citations: 15,
      doi: "https://doi.org/10.1002/jgh3.12166"
    },
    {
      title: "Extended Total Mesorectal Excision (e-TME) for Locally Advanced Rectal Cancer",
      journal: "J Gastrointest Cancer",
      year: "2022",
      type: "Research Article",
      impact: "High Impact",
      abstract: "Advanced rectal cancer management with e-TME shows promising outcomes.",
      citations: 18,
      doi: "https://doi.org/10.1007/s12029-021-00713-0"
    },
    {
      title: "Spontaneous fistulization of walled-off pancreatic necrosis into the colon",
      journal: "Clin Case Rep.",
      year: "2020",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "An unusual case of pancreatic necrosis spontaneously fistulizing into colon.",
      citations: 7,
      doi: "https://doi.org/10.1002/ccr3.3084"
    },
    {
      title: "Post-pancreatic necrosectomy biliary fistula: thinking beyond the box",
      journal: "J Surg Case Rep.",
      year: "2021",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "A rare biliary complication post necrosectomy requiring unconventional thinking.",
      citations: 5,
      doi: "https://doi.org/10.1093/jscr/rjab189"
    },
    {
      title: "Open Pancreatic Necrosectomy Is Still Safe and Effective Treatment for Pancreatic Necrosis Managed by Step-Up Approach",
      journal: "Indian Journal of Surgery",
      year: "2021",
      type: "Research Article",
      impact: "High Impact",
      abstract: "Retrospective support for open necrosectomy under step-up protocol.",
      citations: 19,
      doi: "https://doi.org/10.1007/s12262-021-03066-3"
    },
    {
      title: "Combined portal vein, hepatic artery and bile duct injury during open cholecystectomy",
      journal: "ANZ J Surg",
      year: "2021",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "Complex iatrogenic vascular and biliary injury described and managed.",
      citations: 8,
      doi: "https://doi.org/10.1111/ans.16750"
    },
    {
      title: "Single-stage hepaticojejunostomy for symptomatic portal biliopathy in a splenectomized patient",
      journal: "Clin Case Rep.",
      year: "2020",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "A rare symptomatic portal biliopathy managed surgically in one stage.",
      citations: 4,
      doi: "https://doi.org/10.1002/ccr3.3084"
    },
    {
      title: "Combined Bile Duct and Pancreatic Duct Injuries during Distal Gastrectomy",
      journal: "Case Rep Surg.",
      year: "2020",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "Rare simultaneous bile and pancreatic duct trauma during distal gastrectomy.",
      citations: 3,
      doi: "https://doi.org/10.1155/2020/8821601"
    },
    {
      title: "Choledochal Cyst: A Retrospective Study of 30 Cases From Nepal",
      journal: "Cureus",
      year: "2020",
      type: "Research Article",
      impact: "High Impact",
      abstract: "Analysis of 30 choledochal cyst cases managed at a tertiary center in Nepal.",
      citations: 12,
      doi: "https://doi.org/10.7759/cureus.11414"
    },
    {
      title: "Jejunal Intussusception in Adolescent Crohn's Disease: An Extremely Rare Complication",
      journal: "Case Rep Surg.",
      year: "2020",
      type: "Case Report",
      impact: "Medium Impact",
      abstract: "A rare complication of Crohn's disease causing jejunal intussusception in a teenager.",
      citations: 6,
      doi: "https://doi.org/10.1155/2020/8880100"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High Impact': return 'bg-red-100 text-red-800';
      case 'Medium Impact': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownloadPDF = (doi: string, title: string) => {
    // Open the DOI link in a new tab
    window.open(doi, '_blank');
  };

  const handleShare = (title: string, doi: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this research paper: ${title}`,
        url: doi
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${title} - ${doi}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Published Research</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Peer-reviewed publications contributing to the advancement of gastrointestinal surgery
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">{pub.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-3">
                    <p className="text-blue-600 font-semibold text-sm sm:text-base">{pub.journal}</p>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="text-gray-600 text-sm sm:text-base">{pub.year}</span>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit ${getImpactColor(pub.impact)}`}>
                      {pub.impact}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end lg:justify-center space-x-4 mt-2 lg:mt-0 lg:ml-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-900">{pub.citations}</div>
                    <div className="text-xs text-gray-500">Citations</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{pub.abstract}</p>

              <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 w-fit">
                    {pub.type}
                  </span>
                  <div className="text-xs sm:text-sm text-gray-500 break-all">
                    DOI: <a 
                      href={pub.doi} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {pub.doi}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadPDF(pub.doi, pub.title);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <i className="ri-file-download-line mr-2"></i>
                    Download PDF
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(pub.title, pub.doi);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <i className="ri-share-line mr-2"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Research Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors">70+</div>
              <div className="text-purple-200 text-sm sm:text-base">Publications</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors">1,200+</div>
              <div className="text-purple-200 text-sm sm:text-base">Total Citations</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors">15</div>
              <div className="text-purple-200 text-sm sm:text-base">H-Index</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors">8</div>
              <div className="text-purple-200 text-sm sm:text-base">Research Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}