import { Box, Button } from "@chakra-ui/react";
import { Menu } from "./Menu";
import { fileMenuItems } from "../consts/fileMenuItems";
import { editMenuItems } from "../consts/editMenuItems";
import { viewMenuItems } from "../consts/viewMenuItems";
import { useDockContext } from "../provider/DockProvider";

export const Header = () => {
    const { handleVisibility, handlePosition } = useDockContext();

    return (
        <Box as="header" height="5vh">
            <Menu category="File" items={fileMenuItems} />
            <Menu category="Edit" items={editMenuItems} />
            <Menu category="View" items={viewMenuItems} />
            <Button onClick={handleVisibility} ml="10px">
                Toogle
            </Button>
            <Button ml="10px" onClick={() => handlePosition("left")}>
                Left
            </Button>
            <Button ml="10px" onClick={() => handlePosition("right")}>
                Right
            </Button>
            <Button ml="10px" onClick={() => handlePosition("top")}>
                Top
            </Button>
            <Button ml="10px" onClick={() => handlePosition("bottom")}>
                Bottom
            </Button>
        </Box>
    );
};
