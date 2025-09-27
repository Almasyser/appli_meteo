import { useState } from "react";
import { PropTypes } from 'prop-types';
import axios from 'axios';
import useLocations from "../../hooks/useLocations";
import cross from "../../assets/Cross-cancel.png";
import clear from "../../assets/Clear_green-128.png";
import "./selectCity.css";
function SelectCity (props){
  const api_url = import.meta.env.VITE_API_URL;
  const {visible, setVisible} = props;
  const {updateLatitude, updateLongitude, updateCity_code, updateDepartment_code, updateDepartment_name, updateRegion_name } = useLocations();
  const [cityName, setCityName] = useState("");
  const [cityList, setCityList] = useState("");
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
      <div className="city-list" >
        {cityList && cityList.map((el, index)=>{
          return(
            <div key={index} className="city-item" onClick={()=>handleSelectCity(el)}>
              <p className="city">{el.city_code.charAt(0).toUpperCase()+el.city_code.slice(1)}</p>
              <p className="city departement">{`${el.department_name} ${el.department_number}`}</p>
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
