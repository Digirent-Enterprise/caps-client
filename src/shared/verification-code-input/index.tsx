import React, { useRef } from "react";

import { IVerificationCodeInputProps } from "@/shared/verification-code-input/type";

const Component: React.FC<IVerificationCodeInputProps> = ({
  code,
  length = 6,
  handleCodeChange,
  handlePasteCode,
}) => {
  const inputsRef = useRef([]);

  return (
    <div className="mb-8 flex space-x-2 sm:space-x-4">
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="h-10 w-10 rounded-md bg-gray-300 text-center sm:h-12 sm:w-12"
          maxLength={1}
          value={code[i] ?? ""}
          onChange={handleCodeChange}
          data-index={i}
          ref={(input) => (inputsRef.current[i] = input)}
          onPaste={handlePasteCode}
        />
      ))}
    </div>
  );
};

Component.displayName = "VerificationCodeInput";

export default Component;
