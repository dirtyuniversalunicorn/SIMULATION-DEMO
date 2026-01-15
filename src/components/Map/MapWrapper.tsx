import { MapContainer, TileLayer } from "react-leaflet";

type MapWrapper = {
  children: React.ReactNode;
};

export const MapWrapper = ({ children }: MapWrapper) => {
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
