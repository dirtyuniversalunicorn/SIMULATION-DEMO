import { Marker, Popup, Polyline } from "react-leaflet";
import { icons } from "../../consts/icons";
import { useDockContext } from "../../provider/DockProvider";
import type { Unit } from "../../types/Unit";

type MapMarkerProps = {
  unit: Unit;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export const MapMarker = ({ unit, isSelected, onSelect }: MapMarkerProps) => {
  const { visibility, handleVisibility } = useDockContext();

  const handleClick = () => {
    if (!visibility) {
      handleVisibility();
    }
    onSelect(unit.id);
  };

  const position: [number, number] = [unit.positionLat, unit.positionLng];

  const destination: [number, number] = [unit.destLat, unit.destLng];

  return (
    <Marker
      position={position}
      icon={icons[unit.team]}
      eventHandlers={{ click: handleClick }}
    >
      {isSelected && (
        <Polyline positions={[position, destination]} color="red" />
      )}

      <Popup>{unit.callsign}</Popup>
    </Marker>
  );
};
