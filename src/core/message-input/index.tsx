import React, { useState, useEffect } from "react";

import { IconSend, IconHeartbeat, IconMicrophone } from "@tabler/icons-react";

import { IMessageInputProps } from "@/core/message-input/type";
import HealthStatusPopupModal from "@/shared/health-status-popup-modal";

const Component: React.FC<IMessageInputProps> = ({
  dataTourTwo,
  message,
  onValueChange,
  handleSend,
  handleKeyDown,
}) => {
  const [isHealthStatusModalOpen, setIsHealthStatusPopupModalOpen] =
    useState<boolean>(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string>("");

  const _handleSubmit = () => {};

  const _handleRecording = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event: any) => {
      const { transcript } = event.results[0][0];
      setTranscript(transcript);
      onValueChange(transcript);
      setIsRecording(false);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
    };

    recognition.start();
  };

  return (
    <div className="flex-none">
      <div className="flex flex-row items-center p-4">
        <button
          className="flex w-6 h-6 mx-2 text-blue hover:text-blue shrink-0 focus:outline-none"
          onClick={_handleRecording}
        >
          {isRecording ? (
            <div className="w-4 h-4 border-t-2 rounded-full animate-spin border-neutral-800 opacity-60 dark:border-neutral-100"></div>
          ) : (
            <IconMicrophone color="orange" />
          )}
        </button>
        <input
          data-tour={dataTourTwo}
          className="w-full py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in border border-gray-800 rounded-full bg-light-background-gray dark:bg-gray-800 focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
          value={transcript || message}
          onChange={(e) => onValueChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything (Shift-Enter for new line, Enter to send)"
        />
        <button
          type="button"
          className="flex w-6 h-6 mx-2 text-blue hover:text-blue shrink-0 focus:outline-none"
          onClick={message ? handleSend : () => {}}
        >
          <IconSend color="orange" />
        </button>
        <button
          type="button"
          className="flex w-6 h-6 mx-2 text-blue hover:text-blue shrink-0 focus:outline-none"
          onClick={() => setIsHealthStatusPopupModalOpen(true)}
        >
          <IconHeartbeat color="red" />
        </button>
        <HealthStatusPopupModal
          isOpen={isHealthStatusModalOpen}
          onRequestClose={() => setIsHealthStatusPopupModalOpen(false)}
          onSubmit={_handleSubmit}
        />
      </div>
    </div>
  );
};

Component.displayName = "MessageInput";
export default Component;
