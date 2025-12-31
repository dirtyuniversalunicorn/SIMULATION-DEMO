import { Popup } from "react-leaflet";
import { useUnitSocketContext } from "../../provider/UnitSocketProvider";
import { MapWrapper } from "./MapWrapper";
import { UnitMarker } from "./UnitMarker";
import { UnitPath } from "./UnitPath";

export const Map = () => {
    const { units, selectedUnit } = useUnitSocketContext();

    const selectedUnitData = units.find((u) => u.id === selectedUnit);
    return (
        <MapWrapper>
            {units.map((unit) => (
                <UnitMarker unit={unit} key={unit.id}>
                    {selectedUnitData?.destination && (
                        <UnitPath
                            position={selectedUnitData.position}
                            destination={selectedUnitData.destination}
                        />
                    )}
                    <Popup>Unit: {unit.callsign}</Popup>
                </UnitMarker>
            ))}
        </MapWrapper>
    );
};
