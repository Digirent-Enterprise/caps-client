export interface IQuestion {
  id: number;
  title: string;
  content?: string;
}

export interface IQuestionProps {
  questions: IQuestion[];
}
