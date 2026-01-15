import { Box, Text } from "@chakra-ui/react";
import { useSocketContext } from "../provider/SocketProvider";

export const UnitDetails = () => {
  const { units, selectedUnit } = useSocketContext();

  const unitToDisplay = units.find((unit) => unit.id === selectedUnit);

  if (!unitToDisplay)
    return <Text padding="10px">Select a unit to see details.</Text>;

  return (
    <Box as="div" padding="10px">
      <Text as="h3" fontSize="2xl" fontWeight="semibold" letterSpacing={1.61}>
        DETAILS
      </Text>
      <Text>Type: {unitToDisplay.type}</Text>
      <Text>Callsign: {unitToDisplay.callsign}</Text>
      <Text>
        Position (lat, lng): {unitToDisplay.positionLat},{" "}
        {unitToDisplay.positionLng}
      </Text>
      <Text>
        Destination (lat, lng): {unitToDisplay.destLat}, {unitToDisplay.destLng}
      </Text>
      <Text>Current task: {unitToDisplay.task}</Text>
      <Text>Current speed: {unitToDisplay.speed}</Text>
      <Text>Team: {unitToDisplay.team}</Text>
    </Box>
  );
};
