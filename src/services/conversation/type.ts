export namespace ConversationNS {
  export enum ChatbotType {
    OPEN_AI_BASE = "open_ai_base",
    OPEN_AI_EMBEDDING = "open_ai_embedding",
    ThreeB = "long-llama-3B",
    SevenB = "llama2-7b",
    ThirdTeenB = "llama2-13b",
    CustomB = "custom",
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
