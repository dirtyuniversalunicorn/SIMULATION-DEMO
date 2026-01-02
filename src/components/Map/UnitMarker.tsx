import { Marker } from "react-leaflet";
import { icons } from "../../consts/icons";
import type React from "react";
import { useDockContext } from "../../provider/DockProvider";
import { useSocketContext } from "../../provider/SocketProvider";
import type { Unit } from "../../types/Unit";

type UnitMarkerProps = {
  children: React.ReactNode;
  unit: Unit;
};

export const UnitMarker = ({ children, unit }: UnitMarkerProps) => {
  const { visibility, handleVisibility, measureMode, addMeasurePoint } =
    useDockContext();
  const { setSelectedUnit } = useSocketContext();

  return (
    <Marker
      key={unit.id}
      position={[unit.positionLat, unit.positionLng]}
      icon={icons[unit.team as keyof typeof icons]}
      eventHandlers={{
        click: () => {
          if (measureMode) {
            addMeasurePoint(unit.positionLat, unit.positionLng);
            return;
          }
          if (!visibility) {
            handleVisibility();
          }
          setSelectedUnit(unit.id);
        },
      }}
    >
      {children}
    </Marker>
  );
};
