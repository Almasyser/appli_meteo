import { useEffect, useState } from "react";
import ConvertDataJMA from "../utils/ConvertDateJMA";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import RainDaily from "../utils/raindaily";
import omm_codes from "../../json/omm_codes.json";
import tags from "../../assets/tags";
import parapluie from "../../assets/parapluie.png";
import "./fiveDays.css";
  function FiveDays({myArray, setShowFive, showFive}){
    const [dayIndex] = useState([1,2,3,4,5,6]);
    const [maxValue, setMaxValue] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
  
    return (
      <div className={showFive? "fiveDays-box active":"fiveDays-box"}>
        {myArray.daily && dayIndex.map((btn,index)=>{
          return(
            <div key={btn}>
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
                  <RainDaily myArray={myArray} dayIndex={dayIndex} setMaxValue={setMaxValue} setMaxIndex={setMaxIndex}/>
                  {(maxValue > 0)?
                  <span className="fiveDays-rain-box">
                    <img src={parapluie} alt="^^"/>
                    <h3>{maxValue}% vers {maxIndex} heure</h3>
                  </span>
                  : null
                  }
                </div>
              }
            </div>
          )})}
      </div>
    )   
  }

  export default FiveDays;
