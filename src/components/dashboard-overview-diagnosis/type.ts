import { ChatBotResult } from "@/hooks/chat-bot/useChatbot";
import { IBaseProps } from "@/types";

export interface IDiagnosisCardProps extends IBaseProps {
  item: DiagnosisNS.Diagnosis;
}
