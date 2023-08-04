import { memo } from "react";

import { Disclosure } from "@headlessui/react";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

import AskQuestionModal from "@/components/ask-question-modal";
import { IDiscussionItemProps } from "@/components/discussion-item/type";

const Component = memo((props: IDiscussionItemProps) => {
  const { title, content, status = "Pending" } = props;
  return (
    <Disclosure>
      {({ open }) => {
        let canOpen = false;
        if (status.toLowerCase() !== "pending") canOpen = true;
        console.log("canOpen", canOpen);
        return (
          <>
            <Disclosure.Button
              className="text-md mb-1 flex w-full items-center justify-between rounded-lg bg-light-button-blue px-4 py-3 text-left text-sm font-medium text-white
                hover:bg-light-button-blue-hover focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            >
              <div className="text-md line-clamp-1 w-[85%] font-bold">
                {title}
              </div>
              <div className="rounded bg-orange-400 px-3 py-1">{status}</div>
              {canOpen ? (
                !open ? (
                  <IconChevronRight
                    className={`h-5 w-5 text-light-secondary-button`}
                  />
                ) : (
                  <IconChevronDown
                    className={`h-5 w-5 text-light-secondary-button`}
                  />
                )
              ) : null}
            </Disclosure.Button>
            {canOpen && open && (
              <Disclosure.Panel className="text-md mb-2 px-4 pb-2 pt-4">
                {content}
              </Disclosure.Panel>
            )}
          </>
        );
      }}
    </Disclosure>
  );
});

Component.displayName = "DiscussionItem";
export default Component;
