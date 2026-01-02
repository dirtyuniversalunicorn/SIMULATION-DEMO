import { Polyline } from "react-leaflet";

type UnitPathProps = {
  positionLat: number;
  positionLng: number;
  destLat: number;
  destLng: number;
};

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
