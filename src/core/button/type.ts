export interface BaseButtonProps {
  buttonType?: "button" | "submit" | "reset" | undefined;

  text: string;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}
