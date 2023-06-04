import React from "preact/compat";

import DashboardContent from "@/components/dashboard-content";
import DashboardSidebar from "@/components/dashboard-sidebar";
import withAuth from "@/hoc/withLogin";
import useDevice from "@/hooks/useDevice";

const Component: React.FC = () => {
  const { isMobile } = useDevice();

  return (
    <div
      className={`flex h-screen w-full overflow-hidden bg-gray-900 text-gray-200 antialiased  ${
        isMobile ? "flex-col" : ""
      }`}
    >
      {" "}
      <DashboardSidebar />
      <DashboardContent />
    </div>
  );
};
Component.displayName = "HeathRecord";

export default withAuth(Component);
