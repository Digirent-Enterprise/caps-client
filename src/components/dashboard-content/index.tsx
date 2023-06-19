import React, { useContext, useEffect, useMemo, useRef } from "react";

import { IDashboardContentProps } from "@/components/dashboard-content/type";
import DashboardMyGeneralHealthStatistic from "@/components/dashboard-my-general-health-statistic";
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
      {tab === "MySecretRecommendation" && (
        <div className="w-full h-full flex flex-col gap-2 mt-4">
          <div className="w-full h-1/4">
            <div className="w-1/4 h-full bg-red"></div>
          </div>
        </div>
      )}
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
