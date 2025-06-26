import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  quizQuestions,
  calculateQuizScore,
  QuizAnswer,
  QuizResult,
} from "@/utils/quizScoring";
import QuizResultsModal from "./QuizResultsModal";

interface AIAssessmentQuizProps {
  onComplete?: (result: QuizResult) => void;
}

const AIAssessmentQuiz = ({ onComplete }: AIAssessmentQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const currentQuestionData = quizQuestions[currentQuestion];
    const selectedValue = parseInt(selectedOption);

    // Update answers
    const newAnswer: QuizAnswer = {
      questionId: currentQuestionData.id,
      value: selectedValue,
      category: currentQuestionData.category,
    };

    const updatedAnswers = [
      ...answers.filter((a) => a.questionId !== currentQuestionData.id),
      newAnswer,
    ];

    setAnswers(updatedAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      // Quiz completed - calculate results
      const finalResult = calculateQuizScore(updatedAnswers);
      setResult(finalResult);
      setShowResults(true);
      onComplete?.(finalResult);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Find existing answer for previous question
      const prevQuestionId = quizQuestions[currentQuestion - 1].id;
      const existingAnswer = answers.find(
        (a) => a.questionId === prevQuestionId,
      );
      setSelectedOption(existingAnswer?.value?.toString() || "");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setResult(null);
    setSelectedOption("");
  };

  const currentQuestionData = quizQuestions[currentQuestion];

  if (showResults && result) {
    return (
      <QuizResultsModal
        isOpen={showResults}
        onClose={() => setShowResults(false)}
        result={result}
        onRetake={resetQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-proactis-light/20 to-white py-12">
      <div className="proactis-container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-proactis-dark mb-4">
            AI Readiness Assessment
          </h1>
          <p className="text-xl text-proactis-gray-600 max-w-2xl mx-auto">
            Discover how prepared your law firm is for the AI revolution and
            where you stand compared to client expectations.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-proactis-gray-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-proactis-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <CardTitle className="text-2xl text-proactis-dark leading-relaxed pr-4">
                {currentQuestionData.question}
              </CardTitle>
              <div className="bg-proactis-light/20 px-3 py-1 rounded-full flex-shrink-0">
                <span className="text-sm font-medium text-proactis-primary capitalize">
                  {currentQuestionData.category.replace("_", " ")}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedOption}
              onValueChange={handleAnswerSelect}
              className="space-y-4"
            >
              {currentQuestionData.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-start space-x-3 p-4 rounded-lg border border-proactis-gray-200 hover:border-proactis-primary hover:bg-proactis-light/10 transition-all duration-200 cursor-pointer"
                  onClick={() => handleAnswerSelect(option.value.toString())}
                >
                  <RadioGroupItem
                    value={option.value.toString()}
                    id={`option-${option.value}`}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label
                      htmlFor={`option-${option.value}`}
                      className="text-base font-medium text-proactis-dark cursor-pointer block mb-1"
                    >
                      {option.label}
                    </Label>
                    {option.description && (
                      <p className="text-sm text-proactis-gray-600">
                        {option.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-2"
          >
            Previous
          </Button>

          <div className="flex space-x-2">
            {quizQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index < currentQuestion
                    ? "bg-proactis-primary"
                    : index === currentQuestion
                      ? "bg-proactis-gold"
                      : "bg-proactis-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="proactis-button-primary px-6 py-2"
          >
            {currentQuestion === quizQuestions.length - 1
              ? "Get Results"
              : "Next"}
          </Button>
        </div>

        {/* Help Text */}
        <div className="text-center mt-8 p-4 bg-proactis-light/10 rounded-lg">
          <p className="text-sm text-proactis-gray-600">
            <strong>Assessment Time:</strong> ~5 minutes |{" "}
            <strong>Questions:</strong> {quizQuestions.length} |{" "}
            <strong>Result:</strong> Personalized AI strategy recommendation
            with PDF report
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssessmentQuiz;
