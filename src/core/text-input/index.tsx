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
    "w-full rounded-lg border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue ";

  if (isMobile) {
    inputClassNames += " py-2";
  }

  if (errorMessage) {
    inputClassNames =
      "w-full rounded-lg border border-red p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue ";
  } else {
    inputClassNames =
      "w-full rounded-lg border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue ";
  }

  return (
    <div className="mb-5 space-y-1">
      <label className="mb-2 block font-medium text-blue" htmlFor={name}>
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
