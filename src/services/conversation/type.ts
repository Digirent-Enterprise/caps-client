export namespace ConversationNS {
  export enum ChatbotType {
    OPEN_AI_BASE = "open_ai_base",
    OPEN_AI_EMBEDDING = "open_ai_embedding",
    GPT4ALL_EMBEDDING = "gpt4all_embedding",
    BLOOM = "bloom",
    STABLE_LLM = "stable_llm",
  }
  export type Conversation = {
    id: number;
    name: string;
    chatBotType: ChatbotType;
    createdAt: string;
  };

  export type CreateConversationRequest = {
    name: string;
    chatBotType: ChatbotType;
  };

  //  response
  export type ConversationsResponse = Conversation[];
}
