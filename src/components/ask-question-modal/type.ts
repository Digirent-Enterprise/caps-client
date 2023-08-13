export interface IAskQuestionModal {
  open: boolean;
  onClose: () => void;
  createInquiry: (x: string) => void;
}
