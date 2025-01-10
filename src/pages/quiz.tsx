import { StartQuiz } from "@/features/quiz/components/start-quiz";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { quizApi } from "@/features/quiz/services/quizApi";
import type { Quiz as QuizType } from "@/features/quiz/services/quizApi";
import QuestionList from "@/features/quiz/components/question-list";
import { QuizFinish } from "@/features/quiz/components/quiz-finish";

export function QuizPage() {
  const { id } = useParams<{ id: string }>();

  const [isStarted, setIsStarted] = useState(false);
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isFinished, setIsFinished] = useState(false);

  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    timeTaken: 0,
    earnedTokens: 0,
  });

  const { score, correctAnswers, timeTaken, earnedTokens } = result;

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        const quizData = await quizApi.getQuiz(id, "quest.edu_Ox8e3d");
        setQuiz(quizData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch quiz");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, []);

  const handleQuizComplete = (results: {
    score: number;
    correctAnswers: number;
    // timeTaken: number;
  }) => {
    setResult((prev) => ({ ...prev, ...results }));
    setIsFinished(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quiz) return <div>Quiz not found</div>;

  if (isFinished) {
    return (
      <div className="bg-gray-100 h-screen relative">
        <div className="flex flex-col justify-center h-full items-center relative">
          <QuizFinish
            score={score}
            totalQuestions={quiz.questions.length}
            correctAnswers={correctAnswers}
            timeTaken={timeTaken}
            earnedTokens={earnedTokens}
          />
          <img
            src="/assets/images/backgrounds/quiz-bg.png"
            alt="quiz background"
            className="absolute top-0 left-0 h-full w-full object-cover z-10 pointer-events-none"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 h-screen relative">
      <div className="flex flex-col justify-center h-full items-center relative">
        {!isStarted ? (
          <StartQuiz
            quizTitle={quiz.title}
            description={quiz.description}
            winnerCount={quiz.winnerCount}
            duration={quiz.duration}
            liquidity={quiz.liquidity}
            onStart={() => setIsStarted(true)}
          />
        ) : (
          <QuestionList
            questions={quiz.questions}
            onComplete={handleQuizComplete}
          />
        )}
        {/* <img
          src="/assets/images/backgrounds/quiz-bg.png"
          alt="quiz background"
          className="absolute top-0 left-0 h-full w-full object-cover z-10 pointer-events-none"
        /> */}
      </div>
    </div>
  );
}
