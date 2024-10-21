import axios from "axios";
import { useEffect } from "react";
function Fetch_api(props){
  const { lat, long, urlOptions, setMeteoData, setMeteoData_keys } = props;
  console.log("fetch ulrOptions",urlOptions);
  
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}${urlOptions}`; 
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
  export default Fetch_api;
