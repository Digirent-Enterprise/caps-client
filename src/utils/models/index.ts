import { ConversationNS } from "@/services/conversation/type";

export const formatModelOption = (model: string) => {
  if (!model) return "";
  switch (model) {
    case ConversationNS.ChatbotType.OPEN_AI_BASE:
      return "Open AI Base (Standard)";
    case ConversationNS.ChatbotType.OPEN_AI_EMBEDDING:
      return "Embedding Open AI (Professional)";
    case ConversationNS.ChatbotType.BLOOM:
      return "AI Blossom (Natural)";
    case ConversationNS.ChatbotType.STABLE_LLM:
      return "Stable LLM AI (Consistent and stable)";
    case ConversationNS.ChatbotType.GPT4ALL_EMBEDDING:
      return "Embedding GPT4ALL (Comprehensive)";
    default:
      return model;
  }
};

export const renderChatBotOptions = () => {
  return Object.keys(ConversationNS.ChatbotType).map((key) => {
    return {
      value: ConversationNS.ChatbotType[key],
      label: formatModelOption(ConversationNS.ChatbotType[key]),
    };
  });
};
