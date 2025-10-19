import hourlyLabels from "../../json/hourlyLabels.json";
import useArray from "../../hooks/useArray";
import DateToHour from "../utils/DateToHour";
import "./oneday.css";
function OneDay({btn, showOneDay, setShowOneDay}){
  const { myArray } = useArray();
  const intervals =[0,4,8,12,16,20,24]
  const handleClick=()=>{
    setShowOneDay(false);
  }
  return(
    <section className={showOneDay? "oneDay-container active":"oneDay-container"}>
      <div className="oneDay-label">
      {hourlyLabels && hourlyLabels.map((el)=>{
        return(
          <span key={el.id}>
            <h4>{el.label}</h4>
            <h4>{el.unit}</h4>
          </span>
        )
      })}
      </div>
      {intervals && intervals.map((el)=>{
          let localId=parseInt(btn*24,10)+el; 
          return(
            <div key={el} className="oneDay-line">
              <h4><DateToHour today={myArray?.hourly?.time[localId]}/></h4>
              <h4>{myArray?.hourly?.temperature_2m[localId]}</h4>
              <h4>{myArray?.hourly?.apparent_temperature[localId]}</h4>
              <h4>{myArray?.hourly?.precipitation_probability[localId]}</h4>
              <h4>{myArray?.hourly?.rain[localId]}</h4> 
              <h4>{myArray?.hourly?.showers[localId]}</h4>
              <h4>{myArray?.hourly?.snowfall[localId]}</h4>
              <h4>{myArray?.hourly?.snow_depth[localId]}</h4>
              <h4>{myArray?.hourly?.weather_code[localId]}</h4>
              <h4>{myArray?.hourly?.surface_pressure[localId]}</h4>
              <h4>{myArray?.hourly?.cloud_cover[localId]}</h4>
              <h4>{myArray?.hourly?.cloud_cover_low[localId]}</h4>
              <h4>{myArray?.hourly?.cloud_cover_mid[localId]}</h4>
              <h4>{myArray?.hourly?.cloud_cover_high[localId]}</h4>
              <h4>{myArray?.hourly?.visibility[localId]}</h4>
              <h4>{myArray?.hourly?.wind_speed_10m[localId]}</h4>
              <h4>{myArray?.hourly?.wind_direction_10m[localId]}</h4>
              <h4>{myArray?.hourly?.uv_index[localId]}</h4>
              <h4>{myArray?.hourly?.sunshine_duration[localId]}</h4>
            </div>
          )
      })}

      <button onClick={()=>handleClick()}>X</button>
    </section>
  )
      
}
export default OneDay;
