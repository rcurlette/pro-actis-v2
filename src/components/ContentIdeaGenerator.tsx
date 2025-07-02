import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Lightbulb,
  Send,
  Download,
  Mail,
  Copy,
  Sparkles,
  FileText,
  Users,
  Target,
  MessageSquare,
  Share2,
  RefreshCw,
} from "lucide-react";

interface ContentIdea {
  title: string;
  outline: string[];
  targetAudience: string;
  keyTakeaways: string[];
  callToAction: string;
  contentType: string;
  estimatedLength: string;
}

interface GeneratedContent {
  ideas: ContentIdea[];
  timestamp: Date;
  topic: string;
  practiceArea: string;
}

const ContentIdeaGenerator = () => {
  const [formData, setFormData] = useState({
    topic: "",
    practiceArea: "",
    contentType: "",
    audienceLevel: "",
    additionalDetails: "",
  });

  const [generatedContent, setGeneratedContent] =
    useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({
    email: "",
    name: "",
    firmName: "",
  });

  const { toast } = useToast();

  const practiceAreas = [
    "Corporate Law",
    "Criminal Law",
    "Family Law",
    "Real Estate Law",
    "Intellectual Property",
    "Employment Law",
    "Personal Injury",
    "Tax Law",
    "Immigration Law",
    "Environmental Law",
    "Healthcare Law",
    "General Practice",
  ];

  const contentTypes = [
    "Blog Post",
    "Video Script",
    "Podcast Episode",
    "Newsletter Article",
    "Social Media Series",
    "Webinar Presentation",
    "Client Education Material",
    "Speaking Presentation",
    "White Paper",
    "Case Study",
  ];

  const audienceLevels = [
    "Legal Professionals",
    "Potential Clients",
    "Corporate Decision Makers",
    "Small Business Owners",
    "General Public",
    "Law Students",
    "Industry Experts",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateContent = async () => {
    if (!formData.topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic for content generation.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Check if API is configured
      const apiConfig = localStorage.getItem("api-config");
      if (!apiConfig) {
        throw new Error("API not configured");
      }

      // Simulate AI API call - in production, this would call the configured API
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Generate mock content based on the input
      const mockContent: GeneratedContent = {
        topic: formData.topic,
        practiceArea: formData.practiceArea,
        timestamp: new Date(),
        ideas: [
          {
            title: `AI Implementation Guide for ${formData.practiceArea || "Legal Practice"}: ${formData.topic}`,
            outline: [
              "Current state of AI in legal practice",
              "Specific applications for your practice area",
              "Implementation strategies and best practices",
              "Measuring ROI and success metrics",
              "Future trends and preparation strategies",
            ],
            targetAudience: formData.audienceLevel || "Legal Professionals",
            keyTakeaways: [
              "Understand practical AI applications in legal work",
              "Learn step-by-step implementation strategies",
              "Discover metrics for measuring AI success",
              "Stay ahead of industry trends and changes",
            ],
            callToAction: "Schedule a consultation to develop your AI strategy",
            contentType: formData.contentType || "Blog Post",
            estimatedLength: "15-20 minutes read",
          },
          {
            title: `Client-Focused Guide: How AI Improves ${formData.practiceArea || "Legal"} Services`,
            outline: [
              "Benefits of AI-enhanced legal services",
              "Real-world examples and case studies",
              "What clients can expect from AI-powered firms",
              "Transparency and ethical considerations",
              "Choosing an AI-enabled legal partner",
            ],
            targetAudience: "Potential Clients",
            keyTakeaways: [
              "Understand how AI improves legal service quality",
              "Learn about faster turnaround times and cost savings",
              "Discover the importance of choosing tech-forward firms",
              "Feel confident about AI use in legal work",
            ],
            callToAction: "Contact us to learn about our AI-enhanced services",
            contentType: "Client Education Material",
            estimatedLength: "10-12 minutes read",
          },
          {
            title: `The Future of ${formData.practiceArea || "Legal Practice"}: ${formData.topic} and Beyond`,
            outline: [
              "Emerging AI technologies in legal field",
              "Predictions for the next 5 years",
              "Preparing your practice for change",
              "Competitive advantages of early adoption",
              "Building an AI-ready legal team",
            ],
            targetAudience: "Legal Professionals",
            keyTakeaways: [
              "Anticipate future changes in legal technology",
              "Position your practice as an industry leader",
              "Understand the competitive landscape",
              "Develop long-term AI strategy",
            ],
            callToAction: "Join our AI transformation program",
            contentType: "Webinar Presentation",
            estimatedLength: "45-60 minutes presentation",
          },
        ],
      };

      setGeneratedContent(mockContent);

      toast({
        title: "Content Ideas Generated!",
        description: "3 unique content ideas have been created for your topic.",
      });
    } catch (error) {
      console.error("Content generation error:", error);
      toast({
        title: "Generation Failed",
        description:
          "Unable to generate content ideas. Please check your API configuration or try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to Clipboard",
      description: "Content has been copied to your clipboard.",
    });
  };

  const generatePDF = () => {
    if (!generatedContent) return;

    // Create formatted text for PDF
    const content = `
AI CONTENT IDEAS REPORT
Generated by Pro-Actis AI Content Generator

Topic: ${generatedContent.topic}
Practice Area: ${generatedContent.practiceArea}
Generated: ${generatedContent.timestamp.toLocaleDateString()}

${generatedContent.ideas
  .map(
    (idea, index) => `
CONTENT IDEA ${index + 1}
================

Title: ${idea.title}

Content Type: ${idea.contentType}
Target Audience: ${idea.targetAudience}
Estimated Length: ${idea.estimatedLength}

OUTLINE:
${idea.outline.map((point, i) => `${i + 1}. ${point}`).join("\n")}

KEY TAKEAWAYS:
${idea.keyTakeaways.map((takeaway, i) => `• ${takeaway}`).join("\n")}

CALL TO ACTION:
${idea.callToAction}

`,
  )
  .join("\n")}

Generated by Pro-Actis AI Content Generator
Contact: https://pro-actis.com
    `;

    // Create and download file
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `content-ideas-${generatedContent.topic.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Started",
      description: "Your content ideas report is being downloaded.",
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

    if (!generatedContent) return;

    try {
      // Create form data for Netlify submission
      const formData = new FormData();
      formData.append("form-name", "content-ideas-email");
      formData.append("bot-field", "");
      formData.append("name", emailData.name);
      formData.append("email", emailData.email);
      formData.append("firmName", emailData.firmName);
      formData.append("topic", generatedContent.topic);
      formData.append("practiceArea", generatedContent.practiceArea);
      formData.append("contentIdeas", JSON.stringify(generatedContent.ideas));
      formData.append("timestamp", generatedContent.timestamp.toISOString());

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
            description:
              "Your content ideas have been sent to your email address.",
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
          "Unable to send email. Please try downloading the PDF instead.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-proactis-light/10 to-white py-20">
      <div className="proactis-container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-proactis-dark mb-4">
            <Lightbulb className="w-10 h-10 text-proactis-primary inline mr-3" />
            AI Content Idea Generator
          </h1>
          <p className="text-xl text-proactis-gray-600 max-w-3xl mx-auto">
            Generate compelling content ideas for your legal practice using AI.
            Get detailed outlines, target audiences, and strategic
            recommendations for your content marketing efforts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-proactis-primary" />
                Generate Content Ideas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="topic">
                  Content Topic <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  placeholder="e.g., AI in contract review, Legal ethics in digital age"
                  required
                />
              </div>

              <div>
                <Label htmlFor="practiceArea">Practice Area</Label>
                <Select
                  value={formData.practiceArea}
                  onValueChange={(value) =>
                    handleSelectChange("practiceArea", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select practice area" />
                  </SelectTrigger>
                  <SelectContent>
                    {practiceAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="contentType">Content Type</Label>
                <Select
                  value={formData.contentType}
                  onValueChange={(value) =>
                    handleSelectChange("contentType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="audienceLevel">Target Audience</Label>
                <Select
                  value={formData.audienceLevel}
                  onValueChange={(value) =>
                    handleSelectChange("audienceLevel", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    {audienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="additionalDetails">
                  Additional Details (Optional)
                </Label>
                <Textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  placeholder="Specific focus areas, recent trends, client concerns..."
                  rows={3}
                />
              </div>

              <Button
                onClick={generateContent}
                disabled={isGenerating || !formData.topic.trim()}
                className="w-full proactis-button-primary"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Generate Content Ideas
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Display */}
          <div className="space-y-6">
            {!generatedContent && !isGenerating && (
              <Card className="bg-gradient-to-r from-proactis-primary/10 to-proactis-secondary/10 border-proactis-primary/20">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="w-16 h-16 text-proactis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-proactis-dark mb-2">
                    Ready to Generate Ideas?
                  </h3>
                  <p className="text-proactis-gray-600">
                    Fill in the form on the left and click "Generate Content
                    Ideas" to get AI-powered content suggestions for your legal
                    practice.
                  </p>
                </CardContent>
              </Card>
            )}

            {isGenerating && (
              <Card>
                <CardContent className="p-8 text-center">
                  <RefreshCw className="w-12 h-12 text-proactis-primary mx-auto mb-4 animate-spin" />
                  <h3 className="text-xl font-semibold text-proactis-dark mb-2">
                    Generating Your Content Ideas...
                  </h3>
                  <p className="text-proactis-gray-600">
                    Our AI is analyzing your topic and creating tailored content
                    suggestions. This may take a moment.
                  </p>
                </CardContent>
              </Card>
            )}

            {generatedContent && (
              <div className="space-y-6">
                {/* Action Buttons */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-proactis-dark">
                        {generatedContent.ideas.length} Ideas Generated
                      </h3>
                      <span className="text-sm text-proactis-gray-500">
                        {generatedContent.timestamp.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={generatePDF} variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button
                        onClick={() => setShowEmailForm(true)}
                        variant="outline"
                        size="sm"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email Results
                      </Button>
                      <Button
                        onClick={() =>
                          copyToClipboard(
                            JSON.stringify(generatedContent.ideas, null, 2),
                          )
                        }
                        variant="outline"
                        size="sm"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy All
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Generated Ideas */}
                {generatedContent.ideas.map((idea, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-proactis-primary/5 to-proactis-secondary/5">
                      <CardTitle className="text-lg leading-tight">
                        <FileText className="w-5 h-5 text-proactis-primary inline mr-2" />
                        {idea.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-proactis-primary/20 text-proactis-primary px-2 py-1 rounded text-xs">
                          {idea.contentType}
                        </span>
                        <span className="bg-proactis-secondary/20 text-proactis-secondary px-2 py-1 rounded text-xs">
                          <Users className="w-3 h-3 inline mr-1" />
                          {idea.targetAudience}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {idea.estimatedLength}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-proactis-dark mb-2 flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          Content Outline
                        </h4>
                        <ul className="space-y-1">
                          {idea.outline.map((point, i) => (
                            <li
                              key={i}
                              className="text-sm text-proactis-gray-600"
                            >
                              {i + 1}. {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-proactis-dark mb-2 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Key Takeaways
                        </h4>
                        <ul className="space-y-1">
                          {idea.keyTakeaways.map((takeaway, i) => (
                            <li
                              key={i}
                              className="text-sm text-proactis-gray-600"
                            >
                              • {takeaway}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-proactis-dark mb-2 flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Call to Action
                        </h4>
                        <p className="text-sm text-proactis-gray-600">
                          {idea.callToAction}
                        </p>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button
                          onClick={() =>
                            copyToClipboard(
                              `Title: ${idea.title}\n\nOutline:\n${idea.outline.map((p, i) => `${i + 1}. ${p}`).join("\n")}\n\nKey Takeaways:\n${idea.keyTakeaways.map((t) => `• ${t}`).join("\n")}\n\nCall to Action: ${idea.callToAction}`,
                            )
                          }
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-3 h-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Email Form Modal */}
        {showEmailForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-proactis-primary" />
                  Email Content Ideas
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="name">Name</Label>
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
                  <div>
                    <Label htmlFor="firmName">Firm Name</Label>
                    <Input
                      id="firmName"
                      value={emailData.firmName}
                      onChange={(e) =>
                        setEmailData((prev) => ({
                          ...prev,
                          firmName: e.target.value,
                        }))
                      }
                      placeholder="Law firm"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-700">
                    We'll send you the complete content ideas report with
                    detailed outlines and implementation suggestions.
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
                    Send Email
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

export default ContentIdeaGenerator;
