import { ChangeEvent, ClipboardEvent } from "react";

export interface IVerificationCodeInputProps {
  code: string;
  length: number;
  handleCodeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasteCode: (event: ClipboardEvent<HTMLInputElement>) => void;
}
