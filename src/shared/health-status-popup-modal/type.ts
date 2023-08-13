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

export const allSymptoms: string[] = [
  "Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Muscle aches",
  "Body aches",
  "Headache",
  "Loss of taste",
  "Loss of smell",
  "Sore throat",
  "Congestion",
  "Runny nose",
  "Nausea",
  "Vomiting",
  "Diarrhea",
];
