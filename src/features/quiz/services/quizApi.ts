import { API } from "@/services/api";
import { IQuiz } from "../types";

export const quizService = {
  getById: (id: string) => API.get(`/quizzes/${id}`),
  create: (quizData: Omit<IQuiz, "id">) => API.post("/quizzes", quizData),
};
