import React, { memo } from "react";

import { Tab } from "@headlessui/react";

import AskQuestionModal from "@/components/ask-question-modal";
import DiscussionItem from "@/components/discussion-item";
import { DefaultDiscussionTabs } from "@/components/discussion-modal/constant";
import { IDiscussionModalProps } from "@/components/discussion-modal/type";
import BaseModal from "@/core/base-modal";
import CustomTabSwitcher from "@/core/custom-tab-switcher";

const Component = memo((props: IDiscussionModalProps) => {
  const { isOpen, onClose } = props;
  const [openAskQuestion, setOpenAskQuestion] = React.useState(false);

  const _openModal = () => setOpenAskQuestion(true);
  const _closeModal = () => setOpenAskQuestion(false);

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
        <CustomTabSwitcher tabs={DefaultDiscussionTabs}>
          <>
            {DefaultDiscussionTabs.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className={
                  "rounded-xl bg-white font-serif ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                }
              >
                {/*{idx === 0 && (*/}
                {idx === 0 && (
                  <>
                    <DiscussionItem
                      title="bao"
                      content="adasasdasdasd.dadasdasdssda. asdadasdweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeweqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee weqweqweqweqweqwewqewqewweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                    />
                    <DiscussionItem
                      title="bao"
                      content="adasasdasdasd.dadasdasdssda. asdadasd"
                    />
                    <DiscussionItem
                      title="bao"
                      content="adasasdasdasd.dadasdasdssda. asdadasd"
                    />
                  </>
                )}
              </Tab.Panel>
            ))}
          </>
        </CustomTabSwitcher>
        <AskQuestionModal open={openAskQuestion} onClose={_closeModal} />
      </>
    </BaseModal>
  );
});

Component.displayName = "DiscussionModal";

export default Component;
