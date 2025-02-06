
import axios from "axios";
function FetchApiStatic(lat, long, meteoData, setMeteoData, meteoData_keys, setMeteoData_keys){
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,cloud_cover_low,wind_speed_10m,wind_direction_10m,is_day&daily=sunrise,sunset&is_day&timezone=GMT`; 
  const api = async(item)=>{
     try{
      const res = await axios.get(item);
      const newReponse = res.data;
      if (newReponse) {
        setMeteoData(newReponse);
        setMeteoData_keys(newReponse.hourly? Object.keys(newReponse.hourly):[]);
      }}
      catch(error) {
        console.error(error);
      }
    }
    api(url);
  }
  export default FetchApiStatic;
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,cloud_cover_low,wind_speed_10m,wind_direction_10m,is_day&daily=sunrise,sunset&timezone=GMT
  