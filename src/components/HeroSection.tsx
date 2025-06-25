import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/ContactFormModal";

const HeroSection = () => {
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: "demo" | "info";
  }>({
    isOpen: false,
    type: "demo",
  });

  return (
    <section className="proactis-section pt-32 bg-gradient-to-br from-proactis-gray-50 to-white">
      <div className="proactis-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="proactis-badge mb-6">
              🚀 Grow Your Legal Practice with AI
            </div>

            <h1 className="text-hero lg:text-6xl font-bold text-proactis-dark mb-6 text-balance">
              Increase Your Law Firm's Revenue by{" "}
              <span className="text-proactis-primary">10%</span> with AI
            </h1>

            <p className="text-xl text-proactis-gray-600 mb-8 text-pretty leading-relaxed">
              Pro-Actis AI helps lawyers and legal advisors discover, implement,
              and master AI solutions that generate leads, analyze data, monitor
              client accounts, and protect innovations - all while preventing
              contract management risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                className="proactis-button-primary group"
                onClick={() => setContactModal({ isOpen: true, type: "demo" })}
              >
                Book Your Complimentary Call
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </Button>
              <Button
                className="proactis-button-secondary"
                onClick={() => setContactModal({ isOpen: true, type: "info" })}
              >
                Request Info
              </Button>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-proactis-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-full flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-proactis-gray-600">
                  Free Discovery Meeting
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-full flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-proactis-gray-600">
                  Custom Workshops
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-full flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-proactis-gray-600">
                  24/7 WhatsApp Support
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-proactis-success/20 rounded-full flex items-center justify-center">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-proactis-gray-600">
                  Across Europe
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced visual with professional diverse team */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-proactis-gray-200">
                <img
                  src="https://images.pexels.com/photos/4427624/pexels-photo-4427624.jpeg"
                  alt="Diverse group of European legal professionals collaborating with AI technology"
                  className="w-full h-full object-cover"
                />

                {/* Modern overlay with stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-proactis-dark/80 via-transparent to-transparent"></div>

                {/* Floating stats cards */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-proactis-primary mb-1">
                        200+
                      </div>
                      <div className="text-xs text-proactis-gray-600">
                        Law Firms Served
                      </div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-proactis-success mb-1">
                        10%
                      </div>
                      <div className="text-xs text-proactis-gray-600">
                        Avg Revenue Growth
                      </div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-proactis-secondary mb-1">
                        15
                      </div>
                      <div className="text-xs text-proactis-gray-600">
                        EU Countries
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play button overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/95 transition-all group">
                    <svg
                      className="w-8 h-8 text-proactis-primary ml-1 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-proactis-secondary/20 rounded-full animate-bounce-subtle"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-proactis-success/20 rounded-lg rotate-12"></div>

              {/* European flag colors decoration */}
              <div className="absolute -top-4 left-8 flex space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
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

export default HeroSection;
