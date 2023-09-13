import React, { FC } from "react";

import AnswerCard from "@/components/about/answer-card";
import QuestionCard from "@/components/about/question-card";
import { ISelectQuestionAnswerProps } from "@/components/about/select-question-answer/type";

const SelectQuestionAnswer: FC<ISelectQuestionAnswerProps> = ({
  questionsData,
  selectedQuestion,
  onQuestionChange,
}) => {
  const selectedData = questionsData.find(
    (item) => item.question === selectedQuestion,
  );

  return (
    <div className="mb-4">
      <select
        className="h-[calc(1.5em + 0.75rem + 2px)] bg-clip-padding-box mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-normal text-gray-800 transition duration-150 ease-in-out"
        onChange={(e) => onQuestionChange(e.target.value)}
        value={selectedQuestion}
      >
        {questionsData.map((item, index) => (
          <option key={index} value={item.question}>
            {item.question}
          </option>
        ))}
      </select>

      <QuestionCard question={selectedQuestion} />

      {selectedData && <AnswerCard modelOptions={selectedData.modelOptions} />}
    </div>
  );
};

export default SelectQuestionAnswer;
