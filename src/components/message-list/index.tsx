import React, { forwardRef, KeyboardEvent, useEffect, useRef } from "react";

import { useImmer } from "use-immer";

import { IMessageListProps } from "@/components/message-list/type";
import ChatMessage from "@/core/chat-message";
import MessageInput from "@/core/message-input";
import useMessage from "@/hooks/message/useMessage";
import useDevice from "@/hooks/useDevice";
import { MessageNS } from "@/services/message/type";
import { closeSocket, getSocket, initSocket } from "@/socket";

const MessageList = forwardRef<HTMLDivElement, IMessageListProps>(
  (props, ref) => {
    const { getAllMessages, messages, setMessages } = useMessage();
    const { isMobile } = useDevice();

    const [message, setMessage] = useImmer<string>("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (props.selectedConversation && props.selectedConversation.id)
        getAllMessages({ conversationId: props.selectedConversation.id });
    }, [props.selectedConversation]);

    useEffect(() => {
      const conversationId = props.selectedConversation.createdAt;
      if (conversationId) {
        initSocket(conversationId);

        const socket = getSocket();

        if (socket) {
          socket.on("message", (message: MessageNS.Message) => {
            setMessages(message);
          });
        }
      }

      return () => {
        closeSocket();
      };
    }, [props.selectedConversation]);

    const _scrollToBottom = () => {
      if (messagesEndRef && messagesEndRef.current) {
        const dom = messagesEndRef.current as HTMLDivElement;
        dom.scrollIntoView({ behavior: "smooth" });
      }
    };

    useEffect(() => {
      _scrollToBottom();
    }, [messages[messages.length - 1]]);

    const _handleSend = () => {
      const socket = getSocket();
      if (
        socket &&
        props.selectedConversation &&
        props.selectedConversation.id
      ) {
        socket.emit("message", {
          conversationId: props.selectedConversation.id,
          content: message,
          sender: MessageNS.SenderType.USER,
        });
        _clearMessage();
      }
    };

    const _handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        _handleSend();
      }
    };

    const _clearMessage = () => {
      setMessage("");
    };

    const _onValueChange = (message: string) => {
      setMessage(message);
    };

    return (
      <>
        <div
          ref={ref}
          className={`flex ${
            isMobile ? "h-full" : "flex-auto"
          } hide-scrollbar flex-col overflow-y-scroll border-l border-gray-400 dark:border-dark-gray`}
        >
          <div data-tour={props.dataTourOne} className="relative flex-1 p-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                conservationId={message.id}
                content={message.content}
                senderType={message.sender}
                language={message.language}
                metadata={message.metadata}
              />
            ))}

            {/*<ChatMessage*/}
            {/*  key={"1"}*/}
            {/*  conservationId={1}*/}
            {/*  content={"chào mọi người, tôi tên làchào mọi người, tôi tên là "}*/}
            {/*  senderType={"user"}*/}
            {/*  language={"en"}*/}
            {/*  metadata={[*/}
            {/*    {*/}
            {/*      source_type: "text book",*/}
            {/*      source: "BỆNH TRUYỀN NHIỄM VÀ NHIỆT ĐỚI",*/}
            {/*      page: 519,*/}
            {/*      publisher: "Nhà Xuất Bản Khoa học kỹ thuật",*/}
            {/*      author: "GS. TSKH. LÊ ĐĂNG HÀ",*/}
            {/*    },*/}
            {/*    {*/}
            {/*      source_type: "text book",*/}
            {/*      source: "BỆNH TRUYỀN NHIỄM VÀ NHIỆT ĐỚI",*/}
            {/*      page: 519,*/}
            {/*      publisher: "Nhà Xuất Bản Khoa học kỹ thuật",*/}
            {/*      author: "GS. TSKH. LÊ ĐĂNG HÀ",*/}
            {/*    },*/}
            {/*    {*/}
            {/*      source_type: "text book",*/}
            {/*      source: "BỆNH TRUYỀN NHIỄM VÀ NHIỆT ĐỚI",*/}
            {/*      page: 519,*/}
            {/*      publisher: "Nhà Xuất Bản Khoa học kỹ thuật",*/}
            {/*      author: "GS. TSKH. LÊ ĐĂNG HÀ",*/}
            {/*    },*/}
            {/*  ]}*/}
            {/*/>*/}
            <div ref={messagesEndRef}></div>

            {messages &&
            messages.length &&
            messages[messages.length - 1].sender ===
              MessageNS.SenderType.USER ? (
              <div className="absolute bottom-0.5 ml-1 flex flex-row items-center justify-center gap-2">
                <img
                  className="h-12 w-12 rounded-full bg-light-button-blue p-2 dark:bg-dark-green"
                  src={"/static/chat_logo.svg"}
                />
                <div className="flex flex-row">
                  <div className="animate-bounce text-6xl text-gray-500 delay-75">
                    .
                  </div>
                  <div className="animate-bounce text-6xl text-gray-500 delay-100">
                    .
                  </div>
                  <div className="animate-bounce text-6xl text-gray-500">.</div>
                  {/*<div className="text-gray-500 animate-bounce  text-4xl delay-150">.</div>*/}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <MessageInput
          dataTourTwo={props.dataTourTwo}
          message={message}
          handleKeyDown={_handleKeyDown}
          onValueChange={_onValueChange}
          handleSend={_handleSend}
        />
      </>
    );
  }
);

MessageList.displayName = "MessageList";

export default MessageList;
