import React, { useContext } from "react";
import { useImmer } from "use-immer";
import DashboardStatusChart from "@/components/dashboard-status-chart";
import { AuthContext } from "@/contexts/auth-context";
import useDevice from "@/hooks/useDevice";
import DashboardPieChart from "@/components/dashboard-pie-chart";

const Component = React.memo(() => {
  const { user, signOut } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useImmer(0);
  const { isMobile } = useDevice();
  return (
    <section
      className={`flex flex-auto flex-col border border-gray-800 overflow-y-scroll ${
        isMobile ? "" : "w-full"
      }`}
    >
      <div className="flex h-1/2 w-full flex-row content-between gap-1 p-2">
        <div className="flex w-1/2 h-full flex-col items-center text-white h-30">
          <div className="text-lg"> My Common Symptoms </div>
          <DashboardPieChart type="symptoms" />
        </div>
        <div className="flex w-1/2 h-full flex-col items-center text-white ">
          <div className="text-lg"> My Categorized status</div>
          <DashboardPieChart type="categorized-status" />
        </div>
      </div>
      <div className="flex h-1/2 w-full flex-col mt-10 content-between gap-1 p-2 justify-center items-center">
        <div className="text-lg"> My Health status</div>

        <DashboardStatusChart />
      </div>
    </section>
  );
});
Component.displayName = "DashboardContent";

export default Component;
