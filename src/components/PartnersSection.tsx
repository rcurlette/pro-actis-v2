import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const PartnersSection = () => {
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: "demo" | "info";
  }>({
    isOpen: false,
    type: "demo",
  });
  const partners = [
    {
      name: "Dripify",
      category: "Lead Generation",
      description:
        "Advanced LinkedIn automation platform for personalized outreach and lead generation at scale.",
      features: ["LinkedIn Automation", "Smart Sequences", "CRM Integration"],
      logo: "D",
      color: "from-blue-500 to-blue-600",
      website: "dripify.io",
    },
    {
      name: "Upmeet",
      category: "Client Management",
      description:
        "Intelligent meeting scheduling and client communication platform with AI-powered insights.",
      features: ["Smart Scheduling", "Client Analytics", "Meeting Automation"],
      logo: "U",
      color: "from-green-500 to-green-600",
      website: "upmeet.me",
    },
    {
      name: "Lindy",
      category: "AI Assistant",
      description:
        "Personal AI assistant that handles complex tasks, research, and client communication workflows.",
      features: ["Task Automation", "Research Assistant", "Email Management"],
      logo: "L",
      color: "from-purple-500 to-purple-600",
      website: "lindy.ai",
    },
    {
      name: "NotebookLM",
      category: "Knowledge Management",
      description:
        "Google's AI-powered research and note-taking tool for legal document analysis and insights.",
      features: ["Document Analysis", "AI Summaries", "Research Insights"],
      logo: "N",
      color: "from-orange-500 to-orange-600",
      website: "notebooklm.google",
    },
  ];

  return (
    <section
      id="partners"
      className="proactis-section bg-gradient-to-br from-proactis-gray-50 to-white"
    >
      <div className="proactis-container">
        <div className="text-center mb-16">
          <div className="proactis-badge mb-6">🤝 Our AI Solution Partners</div>
          <h2 className="text-heading-xl font-bold text-proactis-dark mb-6 text-balance">
            Powered by Industry-Leading AI Tools
          </h2>
          <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto text-pretty">
            We've carefully selected and integrated the most effective AI
            solutions to deliver measurable results for your legal practice.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-proactis-gray-200 hover:shadow-lg hover:border-proactis-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Logo */}
              <div className="mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-200`}
                >
                  {partner.logo}
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-proactis-dark">
                    {partner.name}
                  </h3>
                  <span className="text-xs text-proactis-primary bg-proactis-light/30 px-2 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
                <p className="text-sm text-proactis-gray-600 mb-4 text-pretty">
                  {partner.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {partner.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-xs text-proactis-gray-600"
                    >
                      <svg
                        className="w-3 h-3 text-proactis-success mr-2 flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Website */}
              <div className="text-xs text-proactis-gray-500 border-t border-proactis-gray-200 pt-4">
                <span className="font-medium">Learn more:</span>{" "}
                {partner.website}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-2xl p-8 border border-proactis-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-proactis-dark text-center mb-8">
            Why Our Partnership Approach Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-proactis-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-proactis-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-proactis-dark mb-2">
                Pre-Vetted Solutions
              </h4>
              <p className="text-sm text-proactis-gray-600">
                We've tested and validated each tool's effectiveness in real
                legal practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-proactis-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-proactis-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-proactis-dark mb-2">
                Seamless Integration
              </h4>
              <p className="text-sm text-proactis-gray-600">
                Our tools work together to create a unified, efficient workflow
                for your practice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-proactis-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-proactis-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-proactis-dark mb-2">
                Ongoing Support
              </h4>
              <p className="text-sm text-proactis-gray-600">
                Dedicated support and training for every tool in your AI
                toolkit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-proactis-dark mb-4">
            Ready to Transform Your Practice with These AI Solutions?
          </h3>
          <p className="text-proactis-gray-600 mb-6">
            Schedule a consultation to see how these tools can work together to
            increase your revenue by 10%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="proactis-button-primary"
              onClick={() => setContactModal({ isOpen: true, type: "demo" })}
            >
              Schedule AI Strategy Session
            </button>
            <button
              className="proactis-button-secondary"
              onClick={() => setContactModal({ isOpen: true, type: "info" })}
            >
              Download Partner Guide
            </button>
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

export default PartnersSection;
