import { useState } from "react";
import Header from "./components/header/Header";
import ModalLocation from "./components/location/Location";
import ModalWeather from "./components/weather/Weather";
import ModalComments from "./components/comments/Comments";
import ModalFooter from "./components/footer/Footer";
import "./home.css";
function Home () {
  
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
            
          </div>
          <ModalComments />
        </>      
      <ModalFooter />
      </div>
    </>
  )
} 
export default Home;
  