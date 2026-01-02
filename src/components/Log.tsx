import { Box, Text } from "@chakra-ui/react";
import { Timer } from "./Timer";
import { useSocketContext } from "../provider/SocketProvider";

export const Log = () => {
  const { logs } = useSocketContext();
  return (
    <Box as="div" padding="10px" overflow="auto">
      <Timer />
      {[...logs].reverse().map((log, index) => (
        <Box key={`${log.type}-${index}`} _first={{ fontWeight: "bold" }}>
          {/* <Text>Type: {log.type}</Text> */}
          <Text>
            {log.timestamp} | {log.message}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
