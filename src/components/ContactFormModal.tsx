import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: "demo" | "info";
}

const ContactFormModal = ({
  isOpen,
  onClose,
  formType,
}: ContactFormModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Netlify form submission
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDemo = formType === "demo";
  const title = isDemo
    ? "Book Your Complimentary AI Discovery Call"
    : "Request Information Package";
  const description = isDemo
    ? "Schedule a free 30-minute consultation to explore how AI can increase your firm's revenue by 10%."
    : "Get detailed information about our AI solutions, pricing, and implementation process.";

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center my-auto">
          <div className="w-16 h-16 bg-proactis-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-proactis-success"
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
          <h3 className="text-2xl font-bold text-proactis-dark mb-4">
            Thank You!
          </h3>
          <p className="text-proactis-gray-600 mb-6">
            {isDemo
              ? "We'll contact you within 24 hours to schedule your complimentary AI discovery call."
              : "Your information package has been sent to your email address."}
          </p>
          <Button onClick={onClose} className="proactis-button-primary w-full">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto my-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-proactis-dark mb-2">
              {title}
            </h3>
            <p className="text-proactis-gray-600">{description}</p>
          </div>
          <button
            onClick={onClose}
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

        <form
          name={isDemo ? "demo-request" : "info-request"}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Netlify form detection */}
          <input
            type="hidden"
            name="form-name"
            value={isDemo ? "demo-request" : "info-request"}
          />
          {/* Honeypot for spam protection */}
          <div className="hidden">
            <input name="bot-field" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-proactis-dark mb-2"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-proactis-dark mb-2"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-proactis-dark mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
              placeholder="john.doe@lawfirm.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-proactis-dark mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
              placeholder="+33 1 XX XX XX XX"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-proactis-dark mb-2"
            >
              Law Firm / Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
              placeholder="Your Law Firm Name"
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-proactis-dark mb-2"
            >
              Country *
            </label>
            <select
              id="country"
              name="country"
              required
              className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
            >
              <option value="">Select your country</option>
              <option value="France">🇫🇷 France</option>
              <option value="England">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</option>
              <option value="Italy">🇮🇹 Italy</option>
              <option value="Greece">🇬🇷 Greece</option>
              <option value="Bulgaria">🇧🇬 Bulgaria</option>
              <option value="Belgium">🇧🇪 Belgium</option>
              <option value="Switzerland">��🇭 Switzerland</option>
              <option value="Austria">🇦🇹 Austria</option>
              <option value="Sweden">🇸🇪 Sweden</option>
              <option value="Denmark">🇩🇰 Denmark</option>
              <option value="Norway">🇳🇴 Norway</option>
              <option value="Finland">🇫🇮 Finland</option>
              <option value="Poland">🇵🇱 Poland</option>
              <option value="Czech Republic">🇨🇿 Czech Republic</option>
              <option value="Portugal">🇵🇹 Portugal</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="firmSize"
              className="block text-sm font-medium text-proactis-dark mb-2"
            >
              Firm Size
            </label>
            <select
              id="firmSize"
              name="firmSize"
              className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
            >
              <option value="">Select firm size</option>
              <option value="1-5">1-5 lawyers</option>
              <option value="6-20">6-20 lawyers</option>
              <option value="21-50">21-50 lawyers</option>
              <option value="51-100">51-100 lawyers</option>
              <option value="100+">100+ lawyers</option>
            </select>
          </div>

          {isDemo && (
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-proactis-dark mb-2"
              >
                Preferred Call Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors"
              >
                <option value="">Select preferred time</option>
                <option value="Morning (9-12)">Morning (9:00-12:00)</option>
                <option value="Afternoon (13-17)">
                  Afternoon (13:00-17:00)
                </option>
                <option value="Evening (18-20)">Evening (18:00-20:00)</option>
              </select>
            </div>
          )}

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-proactis-dark mb-2"
            >
              {isDemo
                ? "What specific AI challenges would you like to discuss?"
                : "Additional Information"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-proactis-gray-300 rounded-lg focus:ring-2 focus:ring-proactis-primary focus:border-proactis-primary transition-colors resize-none"
              placeholder={
                isDemo
                  ? "Tell us about your current challenges with lead generation, data analysis, contract management, etc."
                  : "Any specific questions or requirements you'd like us to address?"
              }
            />
          </div>

          {/* GDPR Consent */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="gdprConsent"
                name="gdprConsent"
                required
                className="mt-1 w-4 h-4 text-proactis-primary border-proactis-gray-300 rounded focus:ring-proactis-primary"
              />
              <label
                htmlFor="gdprConsent"
                className="text-sm text-proactis-gray-600"
              >
                I consent to Pro-Actis processing my personal data for the
                purpose of this inquiry and future communications about AI
                solutions. You can unsubscribe at any time. *
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="marketingConsent"
                name="marketingConsent"
                className="mt-1 w-4 h-4 text-proactis-primary border-proactis-gray-300 rounded focus:ring-proactis-primary"
              />
              <label
                htmlFor="marketingConsent"
                className="text-sm text-proactis-gray-600"
              >
                I would like to receive updates about AI legal solutions,
                industry insights, and Pro-Actis services via email.
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 proactis-button-secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 proactis-button-primary"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : isDemo ? (
                "Book My Call"
              ) : (
                "Send Information"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
