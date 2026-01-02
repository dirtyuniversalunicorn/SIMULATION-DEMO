import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { Unit } from "../types/Unit";
import { socket } from "../socket";

type SocketContextValue = {
  units: Unit[];
  isConnected: boolean;
  selectedUnit: string;
  setSelectedUnit: Dispatch<SetStateAction<string>>;
  play: () => void;
  stop: () => void;
  reset: () => void;
};

const SocketContext = createContext<SocketContextValue | null>(null);

export function SocketProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<Unit[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");

  console.log("units", units);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    socket.on("units:init", (data: Unit[]) => {
      setUnits(data);
    });

    socket.on("units:update", (data: Unit[]) => {
      setUnits(data);
    });

    // Updated for new Unit type
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
            u.id === id ? { ...u, positionLat, positionLng } : u
          )
        );
      }
    );

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("units:init");
      socket.off("units:update");
      socket.off("unit:move");
    };
  }, []);

  const play = () => socket.emit("simulation:play");
  const stop = () => socket.emit("simulation:stop");
  const reset = () => socket.emit("simulation:reset");

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
      "useSocketContext must be used within the SocketContext provider"
    );
  }

  return socketContext;
}
