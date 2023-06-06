interface IBadgeListInputProps {
  label: string;
  onSubmit: (badges: string[]) => void;
  errorMessage?: string;
}

type Badge = {
  value: string;
  id: number;
};
