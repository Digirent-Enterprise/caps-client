import React, { useEffect, useMemo } from "react";

import { Inter } from "next/font/google";
import Image from "next/image";
import { io, Socket } from "socket.io-client";
import { useImmer } from "use-immer";

import Message from "@/components/message";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [socket, setSocket] = useImmer<Socket | null>(null);
  const [message, setMessage] = useImmer("");
  const [messages, setMessages] = useImmer<
    { sender: string; message: string }[]
  >([]);

  const lastMessage = useMemo(() => {
    return messages && messages.length ? messages[messages.length - 1] : "";
  }, [messages]);

  useEffect(() => {
    const socket = io("http://localhost:3003");
    setSocket(socket);
    socket.on("message", (msg: { sender: string; message: string }) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      const payload = { sender: "next", message }; // Change sender to the desired username
      socket.emit("message", payload);
      setMessage("");
    }
  };

  return (
    <>
      <div className="container mx-auto max-h-screen">
        <div className="min-w-full border rounded lg:grid lg:grid-cols-3 max-h-screen">
          <div className="border-r border-gray-300 lg:col-span-1">
            <ul className="overflow-auto">
              <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
              <li>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Dengue Portal
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        Just Now
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      {lastMessage && lastMessage.message}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:col-span-2 lg:block">
            <div className="w-full">
              <div className="relative flex items-center p-3 border-b border-gray-300">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg"
                  alt="username"
                />
                <span className="block ml-2 font-bold text-gray-600">
                  Dengue Portal
                </span>
                <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
              </div>
              <div className="relative w-full p-6 overflow-y-auto h-[30rem]">
                <ul className="space-y-2">
                  {messages &&
                    messages.map((item) => (
                      <Message sender={item.sender} message={item.message} />
                    ))}
                </ul>
              </div>
              {lastMessage && lastMessage.sender !== "next" && (
                <div className="p-1 pl-5 h-10"></div>
              )}
              {lastMessage && lastMessage.sender === "next" && (
                <div className="p-1 font-light pl-5 bg-gray-100 h-10">
                  GPT-based Dengue portal is typing...
                </div>
              )}
              <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <input
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message"
                  required
                />
                <button type="submit" onClick={sendMessage}>
                  <svg
                    className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
