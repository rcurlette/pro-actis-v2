import React from "react";

interface PerformanceReportProps {
  userEmail: string;
  reportDate?: string;
  reportPeriod?: string;
}

const PerformanceReport = ({
  userEmail,
  reportDate = new Date().toLocaleDateString(),
  reportPeriod = "Last 30 Days",
}: PerformanceReportProps) => {
  return (
    <div id="performance-report" className="bg-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                AI Performance Report
              </h1>
              <p className="text-gray-600">Pro-Actis AI Solutions Analysis</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Report Date</p>
            <p className="font-semibold text-gray-900">{reportDate}</p>
            <p className="text-sm text-gray-600 mt-1">Period: {reportPeriod}</p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Executive Summary
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                +$127,000
              </div>
              <div className="text-sm text-gray-600">Total Revenue Impact</div>
              <div className="text-sm text-green-600 font-medium">
                ↗ +12.5% from previous period
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">247</div>
              <div className="text-sm text-gray-600">New Leads Generated</div>
              <div className="text-sm text-green-600 font-medium">
                ↗ +8.3% conversion rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">156h</div>
              <div className="text-sm text-gray-600">Time Saved</div>
              <div className="text-sm text-green-600 font-medium">
                Automated processes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold text-green-800">
                Revenue Growth Target Exceeded
              </span>
            </div>
            <p className="text-sm text-green-700">
              Achieved 12.5% revenue increase, surpassing the 10% target by 25%
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="font-semibold text-blue-800">
                Full AI Stack Deployment
              </span>
            </div>
            <p className="text-sm text-blue-700">
              All 7 AI tools operational with 100% uptime and optimal
              performance
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="w-5 h-5 text-purple-600"
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
              <span className="font-semibold text-purple-800">
                Operational Efficiency
              </span>
            </div>
            <p className="text-sm text-purple-700">
              156 hours saved through automation, equivalent to 4 weeks of work
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="w-5 h-5 text-orange-600"
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
              <span className="font-semibold text-orange-800">
                Client Satisfaction
              </span>
            </div>
            <p className="text-sm text-orange-700">
              96% client satisfaction rate with Upmeet meeting optimization
            </p>
          </div>
        </div>
      </section>

      {/* Tools Performance */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          AI Tools Performance Analysis
        </h2>
        <div className="space-y-4">
          {[
            {
              name: "Dripify",
              performance: 87,
              leads: 47,
              conversion: "12.3%",
              impact: "Lead Generation",
            },
            {
              name: "NotebookLM",
              performance: 94,
              documents: 156,
              insights: 23,
              impact: "Document Analysis",
            },
            {
              name: "Lindy",
              performance: 91,
              tasks: 34,
              emails: 89,
              impact: "Task Automation",
            },
            {
              name: "LinkedIn",
              performance: 78,
              connections: 12,
              views: "1.8k",
              impact: "Professional Network",
            },
            {
              name: "Google Drive",
              performance: 85,
              files: 67,
              collaborations: 8,
              impact: "Document Management",
            },
            {
              name: "Microsoft Teams",
              performance: 82,
              meetings: 15,
              messages: 234,
              impact: "Communication",
            },
            {
              name: "Upmeet",
              performance: 89,
              meetings: 8,
              satisfaction: "96%",
              impact: "Meeting Optimization",
            },
          ].map((tool) => (
            <div
              key={tool.name}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded text-white text-sm font-bold flex items-center justify-center">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.impact}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">
                    {tool.performance}%
                  </div>
                  <div className="text-sm text-gray-600">Performance</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                {tool.leads && (
                  <div>
                    <span className="text-gray-600">Leads:</span>
                    <span className="font-medium ml-1">{tool.leads}</span>
                  </div>
                )}
                {tool.documents && (
                  <div>
                    <span className="text-gray-600">Documents:</span>
                    <span className="font-medium ml-1">{tool.documents}</span>
                  </div>
                )}
                {tool.tasks && (
                  <div>
                    <span className="text-gray-600">Tasks:</span>
                    <span className="font-medium ml-1">{tool.tasks}</span>
                  </div>
                )}
                {tool.connections && (
                  <div>
                    <span className="text-gray-600">Connections:</span>
                    <span className="font-medium ml-1">{tool.connections}</span>
                  </div>
                )}
                {tool.files && (
                  <div>
                    <span className="text-gray-600">Files:</span>
                    <span className="font-medium ml-1">{tool.files}</span>
                  </div>
                )}
                {tool.meetings && (
                  <div>
                    <span className="text-gray-600">Meetings:</span>
                    <span className="font-medium ml-1">{tool.meetings}</span>
                  </div>
                )}
                {tool.conversion && (
                  <div>
                    <span className="text-gray-600">Conversion:</span>
                    <span className="font-medium ml-1">{tool.conversion}</span>
                  </div>
                )}
                {tool.insights && (
                  <div>
                    <span className="text-gray-600">Insights:</span>
                    <span className="font-medium ml-1">{tool.insights}</span>
                  </div>
                )}
                {tool.emails && (
                  <div>
                    <span className="text-gray-600">Emails:</span>
                    <span className="font-medium ml-1">{tool.emails}</span>
                  </div>
                )}
                {tool.views && (
                  <div>
                    <span className="text-gray-600">Views:</span>
                    <span className="font-medium ml-1">{tool.views}</span>
                  </div>
                )}
                {tool.collaborations && (
                  <div>
                    <span className="text-gray-600">Collaborations:</span>
                    <span className="font-medium ml-1">
                      {tool.collaborations}
                    </span>
                  </div>
                )}
                {tool.messages && (
                  <div>
                    <span className="text-gray-600">Messages:</span>
                    <span className="font-medium ml-1">{tool.messages}</span>
                  </div>
                )}
                {tool.satisfaction && (
                  <div>
                    <span className="text-gray-600">Satisfaction:</span>
                    <span className="font-medium ml-1">
                      {tool.satisfaction}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ROI Analysis</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Investment vs Returns
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Implementation Cost:</span>
                  <span className="font-medium">$45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue Generated:</span>
                  <span className="font-medium text-green-600">+$127,000</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                  <span className="font-semibold text-gray-900">Net ROI:</span>
                  <span className="font-bold text-green-600">282%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Time Value Analysis
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hours Saved:</span>
                  <span className="font-medium">156 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly Rate:</span>
                  <span className="font-medium">$350/hour</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                  <span className="font-semibold text-gray-900">
                    Time Value:
                  </span>
                  <span className="font-bold text-blue-600">$54,600</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Strategic Recommendations
        </h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <svg
                className="w-5 h-5 text-yellow-600 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Optimize LinkedIn Performance
                </h3>
                <p className="text-sm text-yellow-700">
                  LinkedIn shows the lowest performance at 78%. Recommend
                  increasing content frequency and optimizing posting times to
                  improve engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5"
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
              <div>
                <h3 className="font-semibold text-green-800 mb-1">
                  Scale NotebookLM Usage
                </h3>
                <p className="text-sm text-green-700">
                  NotebookLM shows excellent performance at 94%. Consider
                  expanding document analysis to additional practice areas to
                  maximize ROI.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <svg
                className="w-5 h-5 text-blue-600 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">
                  Enhance Integration
                </h3>
                <p className="text-sm text-blue-700">
                  Implement deeper integration between Dripify and Lindy for
                  automated lead nurturing sequences to further improve
                  conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                1
              </div>
              <span className="text-gray-900">
                Schedule monthly performance review meeting
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                2
              </div>
              <span className="text-gray-900">
                Implement LinkedIn optimization strategy
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                3
              </div>
              <span className="text-gray-900">
                Expand NotebookLM to additional practice areas
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                4
              </div>
              <span className="text-gray-900">
                Set up advanced Dripify-Lindy integration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">
              Generated by Pro-Actis AI Performance Dashboard
            </p>
            <p className="text-sm text-gray-600">Client: {userEmail}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">
              For questions or support, contact:
            </p>
            <p className="text-sm font-medium text-gray-900">
              support@pro-actis.eu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReport;
