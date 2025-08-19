const TestimonialsSection = () => {
  return (
    <section className="proactis-section bg-proactis-gray-50" id="about">
      <div className="proactis-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="proactis-badge mb-8">🎯 Our Mission</div>
          
          <h2 className="text-heading-xl font-bold text-proactis-dark mb-12 text-balance">
            We help law firms work smarter and faster.
          </h2>
          
          <div className="text-xl text-proactis-gray-700 leading-relaxed space-y-6">
            <p>
              We enable firms to stay proactive and time-efficient by selecting and integrating the right tools and processes. From online discovery to client onboarding and delivering expertise, we optimize workload and workflow.
            </p>
            
            <p className="text-2xl font-medium text-proactis-primary">
              We act as the bridge between evolving client expectations and the possibilities of the AI and LLM era.
            </p>
          </div>
          
          {/* Visual enhancement */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-proactis-gray-200">
              <div className="w-12 h-12 bg-proactis-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-proactis-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-proactis-dark mb-2">Smart Integration</h3>
              <p className="text-sm text-proactis-gray-600">Selecting the right tools and processes for your firm</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-proactis-gray-200">
              <div className="w-12 h-12 bg-proactis-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-proactis-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-proactis-dark mb-2">Workflow Optimization</h3>
              <p className="text-sm text-proactis-gray-600">From discovery to delivery, streamlined for efficiency</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-proactis-gray-200">
              <div className="w-12 h-12 bg-proactis-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-proactis-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-proactis-dark mb-2">Future Bridge</h3>
              <p className="text-sm text-proactis-gray-600">Connecting client expectations with AI possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
