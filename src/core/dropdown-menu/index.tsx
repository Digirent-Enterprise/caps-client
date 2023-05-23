import React from "react";

import { IDropDownMenuProps } from "@/core/dropdown-menu/type";

const Component = React.memo((props: IDropDownMenuProps) => {
  const { options, onChange, selectedValue, label } = props;
  return (
    <div className="space-y-2">
      <label className=" mb-1 block font-medium text-white">{label}</label>
      <select
        className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
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
