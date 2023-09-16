import { ConversationNS } from "@/services/conversation/type";

export interface IMessageListProps {
  selectedConversation: ConversationNS.Conversation;
  dataTourOne: string;
  dataTourTwo: string;
}
