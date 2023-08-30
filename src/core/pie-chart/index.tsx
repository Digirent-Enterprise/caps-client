import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Filler);

interface ChartProps {
  data: any;
  title: string;
}

const PieChart = ({ data, title }: ChartProps) => {
  const custom_canvas_background_color = {
    id: "custom_canvas_background_color",
    beforeDraw: (chart: any, args: any, options: any) => {
      const {
        ctx,
        chartArea: { top, right, bottom, left, width, height },
        scales: { x, y },
      } = chart;
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "#44687E";
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    },
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        position: "top",
        align: "center",
        style: "bold",
        color: "white",
        font: {
          size: 16,
        },
      },
      legend: {
        position: "right",
        fillStyle: "red",
        rtl: true,
        color: "black",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          color: "white",
        },
      },
      custom_canvas_background_color,
    },
  };

  return <Pie data={data} options={options} width="28%" height="30%" />;
};

export default PieChart;
