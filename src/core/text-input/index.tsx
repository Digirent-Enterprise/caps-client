import React from "react";

import { IInputProps } from "@/core/text-input/type";
import useDevice from "@/hooks/useDevice";

const Component = React.memo((props: IInputProps) => {
  const {
    value,
    onChange,
    placeHolder,
    disable,
    dataKey,
    type,
    label,
    name,
    errorMessage,
  } = props;
  const { isMobile } = useDevice();
  const _onValueChange = (value: string) => {
    if (onChange) {
      if (dataKey) onChange(value, { dataKey });
      else onChange(value);
    }
  };
  let inputClassNames =
    "w-full rounded-lg border border-light-border-gray focus:border-transparent p-2 focus:outline-none focus:ring-2 focus:ring-light-button-blue dark:focus:ring-light-button-blue-hover dark:bg-dark-gray dark:text-dark-white";

  if (isMobile) {
    inputClassNames += " py-2";
  }

  if (errorMessage) {
    inputClassNames =
      "w-full rounded-lg border border-red p-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-light-button-blue dark:focus:ring-light-button-blue-hover dark:bg-dark-gray-heavy dark:text-dark-white";
  } else {
    inputClassNames =
      "w-full rounded-lg border border-light-border-gray dark:bg-dark-gray-heavy focus:border-transparent p-2 focus:outline-none focus:ring-2 focus:ring-light-button-blue dark:focus:ring-light-button-blue-hover dark:text-dark-white";
  }

  return (
    <div className="mb-5 space-y-1">
      <label
        className="mb-2 block font-medium text-light-blue-hover dark:text-dark-white"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={inputClassNames}
        type={type}
        name={name}
        value={value}
        disabled={disable}
        placeholder={placeHolder}
        onChange={(e) => _onValueChange(e.target.value)}
      />
      {errorMessage && (
        <div className="mt-2 text-sm text-red">{errorMessage}</div>
      )}
    </div>
  );
});

Component.displayName = "TextInput";

export default Component;
