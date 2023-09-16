import React, { memo } from "react";

import { IDashboardContentProps } from "@/components/dashboard/dashboard-content/type";
import DashboardMyGeneralHealthStatistic from "@/components/dashboard/dashboard-my-general-health-statistic";
import DashboardOverviewDiagnosis from "@/components/dashboard/dashboard-overview-diagnosis";
import useDevice from "@/hooks/useDevice";
import { PersonalizedDashboardTab } from "@/types/enum/common/tabs";

const Component = memo((props: IDashboardContentProps) => {
  const { tab = PersonalizedDashboardTab.GENERAL_HEALTH_STATISTIC } = props;
  const { isMobile } = useDevice();

  return (
    <section
      className={`hide-scrollbar mx-4 flex max-h-[100vh] flex-auto flex-col overflow-y-auto border px-8 shadow-accent-dark dark:border-dark-gray dark:bg-dark-gray-heavy ${
        isMobile ? "" : "w-full"
      }`}
    >
      {tab === PersonalizedDashboardTab.GENERAL_HEALTH_STATISTIC && (
        <DashboardMyGeneralHealthStatistic />
      )}
      {tab === PersonalizedDashboardTab.SECRET_RECOMMENDATION && (
        <DashboardOverviewDiagnosis />
      )}
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
