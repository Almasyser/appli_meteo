import { useState } from "react";
import { PropTypes } from 'prop-types';
import axios from "axios";
import "./home.css";
import Coordonnees from "../components/coordonnees/Coordonnees";
// import { fetchWeatherApi } from 'openmeteo';
function Home() {
  const [searchModal, setSearchModal] = useState(false);
  const cityDefault = {
      lat: "52.52",
      long: "13.41"
  }
  const [cityDatas, setCityDatas] = useState(cityDefault);



  const [data_keys, setData_keys] = useState()
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityDatas.lat}&longitude=${cityDatas.long}&hourly=temperature_2m,precipitation,rain&timezone=GMT&forecast_days=1&models=meteofrance_seamless`;
  const [data, setData] = useState();
  // const [temperature, setTemperature] = useState();
  const handleClick = async()=>{
        try{
          const res = await axios.get(url);
          const newReponse = res.data;
          // console.log("newReponse",newReponse);
          
          if (newReponse) {
            setData(newReponse);
            setData_keys(newReponse.hourly? Object.keys(newReponse.hourly):[]);
          }
        } 
      catch(error) {
        console.error(error);
      }
    };
    
    return(
      <>
        <h3>Page home</h3>
        <button type="button" onClick={()=>setSearchModal(true)}>choisir</button>
        {searchModal && searchModal? <Coordonnees setCityDatas={setCityDatas} cityDatas={data} setSearchModal={setSearchModal}/>:null}
        <button type="button" onClick={handleClick}>peupler</button>
        {/* <Coordonnees setCityDatas={setCityDatas}/> */}
        {data?
        <section>
          <h1>Latitude {data.latitude}</h1>
          <h1>Longitude {data.longitude}</h1>
          <h1>Temps ref {data.timezone}</h1>
          <section className="data-container">
            {data_keys && data_keys.map((el_key)=>{
              return(
                <div className="data-box" key={el_key}>
                  <p>{el_key}</p>
                  {data.hourly[el_key]? data.hourly[el_key].map((el)=>{
                    return(
                      <p key={el.time}>{el} {data.hourly_units[el_key]}</p>
                    )
                  }):null}
                </div>
              )})}
          </section>
        </section>
        :null }
      </>
    )
  }
  Home.propType = {
    cityContext: PropTypes.any
    
  }

export default Home;