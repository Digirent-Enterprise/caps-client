export type SelectOption = {
  label: string;
  value: string;
};

export type SelectOptions = SelectOption[];

export interface IDropDownMenuProps {
  options: SelectOptions;
  onChange: (value: any) => void;
  selectedValue: string;
  label?: string;
}
