import { ReactNode } from "react";

import { DynamicHealthNS } from "@/services/dynamic-health/type";

export interface IHealthStatusPopupModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export type FeelingIconType = {
  label: DynamicHealthNS.Status;
  icon: ReactNode;
};

export type FeelingIconsType = FeelingIconType[];

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
