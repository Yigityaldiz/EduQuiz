import { CheckCheckIcon } from "lucide-react";
import { Question } from "../types/question";

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg border border-[#91E2A8] h-[70dvh] w-full max-w-5xl z-20 relative">
      <img
        src="/assets/images/backgrounds/question-bg.png"
        alt="Question BG Shape"
        className="w-full h-auto object-cover rounded-lg relative z-10"
      />

      <div className="relative max-w-3xl mx-auto -mt-28 z-20 space-y-8">
        <div className="bg-white p-12 border border-[#91E2A8] rounded-md">
          <h2 className="text-xl text-[#464646] font-semibold">
            {question.question_text}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {question.answers.map((option, index) => (
            <button
              key={index}
              className="bg-transparent h-[72px] text-lg font-medium group text-[#464646] border text-left border-slate-300 rounded-md flex p-2 items-center gap-4 hover:border-[#91E2A8] hover:bg-[#DEF7E5]"
            >
              <span className="h-full w-14 rounded-md bg-[#DEF7E5] text-3xl flex items-center justify-center group-hover:hidden">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="h-full w-14 text-white rounded-md hidden group-hover:flex bg-option group-hover:bg-option text-3xl group-hover:items-center group-hover:justify-center">
                <CheckCheckIcon size={28} />
              </span>
              <span className="font-bold group-hover:text-[#22A247]">
                {option.answer_text}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8 absolute bottom-0 w-full">
        <button
          onClick={onPrevious}
          className="bg-option border-r border-t rounded-bl-lg border-[#91E2A8] uppercase text-white font-bold py-4 px-12"
        >
          Previous Question
        </button>

        <div className="flex flex-col space-y-2">
          <span className="text-[#464646] font-semibold">
            {currentQuestion} of {totalQuestions}
          </span>
          <div className="bg-slate-300 h-3 rounded-full w-80">
            <div
              className="bg-option h-full rounded-full"
              style={{
                width: `${(currentQuestion / totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>

        <button
          onClick={onNext}
          className="bg-option border-l border-t rounded-br-lg border-[#91E2A8] uppercase text-white font-bold py-4 px-12"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
