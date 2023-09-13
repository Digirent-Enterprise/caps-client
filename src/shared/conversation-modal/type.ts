import { ConversationNS } from "@/services/conversation/type";

export interface IConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  createNewConversation: (
    name: string,
    chatBotType: ConversationNS.ChatbotType,
  ) => void;
}
