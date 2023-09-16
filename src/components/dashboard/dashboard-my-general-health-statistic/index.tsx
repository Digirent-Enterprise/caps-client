import React, { memo, useContext } from "react";

import DashboardAverageHealthScore from "@/components/dashboard/dashboard-average-health-score";
import DashboardPieChart from "@/components/dashboard/dashboard-pie-chart";
import DashboardStatusChart from "@/components/dashboard/dashboard-status-chart";
import DashboardWelcomeSection from "@/components/dashboard/dashboard-welcome-section";
import { AuthContext } from "@/contexts/auth-context";

const Component = memo(() => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <DashboardWelcomeSection user={user} />
      <div className="mt-6  grid gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <DashboardPieChart type="symptoms" />
        <DashboardPieChart type="categorized-status" />
        <DashboardStatusChart />
        <DashboardAverageHealthScore />
      </div>
    </>
  );
});

Component.displayName = "DashboardMyGeneralHealthStatistic";
export default Component;
