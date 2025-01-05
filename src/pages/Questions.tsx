import { Clock } from "@/components/icons";
import QuestionCard from "@/features/quiz/components/question-card";
import QuestionList from "@/features/quiz/components/question-list";
import { AlarmClock } from "lucide-react";

export default function Questions() {
  return (
    <div className="bg-gray-100 h-screen w-screen relative">
      <div className="container-fluid flex flex-col space-y-4 justify-center items-center h-screen w-screen relative">
        <div className="bg-option rounded-full z-20 flex items-center space-x-6 justify-center pr-2 pl-4 py-2">
          <p className="flex items-center gap-2 text-[#464646]">
            <span>
              <Clock />
            </span>
            <span className="leading-6 text font-bold">
              Quiz <br />
              Time Start
            </span>
          </p>

          <div className="bg-white rounded-full flex px-8 py-2 space-x-4 h-full">
            <p className="text-[#464646] font-bold flex flex-col items-center text-lg">
              <span className="text-3xl">02</span>
              <span className="text-xs">HRS</span>
            </p>

            <div className="w-[1px] rounded-full h-full bg-slate-200"></div>

            <p className="text-[#464646] font-bold flex flex-col items-center text-lg">
              <span className="text-3xl">02</span>
              <span className="text-xs">HRS</span>
            </p>

            <div className="w-[1px] rounded-full h-full bg-slate-200"></div>

            <p className="text-[#464646] font-bold flex flex-col items-center text-lg">
              <span className="text-3xl">02</span>
              <span className="text-xs">HRS</span>
            </p>
          </div>
        </div>

        <QuestionList questions={[]} onComplete={function (results: { score: number; correctAnswers: number; timeTaken: number; }): void {
          throw new Error("Function not implemented.");
        }} />
      </div>

      <img
        src="/assets/images/backgrounds/quiz-bg.png"
        alt="quiz background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
      />
    </div>
  );
}
