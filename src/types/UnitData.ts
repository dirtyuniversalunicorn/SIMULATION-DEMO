export type UnitData = {
  id: string;
  type: string;
  callsign: string;
  position: [number, number]; // tuple
  task: string;
  team: number;
  speed: number;
};