import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL =
  process.env.SOCKET_SERVER_URL || "http://localhost:3003";

let socket: Socket | null;

export const initSocket = (roomName: string): void => {
  if (!socket) {
    socket = io(SOCKET_SERVER_URL, {
      transports: ["websocket"],
      upgrade: false,
      query: {
        roomName,
      },
    });
  }
};

export const getSocket = (): Socket | undefined => {
  if (!socket) {
    return;
  }
  return socket;
};

export const closeSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
