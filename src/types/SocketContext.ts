import type { Dispatch, SetStateAction } from "react";
import type { Unit } from "./Unit";

export type SimulationLog = {
  type: "play" | "stop" | "reset";
  message: string;
  timestamp: string;
};

export type SocketContextValue = {
  units: Unit[];
  isConnected: boolean;
  selectedUnit: string;
  setSelectedUnit: Dispatch<SetStateAction<string>>;
  play: () => void;
  stop: () => void;
  reset: () => void;
  timer: number;
  logs: SimulationLog[];
  reloadUnits: () => void;
};
