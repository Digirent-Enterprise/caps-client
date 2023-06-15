export interface IChatMessageProps {
  conservationId: number;
  content: string;
  senderType: SenderType;
  language?: string;
}

export type SenderType = "chatbot" | "user";
