import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const AIShowcaseSection = () => {
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: "demo" | "info";
  }>({
    isOpen: false,
    type: "demo",
  });
  return (
    <section className="proactis-section bg-proactis-dark text-white overflow-hidden">
      <div className="proactis-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-sm font-medium text-proactis-secondary">
                AI-Powered Transformation
              </span>
            </div>

            <h2 className="text-heading-xl font-bold mb-6 text-balance">
              See the Power of AI in Action at Your Office
            </h2>

            <p className="text-xl text-proactis-gray-300 mb-8 text-pretty leading-relaxed">
              Experience firsthand how our AI solutions transform legal
              workflows. Our European team brings cutting-edge technology
              directly to your office for personalized demonstrations and
              training.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-proactis-success"
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
                <div>
                  <div className="font-semibold text-white mb-1">
                    Live Demonstrations
                  </div>
                  <div className="text-sm text-proactis-gray-300">
                    See AI tools in real legal scenarios
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-proactis-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    Team Training
                  </div>
                  <div className="text-sm text-proactis-gray-300">
                    Hands-on workshops for your staff
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-proactis-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    ROI Analysis
                  </div>
                  <div className="text-sm text-proactis-gray-300">
                    Real-time performance metrics
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-proactis-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    On-Site Service
                  </div>
                  <div className="text-sm text-proactis-gray-300">
                    Across all European countries
                  </div>
                </div>
              </div>
            </div>

            <button
              className="bg-proactis-secondary hover:bg-proactis-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all group"
              onClick={() => setContactModal({ isOpen: true, type: "demo" })}
            >
              Schedule Your AI Demo
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

          {/* Visual showcase */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
                  alt="Legal professionals using AI technology in modern European office"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-proactis-primary/60 to-transparent"></div>

                {/* Floating AI interface elements */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-proactis-dark">
                        AI Assistant Active
                      </span>
                    </div>
                    <div className="text-xs text-proactis-gray-600">
                      Processing 47 contracts...
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-sm font-semibold text-proactis-dark mb-1">
                      Revenue Impact
                    </div>
                    <div className="text-xs text-proactis-gray-600">
                      +€127,000 this quarter
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-proactis-secondary/30 rounded-full blur-xl animate-bounce-subtle"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-proactis-success/30 rounded-lg rotate-45 blur-lg"></div>

              {/* Tech grid overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="grid grid-cols-8 grid-rows-6 w-full h-full opacity-10">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={i}
                        className="border border-white/20"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: "pulse 2s ease-in-out infinite",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-proactis-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-proactis-secondary/5 to-transparent pointer-events-none"></div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModal.isOpen}
        onClose={() => setContactModal({ isOpen: false, type: "demo" })}
        formType={contactModal.type}
      />
    </section>
  );
};

export default AIShowcaseSection;
