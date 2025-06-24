const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Free Discovery Meeting",
      description:
        "We start with a complimentary consultation to understand your firm's specific needs, challenges, and growth objectives.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      ),
      deliverable: "Personalized assessment report",
    },
    {
      step: "02",
      title: "Custom Organization Workshops",
      description:
        "On-demand, in-person workshops tailored to your organization, delivered across Europe to maximize team engagement and learning.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      ),
      deliverable: "Workshop series completion certificate",
    },
    {
      step: "03",
      title: "AI Tools Pre-Selection",
      description:
        "Our experts carefully evaluate and pre-select the most suitable AI tools and solutions based on your specific requirements and budget.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      ),
      deliverable: "Curated tools recommendation report",
    },
    {
      step: "04",
      title: "Implementation Roadmap",
      description:
        "Comprehensive roadmap creation followed by hands-on implementation, including tools setup, team training, and workflow integration.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      ),
      deliverable: "Complete implementation plan & training",
    },
    {
      step: "05",
      title: "Weekly Progress Monitoring",
      description:
        "Regular check-ins with detailed activity reports, KPI tracking, and results analysis to ensure optimal performance and ROI.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      deliverable: "Weekly KPI reports & recommendations",
    },
    {
      step: "06",
      title: "24/7 WhatsApp Support",
      description:
        "Round-the-clock assistance via WhatsApp for immediate problem resolution and ongoing guidance to maximize your AI investment.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
      deliverable: "Instant support & guidance",
    },
  ];

  return (
    <section id="process" className="proactis-section bg-proactis-gray-50">
      <div className="proactis-container">
        <div className="text-center mb-16">
          <div className="proactis-badge mb-6">📋 Our Proven Process</div>
          <h2 className="text-heading-xl font-bold text-proactis-dark mb-6 text-balance">
            From Discovery to Success: Your AI Transformation Journey
          </h2>
          <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto text-pretty">
            Our systematic approach ensures successful AI implementation with
            measurable results and guaranteed 10% revenue increase.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-proactis-primary/20 h-full"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className="proactis-card text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className="w-12 h-12 bg-proactis-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-proactis-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {step.icon}
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-proactis-primary">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-proactis-dark mb-4">
                      {step.title}
                    </h3>

                    <p className="text-proactis-gray-600 mb-6 text-pretty">
                      {step.description}
                    </p>

                    <div className="bg-proactis-light/20 rounded-lg p-3">
                      <div className="flex items-center justify-center lg:justify-start">
                        <svg
                          className="w-4 h-4 text-proactis-success mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm font-medium text-proactis-dark">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="hidden lg:flex w-16 h-16 bg-proactis-primary rounded-full items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {step.step}
                </div>

                {/* Visual placeholder */}
                <div className="flex-1 lg:max-w-md">
                  <div className="aspect-square bg-gradient-primary rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {step.icon}
                        </svg>
                      </div>
                      <div className="text-lg font-semibold">
                        Step {step.step}
                      </div>
                      <div className="text-sm opacity-90">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-proactis-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-proactis-dark mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-proactis-gray-600 mb-6">
              Book your complimentary discovery meeting today and take the first
              step towards increasing your revenue by 10% with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="proactis-button-primary">
                Book Your Complimentary Exploring Video Call
              </button>
              <button className="proactis-button-secondary">
                Request Detailed Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
