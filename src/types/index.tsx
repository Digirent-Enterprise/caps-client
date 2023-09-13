import { CSSProperties, MouseEvent, ReactNode } from "react";

export interface IBaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
}

export type CustomFn = () => void;
