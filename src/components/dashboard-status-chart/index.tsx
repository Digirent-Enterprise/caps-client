import React, { memo, useEffect } from "react";

import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { isEmpty } from "lodash";
import { Line } from "react-chartjs-2";

import { DefaultColorPalette } from "@/components/dashboard-pie-chart/constant";
import { DATE_AND_MONTH_TIME_FENCE } from "@/components/dashboard-status-chart/constant";
import useDynamicHealth from "@/hooks/dynamic-health";
import ContainerCard from "@/shared/chart-container-card";
import { formatDateAndMonth, formatDateTime } from "@/utils";

Chart.register(...registerables);
Chart.defaults.color = "#ffffff";

const Component = memo(() => {
  const { myStatuses, getDynamicHealth } = useDynamicHealth();

  const data: ChartData<"line", any, any> = {
    labels:
      myStatuses.times && myStatuses.times.length < DATE_AND_MONTH_TIME_FENCE
        ? myStatuses.times?.map((item) => formatDateTime(item))
        : myStatuses.times?.map((item) => formatDateAndMonth(item)),
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
  return (
    <ContainerCard
      hasData={!isEmpty((data.datasets as { data: unknown }[])[0].data)}
      chart={
        <div className="w-100 h-100 flex-column flex items-center justify-center">
          <Line data={data} options={options} />
        </div>
      }
    />
  );
});
Component.displayName = "DashboardStatusChart";

export default Component;
