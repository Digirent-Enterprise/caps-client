import React, { ChangeEvent, FC, useEffect, useState } from "react";

import { useTranslation } from "next-i18next";

import { IAnswerCardProps } from "@/components/about/answer-card/type";
import { IModelOption } from "@/components/about/select-question-answer/type";

const Component: FC<IAnswerCardProps> = ({ modelOptions }) => {
  const { t } = useTranslation("about");
  const [selectedModel, setSelectedModel] = useState<string>(
    modelOptions[0]?.model || ""
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string>(
    modelOptions[0]?.answer
  );

  useEffect(() => {
    const newAnswer = modelOptions.find(
      (modelOption) => modelOption.model === selectedModel
    )?.answer;
    setSelectedAnswer(newAnswer);
  }, [selectedModel, modelOptions]);

  const handleModelSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
  };

  return (
    <div className="mb-4 rounded-md border border-gray-300 bg-white p-4 shadow-md">
      <div className="bg-light-button-blue px-5 py-3 font-semibold">
        <div>
          <div className="mb-5 flex items-center text-white">
            {t("assistant")} #1
          </div>
          <div>
            <select
              className="h-[calc(1.5em + 0.75rem + 2px)] bg-clip-padding-box w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-normal text-gray-800 transition duration-150 ease-in-out"
              style={{ height: "fit-content", marginTop: "-0.3rem" }}
              onChange={handleModelSelect}
              value={selectedModel}
            >
              {modelOptions.map((modelOption: IModelOption, index: number) => (
                <option key={index} value={modelOption.model}>
                  {modelOption.model}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="min-h-0 flex-1 p-5">
        <div className="relative overflow-x-hidden">
          <div className="mb-0">{selectedAnswer}</div>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "AnswerCard";
export default Component;
