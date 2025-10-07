import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./mapcomponent.css";

function MapComponent({ lat, long, setShowMap }) {
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
    <section className='location'>
      <button type="button" onClick={()=>{setShowMap(false)}}>X</button>
      <MapContainer center={[lat, long]} zoom={8} style={{ height: '216px', width: '216px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        <Marker position={[lat, long]}>
          <Popup>Position : {lat}, {long}</Popup>
        </Marker>
        <RecenterMap lat={lat} long={long} />
      </MapContainer>
    </section>
  );
}
export default MapComponent;
