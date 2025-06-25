import { useState } from "react";
import { Button } from "@/components/ui/button";
import PerformanceReport from "@/components/PerformanceReport";
import { exportToPDF, generateReportFilename } from "@/utils/pdfExport";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
}

const ReportModal = ({ isOpen, onClose, userEmail }: ReportModalProps) => {
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleExportPDF = async () => {
    setIsExporting(true);

    const filename = generateReportFilename(userEmail, "monthly");
    const result = await exportToPDF("performance-report-modal", filename);

    if (result.success) {
      // Show success notification
      setTimeout(() => {
        onClose();
      }, 1000);
    }

    setIsExporting(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-proactis-primary text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Performance Report</h2>
            <p className="opacity-90">AI Solutions Analysis - {userEmail}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              onClick={handlePrint}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              size="sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print
            </Button>
            <Button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="bg-proactis-secondary hover:bg-proactis-secondary/90 text-white"
              size="sm"
            >
              {isExporting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Exporting...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                  Download PDF
                </>
              )}
            </Button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Report Content */}
        <div className="overflow-auto max-h-[calc(90vh-100px)]">
          <div id="performance-report-modal">
            <PerformanceReport
              userEmail={userEmail}
              reportDate={new Date().toLocaleDateString()}
              reportPeriod="Last 30 Days"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
