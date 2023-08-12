import { createAxiosInstance } from "@/axios";
import { ConversationNS } from "@/services/conversation/type";

const api = createAxiosInstance();
export default class ConversationService {
  static createNewConversation = (
    data: ConversationNS.CreateConversationRequest
  ): Promise<ConversationNS.Conversation> => {
    return api.post("/conversation/create-conversation", data);
  };
  static getAllConversations = (): Promise<ConversationNS.Conversation[]> => {
    return api.get("/conversation/items");
  };

  static updateConversation = (
    data: ConversationNS.UpdateConversationRequest
  ): Promise<ConversationNS.Conversation> => {
    return api.post("/conversation/create-conversation", data);
  };
}
