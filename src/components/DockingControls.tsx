import { Box, Button } from "@chakra-ui/react";
import { useDockContext } from "../provider/DockProvider";
import {
  LuAlignEndHorizontal,
  LuAlignEndVertical,
  LuAlignStartHorizontal,
  LuAlignStartVertical,
} from "react-icons/lu";

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
