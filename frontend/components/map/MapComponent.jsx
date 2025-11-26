import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import useLocations from '../../hooks/useLocations';
import 'leaflet/dist/leaflet.css';
import "./mapcomponent.css";

function MapComponent({ lat, long, setShowMap, showMap, setShowFive}) {
  const { city_code, department_code, department_name, region_name, latitude, longitude } = useLocations();
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
  const handleClick=()=>{
    setShowMap(false);
    setShowFive(true);
  }
  return (
    <section className={showMap? 'location active':'location'}>
      <button type="button" onClick={handleClick}>X</button>
      <MapContainer center={[lat, long]} zoom={8} style={{ height: '380px', width: '380px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        <Marker position={[lat, long]}>
          <Popup>
            <p className="carte-town">{city_code.charAt(0).toUpperCase() + city_code.slice(1).toLowerCase()}</p>
            <p className="carte-department">{department_code}&nbsp;{department_name}</p>
            <p className="carte-region">{region_name}</p>
          </Popup>
         
        </Marker>
        <RecenterMap lat={lat} long={long} />
      </MapContainer>
    </section>
  );
}
export default MapComponent;
