import { SelectOption, SelectOptions } from "@/core/select-option/type";

export const GenderOptions: SelectOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

export const DefaultGenderOption: SelectOption = GenderOptions[0];
