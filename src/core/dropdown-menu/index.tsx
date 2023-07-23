import React from "react";

import { IDropDownMenuProps } from "@/core/dropdown-menu/type";

const Component = React.memo((props: IDropDownMenuProps) => {
  const { options, onChange, selectedValue, label } = props;
  return (
    <div className="space-y-2">
      <label className=" mb-1 block font-medium text-light-blue-hover dark:text-white">
        {label}
      </label>
      <select
        className="border-gray-400 focus:border-gray-400 w-full rounded-md border bg-light-background-gray py-2 pl-3 pr-10 text-light-blue-hover transition duration-300 ease-in focus:bg-light-background-gray focus:shadow-md focus:outline-none"
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

Component.displayName = "DropdownMenu";
export default Component;
