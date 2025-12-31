export type Team = "BLUE" | "RED" | "GREEN";

export type Unit = {
  id: string;
  time: string;
  type: string;
  callsign: string;
  position: [number, number];
  task: string;
  team: Team;
  speed: number;
  destination: [number, number];
};
