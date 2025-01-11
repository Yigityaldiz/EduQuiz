import { API } from "@/services/api";
import { IQuiz } from "../types";

export const quizService = {
  getById: (id: string, userId: string) =>
    API.get(`/quizzes/${id}?userId=${userId}`),
  create: (quizData: Omit<IQuiz, "id">) => API.post("/quizzes", quizData),
};
