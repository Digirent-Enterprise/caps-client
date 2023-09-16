import React, { FC } from "react";

import Instruction from "@/components/dynamic-health/dynamic-health-instruction";

const Component: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-light-background-gray px-5 py-10 dark:bg-dark-gray-heavy">
      <Instruction />
    </div>
  );
};

Component.displayName = "InstructionPage";
export default Component;
