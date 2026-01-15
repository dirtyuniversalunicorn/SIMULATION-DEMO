import { useSocketStatus } from "../hooks/useSocketStatus";
import { Box, Status } from "@chakra-ui/react";

export const SocketStatus = () => {
  const status = useSocketStatus();
  return (
    <Box position="relative" borderRadius="md" marginLeft="auto">
      <Box bg="" px="4" py="2" borderRadius="md" color="fg">
        {status === "connected" && (
          <Status.Root colorPalette="green" size="lg">
            <Status.Indicator />
            Connected
          </Status.Root>
        )}

        {status === "connecting" && (
          <Status.Root colorPalette="yellow" size="lg">
            <Status.Indicator />
            Connecting to server...
          </Status.Root>
        )}

        {status === "disconnected" && (
          <Status.Root colorPalette="orange" size="lg">
            <Status.Indicator />
            Connection lost. Reconnecting…
          </Status.Root>
        )}

        {status === "error" && (
          <Status.Root colorPalette="red" size="lg">
            <Status.Indicator />
            Unable to connect to simulation server
          </Status.Root>
        )}
      </Box>
    </Box>
  );
};
