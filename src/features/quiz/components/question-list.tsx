import { useState } from "react";
import QuestionCard from "./question-card";
import { questions } from "@/__mock/questions";

export default function QuestionList() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = questions.length;

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <QuestionCard
        question={questions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}
