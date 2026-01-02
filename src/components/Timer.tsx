import { Text } from "@chakra-ui/react";
import { useSocketContext } from "../provider/SocketProvider";

export function Timer() {
  const { timer } = useSocketContext();

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <Text as="h2" fontSize="2xl">
      Timer: {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </Text>
  );
}
