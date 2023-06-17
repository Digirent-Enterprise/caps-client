import React from "react";

import DashboardContent from "@/components/dashboard-content";
import DashboardSidebar from "@/components/dashboard-sidebar";
import withAuth from "@/hoc/withLogin";
import useDevice from "@/hooks/useDevice";
import {useImmer} from "use-immer";
import {DashboardContentTabs} from "@/components/dashboard-content/type";

const Component: React.FC = () => {
  const { isMobile } = useDevice();
  const [selectedTab, setSelectedTab] = useImmer<DashboardContentTabs>('MyGeneralHealthStatistics')
  return (
    <div
      className={`flex h-screen  w-full overflow-hidden bg-gray-900 text-gray-200 antialiased  ${
        isMobile ? "flex-col" : ""
      }`}
    >
      <DashboardSidebar tab={selectedTab} onChangeTab={setSelectedTab}/>
      <DashboardContent tab={selectedTab}/>
    </div>
  );
};
Component.displayName = "HeathRecord";

export default withAuth(Component);
