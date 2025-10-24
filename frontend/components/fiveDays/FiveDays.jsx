import { useRef, useState } from "react";
import useArray from "../../hooks/useArray";
import ConvertDataJMA from "../utils/ConvertDateJMA";
import DateToHour from "../utils/DateToHour";
import DayOfWeek from "../utils/DayOfWeek";
import OneDay from "../oneDay/OneDay";
import DetailsDay from "../DetailsDay/DetailsDay";
import omm_codes from "../../json/omm_codes.json";
import tags from "../../assets/tags";
import parapluie from "../../assets/parapluie.png";
import fleche_bas_128 from "../../assets/Fleche bas_128.png"
import "./fiveDays.css";

  function FiveDays({setShowFive, showFive}){
    const [showOneDay, setShowOneDay] = useState(false);
    const [showDetailsDay, setShowDetailsDay] = useState(false);
    const [dayId, setDayId] = useState(0);
    const [dayIndex] = useState([1,2,3,4,5,6]);
    const { myArray } = useArray();
    const ref = useRef()
    const handleClick=(e)=>{
        // setShowFive(false);
        setShowOneDay(true);
        console.log("///",e.target.title);
        setDayId(e.target.title);
        
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
                    <p className="fiveDays-dateJMA"><ConvertDataJMA dateISO={myArray.daily.sunset[btn]} /></p>
                  </div>
                  <span className="fiveDays-ephemeride"><img src={tags["Soleil"]} alt="@"/><p><DateToHour today={myArray.daily.sunrise[btn]}/></p></span>
                  <span className="fiveDays-ephemeride"><img src={tags["Lune"]} alt="@"/><p><DateToHour today={myArray.daily.sunset[btn]}/></p></span>
                  <p className="fiveDays-tendance">{omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].text}</p>
                  <img src={tags[omm_codes.filter(el => el.code === myArray.daily.weather_code[btn])[0].file]} alt="==="/>
                  <span className="fiveDays-rain-box">
                    <img src={parapluie} alt="#" />
                    <h4>{myArray.hourly.precipitation_probability[(btn*24)-24, btn*24]}%</h4>
                  </span>
                  <img ref={ref} className="img-details" src={fleche_bas_128} alt="@@" title={btn} onClick={(title)=>handleClick(title)} />
                  <h4 className="btn-details" title={btn} onClick={()=> setShowDetailsDay(true)}>plus de détails</h4>
                </section>
                </>
              }
            </div>
          )})}
      </div>
      <OneDay btn={dayId} showOneDay={showOneDay} setShowOneDay={setShowOneDay} />
      {showDetailsDay && <DetailsDay btn={dayId} showDetailsDay={showDetailsDay} setShowDetailsDay={setShowDetailsDay} />}
    </>
    )   
  }

  export default FiveDays;

  // <RainDaily myArray={myArray} btn={btn} setMaxValue={setMaxValue} setMaxIndex={setMaxIndex}/>
  //                 <span className="fiveDays-rain-box">
  //                   <img src={parapluie} alt="^^"/>
  //                   <h3>{maxValue}% vers {maxIndex} heure</h3>
  //                 </span>