import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Unit } from "../types/Unit";
import { socket } from "../lib/socket";
import type { SimulationLog, SocketContextValue } from "../types/SocketContext";

const SocketContext = createContext<SocketContextValue | null>(null);

export function SocketProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<Unit[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [timer, setTimer] = useState(0);
  const [logs, setLogs] = useState<SimulationLog[]>([]);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    socket.on("units:init", (data: Unit[]) => {
      setUnits(data);
    });

    socket.on("units:update", (data: Unit[]) => {
      setUnits(data);
    });

    socket.on("simulation:update", ({ timer }: { timer: number }) => {
      setTimer(timer);
    });

    socket.on("simulation:status", (log: SimulationLog) => {
      if (log.type === "reset") {
        setLogs([]);
      }
      setLogs((prev) => [...prev, log]);
    });

    socket.on(
      "unit:move",
      ({
        id,
        positionLat,
        positionLng,
      }: {
        id: string;
        positionLat: number;
        positionLng: number;
      }) => {
        setUnits((prev) =>
          prev.map((u) =>
            u.id === id ? { ...u, positionLat, positionLng } : u,
          ),
        );
      },
    );

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("units:init");
      socket.off("units:update");
      socket.off("unit:move");
      socket.off("simulation:status");
    };
  }, []);

  const play = () => socket.emit("simulation:play");
  const stop = () => socket.emit("simulation:stop");
  const reset = () => socket.emit("simulation:reset");
  const reloadUnits = () => socket.emit("units:reload");

  return (
    <SocketContext.Provider
      value={{
        units,
        isConnected,
        selectedUnit,
        setSelectedUnit,
        play,
        stop,
        reset,
        timer,
        logs,
        reloadUnits,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  const socketContext = useContext(SocketContext);

  if (!socketContext) {
    throw new Error(
      "useSocketContext must be used within the SocketContext provider",
    );
  }

  return socketContext;
}
