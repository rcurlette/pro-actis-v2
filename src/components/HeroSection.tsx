import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
              Pro-Actis helps lawyers and legal advisors discover, implement,
              and master AI solutions that generate leads, analyze data, monitor
              client accounts, and protect innovations - all while preventing
              contract management risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="proactis-button-primary group">
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
              <Button className="proactis-button-secondary">
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

          {/* Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-proactis-gray-100">
                {/* Mock dashboard */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-proactis-dark">
                      AI Performance Dashboard
                    </h3>
                    <div className="proactis-badge">+10% Revenue Growth</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-proactis-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-proactis-primary mb-1">
                        247
                      </div>
                      <div className="text-sm text-proactis-gray-600">
                        New Leads Generated
                      </div>
                    </div>
                    <div className="bg-proactis-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-proactis-success mb-1">
                        89%
                      </div>
                      <div className="text-sm text-proactis-gray-600">
                        Risk Prevention Rate
                      </div>
                    </div>
                  </div>

                  <div className="bg-proactis-light/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-proactis-primary rounded-full"></div>
                      <span className="text-sm font-medium">
                        AI Contract Analysis
                      </span>
                    </div>
                    <div className="w-full bg-proactis-gray-200 rounded-full h-2">
                      <div
                        className="bg-proactis-primary h-2 rounded-full"
                        style={{ width: "76%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-proactis-secondary/20 rounded-full animate-bounce-subtle"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-proactis-success/20 rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
