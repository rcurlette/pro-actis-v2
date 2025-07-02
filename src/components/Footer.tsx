import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/ContactFormModal";

const Footer = () => {
  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    type: "demo" | "info";
  }>({
    isOpen: false,
    type: "demo",
  });
  const footerLinks = {
    Solutions: [
      "Lead Generation AI",
      "Data Analysis",
      "Client Monitoring",
      "Contract Management",
      "Innovation Protection",
      "Workflow Automation",
    ],
    Services: [
      "Discovery Meeting",
      "Custom Workshops",
      "Tool Implementation",
      "Training Programs",
      "Ongoing Support",
    ],
    Company: [
      "About Pro-Actis",
      "Our Process",
      "Partner Network",
      "Success Stories",
      "Contact Us",
    ],
    Resources: [
      "AI Legal Guide",
      "ROI Calculator",
      "Case Studies",
      "Webinars",
      "Blog",
      "Legal & Privacy",
    ],
  };

  return (
    <footer className="bg-proactis-dark text-white">
      {/* CTA Section */}
      <div className="border-b border-proactis-gray-600">
        <div className="proactis-container proactis-section">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-heading-xl font-bold mb-6 text-balance">
              Ready to Increase Your Revenue by 10% with AI?
            </h2>
            <p className="text-xl text-proactis-gray-300 mb-8 text-pretty">
              Join hundreds of law firms across Europe who have already
              transformed their practice with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-proactis-primary hover:bg-proactis-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => setContactModal({ isOpen: true, type: "demo" })}
              >
                Book Your Complimentary Exploring Video Call
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-proactis-dark px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => setContactModal({ isOpen: true, type: "info" })}
              >
                Request Info Package
              </Button>
            </div>

            {/* Contact methods - Temporarily commented out */}
            {/*
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-proactis-gray-600">
              <div className="text-center">
                <div className="w-12 h-12 bg-proactis-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">Phone Consultation</h4>
                <p className="text-sm text-proactis-gray-300">
                  +33 1 XX XX XX XX
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-proactis-success/20 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">24/7 WhatsApp Support</h4>
                <p className="text-sm text-proactis-gray-300">
                  +33 6 XX XX XX XX
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-proactis-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-sm text-proactis-gray-300">
                  contact@pro-actis.eu
                </p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="proactis-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              <span className="text-2xl font-bold">Pro-Actis</span>
            </div>

            <p className="text-proactis-gray-300 mb-6 max-w-sm text-pretty">
              Helping lawyers and legal advisors across Europe grow their
              business by 10% through strategic AI implementation and expert
              guidance.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-proactis-gray-600 rounded-lg flex items-center justify-center hover:bg-proactis-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-proactis-gray-600 rounded-lg flex items-center justify-center hover:bg-proactis-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-proactis-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-proactis-gray-600 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-proactis-gray-300 text-sm">
            © 2025 Pro-Actis. All rights reserved. Helping legal professionals
            across Europe since 2024.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a
              href="/privacy"
              className="text-proactis-gray-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-proactis-gray-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-proactis-gray-300 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="/audio-admin"
              className="text-proactis-gray-400 hover:text-proactis-gold text-sm transition-colors"
            >
              Admin
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={contactModal.isOpen}
        onClose={() => setContactModal({ isOpen: false, type: "demo" })}
        formType={contactModal.type}
      />
    </footer>
  );
};

export default Footer;
