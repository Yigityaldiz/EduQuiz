import axios from "axios";

export interface Quiz {
  id: string;
  title: string;
  description: string;
  winnerCount: number;
  duration: number;
  liquidity?: string;
  questions: Question[];
}

export interface Question {
  id: string;
  questionType: "multiple_choice" | "true_false";
  markdown: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  value: string;
  isCorrect: boolean;
}

const api = axios.create({
  baseURL: "https://api.eduquiz.space/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const quizApi = {
  getQuiz: async (id: string, userId: string): Promise<Quiz> => {
    try {
      const response = await api.get(`/quizzes/${id}`, {
        params: {
          userId: userId,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to fetch quiz: ${error.message}`);
      }
      throw error;
    }
  },

  createQuiz: async (quizData: Omit<Quiz, "id">): Promise<Quiz> => {
    const response = await api.post("/quizzes", quizData);
    return response.data;
  },

  updateQuiz: async (id: string, quizData: Partial<Quiz>): Promise<Quiz> => {
    const response = await api.put(`/quizzes/${id}`, quizData);
    return response.data;
  },

  deleteQuiz: async (id: string): Promise<void> => {
    await api.delete(`/quizzes/${id}`);
  },
};
