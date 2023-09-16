import React, { FC, useEffect, useState } from "react";

import dayjs from "dayjs";
import { useTranslation } from "next-i18next";

import useDevice from "@/hooks/useDevice";
import { ConversationNS } from "@/services/conversation/type";
import Conversation from "@/shared/conversation";
import {
  IConversationLabel,
  IConversationListProps,
} from "@/shared/conversation-list/type";

const Component: FC<IConversationListProps> = (
  props: IConversationListProps,
) => {
  const {
    getAllConversations,
    conversations,
    setSelectedConversation,
    selectedConversation,
  } = props;
  const { isDesktop } = useDevice();
  const { t } = useTranslation("home");
  const [groupedConversations, setGroupedConversations] = useState<{
    [key: string]: ConversationNS.Conversation[];
  }>({});

  const conversationLabels: IConversationLabel[] = [
    { name: "Today", condition: 0 },
    { name: "Yesterday", condition: 1 },
    { name: "Last week", condition: 7 },
    { name: "Last two weeks", condition: 14 },
    { name: "Last month", condition: 30 },
    { name: "Last six months", condition: 180 },
    { name: "Last year", condition: 365 },
  ];

  const _getConversationPaddingColor = (name: string) => {
    switch (name) {
      case "Today":
      case "Yesterday":
        return "text-white light-button-blue";
      default:
        return "text-white bg-dark-green-hover";
    }
  };

  const sortConversationsByCreatedAt = (
    conversations: ConversationNS.Conversation[],
  ) => {
    const sortedByCreatedAt = conversations.sort(
      (a, b) =>
        dayjs(b.createdAt, "ddd, DD MMM YYYY HH:mm:ss [GMT]").valueOf() -
        dayjs(a.createdAt, "ddd, DD MMM YYYY HH:mm:ss [GMT]").valueOf(),
    );
    const groupedByLabel: { [key: string]: ConversationNS.Conversation[] } = {};
    sortedByCreatedAt.forEach((conversation) => {
      const label = getConversationLabel(conversation);
      if (!groupedByLabel[label]) {
        groupedByLabel[label] = [conversation];
      } else {
        groupedByLabel[label].push(conversation);
      }
    });
    setGroupedConversations(groupedByLabel);
  };

  useEffect(() => {
    getAllConversations();
  }, []);

  useEffect(() => {
    if (conversations && conversations.length && !selectedConversation) {
      setSelectedConversation(conversations[0]);
    }
  }, [conversations]);

  useEffect(() => {
    if (conversations) {
      sortConversationsByCreatedAt(conversations);
    }
  }, [conversations]);

  const getConversationLabel = (conversation: ConversationNS.Conversation) => {
    const createdAt = dayjs(
      conversation.createdAt,
      "ddd, DD MMM YYYY HH:mm:ss [GMT]",
    );
    const now = dayjs();
    const diffDays = now.diff(createdAt, "days");

    for (let i = 0; i < conversationLabels.length; i++) {
      if (diffDays <= conversationLabels[i].condition) {
        return conversationLabels[i].name;
      }
    }

    return "Long time ago";
  };

  const _onSelectConversation = (item: ConversationNS.Conversation) => {
    setSelectedConversation(item);
  };

  if (!Object.keys(groupedConversations).length)
    return (
      <div className="m-4 font-bold text-light-blue-hover dark:text-white">
        {t("empty_conversation")}
      </div>
    );

  return (
    <div
      className={`mt-4 flex ${
        isDesktop ? "flex-col" : "scroll-m-2"
      } hide-scrollbar gap-2 overflow-y-scroll border-b-light-gray p-2 dark:border-b-dark-gray`}
    >
      {Object.keys(groupedConversations).map((label) => {
        const colorClasses = _getConversationPaddingColor(label);
        return (
          <div key={label} className="flex-col gap-1">
            <div className="mb-2 px-2 py-1 text-sm text-light-blue-hover">
              {label}
            </div>
            {groupedConversations[label].map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => _onSelectConversation(conversation)}
              >
                <Conversation
                  key={conversation.id}
                  id={conversation.id}
                  name={conversation.name}
                  chatBotType={conversation.chatBotType}
                  createdAt={conversation.createdAt}
                  conversation={conversation}
                  selected={selectedConversation?.id === conversation?.id}
                  selectedConversation={selectedConversation}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

Component.displayName = "ConversationList";
export default Component;