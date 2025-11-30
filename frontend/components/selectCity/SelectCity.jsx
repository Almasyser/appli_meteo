import { useState } from "react";
import { PropTypes } from 'prop-types';
import axios from 'axios';
import useLocations from "../../hooks/useLocations";
import useFocus from "../../hooks/useFocus";
import cross from "../../assets/Cross-cancel.png";
import clear from "../../assets/Clear_green-128.png";
import "./selectCity.css";
function SelectCity ({setShowSelect, showSelect, setShowFive}){
  const api_url = import.meta.env.VITE_API_URL;
  const {updateLatitude, updateLongitude, updateCity_code, updateDepartment_code, updateDepartment_name, updateRegion_name } = useLocations();
  const [cityName, setCityName] = useState("");
  const [cityList, setCityList] = useState("");
  const  inputRef=useFocus();
  const handleChoiceCity = async ()=>{
    try {
        const response = await axios.get(`${api_url}/datasbycity/${cityName}`);
        setCityList(response.data);
      } 
      catch (error) {
      console.error(error);
      }
  }
  const handleChangeCity = (e)=>{
    const value = e.target.value;
    setCityName(()=> value.replace(/'/g," "));
    cityName && cityName.length > 2? handleChoiceCity(cityName):null;
  };
  const handleSelectCity = (el)=>{
    updateLatitude(el.latitude);
    updateLongitude(el.longitude);
    updateCity_code(el.city_code);
    updateDepartment_code(el.department_number);
    updateDepartment_name(el.department_name);
    updateRegion_name(el.region_name);
    handleVisible();
    setShowFive(true);
    //
    setStorage("longitude", el.longitude);
    setStorage("latitude", el.latitude);
    setStorage("city_code", el.city_code);
    setStorage("department_number", el.department_number);
    setStorage("department_name", el.department_name);
    setStorage("region_name", el.region_name);
    setShowFive(true);
  }
  const handleVisible = ()=>{
    handleChoiceCancel();
    setShowSelect(false);
    setShowFive(true);
  }
  const handleChoiceCancel = ()=>{
    setCityList("");
    setCityName("");
  }
  const setStorage= (key, value) =>{
    localStorage.setItem(key, value);
  }
  return(
    <div className={showSelect? "city-container active":"city-container"}>
      <div className="entete">
        <p className="city-comment">Ville, village &#40;min 4 premières lettres.</p>
        <img src={cross} className="city-close" alt="fermer" onClick={handleVisible}/>
      </div>
      <div className="input-box">
        <input ref={inputRef} type="text" onChange={handleChangeCity} placeholder="Ville" value={cityName}/>
        {(cityName !== "")?
          <>
            <img src={clear} className="city-btn-cancel" type="button" onClick={handleChoiceCancel} />
          </> :null
        }
      </div>
      <div className="city-list" >
        {cityList && cityList.map((el, index)=>{
          return(
            <div key={index} className="city-item" onClick={()=>handleSelectCity(el)}>
              <p className="city">{el.city_code.charAt(0).toUpperCase()+el.city_code.slice(1)}</p>
              <p className="city department">{`${el.department_name} ${el.department_number}`}</p>
            </div>
          );
        })
        }
      </div>
    </div>
  )
}
SelectCity.propType = {
  setVisible: PropTypes.any,
  visible: PropTypes.boolean
}
export default SelectCity;
