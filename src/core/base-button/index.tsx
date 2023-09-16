import React, { memo, useMemo } from "react";

import { IButtonProps } from "@/core/base-button/type";

const Component = memo((props: IButtonProps) => {
  const { children, disabled, onClick, mode, size = "m" } = props;

  const colorClass = useMemo(() => {
    if (mode === "primary") {
      return "bg-light-button-blue text-white hover:bg-light-button-blue-hover border-white dark:border-dark-blue dark:bg-light-button-blue dark:hover:bg-light-button-blue-hover";
    }
    return "border-gray-400 text-light-blue-hover transition-colors duration-200 ease-in-out hover:bg-light-button-blue-hover hover:text-white focus:outline-none focus:ring-2 dark:bg-dark-gray-heavy dark:text-dark-white dark:hover:bg-light-button-blue-hover";
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

Component.displayName = "BaseButton";

export default Component;
