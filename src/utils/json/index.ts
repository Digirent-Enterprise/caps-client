import { MessageNS } from "@/services/message/type";

export const exportConversationToJson = (
  messages: MessageNS.Messages
): void => {
  try {
    const json = JSON.stringify(messages);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "messages.json";
    link.click();
  } catch (error) {
    console.error("Error exporting messages:", error);
  }
};
