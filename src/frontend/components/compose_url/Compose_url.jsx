import "./compose_url.css";
import options from "../../assets/options.json";
import SelectItems from "../utils/selectItems/SelectItems";
import { PropTypes } from 'prop-types';
import { useState } from "react";
// import axios from "axios";
function Compose_url(props) {
  const {urlOptions, setUrlOptions, setSelectModal } = props;
  const [idItem, setIdItem]=useState();
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
    setIdItem(e.target.id);
  }
  console.log("idItem ",idItem,typeof(idItem));
  return(
    <>
    <form onChange={handleTimeSet}>
      <div>
        <input type="radio" id="100" name="radio"  value="Prévisions à" defaultChecked />
        <label htmlFor="100">Prévisions</label>
      </div>
      <div>
        <input type="radio" id="pastdays" name="radio" value="Historique"/>
        <label htmlFor="pastdays">Historique</label>
      </div>
      <div>
        <input type="radio" id="forecasthours" name="radio" value="Prévisions à" />
        <label htmlFor="forecasthours">Prochaines heures</label>
      </div>
    </form>
    <section className="selector-container">
      <SelectItems idItem={idItem}/>
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

  // const postUrl = async(item)=>{
  //   try {
  //     const res = await axios.post(`http://localhost:5050/urls`, item);
  //     console.log(res.status);
  //   } 
  //   catch (error) {
  //     console.error(error);
  //   }
  // }
  // 