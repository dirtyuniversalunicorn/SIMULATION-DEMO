import type { Unit } from "./Unit";

export type MapMarkerProps = {
  unit: Unit;
  isSelected: boolean;
  onSelect: (id: string) => void;
};
