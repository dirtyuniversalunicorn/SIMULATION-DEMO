import { Box, Text } from "@chakra-ui/react";
import { useUnitSocketContext } from "../provider/UnitSocketProvider";

export const UnitDetails = () => {
    const { units, selectedUnit } = useUnitSocketContext();

    const unitToDisplay = units.find((unit) => unit.id === selectedUnit);

    if (!unitToDisplay) return <Text>Select a unit to see details.</Text>;

    return (
        <Box as="div" padding="10px">
            <Text as="h3">Unit Details Component</Text>
            <Text>Type: {unitToDisplay.type}</Text>
            <Text>Callsign: {unitToDisplay.callsign}</Text>
            <Text>
                Position (lat, lng): {unitToDisplay.position[0]},{" "}
                {unitToDisplay.position[1]}
            </Text>
            <Text>Current task: {unitToDisplay.task}</Text>
            <Text>Current speed: {unitToDisplay.speed}</Text>
            <Text>Team: {unitToDisplay.team}</Text>
        </Box>
    );
};
