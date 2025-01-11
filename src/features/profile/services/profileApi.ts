import { API } from "@/services/api";

export const profileService = {
  getQuizzes: (userId: string) => API.get(`/quizzes?userId=${userId}`),
};
