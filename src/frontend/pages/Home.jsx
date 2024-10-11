import { useState } from "react";
import { PropTypes } from 'prop-types';
import "./home.css";
import Coordonnees from "../components/coordonnees/Coordonnees";
import Fetch_api from "../components/fetch_api/Fetch_api";
// import { fetchWeatherApi } from 'openmeteo';
function Home() {
  const [searchModal, setSearchModal] = useState(true);
  const [meteoData, setMeteoData ] = useState();
  const [meteoData_keys, setMeteoData_keys] = useState();
  const [cityDatas, setCityDatas] = useState({
    latitude: "",
    longitude: "",
    city_code:"",
    zip_code: "",
    department_name: "",
    department_number: "",
    region_name:""
  });
console.log(meteoData_keys);

  return(
    <section className="container">
      {!searchModal && 
        <button type="button" onClick={()=>setSearchModal(true)}>Changer la ville</button>
      }
      {searchModal && <Coordonnees setCityDatas={setCityDatas} setSearchModal={setSearchModal}/>}
      <div className="box-container">
        <p>cité: {cityDatas.city_code}</p>
        <p>code postal: {cityDatas.zip_code}</p>
        <span className="dep-box">
          <p>numéro: {cityDatas.department_number}</p>
          <p>département: {cityDatas.department_name}</p>
        </span>
        <p>région: {cityDatas.region_name}</p>
        <p>latitude: {cityDatas.latitude}</p>
        <p>longitude: {cityDatas.longitude}</p>
      </div>
      {cityDatas? 
        <Fetch_api lat={cityDatas.latitude} long={cityDatas.longitude} setMeteoData={setMeteoData} setMeteoData_keys={setMeteoData_keys} />:null
      }
      <span className="meteo-box">
        <table>
          <thead>
            <tr className="titles">
              <th>Heure</th>
              <th>Température</th>
              <th>Précipitation</th>
              <th>Pluie</th>
            </tr>
          </thead>
          <tbody>
            <tr className="lines">{meteoData && meteoData.hourly.time.map((el,index)=> <td key={index}>{el}</td>)}</tr>
            <tr className="lines">{meteoData && meteoData.hourly.temperature_2m.map((el,index)=> <td key={index}>{el}</td>)}</tr>
            <tr className="lines">{meteoData && meteoData.hourly.precipitation.map((el,index)=> <td key={index}>{el}</td>)}</tr>
            <tr className="lines">{meteoData && meteoData.hourly.rain.map((el,index)=> <td key={index}>{el}</td>)}</tr>
         
          </tbody>
        </table>
    </span>
  </section>
)
}
Home.propType = {
  cityContext: PropTypes.any
}
export default Home;
// completer le form avec les city, departement... issus de cityDatas.