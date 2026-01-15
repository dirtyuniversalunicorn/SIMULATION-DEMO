import { Flex, Button } from "@chakra-ui/react";
import { Menu } from "./Menu";
import { fileMenuItems } from "../consts/fileMenuItems";
import { editMenuItems } from "../consts/editMenuItems";
import { viewMenuItems } from "../consts/viewMenuItems";
import { useDockContext } from "../provider/DockProvider";
import { useSocketContext } from "../provider/SocketProvider";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { Timer } from "./Timer";
import { useState } from "react";
import { TbRulerMeasure } from "react-icons/tb";
import { SocketStatus } from "./SocketStatus";

export const Header = () => {
  const { visibility, handleVisibility } = useDockContext();
  const { play, stop, reset, reloadUnits } = useSocketContext();
  const [state, setState] = useState(false);
  const { toggleMeasureMode, measureMode } = useDockContext();

  return (
    <Flex as="header" height="5vh" alignItems="center">
      <Menu category="File" items={fileMenuItems} />
      <Menu category="Edit" items={editMenuItems} />
      <Menu category="View" items={viewMenuItems} />
      <Flex gap={2}>
        <Button onClick={handleVisibility} ml="10px">
          Info
        </Button>
        {!state ? (
          <Button
            onClick={() => {
              reloadUnits();
              play();
              !visibility && handleVisibility();
              setState(true);
            }}
          >
            <FaPlayCircle />
          </Button>
        ) : (
          <Button
            onClick={() => {
              stop();
              !visibility && handleVisibility();
              setState(false);
            }}
          >
            <FaPauseCircle />
          </Button>
        )}
        <Button
          onClick={() => {
            reset();
            !visibility && handleVisibility();
            setState(false);
          }}
        >
          <RiResetLeftLine />
        </Button>
        <Timer />
        <Button onClick={toggleMeasureMode}>
          {measureMode ? "Exit Measure Mode" : "Measure Distance"}{" "}
          <TbRulerMeasure />
        </Button>
      </Flex>
      <SocketStatus />
    </Flex>
  );
};
