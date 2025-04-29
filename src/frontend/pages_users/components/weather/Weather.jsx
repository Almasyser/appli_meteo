import { useEffect, useState, useMemo } from "react";
import useWeatherDatas  from "../../hooks/useWeatherDatas";
import useLocations  from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import FetchApiStatic from "../utils/FetchApiStatic";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import SelectNebulositeId from "../utils/SelectNebulositeId";
import weatherCodeJson from "../../json/omm_codes.json";
import "./weather.css";
import SelectNebulositeImg from "../utils/selectNebulositeImg";
function ModalWeather() {
  const [meteoData, setMeteoData] = useState();
  const [nebulositeId, setNebulositeId] = useState(0);
  const [nebulositeImg, setNebulositeImg] = useState(null);
  const {latitude, longitude} = useLocations();
  const lat = latitude || "52.52";
  const long = longitude || "13.41";
  useEffect(()=>{
    FetchApiStatic(lat, long, setMeteoData);
  },[]);
  meteoData && console.log("MY AARAY", meteoData);
  const { hours } = ConvertDateToCustom();
  const heure = parseInt(hours,10);
    
  const cloud_cover = meteoData?.hourly?.cloud_cover[heure];
  const precipitation = meteoData?.hourly?.precipitation[heure];
  const temperature_2m = meteoData?.hourly?.temperature_2m[heure];
  SelectNebulositeId(cloud_cover, precipitation, setNebulositeId);
  console.log("NebulositeId",nebulositeId);
  nebulositeId? SelectNebulositeImg(nebulositeId, setNebulositeImg): null;
  
  

 


  return (
  <div className="weather-container">{nebulositeImg}
       
        {/* <img src={nebulositeImg} alt="##"></img> */}
    

    {/* {nebulositeText && <p className="weather-text">Météo actuelle: {nebulositeText}</p>}
    <p className="weather-text">Prevision pour la journée: {prevision}</p>
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
      <p>{Math.round(temperature_2m) || "##"}&nbsp;°C</p>
    </span> */}
  </div>
  );
}

export default ModalWeather;
