import { useEffect, useState } from "react";
import useLocations from "../../hooks/useLocations";
import Logos from "../../assets/Logos";
import "./location.css";
function ModalLocation (){
  useEffect(()=>{
    if(typeof window != "undefined"){
      const value= localStorage.getItem("city_code")
      console.log("city_code",value);
    }
  },[])
    
  const { city_code, department_code, department_name, region_name, latitude, longitude } = useLocations();
  return(
    <>
      <div className="location-container">
        <span className="location-text">
          <p className="location-town">{city_code.charAt(0).toUpperCase() + city_code.slice(1).toLowerCase()}</p>
          <p className="location-department">{department_code}&nbsp;{department_name}</p>
          <p className="location-region">{region_name}</p>
        </span>
        {/* <img src={Logos.region_name} alt={region_name.toLowerCase()}/> */}
      </div>
    </>
  )
}

export default ModalLocation;
