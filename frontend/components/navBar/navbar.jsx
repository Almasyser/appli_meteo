import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import SelectCity from "../selectCity/SelectCity";
import FiveDays from "../fiveDays/FiveDays";
import MapComponent from "../map/MapComponent";
import DetailsDay from "../detailsDay/DetailsDay";
import "./navbar.css";

function NavBar() {
  const { myArray } = useArray();
  const {latitude, longitude} = useLocations();
  const [showSelect, setShowSelect] = useState(false);
  const [showFive, setShowFive] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showDetailsDay, setShowDetailsDay] = useState(false);

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
      <button onClick={()=> setShowCamenbert(!showCamenbert)}>fontes</button>
      {/* <button onClick={()=> setShowDetailsDay(!showDetailsDay)}>Données</button> */}
    </section>
    {<SelectCity setShowSelect={setShowSelect} showSelect={showSelect} setShowFive={setShowFive}/>}
    {myArray && <FiveDays setShowFive={setShowFive} showFive={showFive}/>}
    {<MapComponent lat={latitude} long={longitude} setShowMap={setShowMap} showMap={showMap}/>}

    </>
  )
}
export default NavBar;