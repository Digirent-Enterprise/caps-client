import { ReactNode } from "react";

import { IBaseProps } from "@/types";

export interface IButtonProps extends IBaseProps {
  mode?: "primary" | "secondary";
  icon?: ReactNode;
  size?: "s" | "m" | "l";
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}
