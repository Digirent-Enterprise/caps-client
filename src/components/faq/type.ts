export interface Question {
  id: number;
  title: string;
  content: string;
}

export interface IQuestionProps {
  questions: Question[];
}
