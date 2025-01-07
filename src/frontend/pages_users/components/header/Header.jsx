import "./header.css";
import { useDate } from "../../hooks/useDate";
import { useMemo } from "react";
function Header() {
  const { today, updateToday, dateJMA, jour, heure, minute } = useDate()

  useMemo(() =>{
    updateToday();
  },[updateToday])
 

  console.log("todayNow",today);
  
  return (
    <div className="header-container">
      <p className="header-date">{jour}&nbsp;{dateJMA}</p>
      <div className="hour-box">
        <p className="header-hour">{heure}</p>
        <p className="hour-dots">:</p>
        <p className="header-hour">{minute}</p>
      </div>
    </div>
  )
  
}
export default Header;