import ConvertWindDirection  from "../utils/ConvertWindDirection";
import rose_ciel from "../../assets/Rose Bleue.png";
import rose_fleche from "../../assets/Rose_fleche.png";
import SelectWindLabel from "../utils/SelectWindLabel";
import "./wind.css";
function ModalWind (props) {
  let { wind_speed, wind_direction, probability }=props;
  return(
    <div className="wind-container">
      <span className="rose-box">
        <img src={rose_fleche} className={`rose-fleche rotate-${wind_direction}`} alt="fleche" />
        <img src={rose_ciel} className="rose-des-vents" alt="rose" />
      </span>
      <span className="wind-details">
        <p className="wind-text">{Math.round(wind_speed)} km/h</p>
        <p className="wind-text">
          <SelectWindLabel windSpeed={Math.round(wind_speed)}/>
          {wind_direction &&
            <ConvertWindDirection angle={wind_direction} />
          }
        </p>
      </span>
      <span className="wind-text">Probabilité de pluie
        <p className="wind-text">{probability}%</p>
      </span>
    </div>
  )
}
export default ModalWind;