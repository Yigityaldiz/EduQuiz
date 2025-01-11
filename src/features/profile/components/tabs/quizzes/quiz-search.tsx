import { Input } from "@/components/ui/input";
import { BadgePlus } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileQuizSearchProps {
  onSearch: (value: string) => void;
}

export default function ProfileQuizSearch({
  onSearch,
}: ProfileQuizSearchProps) {
  return (
    <div className="flex items-center space-x-4 h-12">
      <Input
        placeholder="Search quizzes"
        className="bg-white rounded-full p-6 h-full"
        onChange={(e) => onSearch(e.target.value)}
      />

      <Link
        to="/app/quiz/create"
        className="bg-gradient-to-r from-blue-200 via-blue-400 border-blue-300 border to-blue-600 hover:scale-105 hover:duration-500 hover:transition-all transition-all duration-500 text-white rounded-full h-full w-12 grid place-items-center"
      >
        <BadgePlus size={20} />
      </Link>
    </div>
  );
}
