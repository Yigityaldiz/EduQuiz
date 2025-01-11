import ProfileRoutes from "@/features/profile/routes";
import QuizRoutes from "@/features/quiz/routes";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/home";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/app" element={<AppLayout />}>
        <Route path="profile/*" element={<ProfileRoutes />} />
        <Route path="quiz/*" element={<QuizRoutes />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
