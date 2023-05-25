import React, { useContext } from "react";

import { useImmer } from "use-immer";

import DashboardPieChart from "@/components/dashboard-pie-chart";
import DashboardStatusChart from "@/components/dashboard-status-chart";
import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { user, signOut } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useImmer(0);
  const { isMobile } = useDevice();
  return (
    <section
      className={`flex flex-auto flex-col overflow-y-scroll border border-gray-800 ${
        isMobile ? "" : "w-full"
      }`}
    >
      <div className="flex h-1/2 w-full flex-row content-between gap-1 p-2">
        <div className="h-30 flex h-full w-1/2 flex-col items-center text-white">
          <div className="text-lg"> My Common Symptoms </div>
          <DashboardPieChart type="symptoms" />
        </div>
        <div className="flex h-full w-1/2 flex-col items-center text-white ">
          <div className="text-lg"> My Categorized status</div>
          <DashboardPieChart type="categorized-status" />
        </div>
      </div>
      <div className="mt-10 flex h-1/2 w-full flex-col content-between items-center justify-center gap-1 p-2">
        <div className="text-lg"> My Health status</div>

        <DashboardStatusChart />
      </div>
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
