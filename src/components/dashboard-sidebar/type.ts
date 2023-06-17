import { DashboardContentTabs } from "@/components/dashboard-content/type";

export interface IDashboardSidebarProps {
  tab?: DashboardContentTabs;
  onChangeTab?: (tab: DashboardContentTabs) => void;
}
