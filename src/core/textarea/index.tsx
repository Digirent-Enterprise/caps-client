import React from "react";

import { ITextareaProps } from "@/core/textarea/type";

const Component = React.memo((props: ITextareaProps) => {
  const { value, label, onChange, errorMessage } = props;

  let inputClassNames =
    "w-full rounded-lg border border-light-border-gray dark:bg-dark-gray-heavy p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-light-button-green dark:text-dark-white dark:focus:ring-dark-orange";

  if (errorMessage) {
    inputClassNames =
      "w-full rounded-lg border border-red p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-light-button-green dark:bg-dark-gray-heavy dark:text-dark-white dark:focus:ring-dark-orange";
  } else {
    inputClassNames =
      "w-full rounded-lg border border-light-border-gray dark:bg-dark-gray-heavy p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-light-button-green dark:text-dark-white dark:focus:ring-dark-orange";
  }

  return (
    <div className="mb-4 flex w-full flex-col">
      <label
        htmlFor={value}
        className="text-light-hover-blue mb-2 font-bold dark:text-dark-white"
      >
        {label}
      </label>
      <textarea
        id={value}
        name={value}
        value={value}
        rows={4}
        className={inputClassNames}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
      />
      {errorMessage ? (
        <div className="mt-2 text-sm text-red">{errorMessage}</div>
      ) : null}
    </div>
  );
});
Component.displayName = "Textarea";
export default Component;
