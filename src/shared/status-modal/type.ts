export interface IConfirmationModalProps {
  type: "success" | "warning" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  primaryButtonText: string;
  onPrimaryButtonClick: () => void;
  isSecondButton?: boolean;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  username?: string;
  imgContent?: string;
}
