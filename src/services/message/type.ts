export namespace MessageNS {
  export type Message = {
    id: number;
    content: string;
    sender: SenderType;
    language?: string;
  };

  export type Messages = Message[];

  export type GetMessageReq = {
    conversationId: number;
  };

  export enum SenderType {
    USER = "user",
    CHATBOT = "chatbot",
  }
}
