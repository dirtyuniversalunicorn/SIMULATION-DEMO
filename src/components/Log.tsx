import { Box, Text } from "@chakra-ui/react";

export const Log = () => {
    return (
        <Box as="div" padding="10px">
            <Text as="h3">Log Component</Text>
            <Text>00:00:00 | Start of simulation</Text>
            <Text>00:00:01 | Unit A1 moved to position (10, 20)</Text>
            <Text>00:00:10 | Unit A1 moved to position (15, 25)</Text>
            <Text>00:00:20 | Unit A1 was destroyed</Text>
        </Box>
    );
};
