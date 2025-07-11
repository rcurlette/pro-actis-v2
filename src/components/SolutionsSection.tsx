import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const SolutionsSection = () => {
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: "demo" | "info";
  }>({
    isOpen: false,
    type: "demo",
  });
  const solutions = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      title: "Lead Generation AI",
      description:
        "Automatically identify and qualify potential clients using intelligent data analysis and targeted outreach strategies.",
      benefits: [
        "30% more qualified leads",
        "Automated follow-ups",
        "CRM integration",
      ],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      title: "Data Analysis & Insights",
      description:
        "Transform your firm's data into actionable insights with advanced analytics and predictive modeling.",
      benefits: [
        "Real-time reporting",
        "Trend prediction",
        "Performance metrics",
      ],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-5 5v-5zM4 17h5m6 0v-3a3 3 0 00-6 0v3m6 0a1 1 0 001 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h6z"
        />
      ),
      title: "Client Account Monitoring",
      description:
        "Proactively monitor client accounts and contracts to identify opportunities and prevent risks before they occur.",
      benefits: ["Automated alerts", "Risk assessment", "Compliance tracking"],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
      title: "Contract Risk Management",
      description:
        "AI-powered contract analysis to identify potential risks, compliance issues, and optimization opportunities.",
      benefits: ["99% accuracy", "Instant analysis", "Risk mitigation"],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
      title: "Innovation Protection",
      description:
        "Safeguard your intellectual property and innovative processes with AI-driven monitoring and protection strategies.",
      benefits: [
        "IP monitoring",
        "Patent analysis",
        "Competitive intelligence",
      ],
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
      title: "Workflow Automation",
      description:
        "Streamline repetitive legal tasks and document processing with intelligent automation solutions.",
      benefits: ["50% time savings", "Error reduction", "Scalable processes"],
    },
  ];

  return (
    <section id="solutions" className="proactis-section bg-white">
      <div className="proactis-container">
        <div className="text-center mb-16">
          <div className="proactis-badge mb-6">🤖 AI-Powered Solutions</div>
          <h2 className="text-heading-xl font-bold text-proactis-dark mb-6 text-balance">
            Transform Your Legal Practice with Cutting-Edge AI Solutions
          </h2>
          <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto text-pretty">
            Our partner solutions help law firms leverage artificial
            intelligence to increase revenue, reduce risks, and provide better
            client service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="proactis-card group hover:border-proactis-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-proactis-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-proactis-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-proactis-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {solution.icon}
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-proactis-dark mb-4">
                {solution.title}
              </h3>

              <p className="text-proactis-gray-600 mb-6 text-pretty">
                {solution.description}
              </p>

              <ul className="space-y-2">
                {solution.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center text-sm text-proactis-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-proactis-success mr-2 flex-shrink-0"
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
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visual showcase with professional consultation */}
        <div className="mt-16 bg-gradient-to-r from-proactis-primary to-proactis-light rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Practice?
              </h3>
              <p className="text-proactis-light/90 mb-6 text-lg">
                Join European legal professionals who've already increased their
                revenue by 10% with our AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-white text-proactis-primary px-8 py-4 rounded-lg font-semibold hover:bg-proactis-gray-50 transition-all group"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy",
                      "_blank",
                    )
                  }
                >
                  Book Your Complimentary Call
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
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-proactis-primary transition-all"
                  onClick={() =>
                    setContactModal({ isOpen: true, type: "info" })
                  }
                >
                  Request Info Package
                </button>
              </div>
            </div>

            <div className="relative h-64 lg:h-80">
              <img
                src="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg"
                alt="Professional legal consultation with AI integration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-proactis-primary/30 to-transparent"></div>

              {/* Success metrics overlay */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-sm font-semibold text-proactis-dark">
                    Success Rate
                  </div>
                  <div className="text-2xl font-bold text-proactis-success">
                    98.5%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModal.isOpen}
        onClose={() => setContactModal({ isOpen: false, type: "demo" })}
        formType={contactModal.type}
      />
    </section>
  );
};

export default SolutionsSection;
