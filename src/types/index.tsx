import { CSSProperties, ReactNode } from "react";

export interface IBaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: (x: any) => void;
}

export type CustomFn = () => void;
