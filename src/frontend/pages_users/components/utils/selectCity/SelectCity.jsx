import { useState } from "react";
import { PropTypes } from 'prop-types';
import axios from 'axios';
import useLocations from "../../../hooks/useLocations";
import cross from "../../../assets/Cross-cancel.png";
import clear from "../../../assets/Clear_green-128.png";
import "./selectCity.css";
function SelectCity (props){
  // eslint-disable-next-line react/prop-types
  const { visible, setVisible } = props;
  const {updateLatitude, updateLongitude, updateCity_code, updateDepartment_code, updateDepartment_name, updateRegion_name } = useLocations();
  const [cityName, setCityName] = useState("");
  const [cityList, setCityList] = useState("");
  const handleChoiceCity = async ()=>{
    try {
        const response = await axios.get(`http://localhost:5050/datasByCity/${cityName}`);
        setCityList(response.data);
      } 
      catch (error) {
      console.error(error);
      }
  }
  const handleChangeCity = (e)=>{
    setCityName(()=>e.target.value);
    cityName && cityName.length > 2? handleChoiceCity(cityName):null;
  };
  
  const handleSelectCity = (el)=>{
    updateLatitude(el.latitude);
    updateLongitude(el.longitude);
    updateCity_code(el.city_code);
    updateDepartment_code(el.department_number);
    updateDepartment_name(el.department_name);
    updateRegion_name(el.region_name);
    setVisible(false);
  }
  const handleChoiceCancel = ()=>{
    setCityList("");
    setCityName("");
  }
  const handleVisible = ()=>{
    handleChoiceCancel();
    setVisible(!visible);
  }
  return(
    <div className="city-container">
      <div className="entete">
        <p className="city-comment">Ville, village &#40;min 4 premières lettres&#41; ou Code Postal</p>
        <img src={cross} className="city-close" onClick={handleVisible}/>
      </div>
      <div className="input-box">
        <input type="text" onChange={handleChangeCity} placeholder="Ville" value={cityName}/>
        {(cityName !== "")?
          <>
            <img src={clear} className="city-btn-cancel" type="button" onClick={handleChoiceCancel} />
          </> :null
        }
      </div>
      {cityList &&
        <div className="city-list" >
          {cityList.filter((el,index, self) =>
            index === self.findIndex((t) => t.city_code === el.city_code)
          )
          .map((el, index)=>{
            return(
            <p className="city-item" key={index} onClick={()=>handleSelectCity(el)}>{el.city_code.charAt(0).toUpperCase()+el.city_code.slice(1)}</p>
          );
          })}
        </div>
      }
  </div>
  )
}
SelectCity.propType = {
  setVisible: PropTypes.any,
  visible: PropTypes.boolean
}
export default SelectCity;