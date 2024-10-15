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
      <table id="city_table">
        <tr className="table-labels">
          <td>cité:</td> 
          <td>code postal:</td> 
          <td >département:</td>
          <td>région:</td> 
          <td>latitude:</td> 
          <td>longitude:</td>
        </tr>
        <tr className="table-values">
          <td>{cityDatas.city_code}</td>
          <td>{cityDatas.zip_code}</td>
          <td>{cityDatas.department_number} {cityDatas.department_name}</td>
          <td>{cityDatas.region_name}</td>
          <td>{cityDatas.latitude}</td>
          <td>{cityDatas.longitude}</td>


        </tr>

      </table>
      {cityDatas && urlOptions? 
        <Fetch_api lat={cityDatas.latitude} long={cityDatas.longitude} urlOptions={urlOptions} setMeteoData={setMeteoData} setMeteoData_keys={setMeteoData_keys} meteoData={meteoData} meteoData_keys={meteoData_keys}/>:null
      }
      <span className="meteo-box">
      <div className="meteo-entete">
        {meteoData_keys && meteoData_keys.map((el)=>{
          return(
            <div key={el}>
              <p>{el}</p>
            </div>
          )
        })}
      </div>
      {meteoData && meteoData.hourly && Object.keys(meteoData.hourly).length > 0 ? (
        <div className="meteo-colonnes">
          {/* Parcourir toutes les clés de l'objet hourly */}
          {Object.keys(meteoData.hourly).map((key) => (
            <div key={key}>
              {/* Afficher les valeurs de cette clé */}
              {meteoData.hourly[key].map((value, index) => (
                <div key={index}>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Pas de données météo disponibles.</p>
      )}
      </span>
  </section>
  </>
)
}
Home.propType = {
  cityContext: PropTypes.any
}
export default Home;
