import { ChartDataset } from "chart.js";

export type LineChartDataset = ChartDataset<"line", number[]> & {
  backgroundColor: string;
  borderColor: string;
  fill: boolean;
};
