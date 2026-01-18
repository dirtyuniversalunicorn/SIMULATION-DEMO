import { Button } from "@chakra-ui/react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useDockContext } from "../../provider/DockProvider";
import { useSocketContext } from "../../provider/SocketProvider";
import type { Dispatch, SetStateAction } from "react";

type PlayButtonProps = {
  buttonActionState: boolean;
  setButtonAction: Dispatch<SetStateAction<boolean>>;
};

export const PlayButton = ({
  buttonActionState,
  setButtonAction,
}: PlayButtonProps) => {
  const { visibility, handleVisibility } = useDockContext();
  const { play, stop, reloadUnits } = useSocketContext();

  if (!buttonActionState) {
    return (
      <Button
        onClick={() => {
          reloadUnits();
          play();
          !visibility && handleVisibility();
          setButtonAction(true);
        }}
      >
        <FaPlayCircle />
      </Button>
    );
  } else
    return (
      <Button
        onClick={() => {
          stop();
          !visibility && handleVisibility();
          setButtonAction(false);
        }}
      >
        <FaPauseCircle />
      </Button>
    );
};
