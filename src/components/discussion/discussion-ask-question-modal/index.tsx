import React, { ChangeEvent, memo, useEffect, useState } from "react";

import { IAskQuestionModal } from "@/components/discussion/discussion-ask-question-modal/type";
import BaseModal from "@/core/base-modal";
import { StatusType } from "@/types/enum/common/status-type";
import { showToast } from "@/utils/toast";

const Component = memo((props: IAskQuestionModal) => {
  const { open, onClose, createInquiry } = props;
  const [question, setQuestion] = useState<string>("");

  const _onQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setQuestion(e.target.value);
  const _onSubmit = () => {
    if (!question) {
      showToast(StatusType.ERROR, "Please enter your question.");
      return;
    }
    if (question.length < 100) {
      showToast(
        StatusType.ERROR,
        "Your question is too short. Please provide more information or use our Chat function instead.",
      );
      return;
    }
    createInquiry(question);
  };

  useEffect(() => {
    if (!open) setQuestion("");
  }, [open]);

  return (
    <BaseModal isOpen={open} onClose={onClose} title="Ask Your Question">
      <div className="flex w-full flex-col">
        <div>
          <span className="w-fit pr-1 font-bold underline">Notes 1:</span>
          <span>
            Your question will be answered by
            <span className="px-1 font-semibold">
              real doctors verified by DICA.
            </span>
            As a result, it takes 3-5 working days to get your answer. Please be
            patient and give us as much information as possible.
          </span>
        </div>
        <div className="my-2">
          <span className="w-fit pr-1 font-bold underline">Notes 2:</span>
          <span>
            Please aware that when you submit your question, the doctor is able
            to review your personal information to give you the best answer.
          </span>
        </div>
        <div className="font-semibold"> Input your question here: </div>
        `
        <textarea
          className="h-28 overflow-auto p-1"
          value={question}
          onChange={_onQuestionChange}
          placeholder="This is area to input your question"
        />
        `
        <div className="mt-3 flex w-full">
          <button
            onClick={_onSubmit}
            className="ml-auto h-[2.5rem] w-[8rem] rounded-lg bg-light-button-blue p-1 font-semibold text-white hover:bg-light-button-blue-hover"
          >
            Submit
          </button>
        </div>
      </div>
    </BaseModal>
  );
});

Component.displayName = "DiscussionAskQuestionModal";

export default Component;