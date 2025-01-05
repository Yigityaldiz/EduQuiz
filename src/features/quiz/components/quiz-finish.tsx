import * as React from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

interface QuizFinishProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
  earnedTokens?: number;
}

export function QuizFinish({
  score,
  totalQuestions,
  correctAnswers,
  timeTaken,
  earnedTokens,
}: QuizFinishProps) {
  const navigate = useNavigate();

  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="bg-white rounded-lg border border-[#91E2A8] min-h-[70dvh] w-full max-w-5xl z-20 relative">
  

      <div className="relative space-y-8 p-8">
        <div className="bg-white p-12 border border-[#91E2A8] rounded-md text-center">
          <h2 className="text-4xl text-[#22A247] font-bold mb-8">
            Quiz Completed!
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#DEF7E5] p-4 rounded-lg">
              <h3 className="text-[#22A247] font-semibold mb-2">Score</h3>
              <p className="text-3xl font-bold">{score}</p>
            </div>
            <div className="bg-[#DEF7E5] p-4 rounded-lg">
              <h3 className="text-[#22A247] font-semibold mb-2">Correct</h3>
              <p className="text-3xl font-bold">
                {correctAnswers}/{totalQuestions}
              </p>
            </div>
            <div className="bg-[#DEF7E5] p-4 rounded-lg">
              <h3 className="text-[#22A247] font-semibold mb-2">Time</h3>
              <p className="text-3xl font-bold">{timeTaken}s</p>
            </div>
            <div className="bg-[#DEF7E5] p-4 rounded-lg">
              <h3 className="text-[#22A247] font-semibold mb-2">Earned</h3>
              <p className="text-3xl font-bold">{earnedTokens || "0"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate("/")}
              className="w-full bg-white hover:bg-option hover:text-white text-option border-2 border-option font-bold py-4 px-8 rounded-lg uppercase hover:bg-[#DEF7E5] transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        <div className="bg-white p-6 border border-[#91E2A8] rounded-md">
          <h3 className="text-xl text-center font-semibold mb-4">Share Your Achievement</h3>
          <div className="flex gap-4 justify-center">
            <button className="p-3 rounded-full bg-[#DEF7E5] hover:bg-[#91E2A8] transition-colors">
              <TwitterIcon />
            </button>
            <button className="p-3 rounded-full bg-[#DEF7E5] hover:bg-[#91E2A8] transition-colors">
              <FacebookIcon />
            </button>
            <button className="p-3 rounded-full bg-[#DEF7E5] hover:bg-[#91E2A8] transition-colors">
              <LinkedinIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
