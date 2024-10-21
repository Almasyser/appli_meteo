import "./compose_url.css";
import options from "../../assets/options.json";
import { PropTypes } from 'prop-types';
// import axios from "axios";
function Compose_url(props) {
  const {urlOptions, setUrlOptions, setSelectModal } = props;

  console.log("==> compose urlOptions ",urlOptions," -- ",typeof(urlOptions));
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
 
    // postUrl(temp);
    setSelectModal(false);
  }
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
  urlOptions: PropTypes.string,
  setUrlOptions: PropTypes.any,
  setSelectModal: PropTypes.any
}
export default Compose_url;

