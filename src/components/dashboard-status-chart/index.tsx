import React, { useEffect } from "react";

import { ChartData, ChartOptions } from "chart.js";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import { DefaultColorPalette } from "@/components/dashboard-pie-chart/constant";
import { LineChartDataset } from "@/components/dashboard-status-chart/type";
import LineChart from "@/core/line-chart";
import useDynamicHealth from "@/hooks/dynamic-health";
import ContainerCard from "@/shared/chart-container-card";

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
        backgroundColor: DefaultColorPalette,
        borderColor: DefaultColorPalette,
        borderWidth: 0,
      },
    ] as any,
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
    plugins: {
      title: {
        display: true,
        text: "My health status over time",
        position: "top",
        align: "center",
        color: "white",
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    getDynamicHealth();
  }, []);

  return <ContainerCard chart={<Line data={data} options={options} />} />;
});
Component.displayName = "DashboardStatusChart";

export default Component;
