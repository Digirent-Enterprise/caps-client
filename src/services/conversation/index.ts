import axios from "@/axios";
import {ConversationNS} from "@/services/conversation/type";

export default class ConversationService {
    static createNewConversation = (data: ConversationNS.CreateConversationRequest): Promise<ConversationNS.Conversation[]> => {
        return axios.post("/conversation/create-conversation", data);
    };
    static getAllConversation = (): Promise<ConversationNS.Conversation[]> => {
        return axios.get('/conversation/items')
    }
}
