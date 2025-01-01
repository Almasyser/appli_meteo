import "./header.css";
import ConvertDateJMA from "../utils/ConvertDateJMA";
function Header() {
  const jours = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ];
  const now = new Date();
  const dateJMA = ConvertDateJMA(now);
  const jour = jours[now.getDay()];
  const heure = String(now.getHours()).padStart(2,'0');
  const minute = String(now.getMinutes()).padStart(2,'0');
  
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