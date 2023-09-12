import React, { useState } from "react";

import Gpt4Evaluation from "@/components/about/gpt4-evaluation";
import Description from "src/components/about/about-section";
import SelectQuestionAnswer from "src/components/about/select-question-answer";

import questionsData from "./questions.json";

const Component: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>(
    questionsData.length > 0 ? questionsData[0].question : ""
  );
  const evaluation = "GPT-4 evaluation text goes here";

  return (
    <div className="container mx-auto p-4">
      <Description title="How good is DICA?" text={"Lorem"} />
      <SelectQuestionAnswer
        questionsData={questionsData}
        selectedQuestion={selectedQuestion}
        onQuestionChange={(newQuestion: string) =>
          setSelectedQuestion(newQuestion)
        }
      />
      <Gpt4Evaluation evaluation={evaluation} />
      <Description
        title="Overview"
        text={"Lorem"}
        imageUrl="/theme/dark.png"
        imageAlt="Image Alt Text"
        imageFigureText="Caption or description for the image"
      />
      <Description title="How to evaluate a chatbot?" text={"Lorem"} />
      <Description title="Limitation" text={"Lorem"} />
      <Description title="Release" text={"Lorem"} />
      <Description title="Acknowledgment" text={"Lorem"} />
      <Description title="The Team" text={"Lorem"} />
      <Description title="Citation" text={"Lorem"} />
    </div>
  );
};

Component.displayName = "About";
export default Component;
