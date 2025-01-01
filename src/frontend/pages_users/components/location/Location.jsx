import "./location.css";
import changeImg from "../../assets/Change_green-128.png";
function ModalLocation (){
  return(
    <div className="location-container">
      <span className="location-text">
        <p className="location-town">Toulouse</p>
        <p className="location-departement">31 Haute-Garonne</p>
        <p className="location-region">Occitanie</p>
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