import React, { useEffect, useState } from "react";

import { IconVolume2 } from "@tabler/icons-react";

import { IChatMessageProps } from "@/core/chat-message/type";

const Component = React.memo((props: IChatMessageProps) => {
  const { conservationId, content, senderType } = props;
  const [isSpeaking, setIsSpeaking] = useState(false);

  const containerClasses = {
    chatbot: "justify-start",
    user: "items-center flex-row-reverse",
  };

  const messageClasses = {
    chatbot: "bg-gray dark:bg-dark-orange rounded-3xl text-light-blue-hover dark:text-dark-gray",
    user: "bg-light-blue dark:bg-dark-white rounded-3xl text-dark-white dark:text-dark-blue",
  };

  const containerClass = containerClasses[senderType];
  const messageClass = messageClasses[senderType];

  const _speakMessage = () => {
    const utterance = new SpeechSynthesisUtterance(content);

    utterance.voice = speechSynthesis.getVoices()[0];
    utterance.lang = "vi";

    speechSynthesis.speak(utterance);

    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  useEffect(() => {
    if (isSpeaking) {
      _speakMessage();
    }
  }, [isSpeaking]);

  return (
    <div
      className={`mt-5 grid grid-flow-row gap-2 text-sm text-gray-700 ${containerClass}`}
    >
      <div className={`group flex ${containerClass}`}>
        <div
          className={`max-w-xs px-6 py-3 lg:max-w-md ${messageClass}`}
          style={{ wordBreak: "break-word" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>{content}</p>
            <button
              className="ml-2"
              onClick={() => setIsSpeaking(true)}
              aria-label="Speak"
            >
              <div className="dark:text-dark-blue">
                <IconVolume2 />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

Component.displayName = "ChatMessage";

export default Component;
