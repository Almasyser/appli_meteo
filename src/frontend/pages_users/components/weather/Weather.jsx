import "./weather.css";
import FetchApiStatic from "../utils/FetchApiStatic";
import weatherImg from "../../assets/Soleil nuageux.png";
import { useEffect, useState } from "react";
function ModalWeather(){
  const [meteoData, setMeteoData] = useState();
  const [meteoData_keys, setMeteoData_keys] = useState();
  const lat = "52.52";
  const long = "13.41";
useEffect(()=>{
  FetchApiStatic(lat, long, meteoData, setMeteoData, meteoData_keys, setMeteoData_keys);
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);


  return(
    <div className="weather-container">
      <p className="weather-text">couvert, éclaircies éparses</p>
      <span className="weather-box">
        <img src={weatherImg} />
        <p>21°</p>
      </span>
      <div className="body-box">
      
    </div>
  </div>
  )
}
export default ModalWeather;
// {meteoData && meteoData.hourly && Object.keys(meteoData.hourly).length > 0 ? (
//   <div className="meteo-colonnes">
//     {/* Parcourir toutes les clés de l'objet hourly */}
//     {Object.keys(meteoData.hourly).map((key) => (
//     <div key={key}>
//       {/* Afficher les valeurs de cette clé */}
//       {meteoData.hourly[key].map((value, index) => (
//       <div key={index}>
//         <p className="value">{value}</p>
//       </div>
//       ))}
//     </div>
//   ))}
// </div>
// ) : (<p>Pas de données météo disponibles.</p>)
// }