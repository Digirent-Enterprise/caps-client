import { createAxiosInstance } from "@/axios";
import { ConversationNS } from "@/services/conversation/type";
import { MessageNS } from "@/services/message/type";

const api = createAxiosInstance();

export default class MessageService {
  static sendMessage = (
    data: MessageNS.GetMessageReq
  ): Promise<ConversationNS.Conversation> => {
    return api.post("/message/send-message", data);
  };
  static getAllMessages = (
    data: MessageNS.GetMessageReq
  ): Promise<MessageNS.Messages> => {
    return api.get("/conversation/messages", { params: data });
  };
}
