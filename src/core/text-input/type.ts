export interface IInputProps {
  required?: true;
  onChange?: (x: string, extension?: FormExtensionType) => void;
  value: string;
  disable?: boolean;
  placeHolder: string;
  dataKey?: string;
  type?: string;
  label: string;
  name: string;
  errorMessage?: string;
}

export type FormExtensionType = {
  dataKey: string;
};
