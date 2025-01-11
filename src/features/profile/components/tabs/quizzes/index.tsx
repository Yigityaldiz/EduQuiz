import { useEffect, useState } from "react";
import ProfileQuizCard from "./quiz-card";
import ProfileQuizSearch from "./quiz-search";
import PencilSpinner from "@/components/pencil-spinner";
import { IQuiz } from "@/features/quiz/types";
import { useProfile } from "@/features/profile/hooks/use-profile";

export default function ProfileQuizzesTab() {
  const [filteredQuizzes, setFilteredQuizzes] = useState<IQuiz[]>([]);
  const { quizzes, error, isLoading } = useProfile();

  useEffect(() => {
    setFilteredQuizzes(quizzes);
  }, [quizzes]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen max-w-screen-xl h-96">
        <PencilSpinner />
      </div>
    );
  }

  const handleSearch = (search: string) => {
    if (search === "") {
      setFilteredQuizzes(quizzes);
    } else {
      const filtered = quizzes.filter((quiz: IQuiz) =>
        quiz.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredQuizzes(filtered);
    }
  };

  if (error) {
    return <div>Error: Failed to fetch your quizzes.</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <ProfileQuizSearch onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredQuizzes.map((quiz: IQuiz) => (
          <ProfileQuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}
