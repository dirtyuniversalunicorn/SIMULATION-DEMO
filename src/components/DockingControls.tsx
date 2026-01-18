import { Box, Button } from "@chakra-ui/react";
import {
  LuAlignEndHorizontal,
  LuAlignEndVertical,
  LuAlignStartHorizontal,
  LuAlignStartVertical,
} from "react-icons/lu";
import { useDockContext } from "../hooks/useDockContext";

export const DockingControls = () => {
  const { handlePosition } = useDockContext();

  return (
    <Box as="div">
      <Button
        variant="outline"
        size="sm"
        mb="10px"
        onClick={() => handlePosition("left")}
      >
        <LuAlignStartVertical />
      </Button>
      <Button
        variant="outline"
        size="sm"
        mb="10px"
        onClick={() => handlePosition("right")}
      >
        <LuAlignEndVertical />
      </Button>
      <Button
        variant="outline"
        size="sm"
        mb="10px"
        onClick={() => handlePosition("top")}
      >
        <LuAlignStartHorizontal />
      </Button>
      <Button
        variant="outline"
        size="sm"
        mb="10px"
        onClick={() => handlePosition("bottom")}
      >
        <LuAlignEndHorizontal />
      </Button>
    </Box>
  );
};
