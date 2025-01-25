import { useWeatherDatas } from "../../hooks/useWeatherDatas";
import ConvertWindDirection from "../utils/ConvertWindDirection";
import rose_ciel from "../../assets/Rose ciel.png";
import rose_fleche from "../../assets/Rose_fleche.png";
import "./wind.css";
function ModalWind () {
  let { wind_speed_10m, wind_direction_10m, precipitation_probability }=useWeatherDatas();
  return(
    <div className="wind-container">
      <div className="wind-box">
        <div className="rose-box">
          <img src={rose_fleche} className={`rose-fleche rotate-${wind_direction_10m}`} alt="fleche" />
          <img src={rose_ciel} className="rose-ciel" alt="rose" />
        </div>
        <span className="wind-speed">
          <label className="wind-label">Vitesse du vent</label>
          <p className="wind-value">{wind_speed_10m} km/h</p>
          <p className="wind-text">
            {wind_direction_10m && 
              <ConvertWindDirection angle={wind_direction_10m} />
            }
          </p>
        </span>
        <span className="wind-rain">
          <label className="wind-label">Probabilité de pluie</label>
          <p className="wind-value">{precipitation_probability}%</p>
        </span>
      </div>



    </div>

  )
}
export default ModalWind;