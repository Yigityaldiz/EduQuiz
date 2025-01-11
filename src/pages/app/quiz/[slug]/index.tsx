import { useState } from "react";
import { useParams } from "react-router-dom";
import { StartQuiz } from "@/features/quiz/components/start-quiz";
import QuestionList from "@/features/quiz/components/question-list";
import { QuizFinish } from "@/features/quiz/components/quiz-finish";
import { useQuiz } from "@/features/quiz/hooks/use-quiz";
import QuizTimer from "@/features/quiz/components/quiz-timer";
import PencilSpinner from "@/components/pencil-spinner";

export function SingleQuiz() {
  const { id } = useParams<{ id: string }>();
  const { quiz, error, isLoading } = useQuiz(id as string, "quest.edu_Ox8e3d");

  const [quizState, setQuizState] = useState({
    isStarted: false,
    isFinished: false,
    result: {
      score: 0,
      correctAnswers: 0,
      timeTaken: 0,
      earnedTokens: 0,
    },
  });

  const handleQuizComplete = (results: {
    score: number;
    correctAnswers: number;
    timeTaken: number;
    earnedTokens: number;
  }) => {
    setQuizState((prev) => ({
      ...prev,
      isFinished: true,
      result: results,
    }));
  };

  const handleTimeUp = () => {
    setQuizState((prev) => ({ ...prev, isFinished: true }));
  };

  if (isLoading) return <PencilSpinner />;
  if (error) return <div>Error loading quiz: {error.message}</div>;
  if (!quiz) return <div>Quiz not found</div>;

  return (
    <div>
      {!quizState.isStarted && !quizState.isFinished && (
        <StartQuiz
          quiz={quiz}
          onStart={() => setQuizState((prev) => ({ ...prev, isStarted: true }))}
        />
      )}

      {quizState.isStarted && !quizState.isFinished && (
        <>
          <QuizTimer duration={3600} onTimeUp={handleTimeUp} />
          <QuestionList
            questions={quiz.questions}
            onComplete={handleQuizComplete}
          />
        </>
      )}

      {quizState.isFinished && (
        <QuizFinish
          results={quizState.result}
          totalQuestions={quiz.questions.length}
        />
      )}
    </div>
  );
}
