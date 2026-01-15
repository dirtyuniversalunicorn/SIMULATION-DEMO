import { MapContainer, TileLayer } from "react-leaflet";
import type { MapWrapperProps } from "../../types/MapWrapperProps";

export const MapWrapper = ({ children }: MapWrapperProps) => {
  return (
    <MapContainer
      center={[49.5939, 17.2508]}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};
