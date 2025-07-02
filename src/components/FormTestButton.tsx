import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FormTestButton = () => {
  const { toast } = useToast();

  const testFormSubmission = async () => {
    console.log("Testing form submission...");

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

      console.log("Test data prepared, submitting...");

      const response = await fetch("/", {
        method: "POST",
        body: testData,
      });

      console.log("Test response status:", response.status);

      if (response.ok) {
        toast({
          title: "Test Successful!",
          description:
            "Form submission test passed. Check sarafollador01@gmail.com for the test email.",
        });
      } else {
        const errorText = await response.text();
        console.error("Test failed:", errorText);
        toast({
          title: "Test Failed",
          description: `Status: ${response.status}. Check console for details.`,
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
