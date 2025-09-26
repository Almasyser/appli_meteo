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
    <MapContainer center={[lat, long]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, long]}>
        <Popup>Position : {lat}, {long}</Popup>
      </Marker>
      <RecenterMap lat={lat} long={long} />
    </MapContainer>
  );
}
export default MapComponent;
/* 
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

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

function MapComponent({ lat, long }) {
  return (
    <MapContainer center={[lat, long]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, long]}>
        <Popup>Position : {lat}, {long}</Popup>
      </Marker>
      <RecenterMap lat={lat} long={long} />
    </MapContainer>
  );
}

export default MapComponent;
*/