import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DashboardProps {
  userEmail: string;
}

const Dashboard = ({ userEmail }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for the dashboard
  const toolsPerformance = [
    {
      name: "Dripify",
      status: "active",
      performance: 87,
      leads: 47,
      conversion: 12.3,
      lastActivity: "2 hours ago",
      trend: "up",
      color: "blue",
    },
    {
      name: "NotebookLM",
      status: "active",
      performance: 94,
      documentsAnalyzed: 156,
      insights: 23,
      lastActivity: "1 hour ago",
      trend: "up",
      color: "orange",
    },
    {
      name: "Lindy",
      status: "active",
      performance: 91,
      tasksCompleted: 34,
      emailsProcessed: 89,
      lastActivity: "30 minutes ago",
      trend: "up",
      color: "purple",
    },
    {
      name: "LinkedIn",
      status: "active",
      performance: 78,
      connections: 12,
      postViews: 1847,
      lastActivity: "4 hours ago",
      trend: "down",
      color: "blue",
    },
    {
      name: "Google Drive",
      status: "active",
      performance: 85,
      filesProcessed: 67,
      collaborations: 8,
      lastActivity: "1 hour ago",
      trend: "up",
      color: "green",
    },
    {
      name: "Microsoft Teams",
      status: "active",
      performance: 82,
      meetings: 15,
      messagesAnalyzed: 234,
      lastActivity: "3 hours ago",
      trend: "stable",
      color: "blue",
    },
    {
      name: "Upmeet",
      status: "active",
      performance: 89,
      meetingsScheduled: 8,
      clientSatisfaction: 96,
      lastActivity: "2 hours ago",
      trend: "up",
      color: "green",
    },
  ];

  const todoItems = [
    {
      id: 1,
      task: "Review Dripify sequence performance",
      priority: "high",
      dueDate: "Today",
    },
    {
      id: 2,
      task: "Analyze NotebookLM contract insights",
      priority: "medium",
      dueDate: "Tomorrow",
    },
    {
      id: 3,
      task: "Update LinkedIn content calendar",
      priority: "high",
      dueDate: "Today",
    },
    {
      id: 4,
      task: "Configure Lindy automation rules",
      priority: "low",
      dueDate: "This week",
    },
    {
      id: 5,
      task: "Review client feedback from Upmeet",
      priority: "medium",
      dueDate: "Tomorrow",
    },
  ];

  const keywordAlerts = [
    {
      keyword: "contract review",
      count: 12,
      urgency: "high",
      tool: "NotebookLM",
    },
    { keyword: "compliance audit", count: 8, urgency: "medium", tool: "Lindy" },
    {
      keyword: "litigation support",
      count: 15,
      urgency: "high",
      tool: "Dripify",
    },
    { keyword: "IP protection", count: 6, urgency: "low", tool: "LinkedIn" },
    {
      keyword: "merger acquisition",
      count: 9,
      urgency: "medium",
      tool: "Teams",
    },
  ];

  const recentActions = [
    {
      time: "2 hours ago",
      action: "Dripify sent 15 personalized outreach messages",
      impact: "+3 new leads",
      status: "success",
    },
    {
      time: "3 hours ago",
      action: "NotebookLM analyzed compliance document",
      impact: "Identified 2 risk areas",
      status: "warning",
    },
    {
      time: "4 hours ago",
      action: "Lindy scheduled 3 client follow-ups",
      impact: "+$45k potential revenue",
      status: "success",
    },
    {
      time: "5 hours ago",
      action: "LinkedIn post reached 1.2k professionals",
      impact: "+8 connection requests",
      status: "success",
    },
    {
      time: "6 hours ago",
      action: "Upmeet optimized meeting scheduling",
      impact: "Saved 2 hours admin time",
      status: "success",
    },
  ];

  const contentIdeas = [
    "5 ways AI is transforming legal contract analysis",
    "How to automate client intake processes in 2024",
    "LinkedIn strategies for law firm business development",
    "The future of legal research with AI assistants",
    "Compliance automation: Reducing risk with AI tools",
  ];

  return (
    <div className="min-h-screen bg-proactis-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-proactis-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-proactis-dark">
              AI Performance Dashboard
            </h1>
            <p className="text-proactis-gray-600">Welcome back, {userEmail}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-proactis-gray-600">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
            <Button className="proactis-button-primary">Export Report</Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-proactis-gray-200 px-6">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "tools", label: "Tools Performance" },
            { id: "content", label: "Content Generator" },
            { id: "keywords", label: "Lead Alerts" },
            { id: "actions", label: "Actions & Impact" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-proactis-primary text-proactis-primary"
                  : "border-transparent text-proactis-gray-500 hover:text-proactis-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-proactis-gray-600">
                      Total Revenue Impact
                    </p>
                    <p className="text-2xl font-bold text-proactis-dark">
                      +$127k
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-proactis-success/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-proactis-success"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-proactis-success mt-2">
                  +12.5% from last month
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-proactis-gray-600">
                      New Leads Generated
                    </p>
                    <p className="text-2xl font-bold text-proactis-dark">247</p>
                  </div>
                  <div className="w-12 h-12 bg-proactis-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-proactis-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-proactis-success mt-2">
                  +8.3% conversion rate
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-proactis-gray-600">
                      Time Saved
                    </p>
                    <p className="text-2xl font-bold text-proactis-dark">
                      156 hrs
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-proactis-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-proactis-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-proactis-success mt-2">
                  Automated processes
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-proactis-gray-600">
                      Active Tools
                    </p>
                    <p className="text-2xl font-bold text-proactis-dark">7/7</p>
                  </div>
                  <div className="w-12 h-12 bg-proactis-success/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-proactis-success"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-proactis-success mt-2">
                  All systems operational
                </p>
              </div>
            </div>

            {/* Tools Performance Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
                <h3 className="text-lg font-semibold text-proactis-dark mb-4">
                  Tools Performance
                </h3>
                <div className="space-y-4">
                  {toolsPerformance.slice(0, 4).map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 bg-${tool.color}-500/10 rounded-lg flex items-center justify-center`}
                        >
                          <span
                            className={`text-${tool.color}-600 font-bold text-sm`}
                          >
                            {tool.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-proactis-dark">
                            {tool.name}
                          </p>
                          <p className="text-sm text-proactis-gray-600">
                            {tool.lastActivity}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-proactis-dark">
                          {tool.performance}%
                        </p>
                        <div className="w-16 h-2 bg-proactis-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-${tool.color}-500 transition-all duration-300`}
                            style={{ width: `${tool.performance}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
                <h3 className="text-lg font-semibold text-proactis-dark mb-4">
                  Priority Tasks
                </h3>
                <div className="space-y-3">
                  {todoItems.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-proactis-gray-50"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-proactis-primary"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-proactis-dark">
                          {item.task}
                        </p>
                        <p className="text-xs text-proactis-gray-600">
                          Due: {item.dueDate}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : item.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tools" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsPerformance.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-${tool.color}-500/10 rounded-lg flex items-center justify-center`}
                    >
                      <span className={`text-${tool.color}-600 font-bold`}>
                        {tool.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-proactis-dark">
                        {tool.name}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {tool.status}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`text-right ${
                      tool.trend === "up"
                        ? "text-green-600"
                        : tool.trend === "down"
                          ? "text-red-600"
                          : "text-gray-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {tool.trend === "up" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      ) : tool.trend === "down" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      )}
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-proactis-gray-600">
                        Performance
                      </span>
                      <span className="font-medium">{tool.performance}%</span>
                    </div>
                    <div className="w-full h-2 bg-proactis-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${tool.color}-500 transition-all duration-300`}
                        style={{ width: `${tool.performance}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-proactis-gray-200">
                    {tool.leads && (
                      <div>
                        <p className="text-xs text-proactis-gray-600">Leads</p>
                        <p className="font-semibold text-proactis-dark">
                          {tool.leads}
                        </p>
                      </div>
                    )}
                    {tool.documentsAnalyzed && (
                      <div>
                        <p className="text-xs text-proactis-gray-600">
                          Documents
                        </p>
                        <p className="font-semibold text-proactis-dark">
                          {tool.documentsAnalyzed}
                        </p>
                      </div>
                    )}
                    {tool.tasksCompleted && (
                      <div>
                        <p className="text-xs text-proactis-gray-600">Tasks</p>
                        <p className="font-semibold text-proactis-dark">
                          {tool.tasksCompleted}
                        </p>
                      </div>
                    )}
                    {tool.connections && (
                      <div>
                        <p className="text-xs text-proactis-gray-600">
                          Connections
                        </p>
                        <p className="font-semibold text-proactis-dark">
                          {tool.connections}
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-proactis-gray-600 pt-2">
                    Last activity: {tool.lastActivity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "content" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
              <h3 className="text-lg font-semibold text-proactis-dark mb-4">
                Content Generator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-proactis-gray-700 mb-2">
                    Content Type
                  </label>
                  <select className="w-full px-3 py-2 border border-proactis-gray-300 rounded-md focus:ring-proactis-primary focus:border-proactis-primary">
                    <option>LinkedIn Post</option>
                    <option>Blog Article</option>
                    <option>Newsletter</option>
                    <option>Social Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-proactis-gray-700 mb-2">
                    Topic/Keywords
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., contract automation, AI legal tools"
                    className="w-full px-3 py-2 border border-proactis-gray-300 rounded-md focus:ring-proactis-primary focus:border-proactis-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-proactis-gray-700 mb-2">
                    Tone
                  </label>
                  <select className="w-full px-3 py-2 border border-proactis-gray-300 rounded-md focus:ring-proactis-primary focus:border-proactis-primary">
                    <option>Professional</option>
                    <option>Informative</option>
                    <option>Thought Leadership</option>
                    <option>Educational</option>
                  </select>
                </div>
                <Button className="w-full proactis-button-primary">
                  Generate Content
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
              <h3 className="text-lg font-semibold text-proactis-dark mb-4">
                Content Ideas
              </h3>
              <div className="space-y-3">
                {contentIdeas.map((idea, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-proactis-gray-50 hover:bg-proactis-gray-100 transition-colors cursor-pointer"
                  >
                    <p className="text-sm text-proactis-dark">{idea}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-proactis-gray-600">
                        AI Generated
                      </span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Use This
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "keywords" && (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
            <h3 className="text-lg font-semibold text-proactis-dark mb-6">
              Lead Alert Keywords
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keywordAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.urgency === "high"
                      ? "border-red-500 bg-red-50"
                      : alert.urgency === "medium"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-green-500 bg-green-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-proactis-dark">
                      {alert.keyword}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.urgency === "high"
                          ? "bg-red-100 text-red-800"
                          : alert.urgency === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {alert.urgency}
                    </span>
                  </div>
                  <p className="text-sm text-proactis-gray-600 mb-2">
                    {alert.count} mentions detected
                  </p>
                  <p className="text-xs text-proactis-gray-500">
                    Source: {alert.tool}
                  </p>
                  <Button size="sm" className="mt-3 w-full text-xs">
                    Create Lindy Sequence
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "actions" && (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-proactis-gray-200">
            <h3 className="text-lg font-semibold text-proactis-dark mb-6">
              Recent Actions & Impact
            </h3>
            <div className="space-y-4">
              {recentActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-proactis-gray-50"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      action.status === "success"
                        ? "bg-green-100"
                        : action.status === "warning"
                          ? "bg-yellow-100"
                          : "bg-red-100"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        action.status === "success"
                          ? "text-green-600"
                          : action.status === "warning"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {action.status === "success" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                        />
                      )}
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-proactis-dark">
                          {action.action}
                        </p>
                        <p className="text-xs text-proactis-gray-600">
                          {action.time}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          action.status === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {action.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
