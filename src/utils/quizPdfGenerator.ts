import jsPDF from "jspdf";
import { QuizResult, getQualificationMessage } from "./quizScoring";

export interface QuizPdfData {
  userEmail: string;
  firmName: string;
  result: QuizResult;
  completedAt: Date;
}

export const generateQuizPDF = (data: QuizPdfData): string => {
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const lineHeight = 6;
  let yPosition = margin;

  // Colors (converted to RGB values)
  const primaryBlue = [41, 98, 255]; // #2962FF
  const goldAccent = [255, 193, 7]; // #FFC107
  const darkGray = [51, 65, 85]; // #334155
  const lightGray = [148, 163, 184]; // #94A3B8

  // Helper function to add text with word wrap
  const addWrappedText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    fontSize: number = 10,
  ): number => {
    pdf.setFontSize(fontSize);
    const lines = pdf.splitTextToSize(text, maxWidth);
    lines.forEach((line: string, index: number) => {
      pdf.text(line, x, y + index * lineHeight);
    });
    return y + lines.length * lineHeight;
  };

  // Header with logo area and branding
  pdf.setFillColor(...primaryBlue);
  pdf.rect(0, 0, pageWidth, 35, "F");

  // Logo placeholder (lightning bolt representation)
  pdf.setFillColor(255, 255, 255);
  pdf.rect(margin, 10, 10, 15, "F");

  // Company name
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(18);
  pdf.setFont("helvetica", "bold");
  pdf.text("Pro-Actis AI", margin + 15, 20);

  // Assessment title
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");
  pdf.text("AI Readiness Assessment Report", margin + 15, 28);

  // Reset text color and position
  pdf.setTextColor(...darkGray);
  yPosition = 50;

  // Executive Summary Box
  pdf.setDrawColor(...lightGray);
  pdf.setFillColor(248, 250, 252); // Very light gray background
  pdf.rect(margin, yPosition, pageWidth - 2 * margin, 40, "FD");

  yPosition += 10;
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.text("Executive Summary", margin + 5, yPosition);

  yPosition += 8;
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");

  // Firm and date info
  pdf.text(`Firm: ${data.firmName}`, margin + 5, yPosition);
  yPosition += 6;
  pdf.text(`Contact: ${data.userEmail}`, margin + 5, yPosition);
  yPosition += 6;
  pdf.text(
    `Assessment Date: ${data.completedAt.toLocaleDateString()}`,
    margin + 5,
    yPosition,
  );
  yPosition += 6;
  pdf.text(
    `Overall AI Readiness Score: ${data.result.overallScore}%`,
    margin + 5,
    yPosition,
  );

  yPosition += 15;

  // Score Breakdown Section
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text("AI Readiness Breakdown", margin, yPosition);
  yPosition += 10;

  // Score bars and labels
  const scoreCategories = [
    {
      name: "Client AI Expectations",
      score: data.result.categoryScores.client_ai,
    },
    {
      name: "Current AI Implementation",
      score: data.result.categoryScores.personal_ai,
    },
    {
      name: "AI Readiness & Infrastructure",
      score: data.result.categoryScores.readiness,
    },
  ];

  scoreCategories.forEach((category) => {
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(category.name, margin, yPosition);
    pdf.text(`${category.score}%`, pageWidth - margin - 15, yPosition);

    // Score bar background
    pdf.setFillColor(...lightGray);
    pdf.rect(margin, yPosition + 2, pageWidth - 2 * margin - 20, 4, "F");

    // Score bar fill
    const fillWidth = ((pageWidth - 2 * margin - 20) * category.score) / 100;
    if (category.score >= 70) {
      pdf.setFillColor(34, 197, 94); // Green
    } else if (category.score >= 40) {
      pdf.setFillColor(...goldAccent);
    } else {
      pdf.setFillColor(239, 68, 68); // Red
    }
    pdf.rect(margin, yPosition + 2, fillWidth, 4, "F");

    yPosition += 15;
  });

  yPosition += 10;

  // Qualification Assessment
  const qualificationInfo = getQualificationMessage(data.result.qualification);

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text("Assessment Results", margin, yPosition);
  yPosition += 10;

  // Qualification box with color coding
  let qualificationColor: number[];
  if (data.result.qualification === "high") {
    qualificationColor = [34, 197, 94]; // Green
  } else if (data.result.qualification === "medium") {
    qualificationColor = goldAccent;
  } else {
    qualificationColor = [239, 68, 68]; // Red
  }

  pdf.setFillColor(...qualificationColor);
  pdf.rect(margin, yPosition, pageWidth - 2 * margin, 8, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(11);
  pdf.setFont("helvetica", "bold");
  pdf.text(qualificationInfo.title, margin + 5, yPosition + 5);

  yPosition += 15;
  pdf.setTextColor(...darkGray);
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  yPosition = addWrappedText(
    qualificationInfo.message,
    margin,
    yPosition,
    pageWidth - 2 * margin,
    10,
  );

  yPosition += 10;

  // Key Strengths Section
  if (data.result.strengths.length > 0) {
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text("Key Strengths", margin, yPosition);
    yPosition += 8;

    data.result.strengths.forEach((strength) => {
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.text("•", margin, yPosition);
      yPosition = addWrappedText(
        strength,
        margin + 5,
        yPosition,
        pageWidth - 2 * margin - 5,
        10,
      );
      yPosition += 3;
    });

    yPosition += 5;
  }

  // Areas for Improvement Section
  if (data.result.improvements.length > 0) {
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text("Areas for Improvement", margin, yPosition);
    yPosition += 8;

    data.result.improvements.forEach((improvement) => {
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.text("•", margin, yPosition);
      yPosition = addWrappedText(
        improvement,
        margin + 5,
        yPosition,
        pageWidth - 2 * margin - 5,
        10,
      );
      yPosition += 3;
    });

    yPosition += 5;
  }

  // Check if we need a new page for recommendations
  if (yPosition > pageHeight - 80) {
    pdf.addPage();
    yPosition = margin;
  }

  // Strategic Recommendations Section
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text("Strategic Recommendations", margin, yPosition);
  yPosition += 8;

  data.result.recommendations.forEach((recommendation, index) => {
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(`${index + 1}.`, margin, yPosition);
    yPosition = addWrappedText(
      recommendation,
      margin + 8,
      yPosition,
      pageWidth - 2 * margin - 8,
      10,
    );
    yPosition += 5;
  });

  yPosition += 15;

  // Next Steps CTA Section
  pdf.setDrawColor(...primaryBlue);
  pdf.setFillColor(240, 245, 255); // Very light blue background
  pdf.rect(margin, yPosition, pageWidth - 2 * margin, 45, "FD");

  yPosition += 10;
  pdf.setTextColor(...primaryBlue);
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.text(
    "Next Steps: Let's Accelerate Your AI Journey",
    margin + 5,
    yPosition,
  );

  yPosition += 10;
  pdf.setTextColor(...darkGray);
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  yPosition = addWrappedText(
    "Based on your assessment results, Pro-Actis can help you implement the right AI strategy to meet your clients' expectations and gain competitive advantage.",
    margin + 5,
    yPosition,
    pageWidth - 2 * margin - 10,
    10,
  );

  yPosition += 8;
  pdf.setFont("helvetica", "bold");
  pdf.text("Book your FREE 30-minute discovery call:", margin + 5, yPosition);
  yPosition += 6;
  pdf.setTextColor(...primaryBlue);
  pdf.setFont("helvetica", "normal");
  pdf.text(
    "https://calendly.com/pro-actis/discovery-call",
    margin + 5,
    yPosition,
  );

  // Footer
  pdf.setDrawColor(...lightGray);
  pdf.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);

  pdf.setTextColor(...lightGray);
  pdf.setFontSize(8);
  pdf.setFont("helvetica", "normal");
  pdf.text(
    "Pro-Actis AI - Empowering Legal Excellence Through Artificial Intelligence",
    margin,
    pageHeight - 15,
  );
  pdf.text(
    `Generated on ${new Date().toLocaleDateString()}`,
    margin,
    pageHeight - 10,
  );
  pdf.text(
    "www.pro-actis.com | contact@pro-actis.com",
    pageWidth - margin - 60,
    pageHeight - 10,
  );

  // Set PDF metadata
  pdf.setProperties({
    title: "AI Readiness Assessment Report",
    subject: "Legal AI Implementation Assessment",
    author: "Pro-Actis AI",
    creator: "Pro-Actis Assessment Platform",
    keywords: "AI, Legal, Assessment, Strategy, Implementation",
  });

  return pdf.output("datauristring");
};

export const generateQuizFilename = (
  firmName: string,
  userEmail: string,
): string => {
  const date = new Date();
  const dateString = date.toISOString().split("T")[0]; // YYYY-MM-DD format
  const sanitizedFirm = firmName.replace(/[^a-zA-Z0-9]/g, "_").substring(0, 20);
  const clientName = userEmail.split("@")[0].replace(/[^a-zA-Z0-9]/g, "_");

  return `ProActis_AI_Assessment_${sanitizedFirm}_${clientName}_${dateString}.pdf`;
};
