import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="harvey-section bg-harvey-dark pt-32">
      <div className="harvey-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-harvey-serif text-hero text-harvey-light mb-8 text-balance">
              Professional <span className="block">Class AI</span>
            </h1>

            <p className="text-body text-harvey-text-muted max-w-lg mx-auto mb-12 text-balance">
              Domain-specific AI for law firms, professional service providers,
              and the Fortune 500.
            </p>

            <div className="animate-slide-up">
              <Button
                className="harvey-button-primary text-lg h-14 px-8"
                asChild
              >
                <a href="https://www.harvey.ai/contact-sales">Request a Demo</a>
              </Button>
            </div>
          </div>

          {/* Video placeholder */}
          <div
            className="mt-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-harvey-dark-secondary rounded-lg border border-harvey-text-muted/20 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-harvey-light/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-harvey-light"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-harvey-text-muted text-sm">
                      Product Demo Video
                    </p>
                  </div>
                </div>
              </div>

              {/* Video controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-harvey-dark/80 backdrop-blur-sm rounded-md p-3">
                  <div className="flex items-center space-x-3">
                    <button className="w-8 h-8 bg-harvey-light/20 rounded-full flex items-center justify-center text-harvey-light hover:bg-harvey-light/30 transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <div className="flex-1 h-1 bg-harvey-light/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-harvey-light rounded-full"></div>
                    </div>
                    <span className="text-harvey-light text-xs font-mono">
                      02:34 / 07:42
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
