import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { Popover, Transition } from "@headlessui/react";
import { IconMicrophone } from "@tabler/icons-react";
import {
  Transcription,
  TranscriptionCreateParams,
} from "openai/resources/audio";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { useImmer } from "use-immer";

import {
  MAX_BLOB_SIZE,
  MAX_TIME_RECORD_PER_CHUNK,
} from "@/components/voice-recorder/constant";
import { IVoiceRecorderProps } from "@/components/voice-recorder/type";
import { getAI } from "@/open-ai";
import { showToast } from "@/utils/toast";

const Component = memo((props: IVoiceRecorderProps) => {
  const { onValueChange, currentInput } = props;
  const [isRecording, setIsRecording] = useImmer<boolean>(false);
  const [open, setOpen] = useImmer<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();

  const languageOptions = useMemo(
    () => [
      {
        label: "English",
        value: "en",
        onClick: () => _handleLanguageSelect("en"),
      },
      {
        label: "Vietnamese",
        value: "vi",
        onClick: () => _handleLanguageSelect("vi"),
      },
    ],
    [isRecording],
  );

  const _openSelectLanguageModal = () => setOpen(!open);

  const _handleForceStopRecording = () => {
    setIsRecording(false);
  };

  const _handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value);
    _handleRecording();
    setOpen(false);
  };

  const _handleRecording = () => {
    setIsRecording(!isRecording);
  };

  const _translate = useCallback(
    async (blob: Blob) => {
      if (blob.size > MAX_BLOB_SIZE) {
        showToast("error", "The voice record is too expensive!");
      }
      const ai = getAI();
      const file = new File([blob], "audio.mp3");

      const transcriptions = ai.audio.transcriptions;
      const response: Transcription = await transcriptions.create({
        file,
        language: selectedLanguage,
        response_format: "text",
        model: "whisper-1",
      } as TranscriptionCreateParams);
      if (response) {
        if (currentInput) onValueChange(`${currentInput}${response.text}`);
        else onValueChange(response.text);
      } else {
        showToast(
          "error",
          "Something wrong with the voice assistant. Please try again later",
        );
      }
    },
    [currentInput],
  );

  useEffect(() => {
    if (!recordingBlob) return;
    _translate(recordingBlob);
  }, [recordingBlob]);

  useEffect(() => {
    const _handleAutoStop = () => {
      if (isRecording) setIsRecording(false);
    };

    if (isRecording) startRecording();
    else stopRecording();
    const timeOut = setTimeout(_handleAutoStop, MAX_TIME_RECORD_PER_CHUNK);
    return () => {
      clearTimeout(timeOut);
    };
  }, [isRecording]);

  return (
    <Popover className="relative">
      <Popover.Button className="mx-2 flex h-6 w-6 shrink-0 text-light-blue hover:text-light-button-blue focus:outline-none">
        {isRecording ? (
          <div
            className="h-4 w-4 animate-spin rounded-full border-t-2 border-gray-400 opacity-60 dark:border-neutral-100"
            onClick={_handleForceStopRecording}
          ></div>
        ) : (
          <div
            className="text-light-primary-icon dark:text-white"
            onClick={_openSelectLanguageModal}
          >
            <IconMicrophone />
          </div>
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
          <div className="rounded-lg bg-light-gray py-2 shadow-lg dark:bg-dark-gray">
            {languageOptions.map((option) => (
              <button
                key={option.value}
                className="block w-full px-4 py-2 text-left text-black hover:bg-gray-200 dark:text-dark-white dark:hover:bg-dark-green"
                onClick={() => option.onClick()}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
});

Component.displayName = "VoiceRecorder";

export default Component;
