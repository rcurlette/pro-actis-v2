import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Sparkles,
  FileText,
  Share2,
  Download,
  Mail,
  Brain,
  Target,
} from "lucide-react";

const ContentGeneratorCTA = () => {
  const features = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Powered Ideas",
      description: "Generate content using Perplexity AI or Claude",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Legal Focus",
      description: "Tailored for law firms and legal professionals",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Multiple Formats",
      description: "Blog posts, videos, podcasts, and more",
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Easy Sharing",
      description: "Export to PDF or send via email instantly",
    },
  ];

  const handleNavigateToGenerator = () => {
    window.location.href = "/content-generator";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-proactis-light/20">
      <div className="proactis-container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-proactis-dark mb-4">
              AI Content Idea Generator
            </h2>
            <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto">
              Never run out of content ideas again. Our AI-powered generator
              creates compelling, targeted content suggestions for your legal
              practice in seconds.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo/Preview */}
            <div>
              <Card className="mb-8 overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">
                        Content Ideas Generated
                      </h3>
                      <p className="opacity-90">
                        Based on: "AI in Contract Review"
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-proactis-primary pl-4">
                      <h4 className="font-semibold text-proactis-dark">
                        Blog Post Idea #1
                      </h4>
                      <p className="text-sm text-proactis-gray-600 mt-1">
                        "5 Ways AI Contract Review Saves Law Firms 40% on Due
                        Diligence"
                      </p>
                    </div>
                    <div className="border-l-4 border-proactis-secondary pl-4">
                      <h4 className="font-semibold text-proactis-dark">
                        Video Script #2
                      </h4>
                      <p className="text-sm text-proactis-gray-600 mt-1">
                        "Client Education: What to Expect from AI-Enhanced Legal
                        Services"
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-proactis-dark">
                        LinkedIn Post #3
                      </h4>
                      <p className="text-sm text-proactis-gray-600 mt-1">
                        "The Future of Contract Law: Why AI Adoption is No
                        Longer Optional"
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-6">
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="w-3 h-3 mr-1" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button
                  onClick={handleNavigateToGenerator}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try Content Generator
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-proactis-dark mb-6">
                Powered by Advanced AI Technology
              </h3>

              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-2 flex-shrink-0">
                    <div className="text-purple-600">{feature.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-proactis-dark mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-proactis-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Brain className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-proactis-dark">
                      How It Works
                    </h4>
                  </div>
                  <ol className="text-sm text-proactis-gray-600 space-y-2">
                    <li>
                      <strong>1.</strong> Enter your topic and practice area
                    </li>
                    <li>
                      <strong>2.</strong> Select content type and target
                      audience
                    </li>
                    <li>
                      <strong>3.</strong> AI generates detailed content ideas
                      with outlines
                    </li>
                    <li>
                      <strong>4.</strong> Export or share your results instantly
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-4 h-4 text-green-600 mr-2" />
                  <span className="font-medium text-green-800">
                    Free to Try
                  </span>
                </div>
                <p className="text-sm text-green-700">
                  Generate unlimited content ideas with our AI-powered system.
                  No signup required to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGeneratorCTA;
