const BenefitsSection = () => {
  const benefits = [
    {
      title: "Enterprise-Grade Security",
      description:
        "Robust, industry-standard protection with zero training on your data.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Agentic Workflows",
      description:
        "Produce expert-quality work product for complex workflows, with no prompting required.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Domain-Specific Models",
      description:
        "High-performing custom models built for complex professional work.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
    {
      title: "24/7 Customer Support",
      description:
        "White glove support to resolve issues and maximize your Harvey experience.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
    },
  ];

  return (
    <section className="harvey-section bg-harvey-dark">
      <div className="harvey-container">
        <div className="text-center mb-16">
          <h2 className="text-heading-xl font-harvey-serif text-harvey-light max-w-3xl mx-auto text-balance">
            Unlock Professional Class AI For Your Firm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center p-8 rounded-lg bg-harvey-dark-secondary/50 border border-harvey-text-muted/10 hover:border-harvey-text-muted/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-harvey-light/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-harvey-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {benefit.icon}
                </svg>
              </div>

              <h3 className="text-xl font-harvey-serif text-harvey-light mb-4">
                {benefit.title}
              </h3>

              <p className="text-body text-harvey-text-muted text-pretty">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
