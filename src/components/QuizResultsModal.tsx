import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  QuizResult,
  getQualificationMessage,
  quizQuestions,
} from "@/utils/quizScoring";
import {
  generateQuizPDF,
  generateQuizFilename,
} from "@/utils/quizPdfGenerator";
import {
  generateAssessmentEmailHTML,
  generateAssessmentEmailText,
  AssessmentEmailData,
} from "@/utils/assessmentEmailTemplate";
import { generateEmailMessage, EmailData } from "@/utils/emailFormatting";
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Mail,
  Download,
  Calendar,
  Target,
  Users,
  Zap,
} from "lucide-react";

interface QuizResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: QuizResult;
  onRetake: () => void;
}

const QuizResultsModal = ({
  isOpen,
  onClose,
  result,
  onRetake,
}: QuizResultsModalProps) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    firmName: "",
    message: "",
    gdprConsent: false,
  });

  const { toast } = useToast();
  const qualificationInfo = getQualificationMessage(result.qualification);

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600";
    if (score >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 70) return "bg-green-100";
    if (score >= 40) return "bg-yellow-100";
    return "bg-red-100";
  };

  const getQualificationIcon = (qualification: string) => {
    switch (qualification) {
      case "high":
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "medium":
        return <TrendingUp className="w-6 h-6 text-yellow-600" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-red-600" />;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, gdprConsent: checked }));
  };

  const handleSendResults = async () => {
    if (!formData.gdprConsent) {
      toast({
        title: "Consent Required",
        description: "Please provide consent to process your personal data.",
        variant: "destructive",
      });
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.firmName
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Starting form submission...");
    console.log("Form data:", formData);
    console.log("Assessment result:", result);

    // Check if we're in development mode
    const isDevelopment =
      window.location.hostname === "localhost" ||
      window.location.hostname.includes("fly.dev") ||
      window.location.hostname.includes("127.0.0.1");

    if (isDevelopment) {
      // Simulate successful submission in development
      setTimeout(() => {
        toast({
          title: "✅ Development Mode - Simulation Complete",
          description:
            "Your form data looks good! Deploy to Netlify to enable real email delivery to sarafollador01@gmail.com",
        });
        setShowEmailForm(false);
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      // Prepare email data with new format
      const emailData: EmailData = {
        userEmail: formData.email.trim(),
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        firmName: formData.firmName.trim(),
        result,
        completedAt: new Date(),
      };

      // Generate enhanced email messages that work well in all email clients
      const adminMessage = generateEmailMessage(emailData, true);
      const userMessage = generateEmailMessage(emailData, false);

      // Also generate HTML versions as backup (for potential webhook use)
      const adminEmailHTML = generateAssessmentEmailHTML(emailData, true);
      const userEmailHTML = generateAssessmentEmailHTML(emailData, false);

      // Create form data for admin email
      const adminFormData = new FormData();
      adminFormData.append("form-name", "ai-assessment-admin");
      adminFormData.append("bot-field", "");
      adminFormData.append("to", "sarafollador01@gmail.com");
      adminFormData.append(
        "subject",
        `New AI Assessment: ${formData.firstName} ${formData.lastName} - ${result.qualification.toUpperCase()} Priority`,
      );
      // Use enhanced formatting that displays well in all email clients
      adminFormData.append("message", adminMessage);
      adminFormData.append("html-content", adminEmailHTML);
      adminFormData.append("firstName", formData.firstName.trim());
      adminFormData.append("lastName", formData.lastName.trim());
      adminFormData.append("email", formData.email.trim());
      adminFormData.append("firmName", formData.firmName.trim());
      adminFormData.append("overallScore", result.overallScore.toString());
      adminFormData.append("qualification", result.qualification);
      adminFormData.append("gdprConsent", formData.gdprConsent.toString());

      // Create form data for user email
      const userFormData = new FormData();
      userFormData.append("form-name", "ai-assessment-user");
      userFormData.append("bot-field", "");
      userFormData.append("to", formData.email.trim());
      userFormData.append(
        "subject",
        `Your AI Readiness Assessment Results - ${result.overallScore}% Score`,
      );
      // Primary content as text for reliable email delivery
      userFormData.append("message", userEmailText);
      userFormData.append("html-content", userEmailHTML);
      userFormData.append("firstName", formData.firstName.trim());
      userFormData.append("lastName", formData.lastName.trim());
      userFormData.append("firmName", formData.firmName.trim());

      console.log("Submitting assessment emails...");

      // Submit both forms
      const [adminResponse, userResponse] = await Promise.all([
        fetch("/", { method: "POST", body: adminFormData }),
        fetch("/", { method: "POST", body: userFormData }),
      ]);

      const adminResponseText = await adminResponse.text();
      const userResponseText = await userResponse.text();

      console.log(
        "Admin email response:",
        adminResponse.status,
        adminResponseText,
      );
      console.log(
        "User email response:",
        userResponse.status,
        userResponseText,
      );

      if (adminResponse.ok && userResponse.ok) {
        console.log("Both emails submitted successfully!");
        toast({
          title: "Assessment Complete!",
          description: `Results sent to both you (${formData.email}) and our team. Check your inbox for the detailed analysis and next steps.`,
        });
        setShowEmailForm(false);
      } else {
        throw new Error(
          `Email sending failed. Admin: ${adminResponse.status}, User: ${userResponse.status}`,
        );
      }
    } catch (error) {
      console.error("Error sending results:", error);

      // Show more specific error message
      let errorMessage =
        "There was an issue sending your results. Please try again or contact us directly.";

      if (error instanceof Error) {
        if (error.message.includes("Failed to fetch")) {
          errorMessage =
            "Network error: Please check your internet connection and try again.";
        } else if (error.message.includes("PDF")) {
          errorMessage =
            "PDF generation failed. Form data will be sent without the PDF attachment.";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }

      toast({
        title: "Error Sending Results",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = () => {
    try {
      const pdfData = generateQuizPDF({
        userEmail: formData.email || "assessment-user@example.com",
        firmName: formData.firmName || "Law Firm",
        result,
        completedAt: new Date(),
      });

      const filename = generateQuizFilename(
        formData.firmName || "Law_Firm",
        formData.email || "user@example.com",
      );

      // Create download link
      const link = document.createElement("a");
      link.href = pdfData;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "PDF Downloaded",
        description: "Your assessment report has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast({
        title: "Download Error",
        description: "Failed to download the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (showEmailForm) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto my-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-proactis-primary" />
              <span>Send Your Assessment Results</span>
            </DialogTitle>
          </DialogHeader>

          <form
            name="ai-assessment-results"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="form-name"
              value="ai-assessment-results"
            />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="gdprConsent" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="firmName">
                Law Firm Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firmName"
                name="firmName"
                value={formData.firmName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Additional Questions or Comments</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your specific AI challenges or goals..."
                rows={3}
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="gdprConsent"
                checked={formData.gdprConsent}
                onCheckedChange={handleCheckboxChange}
                required
              />
              <Label htmlFor="gdprConsent" className="text-sm">
                I consent to Pro-Actis processing my personal data to send me
                the assessment results and follow-up communications about AI
                services. I understand I can unsubscribe at any time.{" "}
                <span className="text-red-500">*</span>
              </Label>
            </div>

            <div className="bg-proactis-light/10 p-4 rounded-lg">
              <p className="text-sm text-proactis-gray-600 mb-2">
                <strong>What you'll receive:</strong>
              </p>
              <ul className="text-sm text-proactis-gray-600 space-y-1">
                <li>• Detailed PDF assessment report with your scores</li>
                <li>• Personalized AI implementation recommendations</li>
                <li>• Link to book a FREE 30-minute discovery call</li>
                <li>• Strategic guidance based on your specific needs</li>
              </ul>
            </div>

            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowEmailForm(false)}
                className="flex-1"
              >
                Back to Results
              </Button>
              <Button
                type="button"
                onClick={handleSendResults}
                disabled={isSubmitting || !formData.gdprConsent}
                className="proactis-button-primary flex-1"
              >
                {isSubmitting ? "Sending..." : "Send Results & PDF"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto my-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-proactis-primary" />
            <span>Your AI Readiness Assessment Results</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overall Score Card */}
          <Card className="border-l-4 border-l-proactis-primary">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-proactis-dark">
                    Overall AI Readiness Score
                  </h3>
                  <p className="text-proactis-gray-600 mt-1">
                    Based on {quizQuestions.length} assessment criteria
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`text-4xl font-bold ${getScoreColor(result.overallScore)}`}
                  >
                    {result.overallScore}%
                  </div>
                  <div className="flex items-center mt-2">
                    {getQualificationIcon(result.qualification)}
                    <span className="ml-2 text-sm font-medium capitalize">
                      {result.qualification} Priority
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2 text-proactis-primary" />
                  Client Expectations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`text-3xl font-bold ${getScoreColor(result.categoryScores.client_ai)}`}
                >
                  {result.categoryScores.client_ai}%
                </div>
                <p className="text-sm text-proactis-gray-600 mt-1">
                  How your clients view and expect AI usage
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-proactis-primary" />
                  Current Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`text-3xl font-bold ${getScoreColor(result.categoryScores.personal_ai)}`}
                >
                  {result.categoryScores.personal_ai}%
                </div>
                <p className="text-sm text-proactis-gray-600 mt-1">
                  Your firm's current AI tool usage
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Target className="w-5 h-5 mr-2 text-proactis-primary" />
                  AI Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`text-3xl font-bold ${getScoreColor(result.categoryScores.readiness)}`}
                >
                  {result.categoryScores.readiness}%
                </div>
                <p className="text-sm text-proactis-gray-600 mt-1">
                  Infrastructure and team preparedness
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Qualification Message */}
          <Card className={`${getScoreBgColor(result.overallScore)} border-0`}>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                {getQualificationIcon(result.qualification)}
                <div>
                  <h3 className="text-xl font-bold text-proactis-dark mb-2">
                    {qualificationInfo.title}
                  </h3>
                  <p className="text-proactis-gray-700">
                    {qualificationInfo.message}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <div className="grid md:grid-cols-2 gap-6">
            {result.strengths.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-700 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Key Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {result.improvements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-orange-700 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Areas for Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-600 mr-2">•</span>
                        <span className="text-sm">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Strategic Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Target className="w-5 h-5 mr-2 text-proactis-primary" />
                Strategic Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-proactis-primary text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-proactis-primary to-proactis-primary/80 text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Ready to Accelerate Your AI Journey?
                </h3>
                <p className="mb-6 opacity-90">
                  Get your detailed assessment report and book a free discovery
                  call to discuss your AI implementation strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => setShowEmailForm(true)}
                    className="bg-white text-proactis-primary hover:bg-gray-100 flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Results & PDF
                  </Button>
                  <Button
                    onClick={handleDownloadPDF}
                    variant="outline"
                    className="border-white text-proactis-primary bg-white hover:bg-gray-100 hover:text-proactis-primary flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy",
                        "_blank",
                      )
                    }
                    className="bg-proactis-gold text-proactis-dark hover:bg-proactis-gold/90 flex items-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Discovery Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="flex justify-between items-center pt-4 border-t">
            <Button variant="outline" onClick={onRetake}>
              Retake Assessment
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close Results
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizResultsModal;
