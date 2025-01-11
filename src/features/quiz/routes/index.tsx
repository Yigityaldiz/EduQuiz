import { SingleQuiz } from "@/pages/app/quiz/[slug]";
import CreateQuiz from "@/pages/CreateQuiz";
import { Route, Routes } from "react-router-dom";

const QuizRoutes = () => {
  return (
    <Routes>
      <Route path="create" element={<CreateQuiz />} />
      <Route path=":id" element={<SingleQuiz />} />
    </Routes>
  );
};

export default QuizRoutes;
