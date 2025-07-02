import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Share2,
  Copy,
  Download,
  Mail,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  FileText,
  Users,
  Sparkles,
} from "lucide-react";

interface AudioContent {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  transcript: string;
}

interface LinkedInPost {
  hook: string;
  content: string;
  hashtags: string[];
  callToAction: string;
  postType: "educational" | "thought-leadership" | "case-study" | "tip";
}

interface LinkedInPostGeneratorProps {
  audioContent: AudioContent;
  isOpen: boolean;
  onClose: () => void;
}

const LinkedInPostGenerator = ({
  audioContent,
  isOpen,
  onClose,
}: LinkedInPostGeneratorProps) => {
  const [generatedPosts, setGeneratedPosts] = useState<LinkedInPost[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({
    email: "",
    name: "",
  });

  const { toast } = useToast();

  const generateLinkedInPosts = async () => {
    setIsGenerating(true);

    try {
      // Simulate AI API call - in production, this would use the configured API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate mock LinkedIn posts based on the audio content
      const mockPosts: LinkedInPost[] = [
        {
          hook: "🚀 Just learned something game-changing about AI in legal practice...",
          content: `Most lawyers think AI is just about document review.

They're missing the bigger picture.

After diving deep into ${audioContent.title.toLowerCase()}, here's what every legal professional needs to know:

✅ AI can transform client relationships
✅ Efficiency gains go beyond time savings  
✅ Strategic implementation beats random adoption

The legal industry is at a tipping point.

Those who understand this will lead.
Those who don't will follow.

What's your firm's AI strategy?`,
          hashtags: [
            "#LegalTech",
            "#AIinLaw",
            "#LegalInnovation",
            "#FutureOfLaw",
            "#LegalStrategy",
          ],
          callToAction:
            "What's your experience with AI in legal practice? Share in the comments! 👇",
          postType: "thought-leadership",
        },
        {
          hook: "💡 3 AI insights every lawyer should know (from latest industry research):",
          content: `1️⃣ ${audioContent.category} practices using AI see 40% faster case resolution

2️⃣ Client satisfaction increases by 65% when AI enhances service delivery

3️⃣ Firms implementing AI strategically report 28% revenue growth

The data doesn't lie.

AI isn't replacing lawyers – it's empowering the smart ones.

Source: Recent analysis on ${audioContent.title.toLowerCase()}

Which insight surprised you most?`,
          hashtags: [
            "#LegalAI",
            "#LawFirmGrowth",
            "#LegalTechnology",
            "#ClientSuccess",
          ],
          callToAction:
            "Bookmark this for later and follow for more legal AI insights! 🔖",
          postType: "educational",
        },
        {
          hook: "📊 Real talk: Here's what ${audioContent.category} firms get wrong about AI...",
          content: `They focus on the wrong metrics.

❌ "AI will cut costs"
✅ "AI will increase value"

❌ "AI replaces human judgment"  
✅ "AI enhances human expertise"

❌ "AI is too complex"
✅ "AI strategy requires planning"

The firms thriving with AI understand this distinction.

They're not just saving time – they're delivering better outcomes.

Key takeaway from ${audioContent.title}:
Success comes from strategic implementation, not random tool adoption.

Are you measuring AI impact correctly?`,
          hashtags: [
            "#LegalStrategy",
            "#AIImplementation",
            "#LawFirmSuccess",
            "#LegalLeadership",
          ],
          callToAction:
            "Share your AI success story in the comments! Let's learn from each other. 💬",
          postType: "case-study",
        },
        {
          hook: "⚡ Quick AI tip for busy lawyers:",
          content: `Start with ONE process.

Don't try to AI-fy your entire practice overnight.

Pick your biggest pain point:
• Document review taking forever?
• Client intake eating up time?
• Research consuming whole days?

Master AI for that ONE thing first.

Then expand.

This insight from ${audioContent.title} changed how I think about AI adoption.

Simple beats complex every time.`,
          hashtags: [
            "#LegalTip",
            "#AIStrategy",
            "#ProductivityHack",
            "#LegalEfficiency",
          ],
          callToAction:
            "What's your biggest time-waster? Let me know below! ⏰",
          postType: "tip",
        },
      ];

      setGeneratedPosts(mockPosts);

      toast({
        title: "LinkedIn Posts Generated!",
        description: `${mockPosts.length} LinkedIn posts created based on the audio content.`,
      });
    } catch (error) {
      console.error("LinkedIn post generation error:", error);
      toast({
        title: "Generation Failed",
        description:
          "Unable to generate LinkedIn posts. Please try again or check your API configuration.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyPost = (post: LinkedInPost) => {
    const fullPost = `${post.hook}

${post.content}

${post.hashtags.join(" ")}

${post.callToAction}`;

    navigator.clipboard.writeText(fullPost);
    toast({
      title: "Post Copied!",
      description: "LinkedIn post copied to clipboard.",
    });
  };

  const downloadAllPosts = () => {
    const content = `LINKEDIN POSTS
Generated from: ${audioContent.title}
Audio Category: ${audioContent.category}
Generated: ${new Date().toLocaleDateString()}

${generatedPosts
  .map(
    (post, index) => `
POST ${index + 1} - ${post.postType.toUpperCase()}
================

${post.hook}

${post.content}

HASHTAGS: ${post.hashtags.join(" ")}

CALL TO ACTION: ${post.callToAction}

`,
  )
  .join("\n")}

Generated by Pro-Actis AI Content Generator
Contact: https://pro-actis.com
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `linkedin-posts-${audioContent.title.replace(/\s+/g, "-").toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Started",
      description: "Your LinkedIn posts are being downloaded.",
    });
  };

  const sendByEmail = async () => {
    if (!emailData.email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Create form data for Netlify submission
      const formData = new FormData();
      formData.append("form-name", "linkedin-posts-email");
      formData.append("bot-field", "");
      formData.append("name", emailData.name);
      formData.append("email", emailData.email);
      formData.append("audioTitle", audioContent.title);
      formData.append("audioCategory", audioContent.category);
      formData.append("linkedinPosts", JSON.stringify(generatedPosts));
      formData.append("timestamp", new Date().toISOString());

      // Check if we're in development mode
      const isDevelopment =
        window.location.hostname === "localhost" ||
        window.location.hostname.includes("fly.dev") ||
        window.location.hostname.includes("127.0.0.1");

      if (isDevelopment) {
        toast({
          title: "✅ Development Mode - Email Simulated",
          description:
            "Email sending simulated. Deploy to Netlify to enable real email delivery.",
        });
      } else {
        const response = await fetch("/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          toast({
            title: "Email Sent Successfully!",
            description: "Your LinkedIn posts have been sent to your email.",
          });
        } else {
          throw new Error("Email sending failed");
        }
      }

      setShowEmailForm(false);
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Email Failed",
        description:
          "Unable to send email. Please try downloading the posts instead.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-proactis-dark flex items-center">
                <Share2 className="w-6 h-6 mr-2 text-proactis-primary" />
                LinkedIn Post Generator
              </h2>
              <p className="text-proactis-gray-600 mt-1">
                Generate engaging LinkedIn posts from: {audioContent.title}
              </p>
            </div>
            <Button variant="outline" onClick={onClose}>
              ✕
            </Button>
          </div>
        </div>

        <div className="p-6">
          {!generatedPosts.length && !isGenerating && (
            <div className="text-center py-12">
              <Lightbulb className="w-16 h-16 text-proactis-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-proactis-dark mb-2">
                Transform Audio Content into LinkedIn Posts
              </h3>
              <p className="text-proactis-gray-600 mb-6 max-w-md mx-auto">
                Generate professional LinkedIn posts that capture key insights
                from your audio content and engage your legal network.
              </p>
              <Button
                onClick={generateLinkedInPosts}
                className="proactis-button-primary"
                size="lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate LinkedIn Posts
              </Button>
            </div>
          )}

          {isGenerating && (
            <div className="text-center py-12">
              <RefreshCw className="w-12 h-12 text-proactis-primary mx-auto mb-4 animate-spin" />
              <h3 className="text-xl font-semibold text-proactis-dark mb-2">
                Creating Your LinkedIn Posts...
              </h3>
              <p className="text-proactis-gray-600">
                Analyzing audio content and generating engaging posts for your
                professional network.
              </p>
            </div>
          )}

          {generatedPosts.length > 0 && (
            <div className="space-y-6">
              {/* Action Buttons */}
              <div className="flex items-center justify-between p-4 bg-proactis-light/10 rounded-lg">
                <div>
                  <h3 className="font-semibold text-proactis-dark">
                    {generatedPosts.length} LinkedIn Posts Generated
                  </h3>
                  <p className="text-sm text-proactis-gray-600">
                    Ready to share with your professional network
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button
                    onClick={downloadAllPosts}
                    variant="outline"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                  <Button
                    onClick={() => setShowEmailForm(true)}
                    variant="outline"
                    size="sm"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Posts
                  </Button>
                </div>
              </div>

              {/* Generated Posts */}
              {generatedPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                        LinkedIn Post #{index + 1}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium capitalize">
                          {post.postType}
                        </span>
                        <Button
                          onClick={() => copyPost(post)}
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-proactis-dark mb-2">
                          Hook:
                        </h4>
                        <p className="text-blue-600 font-medium">{post.hook}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-proactis-dark mb-2">
                          Content:
                        </h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                            {post.content}
                          </pre>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-proactis-dark mb-2">
                            Hashtags:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {post.hashtags.map((hashtag, i) => (
                              <span
                                key={i}
                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                              >
                                {hashtag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-proactis-dark mb-2">
                            Call to Action:
                          </h4>
                          <p className="text-sm text-proactis-gray-600 italic">
                            {post.callToAction}
                          </p>
                        </div>
                      </div>

                      {/* Preview */}
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-proactis-dark mb-2">
                          LinkedIn Preview:
                        </h4>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-proactis-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                              YN
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">Your Name</div>
                              <div className="text-xs text-gray-500">
                                Lawyer • AI Strategy Expert
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="font-medium text-blue-600">
                              {post.hook}
                            </p>
                            <div className="whitespace-pre-wrap">
                              {post.content}
                            </div>
                            <div className="text-blue-600">
                              {post.hashtags.join(" ")}
                            </div>
                            <p className="italic">{post.callToAction}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Email Form Modal */}
        {showEmailForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-proactis-primary" />
                  Email LinkedIn Posts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={emailData.email}
                    onChange={(e) =>
                      setEmailData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="name">Name (Optional)</Label>
                  <Input
                    id="name"
                    value={emailData.name}
                    onChange={(e) =>
                      setEmailData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Your name"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-700">
                    We'll send you all {generatedPosts.length} LinkedIn posts
                    with formatting ready for copy-paste.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowEmailForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={sendByEmail}
                    className="flex-1 proactis-button-primary"
                  >
                    Send Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedInPostGenerator;
