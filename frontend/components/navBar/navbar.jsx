import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import SelectCity from "../selectCity/SelectCity";
import FiveDays from "../fiveDays/FiveDays";
import MapComponent from "../map/MapComponent";
import Options from "../options/Options";
import "./navbar.css";

function NavBar() {
  const { myArray } = useArray();
  const {latitude, longitude} = useLocations();
  const [showSelect, setShowSelect] = useState(false);
  const [showFive, setShowFive] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const handleSelect=()=>{
    setShowSelect(!showSelect);
    setShowFive(!showFive);
    setShowMap(false);
  }
  const handleMap=()=>{
    setShowSelect(false);
    // setShowFive(!showFive);
    setShowMap(!showMap);
  }
  const handleOptions=()=>{
    setShowOptions(!showOptions);
    setShowFive(!showFive);
    setShowMap(false);
  }
  return(
    <>
    <section className="navbar">
      <button onClick={handleSelect}>Changer</button>
      <button onClick={handleMap}>Carte</button>
      <button onClick={handleOptions}>¤</button>
    </section>
    {<SelectCity setShowSelect={setShowSelect} showSelect={showSelect} setShowFive={setShowFive}/>}
    {myArray && <FiveDays showFive={showFive}/>}
    {<MapComponent lat={latitude} long={longitude} setShowMap={setShowMap} showMap={showMap} setShowFive={setShowFive}/>}
    {<Options showOptions={showOptions} />}
    </>
  )
}
export default NavBar;