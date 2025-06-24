const ClientLogos = () => {
  const clients = [
    "Vinson Elkins",
    "Schonherr",
    "Repsol",
    "Deutsche Telekom",
    "Bayer",
    "Morrison Foerster",
    "Cooley",
    "Davis Polk",
    "Simpson Thacher",
    "White & Case",
    "Latham & Watkins",
    "Gibson Dunn",
  ];

  return (
    <section className="harvey-section bg-harvey-dark">
      <div className="harvey-container">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg font-harvey-serif text-harvey-light mb-4">
            Built for Industry Leaders
          </h2>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12"
              >
                <div className="w-48 h-16 bg-harvey-dark-secondary border border-harvey-text-muted/20 rounded-lg flex items-center justify-center">
                  <span className="text-harvey-text-muted text-sm font-medium">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-harvey-dark to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-harvey-dark to-transparent pointer-events-none" />
        </div>

        <div className="text-center mt-12">
          <a
            href="#customers"
            className="text-harvey-light hover:text-harvey-text-muted transition-colors duration-200 text-sm font-medium border-b border-harvey-light/20 hover:border-harvey-text-muted/20 pb-1"
          >
            See Customers
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
