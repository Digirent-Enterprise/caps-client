export interface IBadgeListInputProps {
  label: string;
  onSubmit: (badges: string[]) => void;
  errorMessage?: string;
}

export type Badge = {
  value: string;
  id: number;
};
