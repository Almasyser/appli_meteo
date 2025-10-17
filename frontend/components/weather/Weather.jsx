// src/components/ModalWeather.js
import { useEffect, useState } from "react";
import FetchApiStatic from "../utils/FetchApiStatic";
import useLocations from "../../hooks/useLocations";
import useArray from "../../hooks/useArray";
import ModalWind from "../wind/Wind";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import SelectNebulositeImg from "../utils/SelectNebulositeImg";
import tags from "../../assets/tags";
import "./weather.css";

function ModalWeather({meteoData, setMeteoData}) {
  const {myArray, updateMyArray} = useArray();
  const [nebulositeImg, setNebulositeImg] = useState(null);
  const [nebulositeText, setNebulositeText] = useState("");
  const [heure, setHeure] = useState();
  const {latitude, longitude} = useLocations();
  const lat = latitude ;
  const long = longitude;
  //
  useEffect(() => {
    FetchApiStatic(lat, long, setMeteoData);
  }, [lat, long]);
  useEffect(() => {
    meteoData && updateMyArray(meteoData);
    const { hours, day } = ConvertDateToCustom();
    setHeure(parseInt(hours, 10));
    if (meteoData) {
      const cloud_cover = myArray?.hourly?.cloud_cover[heure];
      const precipitation = myArray?.hourly?.precipitation[heure];
      console.log("YES",cloud_cover, precipitation);
      if (cloud_cover != null && precipitation != null) {
        const result = SelectNebulositeImg(cloud_cover, precipitation);
        setNebulositeImg(tags[result.file]);
        setNebulositeText(result.text);
      }
    }
  }, [meteoData]);
   
    
  return (
    <div className="weather-container">
      <div className="weather-title">
        <p className="weather-text">Météo actuelle: {nebulositeText}</p>
      </div>
      {nebulositeImg && 
        <div className="weather-box">
          <div className="nebulosite-box">
            <img className="nebulosite" src={nebulositeImg} alt={nebulositeText} />
          </div>
          <p className="temperature">{Math.round(myArray.hourly?.temperature_2m[heure]) || "##"}&nbsp;°C</p>
        </div>
      }
      {myArray && <ModalWind
        wind_speed={myArray.hourly?.wind_speed_10m[heure]}
        wind_direction={myArray.hourly?.wind_direction_10m[heure]}
        probability={myArray.hourly?.precipitation_probability[heure]}
      />}
    </div>
  );
}
export default ModalWeather;

