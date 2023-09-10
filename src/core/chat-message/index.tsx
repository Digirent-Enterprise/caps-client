import React, { useEffect, useMemo, useState } from "react";

import { IconVolume2, IconDotsVertical } from "@tabler/icons-react";
import axios from "axios";

import SliceOver from "@/components/sliceover";
import { IChatMessageProps } from "@/core/chat-message/type";

const Component = React.memo((props: IChatMessageProps) => {
  const { content, senderType, language, metadata } = props;
  const [isSliceOverOpen, setIsSliceOverOpen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const containerClasses = {
    chatbot: "justify-start",
    user: "items-center flex-row-reverse",
  };

  const messageClasses = {
    chatbot:
      "bg-light-chatbot-message dark:bg-light-chatbot-message rounded-3xl text-white dark:text-dark-white shadow-lg hover:cursor-pointer",
    user: "bg-light-user-message dark:bg-light-user-message rounded-3xl text-dark-white dark:text-dark-white shadow-lg hover:cursor-pointer",
  };

  const containerClass = containerClasses[senderType];
  const messageClass = messageClasses[senderType];

  const _speak = async () => {
    const api = "https://api.fpt.ai/hmi/tts/v5";
    const response = await axios.post(api, content, {
      headers: {
        "api-key": "ZGnYwVUSYDwW3Wy7l9UFLBCG0XH03SqB",
        speed: "",
        voice: "linhsan",
      },
    });

    if (response) {
      try {
        const audio = new Audio(response.data.async);
        await audio.play();
      } catch (e) {}
    }
    setIsSpeaking(false);
  };

  const _openSliceOver = () => {
    setIsSliceOverOpen(true);
  };

  useEffect(() => {
    if (isSpeaking) {
      _speak();
    }
  }, [isSpeaking]);

  const textWithLineBreaks = useMemo(() => {
    return content.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <div className="pb-1" />
      </React.Fragment>
    ));
  }, [content]);
  return (
    <div
      className={`mt-5 grid grid-flow-row gap-2 text-sm text-light-blue-hover ${containerClass}`}
    >
      <div className={`group flex ${containerClass}`}>
        <div
          className={`max-w-xs px-6 py-3 lg:max-w-md ${messageClass}`}
          style={{ wordBreak: "break-word" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>{textWithLineBreaks}</p>
            {language && language === "vi" && (
              <div className="relative ml-2">
                <button
                  onClick={() => {
                    setIsSpeaking(true);
                  }}
                  disabled={isSpeaking}
                  aria-label="Speak"
                >
                  <div className="text-black dark:text-dark-white">
                    <IconVolume2 />
                  </div>
                </button>
                {isSpeaking && (
                  <div className="bg-opacity/90 absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white">
                    Speaking...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="relative m-2 scale-0 opacity-0 transition-opacity group-hover:block group-hover:scale-100 group-hover:opacity-100">
          <button
            onClick={() => {
              setIsSliceOverOpen(true);
            }}
            aria-label="More Options"
          >
            <div className="text-gray-400 dark:text-gray-400">
              <IconDotsVertical />
            </div>
          </button>
        </div>
      </div>
      <SliceOver
        open={isSliceOverOpen}
        setOpen={setIsSliceOverOpen}
        metadata={metadata}
      />
    </div>
  );
});

Component.displayName = "ChatMessage";

export default Component;
