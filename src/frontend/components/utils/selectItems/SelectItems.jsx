import { PropTypes } from 'prop-types';
import forecastdays from "../assets/forecastdays.json";
import pastdays from "../assets/pastdays.json";
import forecasthours from "../assets/forecasthours.json";
import "./selectitem.css";
import { useState } from 'react';
export default function SelectItems({idItem="100"}){
  const [list, setList]=useState();
  if(idItem === "100"){
    setList(forecastdays)
  } else if(idItem === 101){
    setList(pastdays)
  } else {
    setList(forecasthours)
  }
  
  
  return(
  <div className="list-days">
    
    <label htmlFor="list-days-selector"></label>
    <select name="list-days" id="list-days-selector">
      {list && list.map((el)=>{
      return(
        <option key={el.id} value={el.value}>{el.label}</option>
      )
      })}
    </select>
  </div>
  )
}
SelectItems.propTypes = {
  idItem: PropTypes.any,

}