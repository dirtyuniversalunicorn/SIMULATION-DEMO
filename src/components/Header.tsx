import { Flex, Button, HStack } from "@chakra-ui/react";
import { Menu } from "./Menu";
import { fileMenuItems } from "../consts/fileMenuItems";
import { editMenuItems } from "../consts/editMenuItems";
import { viewMenuItems } from "../consts/viewMenuItems";
import { useDockContext } from "../provider/DockProvider";
import { Timer } from "./Timer";
import { useState } from "react";
import { TbRulerMeasure } from "react-icons/tb";
import { SocketStatus } from "./SocketStatus";
import { PlayButton } from "./Buttons/PlayButton";
import { ResetButton } from "./Buttons/ResetButton";
import { useSocketStatus } from "../hooks/useSocketStatus";

export const Header = () => {
  const [action, setAction] = useState(false);
  const { handleVisibility, toggleMeasureMode, measureMode } = useDockContext();
  const status = useSocketStatus();

  return (
    <Flex as="header" height="5vh" alignItems="center">
      <HStack>
        <Menu category="File" items={fileMenuItems} />
        <Menu category="Edit" items={editMenuItems} />
        <Menu category="View" items={viewMenuItems} />
      </HStack>
      <Flex gap={2}>
        <Button onClick={handleVisibility} ml="10px">
          Info panel
        </Button>
        <PlayButton buttonActionState={action} setButtonAction={setAction} />
        <ResetButton setButtonAction={setAction} />
        <Button onClick={toggleMeasureMode}>
          {measureMode ? "Exit Measure Mode" : "Measure Distance"}{" "}
          <TbRulerMeasure />
        </Button>
        <Timer />
      </Flex>
      {status === "connected" && <SocketStatus />}
    </Flex>
  );
};
