import { Polyline } from "react-leaflet";

type UnitPathProps = {
    position: [number, number];
    destination: [number, number];
};

export const UnitPath = ({ position, destination }: UnitPathProps) => {
    return <Polyline positions={[position, destination]} color="red" />;
};
