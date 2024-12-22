import "./compose_url.css";
import options from "../../assets/options.json";
import SelectItems from "../utils/selectItems/SelectItems";
import { PropTypes } from 'prop-types';
import { useState } from "react";
// import axios from "axios";
function Compose_url(props) {
  const {urlOptions, setUrlOptions, setSelectModal } = props;
  const [idItem, setIdItem]=useState("0");
  const [duration, setDuration]=useState("");
  const handleChange = (e)=>{
     const el = e.target;
    if(el.checked){
      setUrlOptions(urlOptions+el.id);
    } else {
      setUrlOptions(urlOptions.replace(el.id,''));
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    setSelectModal(false);
    // postUrl(temp);
  }
  const handleTimeSet = (e)=>{
    setIdItem(e.target.value+e.target.id);
  }
  console.log("duration  ",duration);
  return(
    <>
    <section className="selector-container">
      <form onChange={handleTimeSet}>
        <div>
          <input type="radio" id="0" name="radio"  value="&forecast_days=" defaultChecked />
          <label htmlFor="0">Prévisions</label>
        </div>
        <div>
          <input type="radio" id="1" name="radio" value="&past_days="/>
          <label htmlFor="1">Historique</label>
        </div>
        <div>
          <input type="radio" id="2" name="radio" value="&forecast_hours=" />
          <label htmlFor="2">Prochaines heures</label>
        </div>
      </form>
      {idItem? <SelectItems idItem={idItem} setDuration={setDuration} />:null }
    </section> 
    <p className="title-label">Sélectionner les valeurs à interroger:</p>
    <ul className="menu-container" >
      {options && options.map((el)=>{
        return(
          <li key={el.id} className="menu-line">
            <input type="checkbox" id={el.name} checked={el.checked} disabled={el.disabled} onChange={handleChange}/>
            <label htmlFor={el.name}>{el.label}</label>
          </li>
        )
      })}
    </ul>
      <section className="btn-container">
        <p className="title-label">Valider cette URL:</p>
        <button type="button" id="valide" className="btn-envoyer" onClick={handleClick}>{urlOptions}</button>
      </section>
    </>
  )
}
Compose_url.propTypes = {
  urlOptions: PropTypes.string,
  setUrlOptions: PropTypes.any,
  setSelectModal: PropTypes.any
}
export default Compose_url;
