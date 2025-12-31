import { MapContainer, TileLayer } from "react-leaflet";

type MapWrapper = {
    children: React.ReactNode;
};

export const MapWrapper = ({ children }: MapWrapper) => {
    return (
        <MapContainer
            center={[50, 50]}
            zoom={7}
            scrollWheelZoom={false}
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
