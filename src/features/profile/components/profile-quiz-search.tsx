import { Input } from "@/components/ui/input";
import { BadgePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileQuizSearch() {
  return (
    <div className="mb-4 flex items-center space-x-4 h-12">
      <Input placeholder="Search quizzes" className="rounded-full p-6 h-full" />

      <Link
        to="/app/quiz/create"
        className="bg-gradient-to-r from-blue-200 via-blue-400 border-blue-300 border to-blue-600 hover:scale-105 hover:duration-500 hover:transition-all transition-all duration-500 text-white rounded-full h-full w-12 grid place-items-center"
      >
        <BadgePlus size={20} />
      </Link>
    </div>
  );
}
