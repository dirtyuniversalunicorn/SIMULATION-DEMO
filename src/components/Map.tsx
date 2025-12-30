import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import fakeData from "../consts/fakeData.json";
import { icons } from "../consts/icons";

export const Map = () => {
    return (
        <MapContainer
            center={[50, 50]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "95vh", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {fakeData.map((data) => (
                <Marker
                    key={data.id}
                    position={data.position as [number, number]}
                    icon={icons[data.team as keyof typeof icons]}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};
