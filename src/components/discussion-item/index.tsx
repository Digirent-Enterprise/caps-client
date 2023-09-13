import { memo, useMemo } from "react";

import { Disclosure } from "@headlessui/react";
import {
  IconChevronDown,
  IconChevronRight,
  IconEdit,
} from "@tabler/icons-react";

import { IDiscussionItemProps } from "@/components/discussion-item/type";

const Component = memo((props: IDiscussionItemProps) => {
  const {
    title,
    answer,
    status = "Pending",
    hasButton = false,
    onClick,
  } = props;

  const _onDiscussionClick = () => {
    if (onClick && hasButton) onClick();
  };

  const newStatus = useMemo(() => {
    if (status === "pending") return "Pending";
    if (status === "answered") return "Answered";
    if (status === "peer-reviewed") return "Answered (*)";
    return "Pending";
  }, [status]);

  const statusColor = useMemo(() => {
    if (status === "pending") return "bg-orange-400";
    if (status === "answered") return "bg-green-400";
    if (status === "peer-reviewed") return "bg-green-400";
  }, [status]);

  const answerClasses = useMemo(() => {
    return hasButton
      ? "text-md mb-2 px-4 pb-2 pt-4 font-semibold bg-gray-300 shadow-md"
      : "text-md mb-2 px-4 pb-2 pt-4";
  }, [hasButton]);

  return (
    <Disclosure>
      {({ open }) => {
        let canOpen = false;
        if (status.toLowerCase() !== "pending") canOpen = true;
        return (
          <>
            <Disclosure.Button
              onClick={_onDiscussionClick}
              className="text-md Georgia z-10 mb-1 flex w-full items-center justify-between rounded-lg bg-light-button-blue px-4 py-3 text-left font-serif text-sm text-white
                shadow-md hover:bg-light-button-blue-hover focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            >
              <div className="text-md line-clamp-1 w-[85%] font-semibold">
                {title}
              </div>
              <div
                className={`rounded ${statusColor} px-3 py-1 ${
                  hasButton ? "ml-auto" : ""
                }`}
              >
                {newStatus}
              </div>
              {hasButton && (
                <button className="z-50 ml-2 p-1 text-sm text-light-secondary-button shadow-md">
                  <IconEdit />
                </button>
              )}
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
              <Disclosure.Panel className={answerClasses}>
                Answer from doctor: {answer}
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
