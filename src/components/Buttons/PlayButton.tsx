import { Button } from "@chakra-ui/react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import type { Dispatch, SetStateAction } from "react";
import { useSocketContext } from "../../hooks/useSocketContext";
import { useDockContext } from "../../hooks/useDockContext";

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
          setButtonAction(true);

          if (!visibility) {
            handleVisibility();
          }
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
          setButtonAction(false);

          if (!visibility) {
            handleVisibility();
          }
        }}
      >
        <FaPauseCircle />
      </Button>
    );
};
