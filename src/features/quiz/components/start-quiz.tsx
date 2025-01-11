import { IQuiz } from "../types";

interface StartQuizProps {
  quiz: IQuiz;
  onStart: () => void;
}

const cardStyles = "bg-white p-12 border border-[#91E2A8] rounded-md";
const statStyles = "bg-[#DEF7E5] p-4 rounded-lg";
const buttonStyles =
  "w-full bg-option text-white font-bold py-4 px-8 rounded-lg uppercase hover:bg-[#22A247] transition-colors";

export function StartQuiz({
  quiz: { title, description, winnerCount, liquidity },
  onStart,
}: StartQuizProps) {
  return (
    <div className="relative max-w-5xl z-20 space-y-8 p-8">
      <div className={cardStyles}>
        <h2 className="text-3xl text-[#464646] font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={statStyles}>
            <h3 className="text-[#22A247] font-semibold mb-2">Duration</h3>
            <p className="text-2xl font-bold">60 min.</p>
          </div>
          <div className={statStyles}>
            <h3 className="text-[#22A247] font-semibold mb-2">Winners</h3>
            <p className="text-2xl font-bold">{winnerCount}</p>
          </div>
          <div className={statStyles}>
            <h3 className="text-[#22A247] font-semibold mb-2">Reward Pool</h3>
            <p className="text-2xl font-bold">{liquidity || "N/A"}</p>
          </div>
        </div>

        <button onClick={onStart} className={buttonStyles}>
          Start Quiz
        </button>
      </div>

      <div className={cardStyles}>
        <h3 className="text-xl font-semibold mb-4">Rules</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Answer all questions within the time limit</li>
          <li>Each question has only one correct answer</li>
          <li>You cannot return to previous questions</li>
          <li>Top {winnerCount} participants will receive rewards</li>
        </ul>
      </div>
    </div>
  );
}
