import { QuizResult, getQualificationMessage } from "./quizScoring";

export interface AssessmentEmailData {
  userEmail: string;
  firstName: string;
  lastName: string;
  firmName: string;
  result: QuizResult;
  completedAt: Date;
}

// Simple HTML template optimized for email clients (Gmail, Outlook, etc.)
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
      case "high": return "#ef4444"; // Red (high priority)
      case "medium": return "#f59e0b"; // Yellow
      case "low": return "#10b981"; // Green
      default: return "#6b7280";
    }
  };

  if (isForAdmin) {
    return `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
  <div style="background-color: #2962FF; color: white; padding: 30px; text-align: center; border-radius: 8px;">
    <h1 style="margin: 0; font-size: 24px;">⚡ Pro-Actis AI</h1>
    <p style="margin: 10px 0 0 0; font-size: 16px;">New Assessment Completed</p>
  </div>

  <div style="background-color: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h2 style="color: #92400e; margin-top: 0;">📋 Assessment Details</h2>
    <p><strong>Client:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.userEmail}</p>
    <p><strong>Firm:</strong> ${data.firmName}</p>
    <p><strong>Completed:</strong> ${data.completedAt.toLocaleDateString()} at ${data.completedAt.toLocaleTimeString()}</p>
    <p><strong>Qualification:</strong> <span style="color: ${getQualificationColor(data.result.qualification)}; font-weight: bold; text-transform: uppercase;">${data.result.qualification} PRIORITY</span></p>
  </div>

  <div style="background-color: #f1f5f9; border: 3px solid #2962FF; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
    <h2 style="margin-top: 0;">Overall AI Readiness Score</h2>
    <div style="font-size: 36px; font-weight: bold; color: ${getScoreColor(data.result.overallScore)}; margin: 10px 0;">
      ${data.result.overallScore}%
    </div>
    <p style="font-style: italic; color: #64748b;">${qualificationInfo.message}</p>
  </div>

  <div style="margin: 20px 0;">
    <h3>📊 Category Breakdown:</h3>
    <p>👥 <strong>Client AI Expectations:</strong> <span style="color: ${getScoreColor(data.result.categoryScores.client_ai)}; font-weight: bold;">${data.result.categoryScores.client_ai}%</span></p>
    <p>⚡ <strong>Current AI Implementation:</strong> <span style="color: ${getScoreColor(data.result.categoryScores.personal_ai)}; font-weight: bold;">${data.result.categoryScores.personal_ai}%</span></p>
    <p>🎯 <strong>AI Readiness:</strong> <span style="color: ${getScoreColor(data.result.categoryScores.readiness)}; font-weight: bold;">${data.result.categoryScores.readiness}%</span></p>
  </div>

  <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #0369a1; margin-top: 0;">🚀 Strategic Recommendations:</h3>
    ${data.result.recommendations.map(rec => `<p style="margin: 8px 0;">• ${rec}</p>`).join('')}
  </div>

  <div style="background-color: #2962FF; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
    <h3 style="margin-top: 0;">Follow Up Actions</h3>
    <p>This <strong>${data.result.qualification} priority</strong> lead is ready for consultation.</p>
    <p style="margin: 15px 0;">
      <a href="mailto:${data.userEmail}?subject=Your AI Readiness Assessment Results - Next Steps"
         style="background-color: #ffc107; color: #1e293b; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        📧 Contact ${data.firstName}
      </a>
    </p>
  </div>

  <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 14px; margin-top: 20px;">
    <p><strong>Pro-Actis AI</strong> - Empowering Legal Excellence Through Artificial Intelligence</p>
    <p>Generated on ${data.completedAt.toLocaleDateString()}</p>
  </div>
</div>`;
  } else {
    return `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
  <div style="background-color: #2962FF; color: white; padding: 30px; text-align: center; border-radius: 8px;">
    <h1 style="margin: 0; font-size: 24px;">⚡ Pro-Actis AI</h1>
    <p style="margin: 10px 0 0 0; font-size: 16px;">AI Readiness Assessment Results</p>
  </div>

  <div style="padding: 20px 0;">
    <h2>Hello ${data.firstName},</h2>
    <p>Thank you for completing the Pro-Actis AI Readiness Assessment. Here are your personalized results:</p>
  </div>

  <div style="background-color: #f1f5f9; border: 3px solid #2962FF; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
    <h2 style="margin-top: 0;">Overall AI Readiness Score</h2>
    <div style="font-size: 48px; font-weight: bold; color: ${getScoreColor(data.result.overallScore)}; margin: 10px 0;">
      ${data.result.overallScore}%
    </div>
    <div style="background-color: ${getQualificationColor(data.result.qualification)}; color: white; padding: 8px 16px; border-radius: 20px; display: inline-block; font-weight: bold; text-transform: uppercase; font-size: 12px; margin: 10px 0;">
      ${data.result.qualification} Priority
    </div>
    <p style="font-style: italic; color: #64748b; margin-top: 15px;">${qualificationInfo.message}</p>
  </div>

  <div style="margin: 20px 0;">
    <h3>📊 Category Breakdown</h3>

    <div style="background-color: #f8fafc; border-left: 4px solid #2962FF; padding: 15px; margin: 10px 0;">
      <div style="font-weight: bold; margin-bottom: 5px;">👥 Client AI Expectations</div>
      <div style="font-size: 20px; font-weight: bold; color: ${getScoreColor(data.result.categoryScores.client_ai)}; margin-bottom: 5px;">
        ${data.result.categoryScores.client_ai}%
      </div>
      <p style="font-size: 14px; color: #64748b; margin: 0;">How your clients view and expect AI usage</p>
    </div>

    <div style="background-color: #f8fafc; border-left: 4px solid #2962FF; padding: 15px; margin: 10px 0;">
      <div style="font-weight: bold; margin-bottom: 5px;">⚡ Current AI Implementation</div>
      <div style="font-size: 20px; font-weight: bold; color: ${getScoreColor(data.result.categoryScores.personal_ai)}; margin-bottom: 5px;">
        ${data.result.categoryScores.personal_ai}%
      </div>
      <p style="font-size: 14px; color: #64748b; margin: 0;">Your firm's current AI tool usage</p>
    </div>

    <div style="background-color: #f8fafc; border-left: 4px solid #2962FF; padding: 15px; margin: 10px 0;">
      <div style="font-weight: bold; margin-bottom: 5px;">🎯 AI Readiness</div>
      <div style="font-size: 20px; font-weight: bold; color: ${getScoreColor(data.result.categoryScores.readiness)}; margin-bottom: 5px;">
        ${data.result.categoryScores.readiness}%
      </div>
      <p style="font-size: 14px; color: #64748b; margin: 0;">Infrastructure and team preparedness</p>
    </div>
  </div>

  ${data.result.strengths.length > 0 ? `
  <div style="background-color: #f0fdf4; border: 1px solid #22c55e; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #15803d; margin-top: 0;">🎉 Key Strengths</h3>
    ${data.result.strengths.map(strength => `<p style="margin: 8px 0;">• ${strength}</p>`).join('')}
  </div>
  ` : ''}

  ${data.result.improvements.length > 0 ? `
  <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #92400e; margin-top: 0;">📈 Areas for Improvement</h3>
    ${data.result.improvements.map(improvement => `<p style="margin: 8px 0;">• ${improvement}</p>`).join('')}
  </div>
  ` : ''}

  <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #0369a1; margin-top: 0;">🚀 Strategic Recommendations</h3>
    ${data.result.recommendations.map(rec => `<p style="margin: 8px 0;">• ${rec}</p>`).join('')}
  </div>

  <div style="background-color: #2962FF; color: white; padding: 30px; border-radius: 8px; text-align: center; margin: 20px 0;">
    <h3 style="margin-top: 0;">Ready to Accelerate Your AI Journey?</h3>
    <p>Based on your assessment results, Pro-Actis can help you implement the right AI strategy to meet your clients' expectations and gain competitive advantage.</p>
    <p style="margin: 20px 0;">
      <a href="https://calendly.com/mylinkedinads/talking-about-your-a-i-strategy"
         style="background-color: #ffc107; color: #1e293b; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        📞 Book Your FREE 30-Minute Discovery Call
      </a>
    </p>
    <p style="font-size: 14px; opacity: 0.9; margin-top: 20px;">
      During this call, we'll discuss your specific needs and create a customized AI implementation roadmap for your firm.
    </p>
  </div>

  <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 14px;">
    <p><strong>Pro-Actis AI</strong> - Empowering Legal Excellence Through Artificial Intelligence</p>
    <p>Generated on ${data.completedAt.toLocaleDateString()}</p>
    <p>
      <a href="https://pro-actis.com" style="color: #2962FF;">www.pro-actis.com</a> |
      <a href="mailto:contact@pro-actis.com" style="color: #2962FF;">contact@pro-actis.com</a>
    </p>
    <p style="font-size: 12px; margin-top: 20px; color: #94a3b8;">
      This email was sent because you completed an AI readiness assessment on our website.
      If you have any questions, please contact us at the email above.
    </p>
  </div>
</div>`;
  }
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
