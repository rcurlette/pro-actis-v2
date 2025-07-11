import { QuizResult, getQualificationMessage } from "./quizScoring";

export interface AssessmentEmailData {
  userEmail: string;
  firstName: string;
  lastName: string;
  firmName: string;
  result: QuizResult;
  completedAt: Date;
}

export const generateAssessmentEmailHTML = (
  data: AssessmentEmailData,
  isForAdmin: boolean = false,
): string => {
  const qualificationInfo = getQualificationMessage(data.result.qualification);

  const getScoreColor = (score: number) => {
    if (score >= 70) return "#10b981"; // Green
    if (score >= 40) return "#f59e0b"; // Yellow
    return "#ef4444"; // Red
  };

  const getQualificationColor = (qualification: string) => {
    switch (qualification) {
      case "high":
        return "#ef4444"; // Red (high priority for services)
      case "medium":
        return "#f59e0b"; // Yellow
      case "low":
        return "#10b981"; // Green
      default:
        return "#6b7280";
    }
  };

  const emailTitle = isForAdmin
    ? `New AI Assessment Completed by ${data.firstName} ${data.lastName}`
    : `Your AI Readiness Assessment Results - ${data.result.overallScore}% Score`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${emailTitle}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #334155;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #2962FF, #1e40af);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 24px;
        }
        .content {
            padding: 40px 30px;
        }
        .score-card {
            background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            border-left: 4px solid #2962FF;
        }
        .score-number {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .qualification-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 12px;
            margin: 10px 0;
        }
        .category-scores {
            display: grid;
            gap: 20px;
            margin: 30px 0;
        }
        .category-item {
            background: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #2962FF;
        }
        .category-name {
            font-weight: 600;
            margin-bottom: 8px;
            color: #1e293b;
        }
        .category-score {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .recommendations {
            background: #f0f9ff;
            border: 1px solid #0ea5e9;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .recommendations h3 {
            color: #0369a1;
            margin-top: 0;
            margin-bottom: 15px;
        }
        .recommendations ul {
            margin: 0;
            padding-left: 20px;
        }
        .recommendations li {
            margin-bottom: 8px;
        }
        .cta-section {
            background: linear-gradient(135deg, #2962FF, #1e40af);
            color: white;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            margin: 30px 0;
        }
        .cta-button {
            display: inline-block;
            background: #ffc107;
            color: #1e293b;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            margin: 15px 0;
        }
        .footer {
            background: #f1f5f9;
            padding: 30px;
            text-align: center;
            color: #64748b;
            font-size: 14px;
        }
        .admin-info {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .admin-info h3 {
            color: #92400e;
            margin-top: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">⚡</div>
            <h1>Pro-Actis AI</h1>
            <p>${isForAdmin ? "New Assessment Completed" : "AI Readiness Assessment Results"}</p>
        </div>
        
        <div class="content">
            ${
              isForAdmin
                ? `
            <div class="admin-info">
                <h3>Assessment Details</h3>
                <p><strong>Client:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.userEmail}</p>
                <p><strong>Firm:</strong> ${data.firmName}</p>
                <p><strong>Completed:</strong> ${data.completedAt.toLocaleDateString()} at ${data.completedAt.toLocaleTimeString()}</p>
                <p><strong>Qualification Level:</strong> <span style="color: ${getQualificationColor(data.result.qualification)}; font-weight: bold; text-transform: uppercase;">${data.result.qualification} Priority</span></p>
            </div>
            `
                : `
            <h2>Hello ${data.firstName},</h2>
            <p>Thank you for completing the Pro-Actis AI Readiness Assessment. Here are your personalized results:</p>
            `
            }
            
            <div class="score-card">
                <h3>Overall AI Readiness Score</h3>
                <div class="score-number" style="color: ${getScoreColor(data.result.overallScore)}">
                    ${data.result.overallScore}%
                </div>
                <div class="qualification-badge" style="background-color: ${getQualificationColor(data.result.qualification)}; color: white;">
                    ${data.result.qualification} Priority
                </div>
                <p style="margin-top: 15px; font-style: italic;">
                    ${qualificationInfo.message}
                </p>
            </div>
            
            <h3>Category Breakdown</h3>
            <div class="category-scores">
                <div class="category-item">
                    <div class="category-name">👥 Client AI Expectations</div>
                    <div class="category-score" style="color: ${getScoreColor(data.result.categoryScores.client_ai)}">
                        ${data.result.categoryScores.client_ai}%
                    </div>
                    <p style="font-size: 14px; color: #64748b; margin: 5px 0 0 0;">
                        How your clients view and expect AI usage
                    </p>
                </div>
                
                <div class="category-item">
                    <div class="category-name">⚡ Current AI Implementation</div>
                    <div class="category-score" style="color: ${getScoreColor(data.result.categoryScores.personal_ai)}">
                        ${data.result.categoryScores.personal_ai}%
                    </div>
                    <p style="font-size: 14px; color: #64748b; margin: 5px 0 0 0;">
                        Your firm's current AI tool usage
                    </p>
                </div>
                
                <div class="category-item">
                    <div class="category-name">🎯 AI Readiness</div>
                    <div class="category-score" style="color: ${getScoreColor(data.result.categoryScores.readiness)}">
                        ${data.result.categoryScores.readiness}%
                    </div>
                    <p style="font-size: 14px; color: #64748b; margin: 5px 0 0 0;">
                        Infrastructure and team preparedness
                    </p>
                </div>
            </div>
            
            ${
              data.result.strengths.length > 0
                ? `
            <div class="recommendations" style="background: #f0fdf4; border-color: #22c55e;">
                <h3 style="color: #15803d;">🎉 Key Strengths</h3>
                <ul>
                    ${data.result.strengths.map((strength) => `<li>${strength}</li>`).join("")}
                </ul>
            </div>
            `
                : ""
            }
            
            ${
              data.result.improvements.length > 0
                ? `
            <div class="recommendations" style="background: #fef3c7; border-color: #f59e0b;">
                <h3 style="color: #92400e;">📈 Areas for Improvement</h3>
                <ul>
                    ${data.result.improvements.map((improvement) => `<li>${improvement}</li>`).join("")}
                </ul>
            </div>
            `
                : ""
            }
            
            <div class="recommendations">
                <h3>🚀 Strategic Recommendations</h3>
                <ul>
                    ${data.result.recommendations.map((recommendation) => `<li>${recommendation}</li>`).join("")}
                </ul>
            </div>
            
            ${
              !isForAdmin
                ? `
            <div class="cta-section">
                <h3>Ready to Accelerate Your AI Journey?</h3>
                <p>Based on your assessment results, Pro-Actis can help you implement the right AI strategy to meet your clients' expectations and gain competitive advantage.</p>
                <a href="https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy" class="cta-button">
                    📞 Book Your FREE 30-Minute Discovery Call
                </a>
                <p style="font-size: 14px; margin-top: 20px; opacity: 0.9;">
                    During this call, we'll discuss your specific needs and create a customized AI implementation roadmap for your firm.
                </p>
            </div>
            `
                : `
            <div class="cta-section">
                <h3>Follow Up Actions</h3>
                <p>This ${data.result.qualification} priority lead is ready for consultation. Their assessment shows ${data.result.qualification === "high" ? "immediate" : data.result.qualification === "medium" ? "moderate" : "low"} need for Pro-Actis services.</p>
                <a href="mailto:${data.userEmail}?subject=Your AI Readiness Assessment Results - Next Steps" class="cta-button">
                    📧 Contact ${data.firstName}
                </a>
                <p style="font-size: 14px; margin-top: 15px; opacity: 0.9;">
                    Recommended approach: ${data.result.qualification === "high" ? "Schedule immediate consultation call" : data.result.qualification === "medium" ? "Follow up within 48 hours with optimization strategy" : "Add to nurturing sequence for advanced content"}
                </p>
            </div>
            `
            }
        </div>
        
        <div class="footer">
            <p><strong>Pro-Actis AI</strong> - Empowering Legal Excellence Through Artificial Intelligence</p>
            <p>Generated on ${data.completedAt.toLocaleDateString()}</p>
            <p>
                <a href="https://pro-actis.com" style="color: #2962FF;">www.pro-actis.com</a> | 
                <a href="mailto:contact@pro-actis.com" style="color: #2962FF;">contact@pro-actis.com</a>
            </p>
            ${
              !isForAdmin
                ? `
            <p style="font-size: 12px; margin-top: 20px; color: #94a3b8;">
                This email was sent because you completed an AI readiness assessment on our website. 
                If you have any questions, please contact us at the email above.
            </p>
            `
                : ""
            }
        </div>
    </div>
</body>
</html>
  `;
};

// Utility function to create a plain text version for better email compatibility
export const generateAssessmentEmailText = (
  data: AssessmentEmailData,
  isForAdmin: boolean = false,
): string => {
  const qualificationInfo = getQualificationMessage(data.result.qualification);

  if (isForAdmin) {
    return `
NEW AI ASSESSMENT COMPLETED
============================

Client Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.userEmail}
- Firm: ${data.firmName}
- Completed: ${data.completedAt.toLocaleDateString()} at ${data.completedAt.toLocaleTimeString()}

Assessment Results:
- Overall Score: ${data.result.overallScore}%
- Qualification: ${data.result.qualification.toUpperCase()} PRIORITY
- Client AI Expectations: ${data.result.categoryScores.client_ai}%
- Current AI Implementation: ${data.result.categoryScores.personal_ai}%
- AI Readiness: ${data.result.categoryScores.readiness}%

Assessment Summary:
${qualificationInfo.message}

Strategic Recommendations:
${data.result.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join("\n")}

Next Steps:
Contact ${data.firstName} at ${data.userEmail} for follow-up consultation.

---
Pro-Actis AI Assessment System
Generated: ${data.completedAt.toLocaleString()}
    `;
  } else {
    return `
AI READINESS ASSESSMENT RESULTS
===============================

Hello ${data.firstName},

Thank you for completing the Pro-Actis AI Readiness Assessment.

YOUR RESULTS:
Overall AI Readiness Score: ${data.result.overallScore}%
Qualification Level: ${data.result.qualification.toUpperCase()} Priority

CATEGORY BREAKDOWN:
- Client AI Expectations: ${data.result.categoryScores.client_ai}%
- Current AI Implementation: ${data.result.categoryScores.personal_ai}%
- AI Readiness: ${data.result.categoryScores.readiness}%

ASSESSMENT SUMMARY:
${qualificationInfo.message}

${
  data.result.strengths.length > 0
    ? `
KEY STRENGTHS:
${data.result.strengths.map((strength) => `• ${strength}`).join("\n")}
`
    : ""
}

${
  data.result.improvements.length > 0
    ? `
AREAS FOR IMPROVEMENT:
${data.result.improvements.map((improvement) => `• ${improvement}`).join("\n")}
`
    : ""
}

STRATEGIC RECOMMENDATIONS:
${data.result.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join("\n")}

NEXT STEPS:
Ready to accelerate your AI journey? Book your FREE 30-minute discovery call:
https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy

During this call, we'll discuss your specific needs and create a customized AI implementation roadmap for your firm.

---
Pro-Actis AI - Empowering Legal Excellence Through Artificial Intelligence
www.pro-actis.com | contact@pro-actis.com

This email was sent because you completed an AI readiness assessment on our website.
    `;
  }
};
