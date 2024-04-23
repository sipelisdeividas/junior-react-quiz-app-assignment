import { Question } from "../types/question.type";

export interface QuizProps {
  currentQuestion: Question;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  selectedAnswer: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}
