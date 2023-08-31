import React from "react";

export interface IMessageInputProps {
  dataTourTwo: string;
  message: string;
  onValueChange: (message: string) => void;
  handleSend: (content: any) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
