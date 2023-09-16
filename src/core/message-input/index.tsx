import React, { FC, useRef, useState } from "react";

import { IconHeartbeat, IconSend } from "@tabler/icons-react";

import { IMessageInputProps } from "@/core/message-input/type";
import HealthStatusPopupModal from "@/shared/health-status-popup-modal";
import VoiceRecorder from "@/shared/voice-recorder";

const Component: FC<IMessageInputProps> = ({
  dataTourTwo,
  message,
  onValueChange,
  handleSend,
  handleKeyDown,
}) => {
  const [isHealthStatusModalOpen, setIsHealthStatusPopupModalOpen] =
    useState<boolean>(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="flex-none">
      <div className="flex flex-row items-center p-2 pb-4">
        <VoiceRecorder
          inputRef={inputRef}
          onValueChange={onValueChange}
          currentInput={message}
        />
        <textarea
          data-tour={dataTourTwo}
          ref={inputRef}
          className="w-full overflow-y-scroll rounded-xl border border-gray-400 bg-light-background-gray py-2 pl-3 pr-10 text-light-blue-hover transition duration-300 ease-in no-scrollbar focus:shadow-md focus:outline-none dark:bg-dark-gray-heavy dark:text-dark-white dark:focus:bg-dark-gray"
          value={message}
          onChange={(e) => onValueChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything (Shift-Enter for new line, Enter to send)"
        />
        <button
          type="button"
          className="mx-2 flex h-6 w-6 shrink-0 text-light-primary-icon hover:text-light-button-blue-hover focus:outline-none dark:text-white"
          onClick={message ? handleSend : () => {}}
        >
          <IconSend />
        </button>
        <button
          type="button"
          className="hover:text-blue mx-2 flex h-6 w-6 shrink-0 text-light-primary-icon focus:outline-none dark:text-white"
          onClick={() => setIsHealthStatusPopupModalOpen(true)}
        >
          <IconHeartbeat />
        </button>
        <HealthStatusPopupModal
          isOpen={isHealthStatusModalOpen}
          onRequestClose={() => setIsHealthStatusPopupModalOpen(false)}
        />
      </div>
    </div>
  );
};

Component.displayName = "MessageInput";
export default Component;
