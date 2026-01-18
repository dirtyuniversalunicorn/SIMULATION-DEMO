import { Button } from "@chakra-ui/react";
import { RiResetLeftLine } from "react-icons/ri";
import type { Dispatch, SetStateAction } from "react";
import { useSocketContext } from "../../hooks/useSocketContext";
import { useDockContext } from "../../hooks/useDockContext";

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
        setButtonAction(false);
        if (!visibility) {
          handleVisibility();
        }
      }}
    >
      <RiResetLeftLine />
    </Button>
  );
};
