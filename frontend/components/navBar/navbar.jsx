import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import SelectCity from "../selectCity/SelectCity";
import FiveDays from "../fiveDays/FiveDays";
import MapComponent from "../map/MapComponent";
import "./navbar.css";

function NavBar() {
  const { myArray } = useArray();
  const {latitude, longitude} = useLocations();
  const [showSelect, setShowSelect] = useState(false);
  const [showFive, setShowFive] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const handleSelect=()=>{
    setShowSelect(!showSelect);
    setShowFive(!showFive);
    setShowMap(false);
  }
  const handleMap=()=>{
    setShowSelect(false);
    setShowFive(!showFive);
    setShowMap(!showMap);
  }
  return(
    <>
    <section className="navbar">
      <button onClick={handleSelect}>Changer</button>
      <button onClick={handleMap}>Carte</button>
    </section>
    {<SelectCity setShowSelect={setShowSelect} showSelect={showSelect} setShowFive={setShowFive}/>}
    {myArray && <FiveDays showFive={showFive}/>}
    {<MapComponent lat={latitude} long={longitude} setShowMap={setShowMap} showMap={showMap} setShowFive={setShowFive}/>}
    </>
  )
}
export default NavBar;