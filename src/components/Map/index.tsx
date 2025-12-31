import { Popup } from "react-leaflet";
import { MapWrapper } from "./MapWrapper";
import { UnitMarker } from "./UnitMarker";
import { UnitPath } from "./UnitPath";
import { useSocketContext } from "../../provider/SocketProvider";

export const Map = () => {
    const { units, selectedUnit } = useSocketContext();

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
