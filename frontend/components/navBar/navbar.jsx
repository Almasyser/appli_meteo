import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import { Navigate } from "react-router-dom";
import SelectCity from "../selectCity/SelectCity";
import MapComponent from "../map/MapComponent";
import "./navbar.css";
function NavBar() {
  const {latitude, longitude} = useLocations();
  const [showSelect, setShowSelect] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const handleSelect=()=>{
    setShowSelect(!showSelect);
    setShowMap(false);
    setShowStats(false);
  }
  const handleMap=()=>{
    setShowSelect(false);
    setShowMap(!showMap);
    setShowStats(false);
  }
  const handleStats=()=>{
    setShowSelect(false);
    setShowMap(false);
    setShowStats(!showStats);
  }
    return(
    <>
    <section className="navbar">
      <button onClick={handleSelect}>Changer</button>
      <button onClick={handleMap}>Carte</button>
      <button onClick={handleStats}>Stats</button>
    </section>
    {<SelectCity setShowSelect={setShowSelect} showSelect={showSelect}/>}
    {<MapComponent lat={latitude} long={longitude} setShowMap={setShowMap} showMap={showMap}/>}
    {showStats? <Navigate to='/stats' />:null}
    </>
  )
}
export default NavBar;