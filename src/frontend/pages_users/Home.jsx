import { useState } from "react";
import "./home.css";
import Header from "./components/header/Header";
import ModalLocation from "./components/location/Location";
import ModalWeather from "./components/weather/Weather";
import ModalWind from "./components/wind/Wind";
import ModalComments from "./components/comments/Comments";
import ModalFooter from "./components/footer/Footer";
import ModalFiveDays from "./components/fiveDays/FiveDays";
function Page14 () {
  const [ toggleFiveDays, setToggleFiveDays ] = useState(false);
  return (
    <>
    <div className="body">
      <Header />
      <div className="location-section">
        <ModalLocation />
      </div>
      {!toggleFiveDays? 
      <>
        <div className="weather-section">
          <ModalWeather />
          <ModalWind />
        </div>
        <ModalComments />
      </>:
      <>
        <ModalFiveDays setToggleFiveDays={setToggleFiveDays} toggleFiveDays={toggleFiveDays}/>
      </>
    }
      <ModalFooter />
    </div>
    </>
  )
} 
export default Page14;
//  