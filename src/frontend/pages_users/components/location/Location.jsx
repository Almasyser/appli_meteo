import "./location.css";
import { useLocation }  from "../../hooks/useLocation";
import changeImg from "../../assets/Change_green-128.png";
function ModalLocation (){
  const {city_code, department_code, department_name, region_name} = useLocation();
  return(
    <div className="location-container">
      <span className="location-text">
        <p className="location-town">{city_code}</p>
        <p className="location-departement">{department_code}{department_name}</p>
        <p className="location-region">{region_name}</p>
      </span>
      <span className="location-button">
        <button className="btn-box">
          <p className="btn-text">changer</p>
          <img className="btn-img" src={changeImg} />
        </button>
      </span>
    </div>
  )
}
export default ModalLocation;