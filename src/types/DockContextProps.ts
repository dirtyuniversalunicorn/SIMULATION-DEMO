import type { DockPosition } from "./DockPosition";

export type DockContextProps = {
  handleVisibility: () => void;
  visibility: boolean;
  position: DockPosition;
  handlePosition: (position: DockPosition) => void;
  measureMode: boolean;
  toggleMeasureMode: () => void;
  measurePoints: [number, number][];
  addMeasurePoint: (lat: number, lng: number) => void;
};
