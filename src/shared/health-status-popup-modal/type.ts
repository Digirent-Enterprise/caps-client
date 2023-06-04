import { ReactNode } from "react";

import { DynamicHealthNS } from "@/services/dynamic-health/type";

export interface IHealthStatusPopupModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export interface IHealthStatus {
  feeling: string;
  symptoms: string[];
}

export type FeelingIcon = {
  label: DynamicHealthNS.Status;
  icon: ReactNode;
};

export type FeelingIcons = FeelingIcon[];

export const allSymptoms = [
  "Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Muscle or body aches",
  "Headache",
  "New loss of taste or smell",
  "Sore throat",
  "Congestion or runny nose",
  "Nausea or vomiting",
  "Diarrhea",
];
