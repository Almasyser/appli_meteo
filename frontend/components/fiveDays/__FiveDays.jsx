import { useState, useEffect } from "react";
import ConvertDataJMA from "../utils/ConvertDateJMA";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import omm_codes from "../../json/omm_codes.json";
import tags from "../utils/tags";
import "./fiveDays.css";
  function FiveDays(props){
    const [dayIndex] = useState([0,1,2,3,4])
    const {meteoData} = props;
    return (
      <section className="fiveDays">
        <div className="fiveDays-header">
          <p>altitude {meteoData.elevation} m</p>
          <p>latitude {meteoData.latitude}</p>
          <p>longitude {meteoData.longitude}</p>
        </div>
        <div className="fiveDays-container">
        {dayIndex && dayIndex.map((id_day, index)=>{
          let today = meteoData.daily.sunset[id_day];
          const tendance = omm_codes.filter(el => el.code === meteoData.daily.weather_code[id_day]);
          return(
            <div key={index} className="fiveDays-card">
              <div className="todayDate">
                {today && 
                <>
                  <p><DayOfWeek today={today}/></p>
                  <p><ConvertDataJMA dateISO={today} /></p>
                </>
                }
              </div>
              <br/>
              <p>levé du soleil: <DateToHour today={meteoData.daily.sunrise[id_day]}/></p>
              <p>coucher de soleil: <DateToHour today={meteoData.daily.sunset[id_day]}/></p>
              <p>tendance {tendance[0].text}</p>
              <img src={tags[tendance[0].file]} alt="==="/>
            </div>
          )
          }
          )
          }
        </div>
      </section>
    )   
  }
  export default FiveDays;