import { useEffect, useState, useMemo } from "react";
import { useWeatherDatas } from "../../hooks/useWeatherDatas";
import { useLocation } from "../../hooks/useLocation";
import FetchApiStatic from "../utils/FetchApiStatic";
import weatherImg from "../../assets/Soleil nuageux.png";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import "./weather.css";
function ModalWeather() {
  const {
    updateTemperature_2m,
    updateApparent_temperature,
    updatePrecipitation_probability,
    updatePrecipitation,
    updateCloud_cover_low,
    updateWind_speed_10m,
    updateWind_direction_10m,
  } = useWeatherDatas();
  const { latitude, longitude } = useLocation();
  const [meteoData, setMeteoData] = useState(null);
  const [meteoDataKeys, setMeteoDataKeys] = useState(null);
  const lat = latitude || "52.52";
  const long = longitude || "13.41";
  useMemo(() => {
    const fetchData = async () => {
      try {
        await FetchApiStatic(lat, long, meteoData, setMeteoData, meteoDataKeys, setMeteoDataKeys);
        console.log("################");
        
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  const heure = parseInt(ConvertDateToCustom(), 10);
  useEffect(() => {
    if (meteoData && heure != null) {
      handleAffectDatas(heure);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meteoData, heure]);
  const handleAffectDatas = (el) => {
    if (meteoData?.hourly) {
      updateTemperature_2m(meteoData.hourly.temperature_2m[el] || 0 );
      updateApparent_temperature(meteoData.hourly.apparent_temperature[el] || 0 );
      updatePrecipitation_probability(meteoData.hourly.precipitation_probability[el] || 0 );
      updatePrecipitation(meteoData.hourly.precipitation[el] || 0 );
      updateCloud_cover_low(meteoData.hourly.cloud_cover_low[el] || 0 );
      updateWind_speed_10m(meteoData.hourly.wind_speed_10m[el] || 0 );
      updateWind_direction_10m(meteoData.hourly.wind_direction_10m[el] || 0 );
    }
  };
  return (
    <div className="weather-container">
      <p className="weather-text">Couvert, éclaircies éparses</p>
      <span className="weather-box">
        <img src={weatherImg} alt="Weather icon" />
        <p>{Math.round(meteoData?.hourly?.temperature_2m?.[heure]) || "##"}&nbsp;°C</p>
      </span>
    </div>
  );
}
export default ModalWeather;
