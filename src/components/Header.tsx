import { Box, Button } from "@chakra-ui/react";
import { Menu } from "./Menu";
import { fileMenuItems } from "../consts/fileMenuItems";
import { editMenuItems } from "../consts/editMenuItems";
import { viewMenuItems } from "../consts/viewMenuItems";
import { useDockContext } from "../provider/DockProvider";
import { useUnitSocketContext } from "../provider/UnitSocketProvider";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
export const Header = () => {
    const { handleVisibility } = useDockContext();
    const { play, stop, reset } = useUnitSocketContext();

    return (
        <Box as="header" height="5vh">
            <Menu category="File" items={fileMenuItems} />
            <Menu category="Edit" items={editMenuItems} />
            <Menu category="View" items={viewMenuItems} />
            <Button onClick={handleVisibility} ml="10px">
                Toggle
            </Button>
            <Button ml="10px" onClick={play}>
                <FaPlayCircle />
            </Button>
            <Button ml="10px" onClick={stop}>
                <FaPauseCircle />
            </Button>
            <Button ml="10px" onClick={reset}>
                <RiResetLeftLine />
            </Button>
        </Box>
    );
};
