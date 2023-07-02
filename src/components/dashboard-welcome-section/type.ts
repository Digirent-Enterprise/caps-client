import { ChatBotResult } from "@/hooks/chat-bot/useChatbot";
import { IUser } from "@/types/context/with-auth-context";

export type WelcomePage = "diagnosis" | "chat" | "health" | "profile" | "home";

export interface IDashboardWelcomeSection {
  user: IUser | null;
  page?: WelcomePage;
  useChatBot?: ChatBotResult;
}
