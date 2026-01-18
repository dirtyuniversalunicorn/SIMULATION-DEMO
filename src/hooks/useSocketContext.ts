import { useContext } from "react";
import { SocketContext } from "../provider/SocketProvider";

export function useSocketContext() {
  const socketContext = useContext(SocketContext);

  if (!socketContext) {
    throw new Error(
      "useSocketContext must be used within the SocketContext provider",
    );
  }

  return socketContext;
}
