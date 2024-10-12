import "./compose_url.css";
import options from "../../assets/options.json";
import { PropTypes } from 'prop-types';
function Compose_url(props) {
 const { urlOptions, setUrlOptions, setSelectModal } = props;
  
  const handleClick = ()=>{
    console.log("Validé!");
    setSelectModal(false);
  }
  const handleChange = (e)=>{
    const el = e.target;
    if(el.checked){
      setUrlOptions(urlOptions+el.id);
    } else {
      setUrlOptions(urlOptions.replace(el.id,''));
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
        <button type="button" id="valide" className="btn-envoyer" onClick={handleClick}>{urlOptions}</button>
    </section>
    </>
  )
}
Compose_url.propTypes = {
  urlOptions: PropTypes.any,
  setUrlOptions: PropTypes.any,
  setSelectModal: PropTypes.any
}
export default Compose_url;