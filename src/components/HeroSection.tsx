import { useState, useRef } from "react";
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

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // Send play command to YouTube iframe
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*",
      );
    }
  };

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
                onClick={() =>
                  window.open(
                    "https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy",
                    "_blank",
                  )
                }
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

          {/* Enhanced visual with A.I For Lawyers YouTube video */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-proactis-gray-200">
                {/* YouTube Video Embed */}
                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/ef33Cw-ZBLs?enablejsapi=1&rel=0&modestbranding=1&showinfo=0"
                  title="AI For Lawyers - Pro-Actis AI Solutions"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={() => {
                    // Listen for YouTube player state changes
                    window.addEventListener("message", (event) => {
                      if (event.origin !== "https://www.youtube.com") return;
                      if (event.data && typeof event.data === "string") {
                        try {
                          const data = JSON.parse(event.data);
                          if (
                            data.event === "video-progress" ||
                            (data.info && data.info.playerState === 1)
                          ) {
                            setIsVideoPlaying(true);
                          } else if (
                            data.info &&
                            (data.info.playerState === 0 ||
                              data.info.playerState === 2)
                          ) {
                            setIsVideoPlaying(false);
                          }
                        } catch (e) {
                          // Ignore parsing errors
                        }
                      }
                    });
                  }}
                ></iframe>

                {/* Lighter overlay to preserve video visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-proactis-dark/30 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating stats cards - hidden when video is playing */}
                {!isVideoPlaying && (
                  <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-500">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-proactis-primary mb-1">
                          On Demand
                        </div>
                        <div className="text-xs text-proactis-gray-600">
                          Custom Built Assessment Forms
                        </div>
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-proactis-success mb-1">
                          Designed
                        </div>
                        <div className="text-xs text-proactis-gray-600">
                          Automated Workflow
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
                )}

              {/* Play button overlay - hidden when video is playing */}
              {!isVideoPlaying && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button
                    onClick={handlePlayVideo}
                    className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/95 transition-all group"
                  >
                    <svg
                      className="w-8 h-8 text-proactis-primary ml-1 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}
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
