import React from "react";

import Instruction from "@/components/health-form/instruction";

const Component: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-light-background-gray px-5 py-10 dark:bg-dark-gray-heavy">
      <Instruction />
    </div>
  );
};

Component.displayName = "InstructionPage";
export default Component;
