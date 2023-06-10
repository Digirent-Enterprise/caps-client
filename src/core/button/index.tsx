import React, { useMemo } from "react";

import { IButtonProps } from "@/core/button/type";
const Component = React.memo((props: IButtonProps) => {
  const { children, disabled, onClick, mode, size = "m" } = props;

  const colorClass = useMemo(() => {
    if (mode === "primary") {
      return "bg-light-blue hover:bg-light-blue-hover dark:bg-light-maroon dark:hover:bg-dark-orange-hover";
    }
    return "bg-light-gray hover:bg-light-blue-hover";
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

  const _onClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      disabled={disabled}
      className={`mb-5 w-full rounded-md border border-solid border-white text-white ${colorClass} ${sizeClass}`}
      onClick={_onClick}
    >
      {children}
    </button>
  );
});

Component.displayName = "Button";

export default Component;
