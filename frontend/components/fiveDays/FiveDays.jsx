import { useState } from "react";
import useArray from "../../hooks/useArray";
import ConvertDataJMA from "../utils/ConvertDateJMA";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import omm_codes from "../../json/omm_codes.json";
import tags from "../../assets/tags";
import "./fiveDays.css";
  function FiveDays({setShowFive}){
    const [dayIndex] = useState([1,2,3,4,5]);
    const { myArray}= useArray();
  
    return (
      <div className="fiveDays-box">
        {dayIndex && dayIndex.map((btn,index)=>{
          return(
            <div key={btn} className="fiveDays-container">
              {btn &&
                <div className="fiveDays-card" onClick={()=>setShowFive(false)}>
                  <div className="fiveDays-date">
                    <p className="fiveDays-dayOfWeek"><DayOfWeek today={myArray.daily.sunset[btn]}/></p>
                    <p className="fiveDays-dateJMA"><ConvertDataJMA dateISO={myArray.daily.sunset[btn]} /></p>
                  </div>
                  <span className="fiveDays-ephemeride"><img src={tags["Soleil"]} alt="--@--"/><p><DateToHour today={myArray.daily.sunrise[btn]}/></p></span>
                  <span className="fiveDays-ephemeride"><img src={tags["Lune"]} alt="--@--"/><p><DateToHour today={myArray.daily.sunset[btn]}/></p></span>
                  <p className="fiveDays-tendance">{omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].text}</p>
                  <img src={tags[omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].file]} alt="==="/>
                </div>
              }
            </div>
          )})}
      </div>
    )   
  }

  export default FiveDays;
