import { IMetadata, SenderType } from "@/core/chat-message/type";

export namespace MessageNS {
  export type Message = {
    id: number;
    content: string;
    sender: SenderType;
    language?: string;
    metadata: IMetadata[];
  };

  export type Messages = Message[];

  export type GetMessageReq = {
    conversationId: number;
  };
}
