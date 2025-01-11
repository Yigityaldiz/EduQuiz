import { Hourglass } from "@/components/icons/hourglass";
import { QuestionMark } from "@/components/icons/question-mark";
import { Trophy } from "@/components/icons/trophy";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Copy, Play, Settings } from "lucide-react";

import { IQuiz } from "@/features/quiz/types";

export default function ProfileQuizCard({ quiz }: { quiz: IQuiz }) {
  const handleCopyQuizLink = async (quizId: string) => {
    await navigator.clipboard.writeText("eduquiz.space/quiz/" + quizId);
    toast({
      title: "Link copied to clipboard",
      description: "You can now share this link with your audience.",
    });
  };

  return (
    <div className="flex flex-col bg-white justify-between rounded-2xl transition-all min-h-[250px] h-full w-full duration-500 hover:scale-[1.025] hover:transition-all hover:duration-500 border border-gray-200">
      <div>
        <div className="flex justify-between pr-4 items-center">
          <QuestionMark width={64} height={64} />

          <div className="space-x-2">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => handleCopyQuizLink("123")}
            >
              <Copy size={20} />
            </Button>
            <Button variant="outline" className="rounded-full">
              <Settings size={20} />
            </Button>
          </div>
        </div>

        <div className="px-4">
          <p className="font-semibold leading-5">{quiz.title}</p>
          <p className="text-xs text-slate-400 mt-2">
            {quiz.description.substring(0, 200) + "..."}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center mt-4 justify-between bottom-0">
          <div className="items-center flex space-x-2">
            <div className="flex items-center">
              <Hourglass width={32} height={32} />
              <span className="text-xs">{quiz.duration} min.</span>
            </div>

            <div className="flex items-center">
              <Trophy width={32} height={32} />
              <span className="text-xs">{quiz.liquidity}</span>
            </div>
          </div>

          <Button className="bg-green-500 ml-auto rounded-full w-10 h-10">
            <Play size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
