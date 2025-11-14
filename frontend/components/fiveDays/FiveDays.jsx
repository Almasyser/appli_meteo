import { useRef, useState } from "react";
import useArray from "../../hooks/useArray";
import ConvertDataJMA from "../utils/ConvertDateJMA";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import OneDay from "../oneDay/OneDay";
import DetailsDay from "../detailsDay/DetailsDay";
import omm_codes from "../../json/omm_codes.json";
import tags from "../../assets/tags";
import parapluie from "../../assets/parapluie.png";
import "./fiveDays.css";

  function FiveDays({setShowFive, showFive}){
    const [showOneDay, setShowOneDay] = useState(false);
    const [noYear, setNoYear] = useState(false);
    const [dayId, setDayId] = useState(0);
    const [dayIndex] = useState([1,2,3,4,5,6]);
    const { myArray } = useArray();
    const handleClick=(e)=>{
      setShowOneDay(true);
      console.log("///",e.target.title);
      const temp = e.target.title;
      temp && setDayId(temp);
    }
     
    return (
      <>
      <div className={showFive? "fiveDays-box active":"fiveDays-box"}>
        {myArray.daily && dayIndex.map((btn)=>{
          return(
            <div key={btn}>
              {btn &&
              <>
                <section className="fiveDays-card" >
                  <div className="fiveDays-date">
                    <p className="fiveDays-dayOfWeek"><DayOfWeek today={myArray.daily.sunset[btn]}/></p>
                    {/* <p className="fiveDays-dateJMA"><ConvertDataJMA dateISO={myArray.daily.sunset[btn]} /></p> */}
                  </div>
                  <span className="fiveDays-ephemeride"><img src={tags["Soleil"]} alt="@"/><p><DateToHour today={myArray.daily.sunrise[btn]}/></p></span>
                  <span className="fiveDays-ephemeride"><img src={tags["Lune"]} alt="@"/><p><DateToHour today={myArray.daily.sunset[btn]}/></p></span>
                  <p className="fiveDays-temp">{myArray.daily.apparent_temperature_max[btn]}°C</p>
                  <p className="fiveDays-tendance">{omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].text}</p>
                  <img className="fiveDays-nuage" src={tags[omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].file]} alt="==="/>
                  <span className="fiveDays-rain-box">
                    <img src={parapluie} alt="#" />
                    <h4>{myArray.hourly.precipitation_probability[(btn*24)-24, btn*24]}%</h4>
                  </span>
                  <button className="btn-details" title={btn} onClick={handleClick}>Détails</button>
                </section>
                </>
              }
            </div>
          )})}
      </div>
      <OneDay btn={dayId} showOneDay={showOneDay} setShowOneDay={setShowOneDay} />
      {/* {showDetailsDay && <DetailsDay btn={dayId} showDetailsDay={showDetailsDay} setShowDetailsDay={setShowDetailsDay} />} */}
    </>
    )   
  }

  export default FiveDays;
