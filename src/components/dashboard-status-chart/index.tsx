import React, { useEffect } from "react";

import { ChartData, ChartOptions } from "chart.js";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import { LineChartDataset } from "@/components/dashboard-status-chart/type";
import useDynamicHealth from "@/hooks/dynamic-health";

import { formatDateTime } from "../../utils/common";
Chart.register(...registerables);
Chart.defaults.color = "#ffffff";

const Component = React.memo(() => {
  const { myStatuses, getDynamicHealth } = useDynamicHealth();

  const data: ChartData<"line", any, any> = {
    labels: myStatuses.times?.map((item) => formatDateTime(item)),
    datasets: [
      {
        label: "My heath status",
        data: myStatuses.records,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ] as LineChartDataset[],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        beginAtZero: true,
        position: "left",
      },
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            if (value === 0) return "Critical";
            if (value === 1) return "Poor";
            if (value === 2) return "Not Good";
            if (value === 3) return "Fair";
            if (value === 4) return "Good";
          },
        },
      },
    },
    color: "white",
  };

  useEffect(() => {
    getDynamicHealth();
  }, []);

  return (
    <div className="flex h-full w-full justify-center bg-gray-800 p-4 text-white">
      <Line data={data} options={options} />
    </div>
  );
});
Component.displayName = "DashboardStatusChart";

export default Component;
