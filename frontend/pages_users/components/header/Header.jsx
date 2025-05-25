import { useEffect, useState } from "react";
import ConvertDateJMA from "../utils/ConvertDateJMA";
import jours from "../../json/jours.json";
import "./header.css";
function Header() {
  const [ today, setToday ] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() =>{
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  },[]);
  const dateJMA = ConvertDateJMA(today); 
  const jour = jours[today.getDay()];
  const heure = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const seconde = String(today.getSeconds()).padStart(2,'0');
  return (
    <div className="header-container">
      <p className="header-date">{jour}&nbsp;{dateJMA}</p>
      <div className="hour-box">
        <p className="header-hour">{heure}</p>
        <p className="hour-dots">:</p>
        <p className="header-hour">{minute}</p>
        <p className="header-second">{seconde}</p>
      </div>
    </div>
  )
}
export default Header;