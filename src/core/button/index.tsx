import React from "react";

import { BaseButtonProps } from "./type";

const Component: React.FC<BaseButtonProps> = ({
  buttonType,
  text,
  className,
  disabled,
  onClick,
  isLoading,
}) => {
  return (
    <button
      type={buttonType}
      className={`h-12 mb-4 border border-custom-black border-solid rounded-full w-full ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <div>Loading...</div> : text}
    </button>
  );
};

export default Component;
