import React, { useEffect, useState } from "react";

import dayjs from "dayjs";

import {
  IConversationLabel,
  IConversationListProps,
} from "@/components/conversation-list/type";
import useDevice from "@/hooks/useDevice";
import { ConversationNS } from "@/services/conversation/type";
import Conversation from "@/shared/conversation";

const Component: React.FC<IConversationListProps> = (
  props: IConversationListProps
) => {
  const {
    getAllConversations,
    conversations,
    setSelectedConversation,
    selectedConversation,
  } = props;
  const { isDesktop } = useDevice();

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

  const sortConversationsByCreatedAt = (
    conversations: ConversationNS.Conversation[]
  ) => {
    const sortedByCreatedAt = conversations.sort(
      (a, b) =>
        dayjs(b.createdAt, "ddd, DD MMM YYYY HH:mm:ss [GMT]").valueOf() -
        dayjs(a.createdAt, "ddd, DD MMM YYYY HH:mm:ss [GMT]").valueOf()
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
      "ddd, DD MMM YYYY HH:mm:ss [GMT]"
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
      <div className="m-4 font-bold text-gray-300"> Empty Conversation </div>
    );

  return (
    <div
      className={`mt-4 flex ${
        isDesktop ? "flex-col" : "scroll-m-2"
      } gap-2 overflow-y-scroll border-b-black p-2`}
    >
      {Object.keys(groupedConversations).map((label) => (
        <div key={label}>
          <div className="mb-2 text-sm text-gray-400">{label}</div>
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
      ))}
    </div>
  );
};

Component.displayName = "ConversationList";
export default Component;
