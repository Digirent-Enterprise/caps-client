import React, { FC, useState } from "react";

import Description from "@/components/about/about-section";
import Gpt4Evaluation from "@/components/about/gpt4-evaluation";
import SelectQuestionAnswer from "@/components/about/select-question-answer";
import questionsData from "@/fixtures/questions.json";

const Component: FC = () => {
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
        title="overview.title"
        text={"Lorem"}
        imageUrl="/theme/dark.png"
        imageAlt="Image Alt Text"
        imageFigureText="Caption or description for the image"
      />
      <Description title="How to evaluate a chatbot?" text={"Lorem"} />
      <Description title="Limitation" text={"Lorem"} />
      <Description title="Release" text={"Lorem"} />
      <Description title="acknowledgment.title" text="acknowledgment.text" />
      <Description
        title="team.title"
        text={"Lorem"}
        listItems={[
          {
            label: "Student:",
            content: "Giang Nguyen, Luan Vo, Bao Vo, Nhat Bui, Nguyen Nguyen",
          },
          {
            label: "Supervisor:",
            content: "Dr. Arthur Tang, Dr. Minh Dinh, Mr. Tom Huynh",
          },
          {
            content: "Special thanks to NVIDIA and Mr. Nhiem",
          },
        ]}
      />
      <Description title="Citation" text={"Lorem"} />
    </div>
  );
};

Component.displayName = "About";
export default Component;
