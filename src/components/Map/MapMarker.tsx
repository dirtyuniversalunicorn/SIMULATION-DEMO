import { Marker, Popup, Polyline } from "react-leaflet";
import { icons } from "../../consts/icons";
import { useDockContext } from "../../provider/DockProvider";
import type { Unit } from "../../types/Unit";

type UnitMarkerProps = {
    unit: Unit;
    isSelected: boolean;
    onSelect: (id: string) => void;
};

export const UnitMarker = ({ unit, isSelected, onSelect }: UnitMarkerProps) => {
    const { visibility, handleVisibility } = useDockContext();

    const handleClick = () => {
        if (!visibility) {
            handleVisibility();
        }
        onSelect(unit.id);
    };

    return (
        <Marker
            position={unit.position}
            icon={icons[unit.team as keyof typeof icons]}
            eventHandlers={{ click: handleClick }}
        >
            {isSelected && unit.destination && (
                <Polyline
                    positions={[unit.position, unit.destination]}
                    color="red"
                />
            )}

            <Popup>{unit.callsign}</Popup>
        </Marker>
    );
};
