export type Team = "BLUE" | "RED" | "GREEN";

export type Unit = {
  id: string;
  time: string;
  type: string;
  callsign: string;
  positionLat: number;
  positionLng: number;
  task: string;
  team: Team;
  speed: number;
  destLat: number;
  destLng: number;
};
