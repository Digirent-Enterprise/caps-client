import React, { useEffect, useMemo, useState } from "react";

import { IconVolume2 } from "@tabler/icons-react";
import axios from "axios";

import { IChatMessageProps } from "@/core/chat-message/type";

const Component = React.memo((props: IChatMessageProps) => {
  const { conservationId, content, senderType, language } = props;
  const [isSpeaking, setIsSpeaking] = useState(false);
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
              <button
                className="ml-2"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

Component.displayName = "ChatMessage";

export default Component;
