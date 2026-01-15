import { Spinner, VStack, Text, AbsoluteCenter, Box } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      bg="rgba(0, 0, 0, 0.72)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
    >
      <AbsoluteCenter>
        <VStack colorPalette="white">
          <Spinner color="white" size="lg" />
          <Text color="white" fontSize="2xl">
            Loading...
          </Text>
        </VStack>
      </AbsoluteCenter>
    </Box>
  );
};
