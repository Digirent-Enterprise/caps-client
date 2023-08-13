import { CSSProperties } from "react";

import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export interface IBaseProps {
  className?: string;
  style?: CSSProperties;
  onClick?: (x: any) => void;
  children?: ReactJSXElement;
}

export type CustomFn = () => void;
