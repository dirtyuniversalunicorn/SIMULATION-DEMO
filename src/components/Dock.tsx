import { Dock } from "react-dock";
import { useDockContext } from "../provider/DockProvider";
import { Button } from "@chakra-ui/react";

export const Docking = () => {
    const {
        visibility: dockVisibility,
        position: dockPosition,
        handleVisibility,
    } = useDockContext();
    return (
        <Dock
            position={dockPosition}
            isVisible={dockVisibility}
            dockStyle={{ backgroundColor: "black" }}
            dimMode="none"
        >
            Content of the dock
            <Button
                position="absolute"
                right={0}
                top={0}
                onClick={() => handleVisibility()}
            >
                X
            </Button>
        </Dock>
    );
};
