import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle,
  Clock,
  Edit,
  Trash2,
  Eye,
  Globe,
  Upload,
  Play,
  Calendar,
  Tag,
} from "lucide-react";

interface AudioContent {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  publishDate: string;
  imageUrl: string;
  audioUrl: string;
  transcript: string;
  status: "draft" | "pending" | "published";
  likes: number;
  commentCount: number;
}

const ContentPublisher = () => {
  const [contents, setContents] = useState<AudioContent[]>([
    {
      id: "1",
      title:
        "AI Revolution in Legal Discovery: What Every Lawyer Needs to Know",
      description:
        "A comprehensive deep-dive into how artificial intelligence is transforming legal discovery processes, reducing costs by up to 70%, and improving accuracy in document review.",
      category: "Legal Technology",
      duration: "24:35",
      publishDate: "Dec 20, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      audioUrl: "https://example.com/audio1.mp3", // You'll replace these with your actual URLs
      transcript:
        "In this episode, we explore how AI is revolutionizing legal discovery...",
      status: "published",
      likes: 47,
      commentCount: 12,
    },
    {
      id: "2",
      title:
        "Ethics and AI: Navigating Professional Responsibility in the Digital Age",
      description:
        "Understanding the ethical implications of AI adoption in legal practice. Discussion on client confidentiality, bias in AI systems, and maintaining professional standards.",
      category: "Legal Ethics",
      duration: "31:42",
      publishDate: "Dec 18, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
      audioUrl: "https://example.com/audio2.mp3",
      transcript: "Today we discuss the critical ethical considerations...",
      status: "pending",
      likes: 35,
      commentCount: 8,
    },
    {
      id: "3",
      title: "My Latest Legal AI Insights",
      description: "Recently uploaded content ready for review and publishing.",
      category: "Legal Technology",
      duration: "18:22",
      publishDate: "Dec 26, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      audioUrl: "",
      transcript: "Transcript pending...",
      status: "draft",
      likes: 0,
      commentCount: 0,
    },
  ]);

  const [editingContent, setEditingContent] = useState<AudioContent | null>(
    null,
  );
  const [showPublishModal, setShowPublishModal] = useState<string | null>(null);

  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "draft":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "published":
        return <Globe className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "draft":
        return <Edit className="w-4 h-4" />;
      default:
        return <Edit className="w-4 h-4" />;
    }
  };

  const handlePublish = (id: string) => {
    setContents((prev) =>
      prev.map((content) =>
        content.id === id
          ? {
              ...content,
              status: "published" as const,
              publishDate: new Date().toLocaleDateString(),
            }
          : content,
      ),
    );

    toast({
      title: "Content Published!",
      description: "Your audio content is now live on the Legal Audio Hub.",
    });

    setShowPublishModal(null);
  };

  const handleUnpublish = (id: string) => {
    setContents((prev) =>
      prev.map((content) =>
        content.id === id ? { ...content, status: "draft" as const } : content,
      ),
    );

    toast({
      title: "Content Unpublished",
      description: "Content has been removed from the public Legal Audio Hub.",
    });
  };

  const handleDelete = (id: string) => {
    setContents((prev) => prev.filter((content) => content.id !== id));
    toast({
      title: "Content Deleted",
      description: "Audio content has been permanently removed.",
    });
  };

  const handleEdit = (content: AudioContent) => {
    setEditingContent(content);
  };

  const handleSaveEdit = () => {
    if (!editingContent) return;

    setContents((prev) =>
      prev.map((content) =>
        content.id === editingContent.id ? editingContent : content,
      ),
    );

    toast({
      title: "Content Updated",
      description: "Changes have been saved successfully.",
    });

    setEditingContent(null);
  };

  const PublishModal = ({ content }: { content: AudioContent }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="w-5 h-5 mr-2 text-green-600" />
            Publish Content
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">{content.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {content.category} • {content.duration}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">
                Publishing will:
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Make content visible on Legal Audio Hub</li>
                <li>• Allow visitors to listen and comment</li>
                <li>• Enable social sharing</li>
                <li>• Send notifications to subscribers</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> Make sure your audio file is uploaded to
                your hosting platform and the URL is correct before publishing.
              </p>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowPublishModal(null)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handlePublish(content.id)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                <Globe className="w-4 h-4 mr-2" />
                Publish Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="proactis-container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-proactis-dark mb-4">
            Content Publishing Center
          </h1>
          <p className="text-xl text-proactis-gray-600">
            Review, edit, and publish your legal AI audio content to the Legal
            Audio Hub
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">
                {contents.filter((c) => c.status === "published").length}
              </div>
              <div className="text-sm text-gray-600">Published</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">
                {contents.filter((c) => c.status === "pending").length}
              </div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-600">
                {contents.filter((c) => c.status === "draft").length}
              </div>
              <div className="text-sm text-gray-600">Drafts</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-proactis-primary">
                {contents.reduce((sum, c) => sum + c.likes, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Likes</div>
            </CardContent>
          </Card>
        </div>

        {/* Content List */}
        <div className="space-y-6">
          {contents.map((content) => (
            <Card key={content.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Thumbnail */}
                  <div className="relative w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    {content.imageUrl ? (
                      <img
                        src={content.imageUrl}
                        alt={content.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-proactis-dark mb-1 truncate">
                          {content.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {content.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Tag className="w-3 h-3 mr-1" />
                            {content.category}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {content.duration}
                          </span>
                          {content.status === "published" && (
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {content.publishDate}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getStatusColor(content.status)}`}
                      >
                        {getStatusIcon(content.status)}
                        <span className="capitalize">{content.status}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        {content.status === "published" && (
                          <>
                            <span>{content.likes} likes</span>
                            <span>{content.commentCount} comments</span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(content)}
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>

                        {content.status === "published" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUnpublish(content.id)}
                            className="text-yellow-600 border-yellow-600 hover:bg-yellow-50"
                          >
                            <Clock className="w-4 h-4 mr-1" />
                            Unpublish
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => setShowPublishModal(content.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <Globe className="w-4 h-4 mr-1" />
                            Publish
                          </Button>
                        )}

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(content.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload New Content CTA */}
        <Card className="mt-8 bg-gradient-to-r from-proactis-primary/10 to-proactis-secondary/10 border-proactis-primary/20">
          <CardContent className="p-8 text-center">
            <Upload className="w-12 h-12 text-proactis-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-proactis-dark mb-2">
              Ready to Add More Content?
            </h3>
            <p className="text-proactis-gray-600 mb-6">
              Upload new audio content to share your legal AI insights with the
              community.
            </p>
            <Button
              onClick={() => (window.location.href = "/audio-admin")}
              className="proactis-button-primary"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload New Audio
            </Button>
          </CardContent>
        </Card>

        {/* Publishing Instructions */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">
              📝 Publishing Workflow
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2 text-blue-800">
                  Before Publishing:
                </h4>
                <ul className="space-y-1 text-blue-700">
                  <li>
                    • Upload your audio file to a hosting platform (Spotify,
                    SoundCloud, AWS S3)
                  </li>
                  <li>• Ensure the audio URL is accessible and working</li>
                  <li>• Review the title, description, and transcript</li>
                  <li>• Check that the cover image displays correctly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-blue-800">
                  After Publishing:
                </h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• Content appears on the Legal Audio Hub</li>
                  <li>• Visitors can listen, like, and comment</li>
                  <li>• Newsletter subscribers get notified</li>
                  <li>• You can track engagement and analytics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Publish Modal */}
        {showPublishModal && (
          <PublishModal
            content={contents.find((c) => c.id === showPublishModal)!}
          />
        )}

        {/* Edit Modal */}
        {editingContent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Edit className="w-5 h-5 mr-2 text-proactis-primary" />
                  Edit Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="edit-title">Title</Label>
                  <Input
                    id="edit-title"
                    value={editingContent.title}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    value={editingContent.description}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        description: e.target.value,
                      })
                    }
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-category">Category</Label>
                    <Input
                      id="edit-category"
                      value={editingContent.category}
                      onChange={(e) =>
                        setEditingContent({
                          ...editingContent,
                          category: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-duration">Duration</Label>
                    <Input
                      id="edit-duration"
                      value={editingContent.duration}
                      onChange={(e) =>
                        setEditingContent({
                          ...editingContent,
                          duration: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="edit-audio-url">Audio File URL</Label>
                  <Input
                    id="edit-audio-url"
                    value={editingContent.audioUrl}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        audioUrl: e.target.value,
                      })
                    }
                    placeholder="https://your-hosting-platform.com/audio.mp3"
                  />
                </div>

                <div>
                  <Label htmlFor="edit-image-url">Cover Image URL</Label>
                  <Input
                    id="edit-image-url"
                    value={editingContent.imageUrl}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        imageUrl: e.target.value,
                      })
                    }
                    placeholder="https://your-hosting-platform.com/image.jpg"
                  />
                </div>

                <div>
                  <Label htmlFor="edit-transcript">Transcript</Label>
                  <Textarea
                    id="edit-transcript"
                    value={editingContent.transcript}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        transcript: e.target.value,
                      })
                    }
                    rows={4}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setEditingContent(null)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveEdit}
                    className="flex-1 proactis-button-primary"
                  >
                    Save Changes
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

export default ContentPublisher;
