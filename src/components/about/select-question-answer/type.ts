export interface ISelectQuestionAnswerProps {
  questionsData: {
    question: string;
    modelOptions: IModelOption[];
  }[];
  selectedQuestion: string;
  onQuestionChange: (newQuestion: string) => void;
}

export interface IModelOption {
  model: string;
  answer: string;
}
