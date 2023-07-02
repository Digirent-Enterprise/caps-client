import { ChatBotResult } from "@/hooks/chat-bot/useChatbot";
import { IBaseProps } from "@/types";

export interface IDashboardCreateDiagnosisModal extends IBaseProps {
  open: boolean;
  img?: string;
  onClose: () => void;
  useChatBot?: ChatBotResult;
}
