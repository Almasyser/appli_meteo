import { PropTypes } from 'prop-types';
import forecastdays from "../assets/forecastdays.json";
import pastdays from "../assets/pastdays.json";
import forecasthours from "../assets/forecasthours.json";
import "./selectitem.css";
import { useEffect, useState } from 'react';
export default function SelectItems({idItem, setDuration}){
  const [list, setList]=useState([]);
  useEffect(()=>{
    if(idItem === "0"){
      setList(forecastdays)
    } else if(idItem === "1"){
      setList(pastdays)
    } else {
      setList(forecasthours)
    }
  },[idItem]);
  const handleClick = (e)=>{
    setDuration(e.target.value);
  }
  return(
  <div className="list-days">
    <label htmlFor="list-days-selector">Choisir la durée</label>
    <select name="list-days" id="list-days-selector">
      {list && list.map((el)=>{
      return(
        <option key={el.id} value={el.value} onClick={handleClick}>{el.label}</option>
      )
      })}
    </select>
  </div>
  )
}
SelectItems.propTypes = {
  idItem: PropTypes.any,
  setDuration: PropTypes.any

}