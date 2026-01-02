import { Box, Button } from "@chakra-ui/react";
import { Menu } from "./Menu";
import { fileMenuItems } from "../consts/fileMenuItems";
import { editMenuItems } from "../consts/editMenuItems";
import { viewMenuItems } from "../consts/viewMenuItems";
import { useDockContext } from "../provider/DockProvider";
import { useSocketContext } from "../provider/SocketProvider";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";

export const Header = () => {
  const { visibility, handleVisibility } = useDockContext();
  const { play, stop, reset } = useSocketContext();

  return (
    <Box as="header" height="5vh">
      <Menu category="File" items={fileMenuItems} />
      <Menu category="Edit" items={editMenuItems} />
      <Menu category="View" items={viewMenuItems} />
      <Button onClick={handleVisibility} ml="10px">
        Toggle
      </Button>
      <Button
        ml="10px"
        onClick={() => {
          play();
          !visibility && handleVisibility();
        }}
      >
        <FaPlayCircle />
      </Button>
      <Button
        ml="10px"
        onClick={() => {
          stop();
          !visibility && handleVisibility();
        }}
      >
        <FaPauseCircle />
      </Button>
      <Button
        ml="10px"
        onClick={() => {
          reset();
          !visibility && handleVisibility();
        }}
      >
        <RiResetLeftLine />
      </Button>
    </Box>
  );
};
