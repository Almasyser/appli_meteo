// src/components/ModalWeather.js
import { useEffect, useState } from "react";
import useArray from "../../hooks/useArray";
import useLocations from "../../hooks/useLocations";
import FetchApiStatic from "../utils/FetchApiStatic";
import ModalWind from "../wind/Wind";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import SelectNebulositeImg from "../utils/SelectNebulositeImg";
import "./weather.css";

function ModalWeather() {
  const [meteoData, setMeteoData] = useState(null);
  const [nebulositeImg, setNebulositeImg] = useState(null);
  const [nebulositeText, setNebulositeText] = useState("");
  const [heure, setHeure] = useState();
  const { myArray , updateMyArray} = useArray();
  const { city_code, latitude, longitude } = useLocations();
  const lat = latitude ;
  const long = longitude;
  useEffect(() => {
    FetchApiStatic(lat, long, setMeteoData);
  }, [lat, long]);
  useEffect(() => {
    meteoData && updateMyArray(meteoData);
    if (meteoData) {
      const { hours, day } = ConvertDateToCustom();
      setHeure(parseInt(hours, 10));
      const cloud_cover = myArray.hourly?.cloud_cover[heure];
      const precipitation = myArray.hourly?.precipitation[heure];
      if (cloud_cover != null && precipitation != null) {
        const { img, text } = SelectNebulositeImg(cloud_cover, precipitation);
        setNebulositeImg(img);
        setNebulositeText(text);
      }
    }
  }, [meteoData]);
  return (
    <>
      <div className="weather-container">
        {<p className="weather-text">Météo actuelle: {nebulositeText}</p>}
        {nebulositeImg && 
          <div className="weather-box">
            <div className="nebulosite-box">
              <img className="nebulosite" src={nebulositeImg} alt={nebulositeText} />
            </div>
            <p className="temperature">{Math.round(myArray.hourly?.temperature_2m[heure]) || "##"}&nbsp;°C</p>
          </div>
        }
      </div>
      <ModalWind
        wind_speed={myArray.hourly?.wind_speed_10m[heure]}
        wind_direction={myArray.hourly?.wind_direction_10m[heure]}
        probability={myArray.hourly?.precipitation_probability[heure]}
      />
    </>
  );
}
export default ModalWeather;

