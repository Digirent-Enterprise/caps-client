import React from "react";

import { IGpt4EvaluationProps } from "@/components/about/gpt4-evaluation/type";

const Component: React.FC<IGpt4EvaluationProps> = ({ evaluation }) => {
  return (
    <div>
      {/* Render GPT-4 evaluation */}
      <p>{evaluation}</p>
    </div>
  );
};

Component.displayName = "Gpt4Evaluation";
export default Component;
