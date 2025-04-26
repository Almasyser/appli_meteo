import { useEffect, useState, useMemo } from "react";
import useWeatherDatas  from "../../hooks/useWeatherDatas";
import useLocations  from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import FetchApiStatic from "../utils/FetchApiStatic";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import SelectNebulositeImg from "../utils/SelectNebulositeImg/SelectNebulositeImg";
import weatherCodeJson from "../../json/omm_codes.json";
import "./weather.css";
function ModalWeather() {
  const { myArray, updateMyArray } = useArray()
  const [meteoData, setMeteoData] = useState([]);
  const [meteoDataKeys, setMeteoDataKeys] = useState([]);
  const [nebulositeImg, setNebulositeImg] = useState(null); 
  const [nebulositeText, setNebulositeText] = useState(null);// incorporer aux zustand
  // const [is_dayBackground, setIs_dayBackground ] = useState(null);
  const [prevision, setPrevision ] = useState(null);
  // extrait var de hook
  const {
    updateTemperature_2m,
    updateApparent_temperature,
    updatePrecipitation_probability,
    updatePrecipitation,
    updateCloud_cover,
    updateWind_speed_10m,
    updateWind_direction_10m,
    updateWeather_code,
    updateIs_day,
    cloud_cover,
    precipitation,
    is_day,
    weather_code
    } = useWeatherDatas();
  // useWeatherDatas() est le hook 'local' Il pourra etre utilisé dans l'etat. 
  // recupere le hook useArray. useArray est exploité dans fiveDays et autres composants.
  // init props destinées a fetch
  const {latitude, longitude} = useLocations();
  const lat = latitude || "52.52";
  const long = longitude || "13.41";
  // fecth apiMeteo quand lat ou long changent
  useMemo(() => {
    const fetchData = async () => {
      try {
        await FetchApiStatic(lat, long, meteoData, setMeteoData, meteoDataKeys, setMeteoDataKeys, updateMyArray);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);
  // myArray && console.log("myarray ",myArray);
  // recupere l'heure. new Date est dans ConvertDateToCustom
  const temp = ConvertDateToCustom();
  const heure = parseInt(temp.hours, 10);
  useEffect(() => {
    if (meteoData && heure != null) {
      handleAffectDatas(heure);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meteoData, heure]);
  // post fetch: actualise le hook
  const handleAffectDatas = (el) => {
    const el1 = Math.trunc(el/24)
     if (meteoData?.hourly) {
      updateTemperature_2m(meteoData.hourly.temperature_2m[el] );
      updateApparent_temperature(meteoData.hourly.apparent_temperature[el] );
      updatePrecipitation_probability(meteoData.hourly.precipitation_probability[el] );
      updatePrecipitation(meteoData.hourly.precipitation[el] );
      updateCloud_cover(meteoData.hourly.cloud_cover[el] );
      updateWind_speed_10m(meteoData.hourly.wind_speed_10m[el] );
      updateWind_direction_10m(meteoData.hourly.wind_direction_10m[el]  );
      updateIs_day(meteoData.hourly.is_day[el] );
      updateWeather_code(meteoData.daily.weather_code[el1] );
    }
  };
  // actualise la prevision journée
  useEffect(()=>{
    weatherCodeJson && weatherCodeJson.map((el) =>{
      if (el.code === weather_code){
        setPrevision(el.text);
      }
      })
    },[weather_code]);
      return (
      <div className="weather-container">
        {/* meteo actuelle  */}
        {nebulositeText && <p className="weather-text">Météo actuelle: {nebulositeText}</p>}
        <p className="weather-text">Prevision pour la journée: {prevision}</p>
        {/* select img selon hook. text no used is_day no used */}
        <span className="weather-box">
          <SelectNebulositeImg 
            cloud_cover={cloud_cover} 
            precipitation={precipitation} 
            setNebulositeImg={setNebulositeImg} 
            setNebulositeText={setNebulositeText}
            is_day={is_day}
          />
          <div className={is_day? `nebulosite-box is-day`: `nebulosite-box is-night`}>
            <img className="nebulosite" src={nebulositeImg} alt="¤¤¤" />
          </div>
          {/* affiche temp actuelle */}
          <p>{Math.round(meteoData?.hourly?.temperature_2m?.[heure]) || "##"}&nbsp;°C</p>
        </span>
      </div>
    );
}

export default ModalWeather;
