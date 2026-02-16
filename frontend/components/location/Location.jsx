import { useEffect } from "react";
import useLocations from "../../hooks/useLocations";
import utf8 from "utf8";
import "./location.css";
function ModalLocation (){
  useEffect(()=>{
    if(typeof window != "undefined"){
      const value = localStorage.getItem("city_code")
    }
  },[])
  const { city_code, department_code, department_name, region_name, latitude, longitude } = useLocations();
  const decoded_name = utf8.decode(department_name)
  return(
    <>
      <div className="location-container">
        <span className="location-text">
          <p className="location-town">{city_code.charAt(0).toUpperCase() + city_code.slice(1).toLowerCase()}</p>
          <p className="location-department">{department_code}&nbsp;{decoded_name}</p>
          <p className="location-region">{region_name}</p>
        </span>
      </div>
    </>
  )
}

export default ModalLocation;