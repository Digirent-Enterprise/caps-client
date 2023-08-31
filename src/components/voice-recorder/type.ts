import { MutableRefObject } from "react";

import { IBaseProps } from "@/types";

export interface IVoiceRecorderProps extends IBaseProps {
  inputRef: MutableRefObject<HTMLTextAreaElement>;
  onValueChange: (x: string) => void;
  currentInput: string;
}
