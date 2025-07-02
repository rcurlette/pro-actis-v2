import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Play,
  Pause,
  Volume2,
  MessageSquare,
  Bell,
  Clock,
  Calendar,
  User,
  Heart,
  Share2,
} from "lucide-react";

interface AudioContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishDate: string;
  imageUrl: string;
  audioUrl: string;
  category: string;
  transcript: string;
  commentCount: number;
  likes: number;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  audioId: string;
}

const LegalAudioHub = () => {
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [showComments, setShowComments] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Sarah Johnson, Partner at LegalTech Associates",
      content:
        "Excellent analysis on AI compliance frameworks. This is exactly what our firm needed to understand the regulatory landscape.",
      timestamp: "2 hours ago",
      audioId: "1",
    },
    {
      id: "2",
      author: "Michael Chen, Corporate Lawyer",
      content:
        "The practical tips on implementing AI tools in document review have saved us countless hours. Thank you for this insight!",
      timestamp: "1 day ago",
      audioId: "1",
    },
    {
      id: "3",
      author: "Emily Rodriguez, Legal Tech Consultant",
      content:
        "Great discussion on ethics in AI. Would love to hear more about client data protection in future episodes.",
      timestamp: "3 days ago",
      audioId: "2",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [notificationEmail, setNotificationEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { toast } = useToast();

  const audioContent: AudioContent[] = [
    {
      id: "1",
      title:
        "AI Revolution in Legal Discovery: What Every Lawyer Needs to Know",
      description:
        "A comprehensive deep-dive into how artificial intelligence is transforming legal discovery processes, reducing costs by up to 70%, and improving accuracy in document review. Learn about the latest tools, compliance requirements, and best practices for implementation.",
      duration: "24:35",
      publishDate: "Dec 20, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      audioUrl: "#", // Placeholder for demo
      category: "Legal Technology",
      transcript:
        "In this episode, we explore how AI is revolutionizing legal discovery...",
      commentCount: 12,
      likes: 47,
    },
    {
      id: "2",
      title:
        "Ethics and AI: Navigating Professional Responsibility in the Digital Age",
      description:
        "Understanding the ethical implications of AI adoption in legal practice. Discussion on client confidentiality, bias in AI systems, and maintaining professional standards while leveraging advanced technology for competitive advantage.",
      duration: "31:42",
      publishDate: "Dec 18, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
      audioUrl: "#", // Placeholder for demo
      category: "Legal Ethics",
      transcript: "Today we discuss the critical ethical considerations...",
      commentCount: 8,
      likes: 35,
    },
    {
      id: "3",
      title:
        "Contract Analysis with AI: Real-World Implementation Success Stories",
      description:
        "Case studies from top law firms implementing AI-powered contract analysis. Learn about ROI, client satisfaction improvements, risk reduction strategies, and step-by-step implementation guides for different firm sizes.",
      duration: "28:18",
      publishDate: "Dec 15, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      audioUrl: "#", // Placeholder for demo
      category: "Contract Law",
      transcript: "We're joined by partners from three different firms...",
      commentCount: 15,
      likes: 62,
    },
    {
      id: "4",
      title: "Future of Legal Research: AI vs Traditional Methods",
      description:
        "Comparative analysis of AI-powered legal research tools versus traditional research methods. Explore accuracy rates, time savings, cost implications, and how to train your team for hybrid research approaches.",
      duration: "26:07",
      publishDate: "Dec 12, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      audioUrl: "#", // Placeholder for demo
      category: "Legal Research",
      transcript:
        "Legal research is undergoing a fundamental transformation...",
      commentCount: 9,
      likes: 41,
    },
  ];

  const handlePlayPause = (audioId: string) => {
    if (currentPlaying === audioId) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(audioId);
    }
  };

  const handleAddComment = (audioId: string) => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Anonymous Lawyer", // In real app, this would be the logged-in user
      content: newComment,
      timestamp: "Just now",
      audioId: audioId,
    };

    setComments([comment, ...comments]);
    setNewComment("");

    toast({
      title: "Comment Added",
      description: "Your comment has been posted successfully.",
    });
  };

  const handleNotificationSignup = async () => {
    if (!notificationEmail.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    // Check if we're in development mode
    const isDevelopment =
      window.location.hostname === "localhost" ||
      window.location.hostname.includes("fly.dev") ||
      window.location.hostname.includes("127.0.0.1");

    if (isDevelopment) {
      // Simulate successful subscription in development
      setIsSubscribed(true);
      toast({
        title: "✅ Development Mode - Simulation Complete",
        description:
          "Newsletter subscription simulated. Deploy to Netlify to enable real email notifications.",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("form-name", "newsletter-subscription");
      formData.append("bot-field", "");
      formData.append("email", notificationEmail.trim());
      formData.append("source", "Legal Audio Hub");

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubscribed(true);
        toast({
          title: "Subscription Successful!",
          description:
            "You'll receive notifications about new legal AI content at " +
            notificationEmail,
        });
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Subscription Error",
        description: "Unable to subscribe right now. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const getCommentsForAudio = (audioId: string) => {
    return comments.filter((comment) => comment.audioId === audioId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="proactis-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-end mb-4">
            <a
              href="/audio-admin"
              className="text-sm text-proactis-gray-500 hover:text-proactis-primary transition-colors"
            >
              Content Management →
            </a>
          </div>
          <h2 className="text-4xl font-bold text-proactis-dark mb-4">
            Legal AI Insights Hub
          </h2>
          <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert audio content on AI trends, legal technology,
            and practice innovations. Listen, learn, and connect with fellow
            legal professionals.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {audioContent.map((content) => (
            <Card
              key={content.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Audio Image */}
              <div className="relative">
                <img
                  src={content.imageUrl}
                  alt={content.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    onClick={() => handlePlayPause(content.id)}
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white"
                  >
                    {currentPlaying === content.id ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-proactis-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {content.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/60 text-white px-2 py-1 rounded text-sm">
                    {content.duration}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  {content.title}
                </CardTitle>
                <div className="flex items-center text-sm text-proactis-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {content.publishDate}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.duration}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-proactis-gray-600 leading-relaxed">
                  {content.description}
                </p>

                {/* Audio Controls */}
                {currentPlaying === content.id && (
                  <div className="bg-proactis-light/20 rounded-lg p-4">
                    <div className="flex items-center space-x-4 mb-3">
                      <Button
                        size="sm"
                        onClick={() => handlePlayPause(content.id)}
                        className="proactis-button-primary"
                      >
                        <Pause className="w-4 h-4" />
                      </Button>
                      <div className="flex-1 bg-proactis-gray-300 rounded-full h-2">
                        <div className="bg-proactis-primary h-2 rounded-full w-1/3"></div>
                      </div>
                      <Volume2 className="w-4 h-4 text-proactis-gray-500" />
                    </div>
                    <p className="text-sm text-proactis-gray-600 italic">
                      "Playing: {content.transcript}..."
                    </p>
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-proactis-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-proactis-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm">{content.likes}</span>
                    </button>
                    <button
                      onClick={() =>
                        setShowComments(
                          showComments === content.id ? null : content.id,
                        )
                      }
                      className="flex items-center text-proactis-gray-500 hover:text-proactis-primary transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {content.commentCount} comments
                      </span>
                    </button>
                  </div>
                  <button className="flex items-center text-proactis-gray-500 hover:text-proactis-primary transition-colors">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                {/* Comments Section */}
                {showComments === content.id && (
                  <div className="mt-6 pt-6 border-t border-proactis-gray-200">
                    <h4 className="font-semibold mb-4">Comments</h4>

                    {/* Add Comment */}
                    <div className="mb-6">
                      <Textarea
                        placeholder="Share your thoughts on this episode..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mb-3"
                      />
                      <Button
                        onClick={() => handleAddComment(content.id)}
                        disabled={!newComment.trim()}
                        className="proactis-button-primary"
                      >
                        Post Comment
                      </Button>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {getCommentsForAudio(content.id).map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-slate-50 rounded-lg p-4"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="bg-proactis-primary/20 rounded-full p-2">
                              <User className="w-4 h-4 text-proactis-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-sm">
                                  {comment.author}
                                </span>
                                <span className="text-xs text-proactis-gray-500">
                                  {comment.timestamp}
                                </span>
                              </div>
                              <p className="text-sm text-proactis-gray-700">
                                {comment.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-proactis-primary to-proactis-primary/80 text-white">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 rounded-full p-3">
                <Bell className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Never Miss New Legal AI Content
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Get notified when we publish new episodes covering AI trends,
              legal technology innovations, and practical implementation guides
              for law firms.
            </p>

            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={notificationEmail}
                  onChange={(e) => setNotificationEmail(e.target.value)}
                  className="bg-white text-proactis-dark placeholder:text-proactis-gray-500"
                />
                <Button
                  onClick={handleNotificationSignup}
                  className="bg-white text-proactis-primary hover:bg-gray-100 whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-medium">✅ You're subscribed!</p>
                  <p className="text-sm opacity-90">
                    You'll receive notifications about new content.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LegalAudioHub;
