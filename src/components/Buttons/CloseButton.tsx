import { Button } from "@chakra-ui/react";
import { useDockContext } from "../../provider/DockProvider";

export const CloseButton = () => {
  const { handleVisibility } = useDockContext();
  return (
    <Button
      position="absolute"
      right={0}
      top={0}
      onClick={() => handleVisibility()}
      m="10px"
    >
      X
    </Button>
  );
};
