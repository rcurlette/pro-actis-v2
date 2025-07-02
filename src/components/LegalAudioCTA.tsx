import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  Headphones,
  MessageSquare,
  Bell,
  TrendingUp,
  Users,
} from "lucide-react";

const LegalAudioCTA = () => {
  const features = [
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Expert Audio Content",
      description: "AI insights from leading legal technology experts",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Latest Trends",
      description: "Stay current with legal AI and technology developments",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Community Discussion",
      description: "Engage with fellow legal professionals in comments",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Content Notifications",
      description: "Get alerts for new episodes and legal AI updates",
    },
  ];

  const handleNavigateToAudio = () => {
    window.location.href = "/legal-audio";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-proactis-primary/5 to-proactis-secondary/5">
      <div className="proactis-container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-proactis-dark mb-4">
              Legal AI Insights Hub
            </h2>
            <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto">
              Discover the latest in legal AI through expert audio content,
              practical insights, and community discussions. Stay ahead of the
              curve with exclusive content for legal professionals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Preview */}
            <div>
              <Card className="mb-8 overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=200&fit=crop"
                    alt="Legal AI Content"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border-2 border-white/50">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-proactis-primary text-white px-2 py-1 rounded text-xs font-medium">
                      NEW EPISODE
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/60 text-white px-2 py-1 rounded text-xs">
                      24:35
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 leading-tight">
                    AI Revolution in Legal Discovery: What Every Lawyer Needs to
                    Know
                  </h3>
                  <p className="text-sm text-proactis-gray-600 mb-3">
                    A comprehensive deep-dive into how artificial intelligence
                    is transforming legal discovery processes...
                  </p>
                  <div className="flex items-center justify-between text-xs text-proactis-gray-500">
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      47 likes
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      12 comments
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button
                  onClick={handleNavigateToAudio}
                  size="lg"
                  className="proactis-button-primary px-8"
                >
                  <Headphones className="w-5 h-5 mr-2" />
                  Explore All Audio Content
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-proactis-dark mb-6">
                What You'll Find in the Legal AI Hub
              </h3>

              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-proactis-primary/20 rounded-lg p-2 flex-shrink-0">
                    <div className="text-proactis-primary">{feature.icon}</div>
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

              <Card className="bg-gradient-to-r from-proactis-secondary/20 to-proactis-primary/20 border-0 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Bell className="w-5 h-5 text-proactis-primary mr-2" />
                    <h4 className="font-semibold text-proactis-dark">
                      Stay Updated
                    </h4>
                  </div>
                  <p className="text-sm text-proactis-gray-600 mb-4">
                    Subscribe to notifications and never miss new content about
                    AI trends, legal technology, and practice innovations.
                  </p>
                  <Button
                    onClick={handleNavigateToAudio}
                    variant="outline"
                    className="border-proactis-primary text-proactis-primary hover:bg-proactis-primary hover:text-white"
                  >
                    Join the Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAudioCTA;
