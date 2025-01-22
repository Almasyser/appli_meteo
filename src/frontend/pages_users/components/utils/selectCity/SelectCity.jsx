import { useState } from "react";
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { useLocation } from "../../../hooks/useLocation";
import "./selectCity.css";
function SelectCity (props){
  // eslint-disable-next-line react/prop-types
  const { setVisible } = props;
  const {updateLatitude, updateLongitude, updateCity_code, updateDepartment_code, updateDepartment_name, updateRegion_name } = useLocation();
  const [cityName, setCityName] = useState("");
  const [cityList, setCityList] = useState("");
  const handleChangeCity = (el)=>{
    setCityName(el.target.value);          
  };
  const handleChoiceCity = async ()=>{
    try {
      const response = await axios.get(`http://localhost:5050/datasByCity/${cityName}`);
      setCityList(response.data);
    } 
    catch (error) {
      console.error(error);
    }
  }
  const handleChoiceCancel = ()=>{
    setCityList("");
    setCityName("");
  }
  const handleSelectCity = (el)=>{
    console.log("EL", el);
    updateLatitude(el.latitude);
    updateLongitude(el.longitude);
    updateCity_code(el.city_code);
    updateDepartment_code(el.department_number);
    updateDepartment_name(el.department_name);
    updateRegion_name(el.region_name);
    setVisible(false);
  }
  return(
    <>
      <div className="city-search">
        <input type="text" onChange={handleChangeCity} placeholder="Ville" value={cityName}/>
        {(cityName !== "")?
        <>
          <button type="button" onClick={handleChoiceCity}>valid</button>
          <button type="button" onClick={handleChoiceCancel}>X</button>
        </> :null }
        <div className="city-list">
          {cityList && cityList.map((el,index)=>{
            return(
              <span key={index} onClick={()=>handleSelectCity(el)}>
                <p>{el.city_code}</p>
              </span>
            )
          })
        }
        </div>
      </div>
    </>
  )
}
SelectCity.propType = {
  setVisible: PropTypes.any,
}
export default SelectCity;