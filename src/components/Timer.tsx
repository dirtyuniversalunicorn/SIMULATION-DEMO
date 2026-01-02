import { useSocketContext } from "../provider/SocketProvider";

export function Timer() {
  const { timer } = useSocketContext();

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div>
      <h2>
        Simulation Timer: {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h2>
    </div>
  );
}
