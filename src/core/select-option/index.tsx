import * as React from "react";

import { ISelectOptionProps, SelectOption } from "@/core/select-option/type";

const Component = React.memo((props: ISelectOptionProps) => {
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
      <div className="text-light-hover-blue mb-2 block font-medium">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <div key={index}>
            <label className="inline-flex cursor-pointer items-center">
              <input
                type={type}
                className="text-light-hover-blue"
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
