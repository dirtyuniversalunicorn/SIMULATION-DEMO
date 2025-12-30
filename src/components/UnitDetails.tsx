import { Box, Text } from "@chakra-ui/react";

export const UnitDetails = () => {
    return (
        <Box as="div">
            <Text as="h3">Unit Details Component</Text>
            <Text>Type: </Text>
            <Text>Callsign: A1</Text>
            <Text>Position: </Text>
            <Text>Current task: MOVE</Text>
        </Box>
    );
};
