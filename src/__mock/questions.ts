import { Question } from "@/features/quiz/types/question";

export const questions: Question[] = [
  {
    question_id: "q1", //  id olacak 
    quiz_id: "quiz1",
    question_text: "What is the primary purpose of blockchain technology?",
    points: 10,
    question_type: "multiple_choice",
    time_limit: 60,
    order_number: 1,
    created_at: "2024-03-28T10:00:00Z",
    answers: [
      {
        answer_id: "a1",
        question_id: "q1",
        answer_text: "Decentralized record-keeping",
        is_correct: true,
        explanation:
          "Blockchain primarily serves as a decentralized ledger system",
        created_at: "2024-03-28T10:00:00Z",
      },
      {
        answer_id: "a2",
        question_id: "q1",
        answer_text: "Social media networking",
        is_correct: false,
        explanation: "This is not the main purpose of blockchain",
        created_at: "2024-03-28T10:00:00Z",
      },
      {
        answer_id: "a3",
        question_id: "q1",
        answer_text: "Web browsing",
        is_correct: false,
        explanation: "Blockchain is not designed for web browsing",
        created_at: "2024-03-28T10:00:00Z",
      },
      {
        answer_id: "a4",
        question_id: "q1",
        answer_text: "File storage",
        is_correct: false,
        explanation:
          "While blockchain can store data, it's not its primary purpose",
        created_at: "2024-03-28T10:00:00Z",
      },
    ],
  },
  {
    question_id: "q2",
    quiz_id: "quiz1",
    question_text: "What is a smart contract?",
    points: 15,
    question_type: "multiple_choice",
    time_limit: 45,
    order_number: 2,
    created_at: "2024-03-28T10:01:00Z",
    answers: [
      {
        answer_id: "a5",
        question_id: "q2",
        answer_text:
          "Self-executing contract with terms directly written into code",
        is_correct: true,
        explanation:
          "Smart contracts automatically execute when conditions are met",
        created_at: "2024-03-28T10:01:00Z",
      },
      {
        answer_id: "a6",
        question_id: "q2",
        answer_text: "A legally binding paper contract",
        is_correct: false,
        explanation: "Smart contracts are digital and automated",
        created_at: "2024-03-28T10:01:00Z",
      },
      {
        answer_id: "a7",
        question_id: "q2",
        answer_text: "An AI-powered agreement",
        is_correct: false,
        explanation: "Smart contracts don't necessarily involve AI",
        created_at: "2024-03-28T10:01:00Z",
      },
      {
        answer_id: "a8",
        question_id: "q2",
        answer_text: "A contract written by intelligent people",
        is_correct: false,
        explanation: "This is not the definition of a smart contract",
        created_at: "2024-03-28T10:01:00Z",
      },
    ],
  },
];
