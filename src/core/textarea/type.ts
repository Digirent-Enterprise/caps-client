export interface ITextareaProps {
  value: string;
  label: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
}
