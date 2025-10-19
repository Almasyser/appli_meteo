import axios from "axios";
function FetchApiStatic(lat, long, updateMyArray){
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,wind_speed_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,weather_code,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m,wind_direction_10m,uv_index,sunshine_duration&current=temperature_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure&timezone=GMT`; 
  const api = async(item)=>{
    try{
      const res = await axios.get(item);
      const newReponse = res.data;
      if (newReponse) {
        updateMyArray(newReponse);
     
      }}
    catch(error) {
      console.error(error);
    }
  }
  api(url);
  console.log("response OK");
}
export default FetchApiStatic;

							
