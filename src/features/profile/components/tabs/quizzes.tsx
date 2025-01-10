import { useEffect, useState } from "react";
import ProfileQuizCard from "../profile-quiz-card";
import ProfileQuizSearch from "../profile-quiz-search";
import axios from "axios";
import { Quiz } from "@/features/quiz/services/quizApi";
import PencilSpinner from "@/components/pencil-spinner";

export default function ProfileQuizzesTab() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.eduquiz.space/api/quizzes?userId=quest.edu_Ox8e3d`)
      .then((response) => {
        // Ensure response.data is an array
        const quizData = Array.isArray(response.data) ? response.data : [];
        setQuizzes(quizData);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
        setError("Failed to load quizzes");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen max-w-screen-xl h-96">
        <PencilSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <ProfileQuizSearch />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <ProfileQuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}
