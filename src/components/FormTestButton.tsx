import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FormTestButton = () => {
  const { toast } = useToast();

  const testFormSubmission = async () => {
    console.log("Testing form submission...");

    // Check if we're in development mode
    const isDevelopment =
      window.location.hostname === "localhost" ||
      window.location.hostname.includes("fly.dev") ||
      window.location.hostname.includes("127.0.0.1");

    if (isDevelopment) {
      toast({
        title: "🚀 Development Mode Detected",
        description:
          "Form submissions only work on deployed Netlify sites. Push your changes and deploy to test real email delivery!",
      });
      console.log(
        "Development mode - form submission would work on deployed Netlify site",
      );
      console.log("Test data that would be submitted:", {
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        firmName: "Test Firm",
      });
      return;
    }

    try {
      const testData = new FormData();
      testData.append("form-name", "ai-assessment-results");
      testData.append("bot-field", "");
      testData.append("firstName", "Test");
      testData.append("lastName", "User");
      testData.append("email", "test@example.com");
      testData.append("firmName", "Test Firm");
      testData.append("message", "This is a test submission");
      testData.append("overallScore", "75");
      testData.append("qualification", "medium");
      testData.append("clientAIScore", "80");
      testData.append("personalAIScore", "70");
      testData.append("readinessScore", "75");
      testData.append(
        "bookingLink",
        "https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy",
      );
      testData.append("gdprConsent", "true");

      console.log("Test data prepared, submitting to production Netlify...");

      const response = await fetch("/", {
        method: "POST",
        body: testData,
      });

      console.log("Test response status:", response.status);
      console.log("Test response ok:", response.ok);

      // Read the response text first, before checking status
      const responseText = await response.text();
      console.log("Response text:", responseText);

      if (response.ok) {
        toast({
          title: "Test Successful!",
          description:
            "Form submission test passed. Check sarafollador01@gmail.com for the test email.",
        });
      } else {
        console.error("Test failed with status:", response.status);
        console.error("Error response:", responseText);
        toast({
          title: "Test Failed",
          description: `Status: ${response.status}. Error: ${responseText.substring(0, 100)}...`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Test error:", error);
      toast({
        title: "Test Error",
        description: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={testFormSubmission}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        Test Form Submission
      </Button>
    </div>
  );
};

export default FormTestButton;
