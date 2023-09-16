import { ConversationNS } from "@/services/conversation/type";

export interface IConversationListProps {
  conversations: ConversationNS.Conversation[];
  getAllConversations: () => void;
  selectedConversation: ConversationNS.Conversation;
  setSelectedConversation: (x: ConversationNS.Conversation) => void;
}

export interface IConversationLabel {
  name: string;
  condition: number;
}
