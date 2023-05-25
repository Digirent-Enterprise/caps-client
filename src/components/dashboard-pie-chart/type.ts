import { ChartDataset } from "chart.js/dist/types";

export interface IDashboardPieChart {
  type: "symptoms" | "categorized-status";
}
export type PieChartDataset = ChartDataset<"pie", number[]> & {
  backgroundColor: string;
  borderColor: string;
  fill: boolean;
};
