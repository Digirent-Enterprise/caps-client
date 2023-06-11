import React, { useState, useRef } from "react";

import { Popover, Transition } from "@headlessui/react";
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
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const languageOptions = [
    {
      label: "English",
      value: "en-US",
      onClick: () => _handleLanguageSelect("en-US"),
    },
    {
      label: "Vietnamese",
      value: "vi",
      onClick: () => _handleLanguageSelect("vi"),
    },
  ];

  const _handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value);
    _handleRecording();
  };

  const _handleSubmit = () => {
    // Handle submit
  };

  const _handleRecording = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = selectedLanguage;
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
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
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="mx-2 flex h-6 w-6 shrink-0 text-blue hover:text-blue focus:outline-none">
                {isRecording ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-t-2 border-neutral-800 opacity-60 dark:border-neutral-100"></div>
                ) : (
                  <IconMicrophone color="white" />
                )}
              </Popover.Button>
              <Transition
                show={open}
                as={React.Fragment}
                enter="transition ease-out duration-200 transform origin-bottom"
                enterFrom="opacity-0 translate-y-1 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transition ease-in duration-150 transform origin-bottom"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-1 scale-95"
              >
                <Popover.Panel className="absolute bottom-full z-10 m-4">
                  <div className="rounded-lg bg-white py-2 shadow-lg">
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        className="block w-full px-4 py-2 text-left text-black hover:bg-gray-200"
                        onClick={() => option.onClick()}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <input
          data-tour={dataTourTwo}
          ref={inputRef}
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
        />
      </div>
    </div>
  );
};

Component.displayName = "MessageInput";
export default Component;
