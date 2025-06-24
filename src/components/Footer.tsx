import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Platform: ["Assistant", "Vault", "Knowledge", "Workflows"],
    Solutions: ["Innovation", "In-House", "Transactional", "Litigation"],
    About: ["Customers", "Security", "Company", "Blog", "Newsroom", "Careers"],
    Resources: ["Legal", "Privacy Policy", "Press Kit"],
    Follow: ["LinkedIn", "𝕏"],
  };

  return (
    <footer className="bg-harvey-dark">
      {/* CTA Section */}
      <div className="border-t border-harvey-text-muted/20">
        <div className="harvey-container harvey-section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-heading-xl font-harvey-serif text-harvey-light mb-8 text-balance">
              Unlock professional class AI for your firm
            </h2>
            <Button className="harvey-button-primary text-lg h-14 px-8">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-harvey-text-muted/20">
        <div className="harvey-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <a
                  href="/"
                  className="text-harvey-light font-harvey-serif text-xl font-semibold"
                >
                  :Harvey:
                </a>
              </div>
              <p className="text-harvey-text-muted text-sm max-w-sm">
                Copyright © 2025 Counsel AI Corporation. All rights reserved.
              </p>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="lg:col-span-1">
                <h3 className="text-harvey-light font-medium mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      {category === "Follow" ? (
                        <a
                          href={link === "LinkedIn" ? "#" : "#"}
                          className="text-harvey-text-muted hover:text-harvey-light transition-colors duration-200 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link}
                        </a>
                      ) : (
                        <a
                          href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-harvey-text-muted hover:text-harvey-light transition-colors duration-200 text-sm"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  ))}
                  {category === "Resources" && (
                    <li>
                      <button className="text-harvey-text-muted hover:text-harvey-light transition-colors duration-200 text-sm text-left">
                        Your Privacy Choices
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
