import React, { useContext, useEffect, useMemo, useRef } from "react";

import { IDashboardContentProps } from "@/components/dashboard-content/type";
import DashboardMyGeneralHealthStatistic from "@/components/dashboard-my-general-health-statistic";
import DashboardOverviewDiagnosis from "@/components/dashboard-overview-diagnosis";
import useDevice from "@/hooks/useDevice";

const Component = React.memo((props: IDashboardContentProps) => {
  const { tab = "MyGeneralHealthStatistics" } = props;
  const { isMobile } = useDevice();

  return (
    <section
      className={`mx-4 flex flex-auto flex-col overflow-y-scroll border border-gray-800 px-8 shadow-accent-dark ${
        isMobile ? "" : "w-full"
      }`}
    >
      {tab === "MyGeneralHealthStatistics" && (
        <DashboardMyGeneralHealthStatistic />
      )}
      {tab === "MySecretRecommendation" && <DashboardOverviewDiagnosis />}
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
