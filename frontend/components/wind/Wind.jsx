import  ConvertWindDirection  from "../utils/ConvertWindDirection";
import rose_ciel from "../../assets/Rose Bleue.png";
import rose_fleche from "../../assets/Rose_fleche.png";
import parapluie from "../../assets/parapluie.png";
import manche from "../../assets/manche.png";
import "./wind.css";
function ModalWind (props) {
  let { wind_speed, wind_direction, probability }=props;
  return(
    <div className="wind-container">
      <img src={manche} className="wind-icone" alt="air"/>
      <span className="rose-box">
        <img src={rose_fleche} className={`rose-fleche rotate-${wind_direction}`} alt="fleche" />
        <img src={rose_ciel} className="rose-des-vents" alt="rose" />
      </span>
      <span className="wind-speed">
        <p className="wind-text">{Math.round(wind_speed)} km/h</p>
        <div className="wind-text">
          {wind_direction &&
            <ConvertWindDirection angle={wind_direction} />
          }
        </div>
      </span>
      <span className="wind-rain">
        <img src={parapluie} className="wind-icone" alt="air"/>
        <p className="wind-text">{probability}%</p>
      </span>
    </div>
  )
}
export default ModalWind;