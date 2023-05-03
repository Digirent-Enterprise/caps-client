import * as React from "react";

import { ISelectOptionProps, SelectOption } from "@/core/select-option/type";

const Component = React.memo((props: ISelectOptionProps) => {
  const {
    onChange,
    selectedOption,
    options,
    title,
    dataKey,
    type = "select-option",
  } = props;

  const handleChange = (option: SelectOption) => {
    if (onChange) {
      onChange(option, { dataKey });
    }
  };

  return (
    <div className="mb-5">
      <div className="mb-2 block font-medium text-blue">{title}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <div key={index}>
            <label className="inline-flex cursor-pointer items-center">
              <input
                type={type}
                className="text-blue"
                value={option.value}
                checked={selectedOption === option}
                onChange={() => handleChange(option)}
              />
              <span className="ml-2">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
});

Component.displayName = "Option";

export default Component;
