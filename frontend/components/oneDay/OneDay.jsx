
import hourlyLabels from "../../json/hourlyLabels.json";
import omm_codes from "../../json/omm_codes.json";
import useArray from "../../hooks/useArray";
import DateToHour from "../utils/DateToHour";
import tags from "../../assets/tags";
import parapluie from "../../assets/parapluie.png";
import parapluie_ferme from "../../assets/parapluie_ferme.png";
import flocon from "../../assets/flocon_blanc.png";
import gouttes_pluie from "../../assets/gouttes_pluie.png";
import skieur from "../../assets/skieur.png";
import SelectWindLabel from "../utils/SelectWindLabel";
import ConvertWindDirection from "../utils/ConvertWindDirection";
import "./oneday.css";
function OneDay({btn, showOneDay, setShowOneDay}){
  const { myArray } = useArray();
  const hourIndex =[0,4,8,12,16,20,24];
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
          {myArray && hourIndex && hourIndex.map((el)=>{
            const localId=(btn*24)-24+el; 
            return(
              <span key={el} className="oneDay-card">
                <h4><DateToHour today={myArray?.hourly?.time[localId] ?? "n/a"}/></h4><h4>{hourlyLabels[0].unit}</h4>
                <div className="oneDay-temp">
                  <h4>{myArray?.hourly?.temperature_2m[localId]}{hourlyLabels[2].unit} </h4>
                  <h4>/</h4>
                  <h4>{myArray?.hourly?.apparent_temperature[localId]}{hourlyLabels[2].unit} </h4>
                </div> 

                {/* {tags && omm_codes && <img className="oneDay-nuage" src={tags[omm_codes.filter(el => el.code === myArray?.hourly?.weather_code[24])[0].file]} alt="==="/>} */}
                <div className="oneDay-proba">
                  <>
                  {(myArray?.hourly?.precipitation_probability[localId] >= 1)? 
                    <img src={parapluie} alt="==="/>:<img src={parapluie_ferme} alt="=!="/>
                  }
                  </>
                  <h4>{myArray?.hourly?.precipitation_probability[localId]} {hourlyLabels[3].unit} </h4>
                </div>
                <div className="oneDay-levels">
                  <div><img src={gouttes_pluie} alt="!==" /><h4>{myArray?.hourly?.showers[localId]} {hourlyLabels[5].unit}</h4></div>
                  <div><img src={flocon} alt="==!" /><h4>{myArray?.hourly?.snowfall[localId]} {hourlyLabels[6].unit}</h4></div>         
                  <div><img src={skieur} alt="==!" /><h4>{myArray?.hourly?.snow_depth[localId]} {hourlyLabels[7].unit}</h4></div> 
                </div>  
                <div><h4>{myArray?.hourly?.cloud_cover[localId]}</h4><h4>{hourlyLabels[10].unit}</h4></div> 
                <div className="oneDay-wind">
                  <SelectWindLabel windSpeed={Math.round(myArray?.hourly?.wind_speed_10m[localId])}/>
                  {myArray && <ConvertWindDirection angle={myArray?.hourly?.wind_direction_10m[localId]} />}
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
