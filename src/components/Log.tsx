import { Box, Text } from "@chakra-ui/react";
import { Timer } from "./Timer";
import { useSocketContext } from "../provider/SocketProvider";

export const Log = () => {
  const { logs } = useSocketContext();
  return (
    <Box as="div" padding="10px" overflow="auto">
      <Timer />
      {[...logs].reverse().map((log, index) => (
        <Box
          key={`${log.type}-${index}`}
          color="gray"
          _first={{ fontWeight: "bold", fontSize: "xl", color: "white" }}
        >
          <Text>
            {log.timestamp} | {log.message}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
