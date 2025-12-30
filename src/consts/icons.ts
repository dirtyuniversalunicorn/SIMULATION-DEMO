import L from "leaflet";

export const icons = {
    BLUE: L.icon({
      iconUrl: "/NATO_MARKER_BLUE.svg",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    }),
    RED: L.icon({
      iconUrl: "/NATO_MARKER_RED.svg",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    }),
    GREEN: L.icon({
      iconUrl: "/NATO_MARKER_GREEN.svg",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    }),
    OTHER: L.icon({
    iconUrl: "/OTHER_MARKER_DEFAULT.svg",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
};