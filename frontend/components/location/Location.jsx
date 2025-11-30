import { useEffect, useState } from "react";
import useLocations from "../../hooks/useLocations";
import Logos from "../../assets/Logos";
import "./location.css";
function ModalLocation (){
  const [ logosKeys, setLogosKeys] = useState([]);
  const { city_code, department_code, department_name, region_name, latitude, longitude } = useLocations();
  useEffect(()=>{
    const cles = Object.keys(Logos);
    setLogosKeys(cles);
  },[]);
  // if(typeof window != "undefined"){
  //   city_code= localStorage.getItem("city_code");
  //   department_code= localStorage.getItem("department_code");
  //   department_name= localStorage.getItem("department_name");
  //   region_name= localStorage.getItem("region_name");
    
  // } 
  const logo = Logos[logosKeys.filter(el=> el === region_name)];
  

  return(
    <>
      <div className="location-container">
        <span className="location-text">
          <p className="location-town">{city_code.charAt(0).toUpperCase() + city_code.slice(1).toLowerCase()}</p>
          <p className="location-department">{department_code}&nbsp;{department_name}</p>
          <p className="location-region">{region_name}</p>
        </span>
  
        <img className="location-logo" src={logo} alt={region_name}/>
      </div>
    </>
  )
}

export default ModalLocation;
