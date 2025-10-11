import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import SelectCity from "../selectCity/SelectCity";
import FiveDays from "../fiveDays/FiveDays";
import MapComponent from "../map/MapComponent";
import "./navbar.css";
import { shallow } from "zustand/shallow";
function NavBar() {
  const { myArray } = useArray();
  const {latitude, longitude} = useLocations();
  const [showSelect, setShowSelect] = useState(false);
  const [showFive, setShowFive] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const handleSelect=()=>{
    setShowSelect(!showSelect);
    setShowFive(false);
    setShowMap(false);
  }
  const handleFive=()=>{
    setShowSelect(false);
    setShowFive(!showFive);
    setShowMap(false);
  }
  const handleMap=()=>{
    setShowSelect(false);
    setShowFive(false);
    setShowMap(!showMap);
  }
  return(
    <>
    <section className="navbar">
      <button onClick={handleSelect}>Changer</button>
      <button onClick={handleFive}>Details</button>
      <button onClick={handleMap}>Carte</button>
    </section>
    {<SelectCity setShowSelect={setShowSelect} showSelect={showSelect}/>}
    {myArray && <FiveDays myArray={myArray} setShowFive={setShowFive} showFive={showFive}/>}
    {<MapComponent lat={latitude} long={longitude} setShowMap={setShowMap} showMap={showMap}/>}
    </>
  )
}
export default NavBar;