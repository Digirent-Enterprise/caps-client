import React, { useContext, useEffect, useMemo, useRef } from "react";

import { useTranslation } from "next-i18next";
import { IDashboardContentProps } from "@/components/dashboard-content/type";
import DashboardMyGeneralHealthStatistic from "@/components/dashboard-my-general-health-statistic";
import useDevice from "@/hooks/useDevice";

const Component = React.memo((props: IDashboardContentProps) => {
  const { t } = useTranslation("health_record");
  const { tab = "MyGeneralHealthStatistics" } = props;
  const { isMobile } = useDevice();

  return (
    <section
      className={`hide-scrollbar mx-4 flex flex-auto flex-col overflow-y-scroll border border-light-gray px-8 shadow-accent-dark ${
        isMobile ? "" : "w-full"
      }`}
    >
      {tab === "MyGeneralHealthStatistics" && (
        <DashboardMyGeneralHealthStatistic />
      )}
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
