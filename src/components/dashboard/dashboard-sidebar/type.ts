import { IBaseProps } from "@/types";

export interface IDashboardSidebarProps extends IBaseProps {
  tab?: any;
  onChangeTab?: (tab: any) => void;
  title?: string;
}
