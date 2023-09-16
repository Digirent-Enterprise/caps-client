import { ConversationNS } from "@/services/conversation/type";
import { MessageNS } from "@/services/message/type";
import axios from "@/utils/axios";

export default class MessageService {
  static sendMessage = (
    data: MessageNS.GetMessageReq,
  ): Promise<ConversationNS.Conversation> => {
    return axios.post("/message/send-message", data);
  };
  static getAllMessages = (
    data: MessageNS.GetMessageReq,
  ): Promise<MessageNS.Messages> => {
    return axios.get("/conversation/messages", { params: data });
  };
}
