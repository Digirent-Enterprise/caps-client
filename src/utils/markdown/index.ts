import { MessageNS } from "@/services/message/type";

export const exportConversationToMarkdown = (messages: MessageNS.Messages) => {
  let markdownContent = "";

  for (const message of messages) {
    markdownContent += `**${message.sender}:** ${message.content}\n\n`;
  }

  const fileName = "conversation.md";
  const element = document.createElement("a");
  const markdownBlob = new Blob([markdownContent], { type: "text/markdown" });

  element.href = URL.createObjectURL(markdownBlob);
  element.download = fileName;
  element.click();
};
