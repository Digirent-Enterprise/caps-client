import axios from "@/axios";
import { ConversationNS } from "@/services/conversation/type";

export default class ConversationService {
  static createNewConversation = (
    data: ConversationNS.CreateConversationRequest
  ): Promise<ConversationNS.Conversation> => {
    return axios.post("/conversation/create-conversation", data);
  };

  static getAllConversations = (): Promise<ConversationNS.Conversation[]> => {
    return axios.get("/conversation/items");
  };

  static updateConversation = (
    data: ConversationNS.Conversation
  ): Promise<ConversationNS.Conversation> => {
    return axios.put("/conversation/item/update", {
      id: data.id,
      name: data.name,
    });
  };

  static deleteConversation = (
    id: number
  ): Promise<ConversationNS.Conversation> => {
    return axios.delete(
      "/conversation/item/delete",

      {
        data: {
          id,
        },
      }
    );
  };
}
