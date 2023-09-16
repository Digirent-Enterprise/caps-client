import { IBaseProps } from "@/types";

export interface ITabSwitcherProps extends IBaseProps {
  tabs?: string[];
  handleTabChange?: (tab: number) => void;
}
