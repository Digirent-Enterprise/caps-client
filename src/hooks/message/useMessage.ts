import { useContext, useState } from "react";

import { LoadingContext } from "@/contexts/loading-context";
import MessageService from "@/services/message";
import { MessageNS } from "@/services/message/type";
import { showToast } from "@/utils/toast";

type MessageResult = {
  getAllMessages: (x: MessageNS.GetMessageReq) => Promise<void>;
  messages: MessageNS.Messages;
  setMessages: (messages: MessageNS.Message) => void;
};

const useMessage = (): MessageResult => {
  const [messages, setMessages] = useState<MessageNS.Messages>([]);
  const { setLoading } = useContext(LoadingContext);

  const _handleSetMessage = (newMessage: MessageNS.Message) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  const getAllMessages = async (params: MessageNS.GetMessageReq) => {
    setLoading(true);
    const { conversationId } = params;
    try {
      const response: MessageNS.Messages = await MessageService.getAllMessages({
        conversationId,
      });
      setMessages(response);
    } catch (error) {
      showToast("error", "Could not fetch conversations");
    }
    setLoading(false);
  };

  return {
    getAllMessages,
    messages,
    setMessages: _handleSetMessage,
  } as MessageResult;
};

export default useMessage;
