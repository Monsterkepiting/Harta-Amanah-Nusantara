import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MarkerData {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description?: string;
}

const markers: MarkerData[] = [
  {
    id: "1",
    name: "Harta Amanah Nusantara #1",
    lat: -6.200000,
    lng: 106.816666,
    description: "Lokasi NFT pertama",
  },
  {
    id: "2",
    name: "Harta Amanah Nusantara #2",
    lat: -6.914744,
    lng: 107.609810,
    description: "Lokasi NFT kedua",
  },
];

export default function MapLibreMap() {
  useEffect(() => {
    if (document.getElementById("map")?.hasChildNodes()) return;

    const map = L.map("map", { center: [-6.200000, 106.816666], zoom: 5 });

    L.tileLayer(
      "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=YOUR_MAPTILER_KEY",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map);

    markers.forEach((marker) => {
      const m = L.marker([marker.lat, marker.lng]).addTo(map);
      m.bindPopup(`<b>${marker.name}</b><br>${marker.description}`);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px", borderRadius: "12px", marginTop: "16px" }} />;
}
