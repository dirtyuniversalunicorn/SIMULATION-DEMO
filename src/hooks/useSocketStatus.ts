import { useEffect, useState } from "react";
import { socket } from "../socket";
import type { ConnectionStatus } from "../types/ConnectionStatus";

export function useSocketStatus() {
  const [status, setStatus] = useState<ConnectionStatus>("connecting");

  useEffect(() => {
    setStatus(socket.connected ? "connected" : "connecting");

    socket.on("connect", () => {
      setStatus("connected");
    });

    socket.on("disconnect", () => {
      setStatus("disconnected");
    });

    socket.on("connect_error", () => {
      setStatus("error");
    });

    socket.on("reconnect_attempt", () => {
      setStatus("connecting");
    });

    socket.on("reconnect_failed", () => {
      setStatus("error");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
      socket.off("reconnect_attempt");
      socket.off("reconnect_failed");
    };
  }, []);

  return status;
}
