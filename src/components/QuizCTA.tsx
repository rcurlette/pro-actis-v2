import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Clock,
  FileText,
  Calendar,
  ChevronRight,
} from "lucide-react";

interface QuizCTAProps {
  onStartQuiz?: () => void;
}

const QuizCTA = ({ onStartQuiz }: QuizCTAProps) => {
  const handleStartQuiz = () => {
    if (onStartQuiz) {
      onStartQuiz();
    } else {
      // Navigate to assessment page
      window.location.href = "/assessment";
    }
  };

  const benefits = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Benchmark Your Position",
      description: "See how your AI readiness compares to industry standards",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "5-Minute Assessment",
      description: "Quick evaluation with immediate, actionable results",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Detailed PDF Report",
      description: "Comprehensive analysis with strategic recommendations",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Free Discovery Call",
      description: "30-minute consultation to discuss your AI roadmap",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-proactis-light/10 to-white">
      <div className="proactis-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-proactis-dark mb-4">
              Discover Your AI Readiness Score
            </h2>
            <p className="text-xl text-proactis-gray-600 max-w-2xl mx-auto">
              Take our comprehensive assessment to understand where your firm
              stands with AI adoption and receive a personalized implementation
              strategy.
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-proactis-primary to-proactis-primary/90 text-white mb-12">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  <BarChart3 className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                AI Readiness Assessment
              </h3>
              <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                Evaluate your firm's AI maturity across client expectations,
                current implementation, and readiness for advanced tools.
              </p>
              <div className="flex items-center justify-center space-x-6 mb-8 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 Minutes</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>16 Questions</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  <span>Instant Results</span>
                </div>
              </div>
              <Button
                onClick={handleStartQuiz}
                size="lg"
                className="bg-white text-proactis-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Start Free Assessment
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-proactis-light/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-proactis-primary">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-proactis-dark mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-proactis-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What You'll Learn */}
          <Card className="border border-proactis-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-proactis-dark mb-6 text-center">
                What You'll Discover
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-proactis-dark mb-3">
                    Assessment Areas:
                  </h4>
                  <ul className="space-y-2 text-proactis-gray-600">
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Client AI expectations and market pressure
                    </li>
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Current AI tool adoption and integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Team readiness and technology infrastructure
                    </li>
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Investment capacity and implementation urgency
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-proactis-dark mb-3">
                    Your Personalized Report Includes:
                  </h4>
                  <ul className="space-y-2 text-proactis-gray-600">
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Overall AI readiness score and category breakdown
                    </li>
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Competitive positioning analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Strategic recommendations and priority actions
                    </li>
                    <li className="flex items-start">
                      <span className="text-proactis-primary mr-2">•</span>
                      Custom AI implementation roadmap
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <p className="text-sm text-proactis-gray-500 mb-4">
              Join 500+ law firms who have discovered their AI potential
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-sm font-medium">GDPR Compliant</span>
              <span className="text-sm font-medium">•</span>
              <span className="text-sm font-medium">No Spam Guarantee</span>
              <span className="text-sm font-medium">•</span>
              <span className="text-sm font-medium">Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizCTA;
