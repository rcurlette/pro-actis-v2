const AIShowcaseSection = () => {
  return (
    <section className="proactis-section bg-proactis-dark text-white overflow-hidden">
      <div className="proactis-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-proactis-primary/20 rounded-full px-4 py-2 mb-6">
            <svg
              className="w-5 h-5 text-proactis-secondary mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-sm font-medium text-proactis-secondary">
              Resources & Community
            </span>
          </div>

          <h2 className="text-heading-xl font-bold mb-6 text-balance">
            Stay Connected & Keep Learning
          </h2>

          <p className="text-xl text-proactis-gray-300 mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
            Access our latest content, connect with our community, and stay updated with the latest AI insights for legal professionals.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* YouTube Channel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">YouTube Channel</h3>
                <p className="text-proactis-gray-300 text-sm">A.I For Lawyers</p>
              </div>
            </div>
            
            <p className="text-proactis-gray-300 mb-6">
              Watch our latest videos on AI implementation strategies, tool reviews, and practical tutorials for legal professionals.
            </p>
            
            <a
              href="https://www.youtube.com/channel/UCb_rhuvfbMcgFp5TvqGc6Rg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all group-hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Videos
            </a>
          </div>

          {/* LinkedIn Company Page */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">LinkedIn Updates</h3>
                <p className="text-proactis-gray-300 text-sm">Pro-Actis Company Page</p>
              </div>
            </div>
            
            <p className="text-proactis-gray-300 mb-6">
              Follow our company page for the latest industry insights, AI news, and updates from the Pro-Actis team.
            </p>
            
            <a
              href="https://www.linkedin.com/company/pro-actis-com/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all group-hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow Us
            </a>
          </div>

          {/* Newsletter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-proactis-secondary rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Newsletter</h3>
                <p className="text-proactis-gray-300 text-sm">LinkedIn Pulse</p>
              </div>
            </div>
            
            <p className="text-proactis-gray-300 mb-6">
              Subscribe to Sara's newsletter for exclusive insights on AI strategy, industry trends, and business growth tips.
            </p>
            
            <a
              href="https://www.linkedin.com/pulse/ever-missed-signing-big-deal-sara-follador-en-fr-kxvlf/?trackingId=D%2FlxbSmAaAuoNpkLpSCchA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-proactis-secondary hover:bg-proactis-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all group-hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              </svg>
              Subscribe
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-proactis-gray-300 text-lg mb-8">
            Ready to transform your practice with AI?
          </p>
          <button 
            onClick={() =>
              window.open(
                "https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy?month=2025-07",
                "_blank",
              )
            }
            className="bg-proactis-secondary hover:bg-proactis-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all group"
          >
            Schedule Your AI Consultation
            <svg
              className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-proactis-secondary/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AIShowcaseSection;
