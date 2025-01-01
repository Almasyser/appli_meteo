
import axios from "axios";
import { useEffect } from "react";
function FetchApiStatic(props){
  const { lat, long, setMeteoData, setMeteoData_keys } = props;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,cloud_cover_low,wind_speed_10m,wind_direction_10m,is_day&daily=sunrise,sunset&timezone=GMT`; 
  const api = async(item)=>{
     try{
      const res = await axios.get(item);
      const newReponse = res.data;
      // console.log("newReponse",newReponse);
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
  }
  export default FetchApiStatic;