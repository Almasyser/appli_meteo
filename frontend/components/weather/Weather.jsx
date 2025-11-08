// src/components/ModalWeather.js
import { useEffect, useState } from "react";
import ConvertWindDirection  from "../utils/ConvertWindDirection";
import rose_ciel from "../../assets/Rose Bleue.png";
import rose_fleche from "../../assets/Rose_fleche.png";
import SelectWindLabel from "../utils/SelectWindLabel";
import ConvertDateToCustom from "../utils/ConvertDateToCustom";
import SelectNebulositeImg from "../utils/SelectNebulositeImg";
import tags from "../../assets/tags";
import useArray from "../../hooks/useArray";
import "./weather.css";

function ModalWeather() {
  const myArray = useArray();
  const [nebulositeImg, setNebulositeImg] = useState(null);
  const [nebulositeText, setNebulositeText] = useState("");
  const [heure, setHeure] = useState();
  //
  useEffect(() => {
    const { hours } = ConvertDateToCustom();
    setHeure(parseInt(hours, 10));
   
      const cloud_cover = myArray?.myArray?.hourly?.cloud_cover[heure];
      const precipitation = myArray?.myArray?.hourly?.rain[heure];
      console.log("YES",heure,typeof(heure), cloud_cover, precipitation);
      if (cloud_cover != null && precipitation != null) {
        const result = SelectNebulositeImg(cloud_cover, precipitation);
        setNebulositeImg(tags[result.file]);
        setNebulositeText(result.text);
      } else {
         const result = SelectNebulositeImg(cloud_cover, 0);
        setNebulositeImg(tags[result.file]);
        setNebulositeText(result.text);
      }
    
  }, []);
  console.log("===", myArray);
  
  return (
    <div className="weather-container">
      <section className="wind-container">
        <p className="wind-state"><SelectWindLabel windSpeed={Math.round(myArray.myArray.hourly?.wind_speed_10m[heure])}/>
        <ConvertWindDirection angle={myArray.myArray.hourly?.wind_direction_10m[heure]} /></p>
        <p className="wind-text">{Math.round(myArray.myArray.hourly?.wind_speed_10m[heure])} km/h</p>
        <span className="rose-box">
          <img src={rose_fleche} className={`rose-fleche rotate-${myArray.myArray.hourly?.wind_direction_10m[heure]}`} alt="fleche" />
          <img src={rose_ciel} className="rose-des-vents" alt="rose" />
        </span>
      </section>
      <section className="nebulosite-container">
        <p className="nebulosite-text">{nebulositeText}</p>
        <p className="temperature">{Math.round(myArray.myArray.hourly?.temperature_2m[heure]) || "##"}&nbsp;°C</p>
        <div className="nebulosite-box">
          <img className="nebulosite" src={nebulositeImg} alt={nebulositeText} />
        </div>
      </section>
      <section className="proba-container">
        <p className="proba-title">Probabilité de pluie</p>
        <p className="proba-text">{myArray.myArray.hourly?.precipitation_probability[heure]}%</p>
      </section>
    </div>


  );
}
export default ModalWeather;

      // {myArray && heure && <ModalWind
      //   wind_speed={myArray.myArray.hourly?.wind_speed_10m[heure]}
      //   wind_direction={myArray.myArray.hourly?.wind_direction_10m[heure]}
      //   probability={myArray.myArray.hourly?.precipitation_probability[heure]}
      // />}