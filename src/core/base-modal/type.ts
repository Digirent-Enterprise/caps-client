import { ReactDOM, ReactNode } from "react";

import { IBaseProps } from "@/types";

export interface IBaseModalProps extends IBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  // actionButtons: ReactNode;
}
