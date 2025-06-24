import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always enabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("proactis-cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem(
      "proactis-cookie-consent",
      JSON.stringify(allAccepted),
    );
    setShowBanner(false);

    // Initialize analytics/marketing scripts here
    initializeScripts(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem(
      "proactis-cookie-consent",
      JSON.stringify(onlyNecessary),
    );
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "proactis-cookie-consent",
      JSON.stringify(preferences),
    );
    setShowBanner(false);
    setShowSettings(false);

    // Initialize scripts based on preferences
    initializeScripts(preferences);
  };

  const initializeScripts = (prefs: typeof preferences) => {
    if (prefs.analytics) {
      // Initialize Google Analytics or similar
      console.log("Analytics enabled");
    }
    if (prefs.marketing) {
      // Initialize marketing pixels
      console.log("Marketing cookies enabled");
    }
    if (prefs.functional) {
      // Initialize functional cookies
      console.log("Functional cookies enabled");
    }
  };

  if (!showBanner) return null;

  if (showSettings) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-proactis-dark">
              Cookie Settings
            </h3>
            <button
              onClick={() => setShowSettings(false)}
              className="text-proactis-gray-400 hover:text-proactis-gray-600 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p className="text-proactis-gray-600 mb-6">
            We use cookies to enhance your browsing experience, provide
            personalized content, and analyze our traffic. Choose which cookies
            you'd like to accept.
          </p>

          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="border border-proactis-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-proactis-dark">
                  Necessary Cookies
                </h4>
                <span className="text-sm text-proactis-gray-500">
                  Always Active
                </span>
              </div>
              <p className="text-sm text-proactis-gray-600 mb-3">
                Essential cookies required for basic website functionality,
                security, and legal compliance.
              </p>
              <div className="text-xs text-proactis-gray-500">
                Examples: Session management, form submissions, GDPR compliance
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-proactis-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-proactis-dark">
                  Analytics Cookies
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: e.target.checked,
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-proactis-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-proactis-primary"></div>
                </label>
              </div>
              <p className="text-sm text-proactis-gray-600 mb-3">
                Help us understand how visitors interact with our website by
                collecting anonymized data.
              </p>
              <div className="text-xs text-proactis-gray-500">
                Examples: Google Analytics, page views, user behavior
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-proactis-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-proactis-dark">
                  Marketing Cookies
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: e.target.checked,
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-proactis-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-proactis-primary"></div>
                </label>
              </div>
              <p className="text-sm text-proactis-gray-600 mb-3">
                Used to deliver personalized advertisements and measure the
                effectiveness of marketing campaigns.
              </p>
              <div className="text-xs text-proactis-gray-500">
                Examples: LinkedIn Insight Tag, Facebook Pixel, Google Ads
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="border border-proactis-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-proactis-dark">
                  Functional Cookies
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        functional: e.target.checked,
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-proactis-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-proactis-primary"></div>
                </label>
              </div>
              <p className="text-sm text-proactis-gray-600 mb-3">
                Enable enhanced functionality and personalization features like
                chat widgets and social media integrations.
              </p>
              <div className="text-xs text-proactis-gray-500">
                Examples: Live chat, social media widgets, embedded videos
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="flex-1 proactis-button-secondary"
            >
              Reject All
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="flex-1 proactis-button-primary"
            >
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-proactis-gray-200 shadow-lg z-50 p-6">
      <div className="proactis-container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-proactis-dark mb-2">
              🍪 We Value Your Privacy
            </h3>
            <p className="text-proactis-gray-600 text-sm">
              We use cookies to enhance your experience, provide personalized
              content, and analyze our website traffic. By clicking "Accept
              All", you consent to our use of cookies. You can manage your
              preferences or learn more in our{" "}
              <a
                href="/privacy-policy"
                className="text-proactis-primary hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              onClick={() => setShowSettings(true)}
              variant="outline"
              className="text-proactis-primary border-proactis-primary hover:bg-proactis-primary hover:text-white text-sm"
            >
              Manage Settings
            </Button>
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="text-proactis-gray-600 border-proactis-gray-300 hover:bg-proactis-gray-100 text-sm"
            >
              Reject All
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="proactis-button-primary text-sm"
            >
              Accept All Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
