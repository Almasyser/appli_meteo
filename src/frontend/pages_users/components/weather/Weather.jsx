import "./weather.css";
import weatherImg from "../../assets/Soleil nuageux.png";
function ModalWeather(){
  return(
    <div className="weather-container">
      <p className="weather-text">couvert, éclaircies éparses</p>
      <span className="weather-box">
        <img src={weatherImg} />
        <p>21°</p>
      </span>

    </div>
  )
}
export default ModalWeather;