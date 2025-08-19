const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      title: "Managing Partner",
      firm: "Dubois & Associates, Paris",
      image:
        "https://images.pexels.com/photos/4427428/pexels-photo-4427428.jpeg",
      quote:
        "Pro-Actis transformed our practice completely. The AI solutions they implemented increased our client acquisition by 35% and significantly reduced contract review time. Their European-wide expertise is unmatched.",
      country: "🇫🇷",
      results: "+35% Client Growth",
    },
    {
      name: "Dr. Andreas Müller",
      title: "Senior Legal Counsel",
      firm: "Tech Legal Solutions, Berlin",
      image:
        "https://images.pexels.com/photos/7428212/pexels-photo-7428212.jpeg",
      quote:
        "The workshop series was exceptional. Having experts come to our Berlin office and provide customized AI training for our diverse team made all the difference. ROI was visible within 3 months.",
      country: "🇩🇪",
      results: "3 Month ROI",
    },
    {
      name: "Isabella Rodriguez",
      title: "Head of Innovation",
      firm: "Barcelona Legal Group",
      image:
        "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg",
      quote:
        "Pro-Actis doesn't just provide tools - they provide transformation. Our multicultural team now leverages AI for everything from lead generation to risk analysis. Revenue up 12% this year.",
      country: "🇪🇸",
      results: "+12% Revenue",
    },
  ];

  return (
    <section className="proactis-section bg-gradient-to-br from-proactis-light/30 to-proactis-gray-50">
      <div className="proactis-container">
        <div className="text-center mb-16">
          <div className="proactis-badge mb-6">🌍 Trusted Across Europe</div>
          <h2 className="text-heading-xl font-bold text-proactis-dark mb-6 text-balance">
            Join 200+ European Law Firms Already Growing with AI
          </h2>
          <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto text-pretty">
            Legal professionals across Europe trust Pro-Actis to implement AI
            solutions that deliver measurable results and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl shadow-lg border border-proactis-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.firm}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-proactis-dark/50 to-transparent"></div>

                {/* Country flag and results */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="text-2xl">{testimonial.country}</span>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-proactis-success">
                      {testimonial.results}
                    </span>
                  </div>
                </div>

                {/* Quote icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-proactis-primary/90 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <blockquote className="text-proactis-gray-600 mb-6 text-pretty leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-proactis-gray-200 pt-6">
                  <div className="font-semibold text-proactis-dark text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-proactis-primary font-medium">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-proactis-gray-500">
                    {testimonial.firm}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TestimonialsSection;
