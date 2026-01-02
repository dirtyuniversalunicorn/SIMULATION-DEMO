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
          {selectedUnitData?.destLat && (
            <UnitPath
              positionLat={unit.positionLat}
              positionLng={unit.positionLng}
              destLat={unit.destLat} // <- use DB field
              destLng={unit.destLng} // <- use DB field
            />
          )}
          <Popup>Unit: {unit.callsign}</Popup>
        </UnitMarker>
      ))}
    </MapWrapper>
  );
};
