import  ConvertWindDirection  from "../utils/ConvertWindDirection";
import rose_ciel from "../../assets/Rose ciel.png";
import rose_fleche from "../../assets/Rose_fleche.png";
import "./wind.css";
function ModalWind (props) {
  let { wind_speed, wind_direction, probability }=props;
  return(
    <div className="wind-container">
      <div className="wind-box">
        <div className="rose-box">
          <img src={rose_fleche} className={`rose-fleche rotate-${wind_direction}`} alt="fleche" />
          <img src={rose_ciel} className="rose-ciel" alt="rose" />
        </div>
        <span className="wind-speed">
          <label className="wind-label">Vitesse du vent</label>
          <p className="wind-value">{Math.round(wind_speed)} km/h</p>
          <div className="wind-text">
            {wind_direction &&
              <ConvertWindDirection angle={wind_direction} />
            }
          </div>
        </span>
        <span className="wind-rain">
          <label className="wind-label">Probabilité de pluie</label>
          <p className="wind-value">{probability}%</p>
        </span>
      </div>
    </div>
  )
}
export default ModalWind;