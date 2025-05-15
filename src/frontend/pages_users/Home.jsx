import { useState } from "react";
import Header from "./components/header/Header";
import ModalLocation from "./components/location/Location";
import ModalWeather from "./components/weather/Weather";
import ModalComments from "./components/comments/Comments";
import ModalFooter from "./components/footer/Footer";
import ModalFiveDays from "./components/fiveDays/FiveDays";
import "./home.css";
function Home () {
  const [ toggleFiveDays, setToggleFiveDays ] = useState(false);

  return (
    <>
      <div className="body">
        <Header />
        <div className="location-section">
          <ModalLocation />
        </div>
        {/* {!toggleFiveDays?  */}
        <>
          <div className="weather-section">
            <ModalWeather />
            {toggleFiveDays? <ModalFiveDays setToggleFiveDays={setToggleFiveDays} toggleFiveDays={toggleFiveDays}/>:null}
          </div>
          <ModalComments />
        </>      
        
      <ModalFooter setToggleFiveDays={setToggleFiveDays}/>
      </div>
    </>
  )
} 
export default Home;
//  