import { useState } from "react";
import QuestionCard from "./question-card";
import { Question } from "../services/quizApi";
// import QuizTimer from "./quiz-timer";

interface QuestionListProps {
  questions: Question[];
  onComplete: (results: {
    score: number;
    correctAnswers: number;
    // timeTaken: number;
  }) => void;
}

export default function QuestionList({
  questions,
  onComplete,
}: QuestionListProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  // const [timeElapsed, setTimeElapsed] = useState(0);
  const totalQuestions = questions.length;

  const handleAnswer = (answerIndex: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const correctCount = answers.reduce((acc, answer, index) => {
        return acc + (questions[index].answers[answer].isCorrect ? 1 : 0);
      }, 0);

      onComplete({
        score: Math.ceil((correctCount / totalQuestions) * 100),
        correctAnswers: correctCount,
        // timeTaken: timeElapsed,
      });
    }
  };

  // const handleTimeUpdate = (newTimeElapsed) => {
  //   setTimeElapsed(newTimeElapsed);
  // };

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
      {/* <QuizTimer duration={3600} onTimeUpdate={handleTimeUpdate} /> */}

      <QuestionCard
        question={questions[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        selectedAnswer={answers[currentQuestionIndex]}
        onAnswer={handleAnswer}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}
