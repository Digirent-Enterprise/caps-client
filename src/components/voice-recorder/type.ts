import { MutableRefObject } from "react";

import { IBaseProps } from "@/types";

export interface IVoiceRecorderProps extends IBaseProps {
  inpurRef: MutableRefObject<HTMLTextAreaElement>;
  onValueChange: (x: string) => void;
  currentInput: string;
}
