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
  Upload,
  FileAudio,
  Image,
  Save,
  Trash2,
  Eye,
  Edit,
} from "lucide-react";

interface AudioUploadForm {
  title: string;
  description: string;
  category: string;
  duration: string;
  transcript: string;
  audioFile: File | null;
  imageFile: File | null;
}

interface UploadedAudio {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  publishDate: string;
  imageUrl: string;
  audioUrl: string;
  transcript: string;
  status: "pending" | "published" | "draft";
}

const AudioUploadAdmin = () => {
  const [formData, setFormData] = useState<AudioUploadForm>({
    title: "",
    description: "",
    category: "",
    duration: "",
    transcript: "",
    audioFile: null,
    imageFile: null,
  });

  const [uploadedAudios, setUploadedAudios] = useState<UploadedAudio[]>([
    {
      id: "1",
      title:
        "AI Revolution in Legal Discovery: What Every Lawyer Needs to Know",
      description:
        "A comprehensive deep-dive into how artificial intelligence is transforming legal discovery processes...",
      category: "Legal Technology",
      duration: "24:35",
      publishDate: "Dec 20, 2024",
      imageUrl: "#",
      audioUrl: "#",
      transcript:
        "In this episode, we explore how AI is revolutionizing legal discovery...",
      status: "published",
    },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [audioPreview, setAudioPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { toast } = useToast();

  const categories = [
    "Legal Technology",
    "Legal Ethics",
    "Contract Law",
    "Legal Research",
    "AI Implementation",
    "Practice Management",
    "Client Relations",
    "Industry Trends",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("audio/")) {
        setFormData((prev) => ({ ...prev, audioFile: file }));
        const url = URL.createObjectURL(file);
        setAudioPreview(url);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please select an audio file (MP3, WAV, etc.)",
          variant: "destructive",
        });
      }
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setFormData((prev) => ({ ...prev, imageFile: file }));
        const url = URL.createObjectURL(file);
        setImagePreview(url);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please select an image file (JPG, PNG, etc.)",
          variant: "destructive",
        });
      }
    }
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      toast({
        title: "Missing Title",
        description: "Please enter a title for your audio content.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.description.trim()) {
      toast({
        title: "Missing Description",
        description: "Please enter a description for your audio content.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.category) {
      toast({
        title: "Missing Category",
        description: "Please select a category for your audio content.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.audioFile) {
      toast({
        title: "Missing Audio File",
        description: "Please upload an audio file.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Check if we're in development mode
      const isDevelopment =
        window.location.hostname === "localhost" ||
        window.location.hostname.includes("fly.dev") ||
        window.location.hostname.includes("127.0.0.1");

      // Create form data for submission
      const submitData = new FormData();
      submitData.append("form-name", "audio-upload");
      submitData.append("bot-field", "");
      submitData.append("title", formData.title);
      submitData.append("description", formData.description);
      submitData.append("category", formData.category);
      submitData.append("duration", formData.duration);
      submitData.append("transcript", formData.transcript);

      if (formData.audioFile) {
        submitData.append("audio-file", formData.audioFile);
      }

      if (formData.imageFile) {
        submitData.append("image-file", formData.imageFile);
      }

      if (isDevelopment) {
        // Simulate successful upload in development
        const newAudio: UploadedAudio = {
          id: Date.now().toString(),
          title: formData.title,
          description: formData.description,
          category: formData.category,
          duration: formData.duration || "00:00",
          publishDate: new Date().toLocaleDateString(),
          imageUrl: imagePreview || "#",
          audioUrl: audioPreview || "#",
          transcript: formData.transcript,
          status: "pending",
        };

        setUploadedAudios((prev) => [newAudio, ...prev]);

        toast({
          title: "✅ Development Mode - Upload Simulated",
          description:
            "Audio content added locally. Deploy to Netlify to enable real file uploads.",
        });
      } else {
        // Submit to Netlify in production
        const response = await fetch("/", {
          method: "POST",
          body: submitData,
        });

        if (response.ok) {
          toast({
            title: "Audio Content Uploaded!",
            description:
              "Your audio content has been submitted for processing. You'll receive an email confirmation.",
          });
        } else {
          throw new Error("Upload failed");
        }
      }

      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        duration: "",
        transcript: "",
        audioFile: null,
        imageFile: null,
      });
      setAudioPreview(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload Error",
        description: "Failed to upload audio content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = (id: string) => {
    setUploadedAudios((prev) => prev.filter((audio) => audio.id !== id));
    toast({
      title: "Audio Deleted",
      description: "Audio content has been removed from the list.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="proactis-container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-proactis-dark mb-4">
            Audio Content Management
          </h1>
          <p className="text-xl text-proactis-gray-600">
            Upload and manage your legal AI audio content for the Legal Audio
            Hub
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2 text-proactis-primary" />
                Upload New Audio Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter the episode title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Provide a detailed description of the audio content..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">
                      Category <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={handleCategoryChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration (mm:ss)</Label>
                    <Input
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g., 24:35"
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div className="space-y-4">
                <div>
                  <Label>
                    Audio File <span className="text-red-500">*</span>
                  </Label>
                  <div className="border-2 border-dashed border-proactis-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={handleAudioFileChange}
                      className="hidden"
                      id="audio-upload"
                    />
                    <label
                      htmlFor="audio-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <FileAudio className="w-8 h-8 text-proactis-gray-400 mb-2" />
                      <span className="text-sm text-proactis-gray-600 mb-1">
                        Click to upload audio file
                      </span>
                      <span className="text-xs text-proactis-gray-400">
                        MP3, WAV, M4A up to 100MB
                      </span>
                    </label>
                  </div>
                  {formData.audioFile && (
                    <div className="mt-2 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700 font-medium">
                        ✓ {formData.audioFile.name}
                      </p>
                      {audioPreview && (
                        <audio controls className="w-full mt-2">
                          <source src={audioPreview} />
                          Your browser does not support audio playback.
                        </audio>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <Label>Cover Image</Label>
                  <div className="border-2 border-dashed border-proactis-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Image className="w-8 h-8 text-proactis-gray-400 mb-2" />
                      <span className="text-sm text-proactis-gray-600 mb-1">
                        Click to upload cover image
                      </span>
                      <span className="text-xs text-proactis-gray-400">
                        JPG, PNG up to 10MB
                      </span>
                    </label>
                  </div>
                  {imagePreview && (
                    <div className="mt-2">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Transcript */}
              <div>
                <Label htmlFor="transcript">Transcript (Optional)</Label>
                <Textarea
                  id="transcript"
                  name="transcript"
                  value={formData.transcript}
                  onChange={handleInputChange}
                  placeholder="Add a transcript or summary of the audio content..."
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full proactis-button-primary"
              >
                {isSubmitting ? "Uploading..." : "Upload Audio Content"}
                <Save className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Content Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-proactis-primary" />
                Manage Audio Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uploadedAudios.map((audio) => (
                  <div
                    key={audio.id}
                    className="border border-proactis-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm leading-tight">
                        {audio.title}
                      </h3>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                          onClick={() => handleDelete(audio.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-proactis-gray-600 mb-2">
                      {audio.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-proactis-primary/20 text-proactis-primary px-2 py-1 rounded">
                        {audio.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded ${
                          audio.status === "published"
                            ? "bg-green-100 text-green-700"
                            : audio.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {audio.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-proactis-dark mb-3">
              📋 Upload Instructions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">Audio File Requirements:</h4>
                <ul className="space-y-1 text-proactis-gray-600">
                  <li>• Supported formats: MP3, WAV, M4A</li>
                  <li>• Maximum file size: 100MB</li>
                  <li>• Recommended quality: 128kbps or higher</li>
                  <li>• Clear audio with minimal background noise</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Image Requirements:</h4>
                <ul className="space-y-1 text-proactis-gray-600">
                  <li>• Supported formats: JPG, PNG, WebP</li>
                  <li>• Recommended size: 1200x800 pixels</li>
                  <li>• Maximum file size: 10MB</li>
                  <li>• Professional, legal-themed imagery</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded border border-blue-200">
              <p className="text-sm text-proactis-gray-700">
                <strong>Note:</strong> In development mode, uploads are
                simulated locally. Deploy to Netlify to enable real file uploads
                and email notifications to sarafollador01@gmail.com.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AudioUploadAdmin;
