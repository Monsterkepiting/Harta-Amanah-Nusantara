import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapLibreMap() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',
      center: [106.8272, -6.1751],
      zoom: 12
    });
    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
}

