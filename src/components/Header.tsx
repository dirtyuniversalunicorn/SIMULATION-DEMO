import { Box } from "@chakra-ui/react";
import { Menu } from "./Menu";
import { fileMenuItems } from "../consts/fileMenuItems";
import { editMenuItems } from "../consts/editMenuItems";
import { viewMenuItems } from "../consts/viewMenuItems";

export const Header = () => {
    return (
        <Box as="header" height="5vh">
            <Menu category="File" items={fileMenuItems} />
            <Menu category="Edit" items={editMenuItems} />
            <Menu category="View" items={viewMenuItems} />
        </Box>
    );
};
