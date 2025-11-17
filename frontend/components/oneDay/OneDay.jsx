
import hourlyLabels from "../../json/hourlyLabels.json";
import omm_codes from "../../json/omm_codes.json";
import useArray from "../../hooks/useArray";
import DateToHour from "../utils/DateToHour";
import tags from "../../assets/tags";
import "./oneday.css";

function OneDay({btn, showOneDay, setShowOneDay}){
  const { myArray } = useArray();
  const intervals =[0,4,8,12,16,20,24];
  const handleClick=()=>{
    setShowOneDay(false);
  }
  return(
    <section className={showOneDay? "oneDay-container active":"oneDay-container"}>
      <span className="oneDay-entete">
        <h3>Prévisions du jour.</h3>
        <button className="btn-retour" onClick={handleClick}>Retour</button>
      </span>
      <div className="oneDays-datas">

        <div className="oneDay-box">
          {myArray && intervals && intervals.map((el)=>{
            const localId=(btn*24)-24+el; 
            return(
              <span key={el} className="oneDay-card">

                <h4><DateToHour today={myArray?.hourly?.time[localId] ?? "n/a"}/></h4><h4>{hourlyLabels[0].unit}</h4>
 
                <div>
                  <h4>{myArray?.hourly?.temperature_2m[localId]}</h4>
                  <h4>/</h4>
                  <h4>{myArray?.hourly?.apparent_temperature[localId]}</h4><h4>{hourlyLabels[2].unit} </h4>
                </div> 

                <div><h4>{myArray?.hourly?.precipitation_probability[localId]}</h4><h4>{hourlyLabels[3].unit} </h4></div>

                <div>
                  <h4>{myArray?.hourly?.showers[localId]}</h4><h4>{hourlyLabels[5].unit}</h4>
                  <h4>{myArray?.hourly?.snowfall[localId]}</h4><h4>{hourlyLabels[6].unit}</h4>          
                  <h4>{myArray?.hourly?.snow_depth[localId]}</h4><h4>{hourlyLabels[7].unit}</h4> 
                </div>  

                <div><h4>{myArray?.hourly?.cloud_cover[localId]}</h4><h4>{hourlyLabels[10].unit}</h4></div> 

                <div>
                  <h4>{myArray?.hourly?.wind_speed_10m[localId]}</h4><h4>{hourlyLabels[15].unit}</h4>              
                  <h4>{myArray?.hourly?.wind_direction_10m[localId]}</h4><h4>{hourlyLabels[16].unit}</h4>
                </div>               
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default OneDay;

{/* <div><h4>{myArray?.hourly?.surface_pressure[localId]}</h4><h4>{hourlyLabels[9].unit}</h4></div>  */}
{/* <div><h4>{myArray?.hourly?.visibility[localId]}</h4><h4>{hourlyLabels[14].unit}</h4></div>                */}
{/* <div><h4>{myArray?.hourly?.uv_index[localId]}</h4><h4>{hourlyLabels[17].unit}</h4></div> */}
