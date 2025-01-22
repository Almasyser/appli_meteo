import "./weather.css";
import FetchApiStatic from "../utils/FetchApiStatic";
import weatherImg from "../../assets/Soleil nuageux.png";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import { useEffect, useState } from "react";
import { useWeatherDatas } from "../../hooks/useWeatherDatas";
import { useLocation } from "react-router-dom";
function ModalWeather(){
  let {
    updateTemperature_2m,
    updateApparent_temperature,
    updatePrecipitation_probability,
    updatePrecipitation,
    updateCloud_cover_low,
    updateWind_speed_10m,
    updateWind_direction_10m,
    temperature_2m,
    apparent_temperature,
    precipitation_probability,
    precipitation,
    cloud_cover_low,
    wind_speed_10m,
    wind_direction_10m
  } = useWeatherDatas();
  let {
    latitude,
    longitude
  } = useLocation();
  }
  const [meteoData, setMeteoData] = useState();
  const [meteoData_keys, setMeteoData_keys] = useState();
  const lat = "52.52";
  const long = "13.41";

  useEffect(()=>{
    FetchApiStatic(lat, long, meteoData, setMeteoData, meteoData_keys, setMeteoData_keys);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const heure = parseInt(ConvertDateToCustom());
  useEffect(()=>{
    if(meteoData && heure != null){ handleAffectDatas(heure)}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[meteoData, heure])
  const handleAffectDatas = (el)=>{
    if(meteoData.hourly != null){
      updateLatitude();
      updateLongitude();
      updateTemperature_2m(meteoData.hourly.temperature_2m[el] || "##");
      updateApparent_temperature(meteoData.hourly.apparent_temperature[el] || "##");
      updatePrecipitation_probability(meteoData.hourly.precipitation_probability[el] || "##");
      updatePrecipitation(meteoData.hourly.precipitation[el] || "##");
      updateCloud_cover_low(meteoData.hourly.cloud_cover_low[el] || "##");
      updateWind_speed_10m(meteoData.hourly.wind_speed_10m[el] || "##");
      updateWind_direction_10m(meteoData.hourly.wind_direction_10m[el] || "##");
    }
    console.log("###############");
  }
  

  return (
    <div className="weather-container">
      <p className="weather-text">couvert, éclaircies éparses</p>
      <span className="weather-box">
        <img src={weatherImg} alt="Weather icon" />
        <p>{meteoData && meteoData.hourly.temperature_2m[heure]},°C</p>
      </span>
      <div className="body-box">
          <div className="meteo-colonnes">
            <h4>{temperature_2m}&nbsp;°C</h4>
            <h4>{apparent_temperature}&nbsp;°C</h4>
            <h4>{precipitation_probability}&nbsp;%</h4>
            <h4>{precipitation}&nbsp;mm</h4>
            <h4>{cloud_cover_low}</h4>
            <h4>{wind_speed_10m}&nbsp;kM/h</h4>
            <h4>{wind_direction_10m}</h4>
          </div>
        </div>
    </div>
  );
}
export default ModalWeather;