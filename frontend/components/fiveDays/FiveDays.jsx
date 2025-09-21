import { useState } from "react";
import ConvertDataJMA from "../utils/ConvertDateJMA";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import omm_codes from "../../json/omm_codes.json";
import tags from "../../assets/tags";
import "./fiveDays.css";
  function FiveDays(props){
    const [dayIndex] = useState([1,2,3,4,5]);
    const [id_day, setId_day] = useState();
    const [today, setToday] = useState();
    const [tendance, setTendance] = useState();
    const {meteoData} = props;
    const handleClick = (e)=>{
      const e_day = parseInt(e.target.value, 10);
      setToday(meteoData.daily.sunset[e_day]);
      setTendance(omm_codes.filter(el => el.code === meteoData.daily.weather_code[e_day]));
      setId_day(e_day);
    }
    return (
      <section className="fiveDays">
        <div className="fiveDays-box">
          {dayIndex && dayIndex.map((btn,index)=>{
            return(
              <button 
                type="radio" 
                key={index} 
                value={btn} 
                name="btnDay" 
                onClick={handleClick}>
                <DayOfWeek today={meteoData.daily.time[btn]}/>
              </button>
            )
          })}
        </div>
        <div className="fiveDays-container">
          {id_day &&
            <>
              <div className="fiveDays-card">
                <div className="fiveDays-date">
                  {today && 
                    <>
                      <p className="dayOfWeek"><DayOfWeek today={today}/></p>
                      <p className="dateJMA"><ConvertDataJMA dateISO={today} /></p>
                    </>
                  }
                </div>
                <span className="ephemeride"><img src={tags["Soleil"]} alt="--@--"/><p><DateToHour today={meteoData.daily.sunrise[id_day]}/></p></span>
                <span className="ephemeride"><img src={tags["Lune"]} alt="--@--"/><p><DateToHour today={meteoData.daily.sunset[id_day]}/></p></span>
                <p className="tendance">{tendance[0].text}</p>
                <img src={tags[tendance[0].file]} alt="==="/>
              </div>
            </>}
        </div>
      </section>
    )   
  }
  export default FiveDays;
