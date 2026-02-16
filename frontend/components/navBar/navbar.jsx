import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import SelectCity from "../selectCity/SelectCity";
import MapComponent from "../map/MapComponent";
import "./navbar.css";

function NavBar() {
  const { myArray } = useArray();
  const {latitude, longitude} = useLocations();
  const [showSelect, setShowSelect] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showDetailsDay, setShowDetailsDay] = useState(false);

  const handleSelect=()=>{
    setShowSelect(!showSelect);
    setShowMap(false);
  }
  const handleFive=()=>{
    setShowSelect(false);
    setShowMap(false);
  }
  const handleMap=()=>{
    setShowSelect(false);
    setShowMap(!showMap);
  }
  return(
    <>
    <section className="navbar">
      <button onClick={handleSelect}>Changer</button>
      <button onClick={handleMap}>Carte</button>
      <button onClick={()=> setShowDetailsDay(!showDetailsDay)}>Données</button>
    </section>
    {<SelectCity setShowSelect={setShowSelect} showSelect={showSelect}/>}
    {<MapComponent lat={latitude} long={longitude} setShowMap={setShowMap} showMap={showMap}/>}
    </>
  )
}
export default NavBar;