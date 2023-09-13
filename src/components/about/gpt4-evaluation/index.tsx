import React, { FC } from "react";

import { IGpt4EvaluationProps } from "@/components/about/gpt4-evaluation/type";

const Component: FC<IGpt4EvaluationProps> = ({ evaluation }) => {
  return (
    <div className="mb-4">
      <div className="rounded-md border border-gray-300 bg-white p-4 shadow-md">
        <h2 className="mb-2 text-xl font-semibold">GPT-4 Evaluation</h2>
        <p className="text-gray-700">{evaluation}</p>
      </div>
    </div>
  );
};

Component.displayName = "Gpt4Evaluation";
export default Component;
