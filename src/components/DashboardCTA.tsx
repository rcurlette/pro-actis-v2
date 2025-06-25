import { Button } from "@/components/ui/button";

const DashboardCTA = () => {
  return (
    <section className="proactis-section bg-gradient-to-r from-proactis-dark to-proactis-primary">
      <div className="proactis-container">
        <div className="text-center text-white">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V6a2 2 0 012-2h2a2 2 0 002 2v3m0 0a2 2 0 012 2v6a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v3z"
              />
            </svg>
            <span className="text-sm font-medium">
              Live Performance Tracking
            </span>
          </div>

          <h2 className="text-heading-xl font-bold mb-6 text-balance">
            Monitor Your AI Performance in Real-Time
          </h2>

          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto text-pretty">
            Access your personalized dashboard to track ROI, monitor tool
            performance, generate content, and identify new opportunities with
            AI-powered insights.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Performance Analytics
              </h3>
              <p className="text-sm opacity-80">
                Real-time metrics for all 7 AI tools with revenue impact
                tracking
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Generator</h3>
              <p className="text-sm opacity-80">
                AI-powered LinkedIn posts and editorial planning tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Alerts</h3>
              <p className="text-sm opacity-80">
                Keyword detection for lead opportunities and risk flags
              </p>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">+$127k</div>
                  <div className="text-sm opacity-80">Revenue Impact</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">247</div>
                  <div className="text-sm opacity-80">New Leads</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">156h</div>
                  <div className="text-sm opacity-80">Time Saved</div>
                </div>
              </div>
              <div className="text-center text-white/80 text-sm">
                ↑ Live dashboard preview
              </div>
            </div>
          </div>

          <Button
            className="bg-white text-proactis-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            asChild
          >
            <a href="/dashboard">
              Access Your Dashboard
              <svg
                className="ml-2 w-5 h-5 inline"
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
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardCTA;
