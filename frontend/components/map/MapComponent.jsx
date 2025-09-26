import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent({ lat, long }) {
  function RecenterMap({ lat, long }) {
    const map = useMap();
    useEffect(() => {
      if (lat && long) {
        map.setView([lat, long], map.getZoom(), {
          animate: true,
        });
      }
    }, [lat, long, map]);
    return null;
  }
  return (
    <MapContainer center={[lat, long]} zoom={10} style={{ height: '216px', width: '216px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, long]}>
        <Popup>Position : {lat}, {long}</Popup>
      </Marker>
      <RecenterMap lat={lat} long={long} />
    </MapContainer>
  );
}
export default MapComponent;
