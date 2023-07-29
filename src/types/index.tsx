import { CSSProperties } from "react";

export interface IBaseProps {
  className?: string;
  style?: CSSProperties;
  onClick?: (x: any) => void;
}
