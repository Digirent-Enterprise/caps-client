import React, { useContext, useEffect, useMemo, useRef } from "react";

import { useTranslation } from "next-i18next";

import { IDashboardContentProps } from "@/components/dashboard-content/type";
import DashboardMyGeneralHealthStatistic from "@/components/dashboard-my-general-health-statistic";
import DashboardOverviewDiagnosis from "@/components/dashboard-overview-diagnosis";
import useDevice from "@/hooks/useDevice";

const Component = React.memo((props: IDashboardContentProps) => {
  const { t } = useTranslation("health_record");
  const { tab = "MyGeneralHealthStatistics" } = props;
  const { isMobile } = useDevice();

  return (
    <section
      className={`hide-scrollbar mx-4 flex max-h-[100vh] flex-auto flex-col overflow-y-auto border px-8 shadow-accent-dark dark:border-dark-gray dark:bg-dark-gray-heavy ${
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
