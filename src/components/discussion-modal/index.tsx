import React, { memo, useEffect, useState } from "react";

import { Tab } from "@headlessui/react";
import { useImmer } from "use-immer";

import AskQuestionModal from "@/components/ask-question-modal";
import DiscussionItem from "@/components/discussion-item";
import { DefaultDiscussionTabs } from "@/components/discussion-modal/constant";
import { IDiscussionModalProps } from "@/components/discussion-modal/type";
import BaseModal from "@/core/base-modal";
import CustomTabSwitcher from "@/core/custom-tab-switcher";
import useInquiry from "@/hooks/inquiry";

const Component = memo((props: IDiscussionModalProps) => {
  const { isOpen, onClose } = props;
  const [openAskQuestion, setOpenAskQuestion] = useState<boolean>(false);
  const [tab, setTab] = useImmer<number>(0);
  const { createInquiry, getInquiryByUserId, inquiries } = useInquiry();
  const _openModal = () => setOpenAskQuestion(true);
  const _closeModal = () => setOpenAskQuestion(false);

  const _onChangeTab = (x: number) => setTab(x);

  const _onCreateInquiry = (message: string) => {
    createInquiry(message, _closeModal);
  };

  useEffect(() => {
    if (isOpen) {
      if (tab === 0) getInquiryByUserId("pending");
      if (tab === 1) getInquiryByUserId("answered");
    }
  }, [tab, isOpen]);

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Discussion">
      <>
        <div className="pb-4">
          <div className="flex h-fit w-full flex-row flex-nowrap items-center">
            <div className="flex w-full flex-row flex-wrap items-center ">
              <div className="w-fit pr-1 font-bold underline">Notes:</div>
              <span>
                Your question will be answered by
                <span className="font-semibold">
                  {" "}
                  real doctors verified by DICA.
                </span>
              </span>
            </div>
            <button
              onClick={_openModal}
              className="ml-auto w-[20rem] rounded bg-light-header-footer px-10 py-2 text-white"
            >
              Ask new question
            </button>
          </div>
        </div>
        <CustomTabSwitcher
          tabs={DefaultDiscussionTabs}
          handleTabChange={_onChangeTab}
        >
          <>
            {DefaultDiscussionTabs.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className={
                  "rounded-xl bg-white font-serif ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                }
              >
                {inquiries?.map((inquiry, idx) => {
                  return (
                    <DiscussionItem
                      title={inquiry.message}
                      answer={inquiry.answer}
                      status={inquiry.status || "pending"}
                      key={idx}
                    />
                  );
                })}
              </Tab.Panel>
            ))}
          </>
        </CustomTabSwitcher>
        <AskQuestionModal
          open={openAskQuestion}
          onClose={_closeModal}
          createInquiry={_onCreateInquiry}
        />
      </>
    </BaseModal>
  );
});

Component.displayName = "DiscussionModal";

export default Component;
