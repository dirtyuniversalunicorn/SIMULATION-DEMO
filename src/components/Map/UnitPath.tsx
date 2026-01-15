import { Polyline } from "react-leaflet";
import type { UnitPathProps } from "../../types/UnitPathProps";

export const UnitPath = ({
  positionLat,
  positionLng,
  destLat,
  destLng,
}: UnitPathProps) => {
  return (
    <Polyline
      positions={[
        [positionLat, positionLng],
        [destLat, destLng],
      ]}
      color="red"
    />
  );
};
