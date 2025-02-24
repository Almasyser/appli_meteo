
import axios from "axios";
function FetchApiStatic(lat, long, meteoData, setMeteoData, meteoData_keys, setMeteoData_keys){
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,cloud_cover,wind_speed_10m,wind_direction_10m,is_day&daily=weather_code,sunrise,sunset&timezone=GMT`; 
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
    // console.log("meteo data", meteoData);
  }
  
  export default FetchApiStatic;

  