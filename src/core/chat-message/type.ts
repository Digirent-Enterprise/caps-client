export interface IChatMessageProps {
  conservationId: number;
  content: string;
  senderType: SenderType;
  language?: string;
  metadata?: IMetadata[];
}

export interface IMetadata {
  source_type: string;
  source: string;
  page: number;
  author: string;
  publisher: string;
}

export type SenderType = "chatbot" | "user";
