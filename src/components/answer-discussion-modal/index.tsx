import React, { memo, useMemo, useState } from "react";

import { IconRobot } from "@tabler/icons-react";

import { IAnswerDiscussionModalProps } from "@/components/answer-discussion-modal/type";
import DiscussionUserBasicInfo from "@/components/discussion-user-basic-info";
import BaseModal from "@/core/base-modal";
import { showToast } from "@/utils/toast";

const Component = memo((props: IAnswerDiscussionModalProps) => {
  const { open, onClose } = props;
  const [answer, setAnswer] = useState<string>("");
  const _onQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const _onClickSubmit = () => {
    showToast("success", "This feature is not available yet");
  };
  const inquiry = useMemo(() => {
    return open.inquiry;
  }, [open]);
  return (
    <BaseModal isOpen={open.open} onClose={onClose} title={"Answer Discussion"}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">1. Question</div>
          <div> {inquiry && inquiry.message}</div>
        </div>
        <DiscussionUserBasicInfo userId={inquiry?.userId || -1} />

        <div className="flex flex-col gap-1">
          <div className="text-md font-semibold">3. User Overall Status</div>
          <div className="text-sm font-semibold text-gray-500">
            Cannot find data for this session right now
          </div>
        </div>
        <div className=" flex flex-row gap-2">
          <div className="text-md font-semibold">4. Your Answer</div>
          <IconRobot className="cursor-pointer rounded-[50%] bg-light-button-blue-hover p-1 text-white" />
        </div>
        <textarea
          className="h-28 w-full overflow-auto p-1"
          value={answer}
          onChange={_onQuestionChange}
          placeholder="This is area to input your answer"
        />
        <div className="flex justify-end">
          <button
            onClick={_onClickSubmit}
            className="rounded bg-light-button-blue px-4 py-2 font-bold text-white hover:bg-light-button-blue-hover"
          >
            Submit
          </button>
        </div>
      </div>
    </BaseModal>
  );
});

Component.displayName = "AnswerDiscussionModal";
export default Component;
