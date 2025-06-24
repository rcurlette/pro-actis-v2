const ProductFeatures = () => {
  const features = [
    {
      category: "Assistant",
      title: "Tailored to Your Expertise",
      description:
        "Delegate complex tasks in natural language to your domain-specific personal assistant.",
      layout: "left",
    },
    {
      category: "Knowledge",
      title: "Rapid Research, Grounded Results",
      description:
        "Get answers to complex research questions across multiple domains in legal, regulatory, and tax with accurate citations.",
      layout: "right",
    },
    {
      category: "Vault",
      title: "Secure Project Workspaces",
      description:
        "Upload, store, and analyze thousands of documents using powerful generative AI.",
      layout: "left",
    },
    {
      category: "Workflows",
      title: "Streamline Your Work",
      description:
        "Multi-model agents designed to collaborate with professionals to deliver precise, purpose-built work product.",
      layout: "right",
    },
  ];

  return (
    <section className="harvey-section bg-harvey-dark">
      <div className="harvey-container">
        <div className="text-center mb-24">
          <h2 className="text-heading-xl font-harvey-serif text-harvey-light max-w-4xl mx-auto text-balance">
            Augment All of Your Work on One Integrated, Secure Platform
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.category}
              className={`flex flex-col ${
                feature.layout === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Feature Image */}
              <div className="flex-1">
                <div className="aspect-video bg-harvey-dark-secondary border border-harvey-text-muted/20 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-harvey-light/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-harvey-light"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {index === 0 && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"
                            />
                          )}
                          {index === 1 && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          )}
                          {index === 2 && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          )}
                          {index === 3 && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                          )}
                        </svg>
                      </div>
                      <p className="text-harvey-text-muted text-sm">
                        {feature.category} Feature
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <span className="text-harvey-text-muted text-sm font-medium uppercase tracking-wider">
                    {feature.category}
                  </span>

                  <h3 className="text-heading-lg font-harvey-serif text-harvey-light mt-4 mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-body text-harvey-text-muted mb-8 text-pretty">
                    {feature.description}
                  </p>

                  <a
                    href={`#${feature.category.toLowerCase()}`}
                    className="text-harvey-light hover:text-harvey-text-muted transition-colors duration-200 font-medium border-b border-harvey-light/20 hover:border-harvey-text-muted/20 pb-1"
                  >
                    Explore →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
