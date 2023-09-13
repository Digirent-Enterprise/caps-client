import React, { memo } from "react";

import { ISelectOptionProps, SelectOption } from "@/core/select-option/type";

const Component = memo((props: ISelectOptionProps) => {
  const {
    onChange,
    selectedOption,
    options,
    title,
    dataKey,
    type = "radio",
  } = props;

  const _handleChange = (option: SelectOption) => {
    if (onChange) {
      onChange(option, { dataKey });
    }
  };

  return (
    <div className="mb-5">
      <div className="mb-2 block font-bold text-light-text dark:text-dark-white">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <div key={index}>
            <label className="inline-flex cursor-pointer items-center text-light-blue-hover dark:text-dark-white">
              <input
                type={type}
                value={option.value}
                checked={selectedOption === option}
                onChange={() => _handleChange(option)}
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
