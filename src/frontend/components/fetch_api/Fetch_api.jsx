import axios from "axios";
import { useEffect } from "react";
function Fetch_api(props){
  // eslint-disable-next-line no-unused-vars
  const {lat, long, urlOptions, setMeteoData, setMeteoData_keys, meteoData, meteoData_keys} = props;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}${urlOptions}`; 
  const api = async(item)=>{
     try{
      const res = await axios.get(item);
      const newReponse = res.data;
      
      console.log("newReponse",newReponse);
      if (newReponse) {
        setMeteoData(newReponse);
        setMeteoData_keys(newReponse.hourly? Object.keys(newReponse.hourly):[]);
      }}
      catch(error) {
        console.error(error);
      }
    }
    useEffect(()=>{
      api(url);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])
    // console.log("FETCH FetchApi URL ",url);
    // console.log("FETCH meteoData",meteoData);
    // console.log("FETCH meteoData_keys",meteoData_keys);
  }
   
  export default Fetch_api;
  // `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation,rain&timezone=GMT&forecast_days=1&models=meteofrance_seamless`;