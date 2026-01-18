import { Marker, Polyline, Popup, Tooltip, useMapEvent } from "react-leaflet";
import { MapWrapper } from "./MapWrapper";
import { UnitMarker } from "./UnitMarker";
import { UnitPath } from "./UnitPath";
import L from "leaflet";
import { useSocketContext } from "../../hooks/useSocketContext";
import { useDockContext } from "../../hooks/useDockContext";

export const Map = () => {
  const { units, selectedUnit } = useSocketContext();
  const { measureMode, measurePoints, addMeasurePoint } = useDockContext();

  const MapClickHandler = () => {
    useMapEvent("click", (e) => {
      if (!measureMode) return;
      const { lat, lng } = e.latlng;
      addMeasurePoint(lat, lng);
    });
    return null;
  };

  let distance = 0;
  if (measurePoints.length === 2) {
    distance = L.latLng(measurePoints[0]).distanceTo(
      L.latLng(measurePoints[1]),
    );
  }

  const selectedUnitData = units.find((u) => u.id === selectedUnit);

  return (
    <MapWrapper>
      <MapClickHandler />
      {measurePoints.map((pos, idx) => (
        <Marker position={pos} key={idx} />
      ))}

      {measurePoints.length === 2 && (
        <Polyline positions={measurePoints} color="purple">
          <Tooltip sticky>Distance: {(distance / 1000).toFixed(2)} km</Tooltip>
        </Polyline>
      )}
      {units.map((unit) => (
        <UnitMarker unit={unit} key={unit.id}>
          {selectedUnitData?.destLat && (
            <UnitPath
              positionLat={unit.positionLat}
              positionLng={unit.positionLng}
              destLat={unit.destLat}
              destLng={unit.destLng}
            />
          )}
          <Popup>Unit: {unit.callsign}</Popup>
        </UnitMarker>
      ))}
    </MapWrapper>
  );
};
