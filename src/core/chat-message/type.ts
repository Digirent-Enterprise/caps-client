export interface IChatMessageProps {
  conservationId: number;
  content: string;
  senderType: SenderType;
  language?: string;
  metadata?: any;
}

export type SenderType = "chatbot" | "user";
