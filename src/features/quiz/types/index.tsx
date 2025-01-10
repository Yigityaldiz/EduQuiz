export interface IQuiz {
  id: string;
  title: string;
  description: string;
  winnerCount: number;
  duration: number;
  liquidity?: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: string;
  questionType: "multiple_choice" | "true_false";
  markdown: string;
  answers: IAnswer[];
}

export interface IAnswer {
  id: string;
  value: string;
  isCorrect: boolean;
}
