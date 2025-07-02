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
  Settings,
  Key,
  Save,
  TestTube,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";

interface APIConfig {
  provider: "perplexity" | "claude" | "custom";
  apiKey: string;
  baseUrl: string;
  model: string;
  systemPrompt: string;
  isActive: boolean;
}

const APIConfigAdmin = () => {
  const [config, setConfig] = useState<APIConfig>({
    provider: "perplexity",
    apiKey: "",
    baseUrl: "",
    model: "",
    systemPrompt: `You are a legal content expert specializing in AI and technology trends for lawyers. Generate creative, professional content ideas for legal AI topics. 

For each request, provide:
1. A compelling title
2. A detailed outline with 3-5 main points
3. Target audience (practice area/firm size)
4. Key takeaways
5. Call-to-action suggestions

Focus on practical, actionable insights that help lawyers implement AI in their practice. Make content engaging and accessible to legal professionals at all technology comfort levels.`,
    isActive: false,
  });

  const [showApiKey, setShowApiKey] = useState(false);
  const [isTestLoading, setIsTestLoading] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const { toast } = useToast();

  const providerConfigs = {
    perplexity: {
      name: "Perplexity AI",
      baseUrl: "https://api.perplexity.ai",
      models: [
        "llama-3.1-sonar-small-128k-online",
        "llama-3.1-sonar-large-128k-online",
        "llama-3.1-8b-instruct",
        "llama-3.1-70b-instruct",
      ],
    },
    claude: {
      name: "Anthropic Claude",
      baseUrl: "https://api.anthropic.com",
      models: [
        "claude-3-5-sonnet-20241022",
        "claude-3-5-haiku-20241022",
        "claude-3-opus-20240229",
        "claude-3-sonnet-20240229",
      ],
    },
    custom: {
      name: "Custom API",
      baseUrl: "",
      models: ["custom-model"],
    },
  };

  const handleProviderChange = (provider: APIConfig["provider"]) => {
    const providerConfig = providerConfigs[provider];
    setConfig((prev) => ({
      ...prev,
      provider,
      baseUrl: providerConfig.baseUrl,
      model: providerConfig.models[0],
    }));
  };

  const handleSave = async () => {
    if (!config.apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key to save the configuration.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would save to a secure backend
    localStorage.setItem("api-config", JSON.stringify(config));

    toast({
      title: "Configuration Saved",
      description: "API settings have been saved successfully.",
    });
  };

  const handleTest = async () => {
    if (!config.apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key to test the connection.",
        variant: "destructive",
      });
      return;
    }

    setIsTestLoading(true);
    setTestResult(null);

    try {
      // Simulate API test - in production, this would make a real test call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, randomly succeed or fail
      const success = Math.random() > 0.3;

      if (success) {
        setTestResult({
          success: true,
          message: "API connection successful! Content generator is ready.",
        });
        setConfig((prev) => ({ ...prev, isActive: true }));
      } else {
        setTestResult({
          success: false,
          message:
            "API connection failed. Please check your API key and settings.",
        });
        setConfig((prev) => ({ ...prev, isActive: false }));
      }
    } catch (error) {
      setTestResult({
        success: false,
        message: "Network error. Please try again.",
      });
    } finally {
      setIsTestLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="proactis-container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-proactis-dark mb-4">
            API Configuration
          </h1>
          <p className="text-xl text-proactis-gray-600">
            Configure AI APIs for the Content Idea Generator
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-proactis-primary" />
                  API Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Provider Selection */}
                <div>
                  <Label htmlFor="provider">AI Provider</Label>
                  <Select
                    value={config.provider}
                    onValueChange={(value: APIConfig["provider"]) =>
                      handleProviderChange(value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select AI provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perplexity">
                        Perplexity AI (Recommended)
                      </SelectItem>
                      <SelectItem value="claude">Anthropic Claude</SelectItem>
                      <SelectItem value="custom">Custom API</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* API Key */}
                <div>
                  <Label htmlFor="apiKey">
                    API Key <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="apiKey"
                      type={showApiKey ? "text" : "password"}
                      value={config.apiKey}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          apiKey: e.target.value,
                        }))
                      }
                      placeholder="Enter your API key"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showApiKey ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Base URL */}
                <div>
                  <Label htmlFor="baseUrl">Base URL</Label>
                  <Input
                    id="baseUrl"
                    value={config.baseUrl}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        baseUrl: e.target.value,
                      }))
                    }
                    placeholder="API base URL"
                    disabled={config.provider !== "custom"}
                  />
                </div>

                {/* Model Selection */}
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Select
                    value={config.model}
                    onValueChange={(value) =>
                      setConfig((prev) => ({ ...prev, model: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      {providerConfigs[config.provider].models.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* System Prompt */}
                <div>
                  <Label htmlFor="systemPrompt">System Prompt</Label>
                  <Textarea
                    id="systemPrompt"
                    value={config.systemPrompt}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        systemPrompt: e.target.value,
                      }))
                    }
                    rows={8}
                    placeholder="Define how the AI should generate content ideas..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    onClick={handleTest}
                    disabled={isTestLoading || !config.apiKey}
                    variant="outline"
                    className="flex-1"
                  >
                    <TestTube className="w-4 h-4 mr-2" />
                    {isTestLoading ? "Testing..." : "Test Connection"}
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={!config.apiKey}
                    className="flex-1 proactis-button-primary"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Configuration
                  </Button>
                </div>

                {/* Test Result */}
                {testResult && (
                  <div
                    className={`p-4 rounded-lg border ${
                      testResult.success
                        ? "bg-green-50 border-green-200 text-green-700"
                        : "bg-red-50 border-red-200 text-red-700"
                    }`}
                  >
                    <div className="flex items-center">
                      {testResult.success ? (
                        <CheckCircle className="w-4 h-4 mr-2" />
                      ) : (
                        <AlertCircle className="w-4 h-4 mr-2" />
                      )}
                      <span className="font-medium">
                        {testResult.success ? "Success!" : "Error"}
                      </span>
                    </div>
                    <p className="mt-1">{testResult.message}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Status & Documentation */}
          <div className="space-y-6">
            {/* Status Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Provider</span>
                    <span className="text-sm font-medium">
                      {providerConfigs[config.provider].name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status</span>
                    <span
                      className={`text-sm font-medium ${
                        config.isActive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {config.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Model</span>
                    <span className="text-sm font-medium">{config.model}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Key Instructions */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">
                  <Key className="w-4 h-4 mr-2 inline" />
                  API Key Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-800">
                <div className="space-y-3">
                  <div>
                    <strong>Perplexity AI:</strong>
                    <p>
                      Get your API key from{" "}
                      <a
                        href="https://www.perplexity.ai/settings/api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        perplexity.ai/settings/api
                      </a>
                    </p>
                  </div>
                  <div>
                    <strong>Anthropic Claude:</strong>
                    <p>
                      Get your API key from{" "}
                      <a
                        href="https://console.anthropic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        console.anthropic.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <strong>Custom API:</strong>
                    <p>
                      Enter your custom API endpoint and authentication details.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Guidelines */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-900">
                  Usage Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-green-800">
                <ul className="space-y-2">
                  <li>• Keep API keys secure and never share them</li>
                  <li>• Monitor your API usage and billing</li>
                  <li>• Test configurations before making them active</li>
                  <li>• Customize system prompts for your specific needs</li>
                  <li>• Regular testing ensures consistent performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Access */}
        <Card className="mt-8 bg-gradient-to-r from-proactis-primary/10 to-proactis-secondary/10 border-proactis-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-proactis-dark mb-2">
              Ready to Test the Generator?
            </h3>
            <p className="text-proactis-gray-600 mb-4">
              Once your API is configured and tested, visitors can use the
              Content Idea Generator on your site.
            </p>
            <Button
              onClick={() => (window.location.href = "/content-generator")}
              className="proactis-button-primary"
            >
              View Content Generator
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default APIConfigAdmin;
