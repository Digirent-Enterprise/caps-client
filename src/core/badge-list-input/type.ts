export interface IBadgeListInputProps {
  label: string;
  onSubmit: (badges: string[]) => void;
  errorMessage?: string;
}

export type BadgeType = {
  value: string;
  id: number;
};
