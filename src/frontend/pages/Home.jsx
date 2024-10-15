import { useState } from "react";
import { PropTypes } from 'prop-types';
import "./home.css";
import Coordonnees from "../components/coordonnees/Coordonnees";
import Fetch_api from "../components/fetch_api/Fetch_api";
import Compose_url from "../components/compose_url/Compose_url";
// import { fetchWeatherApi } from 'openmeteo';
function Home() {
  const [searchModal, setSearchModal] = useState(true);
  const [selectModal, setSelectModal] = useState(false);
  const [urlOptions, setUrlOptions ]= useState(`&hourly=temperature_2m`);
  const [meteoData, setMeteoData ] = useState();
  const [meteoData_keys, setMeteoData_keys] = useState();
  const [cityDatas, setCityDatas] = useState({
    latitude: "42.12",
    longitude: "6.12",
    city_code:"",
    zip_code: "",
    department_name: "",
    department_number: "",
    region_name:""
  });
// console.log("Home urlOptions",urlOptions);
console.log("Home meteoData",meteoData?.hourly[2]);
// console.log("Home meteoData_keys",meteoData_keys);



  return(
  <>
    <button type="button" onClick={()=> setSelectModal(true)}>Sélecteur de paramètres</button>
    {selectModal?
      <Compose_url urlOptions={urlOptions} setUrlOptions={setUrlOptions} setSelectModal={setSelectModal} />:null  
    }
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
      {cityDatas && urlOptions? 
        <Fetch_api lat={cityDatas.latitude} long={cityDatas.longitude} urlOptions={urlOptions} setMeteoData={setMeteoData} setMeteoData_keys={setMeteoData_keys} meteoData={meteoData} meteoData_keys={meteoData_keys}/>:null
      }
      <span className="meteo-box">
        <p>datas meteo</p>
        {meteoData_keys && meteoData_keys.map((el,index)=>{
          return(
            <div key={el.generationtime_ms}>
              {meteoData.hourly && meteoData.hourly[index].map((sel, sindex)=>{
                return(
                  <p key={sindex} className="datakeys">{sel}</p>
                )
              }
              )}
 
            </div>
          );
        })}
      </span>
  </section>
  </>
)
}
Home.propType = {
  cityContext: PropTypes.any
}
export default Home;
// completer le form avec les city, departement... issus de cityDatas.