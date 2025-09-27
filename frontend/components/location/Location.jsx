import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import SelectCity from "../selectCity/SelectCity";
import MapComponent from "../map/MapComponent";
import "./location.css";
function ModalLocation (){
  const [visible, setVisible] = useState(false);
  const [showCoords, setShowCoords] = useState(false);
  const { city_code, department_code, department_name, region_name, latitude, longitude } = useLocations();
  const handleClick = ()=>{
    setVisible(!visible);
  }
  return(
    <>
      <div className="location-container">
        <span className="location-text">
          <p className="location-town">{city_code.charAt(0).toUpperCase() + city_code.slice(1).toLowerCase()}</p>
          <p className="location-department">{department_code}&nbsp;{department_name}</p>
          <p className="location-region">{region_name}</p>
          <button onClick={()=>{setShowCoords(!showCoords)}} className="btn-coordonnees">Coordonnées GPS</button>
          {showCoords && 
            <span className="location-carte">
              <MapComponent lat={latitude} long={longitude}/>
            </span>
          }
        </span>
      </div>
      <button className="btn-change-pos" onClick={handleClick}>changer la position</button>
      {visible? <SelectCity setVisible={setVisible} visible={visible} />: null}
    </>
  )
}

export default ModalLocation;