import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssessmentQuiz from "@/components/AIAssessmentQuiz";
import QuizCTA from "@/components/QuizCTA";
import { QuizResult } from "@/utils/quizScoring";

const Assessment = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <AIAssessmentQuiz onComplete={handleQuizComplete} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <QuizCTA onStartQuiz={handleStartQuiz} />
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
