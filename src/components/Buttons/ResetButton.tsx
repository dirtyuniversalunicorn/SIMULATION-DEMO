import { Button } from "@chakra-ui/react";
import { useSocketContext } from "../../provider/SocketProvider";
import { useDockContext } from "../../provider/DockProvider";
import { RiResetLeftLine } from "react-icons/ri";
import type { Dispatch, SetStateAction } from "react";

type ResetButtonProps = {
  setButtonAction: Dispatch<SetStateAction<boolean>>;
};

export const ResetButton = ({ setButtonAction }: ResetButtonProps) => {
  const { reset } = useSocketContext();
  const { visibility, handleVisibility } = useDockContext();

  return (
    <Button
      onClick={() => {
        reset();
        !visibility && handleVisibility();
        setButtonAction(false);
      }}
    >
      <RiResetLeftLine />
    </Button>
  );
};
