import { PersonalizedDashboardTab } from "@/types/enum/common/tabs";

export type DashboardContentTabType =
  | PersonalizedDashboardTab.GENERAL_HEALTH_STATISTIC
  | PersonalizedDashboardTab.SECRET_RECOMMENDATION;

export interface IDashboardContentProps {
  tab?: DashboardContentTabType;
}
