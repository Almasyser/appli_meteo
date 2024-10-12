import "./compose-url.css";
import options from "../../assets/options.json";
import { useState } from "react";

function Compose_url() {
  const lat=42.12356;
  const long=6.32511;
  const [urlFinal, setUrlFinal ]= useState(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
  const handleClick = ()=>{
    console.log("Validé!");
  }
  const handleChange = (e)=>{
    const el = e.target;
    if(el.checked){
      setUrlFinal(urlFinal+el.id);
    } else {
      setUrlFinal(urlFinal.replace(el.id,''));
    }
  }
  return(
    <>
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
        <button type="button" id="valide" className="btn-envoyer" onClick={handleClick}>{urlFinal}</button>
    </section>
    </>
  )
}
export default Compose_url;