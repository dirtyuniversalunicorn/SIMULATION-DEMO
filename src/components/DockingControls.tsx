import { Box, Button } from "@chakra-ui/react";
import { useDockContext } from "../provider/DockProvider";

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
                Left
            </Button>
            <Button
                variant="outline"
                size="sm"
                mb="10px"
                onClick={() => handlePosition("right")}
            >
                Right
            </Button>
            <Button
                variant="outline"
                size="sm"
                mb="10px"
                onClick={() => handlePosition("top")}
            >
                Top
            </Button>
            <Button
                variant="outline"
                size="sm"
                mb="10px"
                onClick={() => handlePosition("bottom")}
            >
                Bottom
            </Button>
        </Box>
    );
};
