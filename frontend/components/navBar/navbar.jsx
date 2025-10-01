import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import SelectCity from "../selectCity/SelectCity";
import FiveDays from "../fiveDays/FiveDays";
import MapComponent from "../map/MapComponent";

function NavBar() {
  const {latitude, longitude} = useLocations();
  const [showSelect, setShowSelect] = useState(false);
  const [showFive, setShowFive] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const handleSelect=()=>{
    setShowSelect(true);
    setShowFive(false);
    setShowMap(false);
  }
  const handleFive=()=>{
    setShowSelect(false);
    setShowFive(true);
    setShowMap(false);
  }
  const handleMap=()=>{
    setShowSelect(false);
    setShowFive(false);
    setShowMap(true);
  }
  return(
    <>
    <section className="navbar">
      <button onClick={handleSelect}>Changer</button>
      <button onClick={handleFive}>Details</button>
      <button onClick={handleMap}>Carte</button>
    </section>
    {showSelect && <SelectCity />}
    {showFive && useArray &&<FiveDays />}
    {showMap && <MapComponent lat={latitude} long={longitude}/>}
    </>
  )
  
}
export default NavBar;