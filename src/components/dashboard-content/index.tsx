import React, { useContext } from "react";

import { useImmer } from "use-immer";

import DashboardStatusChart from "@/components/dashboard-status-chart";
import WeatherReport from "@/components/weather-report";
import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { user, signOut } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useImmer(0);
  const { isMobile } = useDevice();
  return (
    <section
      className={`flex flex-auto flex-col border border-gray-800 ${
        isMobile ? "" : "w-full"
      }`}
    >
      <div className="flex h-1/2 w-full flex-row content-between gap-1 p-2">
        <div className="flex w-1/2 flex-col items-center text-white">
          <div className="text-lg"> My Health Records </div>
          <DashboardStatusChart />
        </div>
      </div>
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
