import "./header.css";
import ConvertDateJMA from '../utils/ConvertDateJMA';
import { useEffect, useState } from "react";
function Header() {
  const [ today, setToday ] = useState(new Date());
  const jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ];
  useEffect(() => {
    const interval = setInterval(() =>{
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  },[]);
  const dateJMA = ConvertDateJMA(today); // ConvertDateJMA(today),
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