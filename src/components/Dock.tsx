import { Dock } from "react-dock";
import { useDockContext } from "../provider/DockProvider";
import { UnitDetails } from "./UnitDetails";
import { Log } from "./Log";
import { DockGrid } from "./DockGrid";
import { DockingControls } from "./DockingControls";
import { CloseButton } from "./Buttons/CloseButton";

export const Docking = () => {
  const { visibility: dockVisibility, position: dockPosition } =
    useDockContext();
  return (
    <Dock
      position={dockPosition}
      isVisible={dockVisibility}
      dockStyle={{ backgroundColor: "black" }}
      dimMode="none"
    >
      <DockingControls />
      <DockGrid>
        <UnitDetails />
        <Log />
      </DockGrid>
      <CloseButton />
    </Dock>
  );
};
