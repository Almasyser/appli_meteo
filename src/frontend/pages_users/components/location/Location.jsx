import { useState } from "react";
import useLocations from "../../hooks/useLocations";
import SelectCity from "../utils/selectCity/SelectCity";
import changeImg from "../../assets/Change_green-128.png";
import "./location.css";
function ModalLocation (){
  const [visible, setVisible] = useState(false);
  const {city_code, department_code, department_name, region_name } = useLocations();
  const handleClick = ()=>{
    setVisible(!visible);
  }
  return(
    <>
      <div className="location-container">
        <span className="location-text">
          <p className="location-town">{city_code.charAt(0).toUpperCase() + city_code.slice(1).toLowerCase()}</p>
          <p className="location-department">{department_code}&nbsp;{department_name}</p>
          <p className="location-region">{region_name}</p>
        </span>
        <span className="location-button">
          <button className="btn-box" onClick={handleClick}>
            <p className="btn-text">changer la position</p>
            <img className="btn-img" src={changeImg} />
          </button>
        </span>
      </div>
      {visible? <SelectCity setVisible={setVisible} visible={visible} />: null}
    </>
  )
}

export default ModalLocation;