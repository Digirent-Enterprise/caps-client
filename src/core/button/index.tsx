import React, { useMemo } from "react";

import { IButtonProps } from "@/core/button/type";
const Component = React.memo((props: IButtonProps) => {
  const { children, disabled, onClick, mode, size = "m" } = props;

  const colorClass = useMemo(() => {
    if (mode === "primary") {
      return "bg-light-button-green text-white hover:bg-light-button-green-hover border-white dark:border-dark-blue dark:bg-dark-orange  dark:hover:bg-dark-orange-hover";
    }
    return "bg-light-background-gray text-light-blue-hover border-solid border-light-gray dark:border-dark-white hover:bg-light-gray dark:bg-dark-gray-heavy dark:text-dark-white dark:hover:bg-dark-orange-hover";
  }, [mode]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case "s":
        return "h-8 text-sm px-4";
      case "l":
        return "h-16 text-xl px-6";
      default:
        return "h-12 text-base px-5";
    }
  }, [size]);

  const disableClass = useMemo(() => {
    if (disabled) {
      return "opacity-50 cursor-not-allowed";
    }
    return "";
  }, [disabled]);

  const _onClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      disabled={disabled}
      className={`mb-5 w-full rounded-md border border-solid ${colorClass} ${sizeClass} ${disableClass}`}
      onClick={_onClick}
    >
      {children}
    </button>
  );
});

Component.displayName = "Button";

export default Component;
