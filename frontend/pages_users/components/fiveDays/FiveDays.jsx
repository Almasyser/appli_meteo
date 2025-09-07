import { useState } from "react";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import omm_codes from "../../json/omm_codes.json";
import "./fiveDays.css";
  function FiveDays(props){
    const [dayIndex, setIndex] = useState([0,1,2,3,4,5,6])
    const {meteoData} = props;
    return (
      <>
        <div className="uwd-header">
          <p>altitude {meteoData.elevation} m</p>
          <p>latitude {meteoData.latitude}</p>
          <p>longitude {meteoData.longitude}</p>
        </div>
        <div className="uwd-container">
        {dayIndex && dayIndex.map((id_day, index)=>{
          let today = meteoData.daily.sunset[id_day];
          const tendance = omm_codes.filter(el => el.code === meteoData.daily.weather_code[id_day]);
          return(
            <div key={index} className="uwd-card">
              <p>aujourd'hui</p>
              {today && <DayOfWeek today={today}/>}
              <br/>
              <p>levé soleil</p><DateToHour today={meteoData.daily.sunrise[id_day]}/>
              <p>coucher soleil</p> <DateToHour today={meteoData.daily.sunset[id_day]}/>
              <p>tendance {tendance[0].text}</p>
            </div>
          )
        }
      )
    }
      </div>
    </>
    )   
  }
  export default FiveDays;