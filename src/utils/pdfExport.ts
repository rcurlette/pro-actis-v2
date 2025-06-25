import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportToPDF = async (
  elementId: string,
  filename: string = "report.pdf",
) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    // Configure html2canvas options for better PDF quality
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
      height: element.scrollHeight,
      width: element.scrollWidth,
    });

    const imgData = canvas.toDataURL("image/png");

    // Calculate PDF dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const pdf = new jsPDF("p", "mm", "a4");
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if content exceeds one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Add metadata
    pdf.setProperties({
      title: "Pro-Actis AI Performance Report",
      subject: "AI Tools Performance Analysis",
      author: "Pro-Actis",
      creator: "Pro-Actis Dashboard",
    });

    // Save the PDF
    pdf.save(filename);

    return { success: true, message: "PDF exported successfully" };
  } catch (error) {
    console.error("Error exporting PDF:", error);
    return { success: false, message: "Failed to export PDF" };
  }
};

export const generateReportFilename = (
  userEmail: string,
  period: string = "monthly",
) => {
  const date = new Date();
  const dateString = date.toISOString().split("T")[0]; // YYYY-MM-DD format
  const clientName = userEmail.split("@")[0].replace(/[^a-zA-Z0-9]/g, "_");

  return `ProActis_AI_Report_${clientName}_${period}_${dateString}.pdf`;
};

export const createShareableReport = async (reportData: any) => {
  // Create a simplified report object that can be easily shared
  const shareableData = {
    generated: new Date().toISOString(),
    client: reportData.userEmail,
    period: reportData.reportPeriod || "Last 30 Days",
    summary: {
      revenueImpact: "$127,000",
      leadsGenerated: 247,
      timeSaved: "156 hours",
      roiPercentage: "282%",
    },
    keyMetrics: {
      dripify: { performance: 87, leads: 47, conversion: "12.3%" },
      notebookLM: { performance: 94, documents: 156, insights: 23 },
      lindy: { performance: 91, tasks: 34, emails: 89 },
      linkedin: { performance: 78, connections: 12, views: "1.8k" },
      googleDrive: { performance: 85, files: 67, collaborations: 8 },
      teams: { performance: 82, meetings: 15, messages: 234 },
      upmeet: { performance: 89, meetings: 8, satisfaction: "96%" },
    },
    recommendations: [
      "Optimize LinkedIn performance (currently at 78%)",
      "Scale NotebookLM usage (excellent 94% performance)",
      "Enhance Dripify-Lindy integration for better lead nurturing",
    ],
  };

  return shareableData;
};
