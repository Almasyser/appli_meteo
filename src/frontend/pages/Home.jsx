import { useState } from "react";
import { PropTypes } from 'prop-types';
import "./home.css";
import Coordonnees from "../components/coordonnees/Coordonnees";
import Fetch_api from "../components/fetch_api/Fetch_api";
import Compose_url from "../components/compose_url/Compose_url";
import ModalChart from "../components/modalChart/ModalChart";
// import { fetchWeatherApi } from 'openmeteo';
function Home() {
  const [searchModal, setSearchModal] = useState(true);
  const [selectModal, setSelectModal] = useState(false);
  const [urlOptions, setUrlOptions ]= useState("&hourly=temperature_2m");
  const [meteoData, setMeteoData ] = useState();
  const [meteoData_keys, setMeteoData_keys] = useState();
  const [colors] = useState(
    {primary:"#383939",
    second: "#006465",
    third: "#0f928c",
    fourth: "#00c9d2",
    fifth: "#484848",
    six: "#ffaf00"}
  )
  const [cityDatas, setCityDatas] = useState({
    latitude: "42.12",
    longitude: "6.12",
    city_code:"",
    zip_code: "",
    department_name: "",
    department_number: "",
    region_name:""
  });
  const handleClick = ()=>{
    setUrlOptions("&hourly=temperature_2m");
    setSelectModal(true);
  }
 
  return(
  <div className="container">
    <div className="entete-box">
      <button className="btn-selecteur" type="button" onClick={handleClick}>Sélecteur de paramètres</button>
      {selectModal?
        <Compose_url urlOptions={urlOptions} setUrlOptions={setUrlOptions} setSelectModal={setSelectModal} />:null  
      }
      <div className="city-container">
        {!searchModal && 
          <button className="btn-changer" type="button" onClick={()=>setSearchModal(true)}>Changer la ville</button>
        }
        {searchModal && <Coordonnees setCityDatas={setCityDatas} setSearchModal={setSearchModal}/>}
        <table id="table-city">
          <tbody>
            <tr className="table-labels">
              <td>cité:</td> 
              <td>code postal:</td> 
              <td>département:</td>
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
          </tbody>
        </table>
      </div>
      {cityDatas && urlOptions? 
        <Fetch_api lat={cityDatas.latitude} long={cityDatas.longitude} urlOptions={urlOptions} setMeteoData={setMeteoData} setMeteoData_keys={setMeteoData_keys} meteoData={meteoData} meteoData_keys={meteoData_keys}/>:null
      }
      <span className="meteo-box">
        <div className="meteo-entete">
          {meteoData_keys && meteoData_keys.map((el)=>{
            return(
              <div key={el}>
                <p>{el}</p>
                <p> {meteoData.hourly_units[el]}</p>
              </div>
            )
          })}
        </div>
      </span>
    </div>
    <div className="body-box">
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
        ) : (<p>Pas de données météo disponibles.</p>)
      }
    </div>
    {meteoData && 
      <ModalChart 
      sizeWidth={"100%"} 
      sizeHeight={"100%"} 
      data={meteoData}
      dashGrid={"2 8"} 
      strokeGrid={colors.third} 
      dataArea={""} 
      strokeArea={colors.primary} 
      fillArea={`url(#gradient)`} 
      dataX={""} 
      strokeX={colors.second} 
      intervX={14}
      dataY={""} 
      strokeY={colors.second} 
      gradColorStart={colors.fifth} 
      gradColorEnd={colors.six} 
      /> 
    }
  </div>
)
}
Home.propType = {
  cityContext: PropTypes.any
}
export default Home;
