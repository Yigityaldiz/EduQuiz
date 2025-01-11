import { useState, useEffect, useRef, useCallback } from "react";
import QuestionCard from "./question-card";
import type { IQuestion } from "../types";

interface QuestionListProps {
  questions: IQuestion[];
  onComplete: (results: {
    score: number;
    correctAnswers: number;
    timeTaken: number;
    earnedTokens: number;
  }) => void;
}

export default function QuestionList({
  questions,
  onComplete,
}: QuestionListProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalQuestions = questions.length;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleAnswer = useCallback(
    (answerIndex: number) => {
      setAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentQuestionIndex] = answerIndex;
        return newAnswers;
      });
    },
    [currentQuestionIndex]
  );

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateResults();
    }
  }, [currentQuestionIndex, totalQuestions]);

  const calculateResults = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const correctCount = answers.reduce((acc, answerIndex, index) => {
      const isCorrect = questions[index].answers[answerIndex]?.isCorrect;
      return acc + (isCorrect ? 1 : 0);
    }, 0);

    onComplete({
      score: Math.ceil((correctCount / totalQuestions) * 100),
      correctAnswers: correctCount,
      timeTaken: timeElapsed,
      earnedTokens: 0,
    });
  }, [answers, questions, timeElapsed, totalQuestions, onComplete]);

  useEffect(() => {
    setAnswers(Array(questions.length).fill(-1));
    setTimeElapsed(0);
  }, [questions]);

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-4">
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
