import "./wind.css";
import roseImg from "../../assets/Rose ciel.png";
function ModalWind () {
  return(
    <div className="wind-container">
      <div className="wind-box">
        <img src={roseImg} />
        <span className="wind-speed">
          <label className="wind-label">Vitesse du vent</label>
          <p className="wind-value">22 km/h</p>
          <p className="wind-text">Est-Ouest</p>
        </span>
        <span className="wind-rain">
          <label className="wind-label">Probabilité de pluie</label>
          <p className="wind-value">10%</p>
        </span>
      </div>



    </div>

  )
}
export default ModalWind;