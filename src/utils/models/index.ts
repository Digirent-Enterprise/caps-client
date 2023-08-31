import { ConversationNS } from "@/services/conversation/type";

export const formatModelOption = (model: string) => {
  if (!model) return "";
  switch (model) {
    case ConversationNS.ChatbotType.OPEN_AI_BASE:
      return "Open AI Base (Standard)";
    case ConversationNS.ChatbotType.ThreeB:
      return "LLama 3B (Professional)";
    case ConversationNS.ChatbotType.SevenB:
      return "LLama 7B (Natural)";
    case ConversationNS.ChatbotType.ThirdTeenB:
      return "LLama 13B (Consistent and stable)";
    case ConversationNS.ChatbotType.CustomB:
      return "Custom LLama (Comprehensive)";
    case ConversationNS.ChatbotType.OPEN_AI_EMBEDDING:
      return "Open AI Embedding (Professional)";
    default:
      return model;
  }
};

export const renderChatBotOptions = () => {
  return Object.keys(ConversationNS.ChatbotType).map((key) => {
    const chatbotType = ConversationNS.ChatbotType as Record<string, any>;
    return {
      value: chatbotType[key],
      label: formatModelOption(chatbotType[key]),
    };
  });
};
