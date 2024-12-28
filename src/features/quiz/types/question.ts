export interface Answer {
  answer_id: string;
  question_id: string;
  answer_text: string;
  is_correct: boolean;
  explanation: string;
  created_at: string;
}

export interface Question {
  question_id: string;
  quiz_id: string;
  question_text: string;
  points: number;
  question_type: "multiple_choice" | "true_false";
  time_limit: number;
  order_number: number;
  created_at: string;
  answers: Answer[];
}
