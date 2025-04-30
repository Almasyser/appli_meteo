// src/components/ModalWeather.js
import { useEffect, useState } from "react";
import "./weather.css";
import useLocations from "../../hooks/useLocations";
import FetchApiStatic from "../utils/FetchApiStatic";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import SelectNebulositeId from "../utils/SelectNebulositeId";
import SelectNebulositeImg from "../utils/SelectNebulositeImg";

function ModalWeather() {
  const [meteoData, setMeteoData] = useState(null);
  const [nebulositeId, setNebulositeId] = useState(null);
  const [nebulositeImg, setNebulositeImg] = useState(null);
  const [nebulositeText, setNebulositeText] = useState("");

  const { latitude, longitude } = useLocations();
  const lat = latitude || "52.52";
  const long = longitude || "13.41";
  useEffect(() => {
    FetchApiStatic(lat, long, setMeteoData);
  }, [lat, long]);
  useEffect(() => {
    if (meteoData) {
      const { hours, day } = ConvertDateToCustom();
      const heure = parseInt(hours, 10);
      const cloud_cover = meteoData.hourly?.cloud_cover[heure];
      const precipitation = meteoData.hourly?.precipitation[heure];
      const temperature_2m = meteoData.hourly?.temperature_2m[heure];
      if (cloud_cover != null && precipitation != null) {
        const id = SelectNebulositeId(cloud_cover, precipitation);
        const { img, text } = SelectNebulositeImg(id);
        setNebulositeId(id);
        setNebulositeImg(img);
        setNebulositeText(text);
      }
      console.log("Météo :", cloud_cover, "-", precipitation, "-", temperature_2m,"  ");
      console.log(meteoData);
      
    }
  }, [meteoData]);
  return (
    <div className="weather-container">
      <h3>Météo actuelle</h3>
      {nebulositeImg && (
        <div className="weather-display">
          <img src={nebulositeImg} alt={nebulositeText} />
          <p>{nebulositeText}</p>
        </div>
      )}
    </div>
  );
}
export default ModalWeather;

