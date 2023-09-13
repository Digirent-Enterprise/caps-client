import React, { memo, useEffect } from "react";

import { Chart, registerables } from "chart.js";
import { ChartData } from "chart.js/dist/types";
import { isEmpty } from "lodash";

import { DefaultColorPalette } from "@/components/dashboard-pie-chart/constant";
import { IDashboardPieChart } from "@/components/dashboard-pie-chart/type";
import PieChart from "@/core/pie-chart";
import useDynamicHealth from "@/hooks/dynamic-health";
import ChartContainerCard from "@/shared/chart-container-card";

Chart.register(...registerables);
Chart.defaults.color = "#ffffff";
const Component = memo((props: IDashboardPieChart) => {
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
                (key) => categorizedStatus[key],
              )
            : Object.keys(commonSymptoms)?.map((key) => commonSymptoms[key]),
        backgroundColor: DefaultColorPalette,
        borderColor: DefaultColorPalette,
        borderWidth: 0,
      },
    ] as any,
  };

  useEffect(() => {
    if (type === "categorized-status") getCategorizedStatus();
    if (type === "symptoms") getCommonSymptoms();
  }, [type]);
  return (
    <ChartContainerCard
      hasData={!isEmpty((data.datasets as { data: unknown }[])[0].data)}
      chart={
        <PieChart
          data={data}
          title={`${
            type === "categorized-status"
              ? "My recorded statuses"
              : "My recorded symptoms"
          }`}
        />
      }
    />
  );
});
Component.displayName = "DashboardPieChart";
export default Component;
