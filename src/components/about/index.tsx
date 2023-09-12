import React, { useState } from "react";

import Description from "@/components/about/description";
import Gpt4Evaluation from "@/components/about/gpt4-evaluation";
import SelectQuestionAnswer from "src/components/about/select-question-answer";

import questionsData from "./questions.json";

const Component: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(
    questionsData.length > 0 ? questionsData[0].question : ""
  );
  const evaluation = "GPT-4 evaluation text goes here";

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">How Good is DICA?</h1>
      <Description />
      <SelectQuestionAnswer
        questionsData={questionsData}
        selectedQuestion={selectedQuestion}
        onQuestionChange={(newQuestion) => setSelectedQuestion(newQuestion)}
      />
      <Gpt4Evaluation evaluation={evaluation} />
    </div>
  );
};

Component.displayName = "About";
export default Component;
