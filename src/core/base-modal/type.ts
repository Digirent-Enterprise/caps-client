import { ReactNode } from "react";

import { IBaseProps } from "@/types";

export interface IBaseModalProps extends IBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  // actionButtons: ReactNode;
}
