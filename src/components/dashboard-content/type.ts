export type DashboardContentTabs =
  | "MyGeneralHealthStatistics"
  | "MySecretRecommendation";

export interface IDashboardContentProps {
  tab?: DashboardContentTabs;
}
