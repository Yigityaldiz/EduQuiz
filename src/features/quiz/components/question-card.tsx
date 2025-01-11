import { CheckCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IAnswer, IQuestion } from "../types";

interface QuestionCardProps {
  question: IQuestion;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onPrevious: () => void;
  onAnswer: (answerIndex: number) => void;
  onNext: () => void;
}

// Reusable styles for answer buttons
const answerButtonStyles =
  "bg-transparent cursor-pointer min-h-[72px] text-lg font-medium group text-[#464646] border text-left border-slate-300 rounded-md flex p-2 items-center gap-4 hover:border-[#91E2A8] hover:bg-[#DEF7E5] transition-colors";
const selectedAnswerStyles = "border-[#91E2A8] bg-[#DEF7E5]";

export default function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onPrevious,
  onNext,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg border border-[#91E2A8] h-[70dvh] w-full max-w-5xl z-20 relative">
      {/* Background image */}
      <img
        src="/assets/images/backgrounds/question-bg.png"
        alt="Question Background"
        className="w-full h-auto object-cover rounded-lg relative z-10"
      />

      {/* Question and answers container */}
      <div className="relative max-w-3xl mx-auto -mt-28 z-20 space-y-8">
        {/* Question text */}
        <div className="bg-white p-10 border border-[#91E2A8] rounded-md">
          <h2 className="text-xl text-[#464646] font-semibold">
            {question.markdown}
          </h2>
        </div>

        {/* Answer options grid */}
        <div className="grid grid-cols-2 gap-8">
          {question.answers.map((option: IAnswer, index: number) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className={cn(
                answerButtonStyles,
                selectedAnswer === index && selectedAnswerStyles
              )}
              aria-label={`Select answer ${String.fromCharCode(65 + index)}`}
            >
              {/* Answer indicator (letter or checkmark) */}
              {selectedAnswer === index ? (
                <span className="h-full min-w-14 max-h-14 text-white rounded-md flex bg-option text-3xl items-center justify-center">
                  <CheckCheckIcon size={28} />
                </span>
              ) : (
                <>
                  <span className="h-full min-w-14 max-h-14 rounded-md bg-[#DEF7E5] text-3xl flex items-center justify-center group-hover:hidden">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="h-full min-w-14 max-h-14 text-white rounded-md hidden group-hover:flex bg-option text-3xl items-center justify-center">
                    <CheckCheckIcon size={28} />
                  </span>
                </>
              )}

              {/* Answer text */}
              <span
                className={cn(
                  "font-bold group-hover:text-[#22A247]",
                  selectedAnswer === index && "text-[#22A247]"
                )}
              >
                {option.value}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation buttons and progress bar */}
      <div className="flex justify-between mt-8 absolute bottom-0 w-full">
        {/* Previous button */}
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 1}
          className={cn(
            "bg-option border-r border-t rounded-bl-lg border-[#91E2A8] uppercase text-white font-bold py-4 px-12",
            currentQuestion === 1 && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Previous Question"
        >
          Previous Question
        </button>

        {/* Progress bar */}
        <div className="flex flex-col space-y-2">
          <span className="text-[#464646] font-semibold">
            {currentQuestion} of {totalQuestions}
          </span>
          <div className="bg-slate-300 h-3 rounded-full w-80">
            <div
              className="bg-option h-full rounded-full"
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          disabled={selectedAnswer === undefined}
          className={cn(
            "bg-option border-l border-t rounded-br-lg border-[#91E2A8] uppercase text-white font-bold py-4 px-12",
            selectedAnswer === undefined && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Next Question"
        >
          {currentQuestion === totalQuestions ? "Finish" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
