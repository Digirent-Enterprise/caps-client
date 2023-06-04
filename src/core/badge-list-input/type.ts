interface IBadgeListInputProps {
  label: string;
  onSubmit: (badges: string[]) => void;
}

type Badge = {
  value: string;
  id: number;
};
