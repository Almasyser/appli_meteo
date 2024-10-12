import { useState } from "react";
import axios from 'axios';
import "./coordonnees.css";
import { PropTypes } from 'prop-types';
function Coordonnees (props){

  // eslint-disable-next-line react/prop-types
  const { setCityDatas, setSearchModal } = props;
  const [cityName, setCityName] = useState("");
  const [cityList, setCityList] = useState("");
  const handleChangeCity = (el)=>{
    setCityName(el.target.value);          
  };
  const handleChoiceCity = async ()=>{
    try {
      const response = await axios.get(`http://localhost:5050/datasByCity/${cityName}`);
      setCityList(response.data);
      setCityDatas(cityList);
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
    console.log("el ",el);
    setCityDatas(el);
    setSearchModal(false);
  }
  return(
    <>
    <div>
      <input type="text" onChange={handleChangeCity} placeholder="Ville" value={cityName}/>
      {(cityName !== "")?
      <>
        <button type="button" onClick={handleChoiceCity}>valid</button>
        <button type="button" onClick={handleChoiceCancel}>X</button>
      </> :null }
      {cityList && cityList.map((el,index)=>{
        return(
          <span key={index} className="city-list" onClick={()=>handleSelectCity(el)}>
            <p>{el.city_code}</p>
            <p>{el.department_number} {el.department_name}</p>
            <p>{el.region_name}</p>

          </span>
        )
      })
    }
    </div>
    </>
  )
}
Coordonnees.propType = {
  setCityDatas: PropTypes.any,
}
export default Coordonnees;
// ajouter button handleExit. Valider le choix. valider cityDatas (format, datas).retour vers home.

  // const handleValidCityDatas= ()=>{
  //   async()=>{
  //     try {
  //       const response = await axios.get(`http://localhost:5050/cities`);
  //       console.log("response.data",response.data);
        
  //       setCityDatas(...cityDatas,response.data); 
  //       setSearchModal(false);
  //     } 
  //     catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }