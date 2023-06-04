import { ReactNode } from "react";

export interface IPopoverProps {
  options: { icon: ReactNode; label: string; onClick: () => void }[];
}
