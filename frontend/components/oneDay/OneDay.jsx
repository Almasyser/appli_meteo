
import hourlyLabels from "../../json/hourlyLabels.json";
import omm_codes from "../../json/omm_codes.json";
import useArray from "../../hooks/useArray";
import DateToHour from "../utils/DateToHour";
import Camenbert from "../camenbert/Camenbert";
import "./oneday.css";

function OneDay({btn, showOneDay, setShowOneDay}){
  const { myArray } = useArray();
  const intervals =[0,4,8,12,16,20,24];
  const handleClick=()=>{
    setShowOneDay(false);

  }
  console.log(omm_codes[0].abrege);
  
  return(
    <section className={showOneDay? "oneDay-container active":"oneDay-container"}>
      <span className="oneDay-labels">
        <h4>{hourlyLabels[0].label} </h4>
        <h4>{hourlyLabels[1].label} </h4>
        <h4>{hourlyLabels[2].label} </h4>
        <h4>{hourlyLabels[3].label} </h4>
        <h4>{hourlyLabels[4].label} </h4>
        <h4>{hourlyLabels[5].label} </h4>
        <h4>{hourlyLabels[6].label} </h4>
        <h4>{hourlyLabels[7].label} </h4>
        <h4>{hourlyLabels[8].label} </h4>
        <h4>{hourlyLabels[9].label} </h4>
        <h4>{hourlyLabels[10].label}</h4>
        <h4>{hourlyLabels[14].label}</h4>
        <h4>{hourlyLabels[15].label}</h4>
        <h4>{hourlyLabels[16].label}</h4>
        <h4>{hourlyLabels[17].label}</h4>
      </span>
      {intervals && intervals.map((el)=>{
            const localId=(btn*24)-24+el; 
            return(
              <span key={el} className="oneDay-card">
                <div><h4><DateToHour today={myArray?.hourly?.time[localId] ?? "n/a"}/></h4><h4>{hourlyLabels[0].unit}</h4></div>
                <div><h4>{myArray?.hourly?.temperature_2m[localId]}</h4><h4>{hourlyLabels[1].unit} </h4></div>                   
                <div><h4>{myArray?.hourly?.apparent_temperature[localId]}   </h4><h4>{hourlyLabels[2].unit} </h4></div>           
                <div><h4>{myArray?.hourly?.precipitation_probability[localId]}</h4><h4>{hourlyLabels[3].unit}</h4></div>      
                <div><h4>{myArray?.hourly?.rain[localId]}</h4><h4>{hourlyLabels[4].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.showers[localId]}</h4><h4>{hourlyLabels[5].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.snowfall[localId]}</h4><h4>{hourlyLabels[6].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.snow_depth[localId]}</h4><h4>{hourlyLabels[7].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.weather_code[localId]}</h4><h4>{hourlyLabels[8].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.surface_pressure[localId]}</h4><h4>{hourlyLabels[9].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.cloud_cover[localId]}</h4><h4>{hourlyLabels[10].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.visibility[localId]}</h4><h4>{hourlyLabels[14].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.wind_speed_10m[localId]}</h4><h4>{hourlyLabels[15].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.wind_direction_10m[localId]}</h4><h4>{hourlyLabels[16].unit}</h4></div>               
                <div><h4>{myArray?.hourly?.uv_index[localId]}</h4><h4>{hourlyLabels[17].unit}</h4></div>
                
              </span>
            )
          })}


      <button type="button" onClick={handleClick}>X</button>
    </section>
  )
}
export default OneDay;

{/* <h4>{myArray?.hourly?.precipitation_probability[localId]}  </h4><h4>{hourlyLabels[3].unit} </h4> */}
