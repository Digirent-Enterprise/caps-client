import React, { useEffect } from "react";

import { Chart, ChartOptions, registerables } from "chart.js";
import { ChartData } from "chart.js/dist/types";
import { Pie } from "react-chartjs-2";

import {
  IDashboardPieChart,
  PieChartDataset,
} from "@/components/dashboard-pie-chart/type";
import useDynamicHealth from "@/hooks/dynamic-health";
import { formatDateTime } from "@/utils/common";

Chart.register(...registerables);
Chart.defaults.color = "#ffffff";
const Component = React.memo((props: IDashboardPieChart) => {
  const { type } = props;
  const {
    categorizedStatus,
    getCategorizedStatus,
    getCommonSymptoms,
    commonSymptoms,
  } = useDynamicHealth();

  const data: ChartData<"pie", any, any> = {
    labels:
      type === "categorized-status"
        ? Object.keys(categorizedStatus)
        : Object.keys(commonSymptoms),
    datasets: [
      {
        label: "My heath status",
        data:
          type === "categorized-status"
            ? Object.keys(categorizedStatus)?.map(
                (key) => categorizedStatus[key]
              )
            : Object.keys(commonSymptoms)?.map((key) => commonSymptoms[key]),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ] as PieChartDataset[],
  };

  useEffect(() => {
    if (type === "categorized-status") getCategorizedStatus();
    if (type === "symptoms") getCommonSymptoms();
  }, [type]);

  return (
    <div className="flex h-full w-full justify-center bg-gray-800 p-4 text-white">
      <Pie data={data} />
    </div>
  );
});
Component.displayName = "DashboardPieChart";
export default Component;
