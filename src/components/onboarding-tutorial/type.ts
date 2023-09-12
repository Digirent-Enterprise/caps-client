import { ReactNode } from "react";

export interface IOnboardingStep {
  target: string | HTMLElement;
  content: ReactNode;
  disableBeacon?: boolean;
  disableOverlay?: boolean;
  disableScrolling?: boolean;
  placement?: "top" | "bottom" | "left" | "right" | "center";
  spotlightClicks?: boolean;
  styles?: Record<string, unknown>;
  title?: ReactNode;
}

export interface IOnboardingStepProps {
  steps: IOnboardingStep[];
}
