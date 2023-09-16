import { ChartDataset } from "chart.js";

export type LineChartDatasetType = ChartDataset<"line", number[]> & {
  backgroundColor: string;
  borderColor: string;
  fill: boolean;
};
