import { useRef, useState } from "react";
import useArray from "../../hooks/useArray";
import ConvertDataJMA from "../utils/ConvertDateJMA";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import OneDay from "../oneDay/OneDay";
import omm_codes from "../../json/omm_codes.json";
import tags from "../../assets/tags";
import parapluie from "../../assets/parapluie.png";
import fleche_bas_128 from "../../assets/Fleche bas_128.png"
import temp_mini from "../../assets/temp_mini.jpg";
import temp_maxi from "../../assets/temp_maxi.jpg";
import "./fiveDays.css";

function FiveDays(){
  const [showOneDay, setShowOneDay] = useState(false);
  const [dayId, setDayId] = useState(0);
  const [dayIndex] = useState([0,1,2,3,4,5]);
  const { myArray } = useArray();
  const ref = useRef()
  const handleClick=(e)=>{
    setShowOneDay(true);
    // console.log("///",e.target.title);
    setDayId(e.target.title);
  }
  console.log("555",myArray.daily);
  
  return (
    <>
    <div className="fiveDays-box">
      {myArray.daily && dayIndex.map((btn)=>{
        return(
          <section className="fiveDays-card" key={btn}>
            <div className="fiveDays-date">
              <p className="fiveDays-dayOfWeek"><DayOfWeek today={myArray.daily.sunset[btn]}/></p>
              <p className="fiveDays-dateJMA"><ConvertDataJMA dateISO={myArray.daily.sunset[btn]} /></p>
            </div>
            <div className="fiveDays-tempLine"><img src={temp_mini} alt="min"/><p className="fiveDays-temperature">{myArray.daily.temperature_2m_min[btn]}</p>
            </div>
            <div className="fiveDays-tempLine">
              <img src={temp_maxi} alt="max"/><p className="fiveDays-temperature">{myArray.daily.temperature_2m_max[btn]}</p>
            </div>
            <span className="fiveDays-ephemeride"><img src={tags["Soleil"]} alt="@"/><p><DateToHour today={myArray.daily.sunrise[btn]}/></p></span>
            <span className="fiveDays-ephemeride"><img src={tags["Lune"]} alt="@"/><p><DateToHour today={myArray.daily.sunset[btn]}/></p></span>
            <p className="fiveDays-tendance">{omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].abrege}</p>
            <img src={tags[omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].file]} alt="==="/>
            <span className="fiveDays-rain-box">
              <img src={parapluie} alt="#" />
              <h4>{myArray.hourly.precipitation_probability[(btn*24)-24, btn*24]}%</h4>
            </span>
            <img ref={ref} className="img-details" src={fleche_bas_128} alt="@@" title={btn} onClick={(title)=>handleClick(title)} />
          </section>
        )})}
    </div>
    <OneDay btn={dayId} showOneDay={showOneDay} setShowOneDay={setShowOneDay} />
  </>
  )   
}

export default FiveDays;
    