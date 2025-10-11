import { useState, useEffect } from 'react';
import NavBar from '../components/navBar/navbar';
import Header from "../components/header/Header";
import Location from "../components/location/Location";
import Weather from "../components/weather/Weather";
import "./home.css";
function Home () {
  const [meteoData, setMeteoData] = useState(null);
  return (
    <div className="body-container">
      <NavBar />
      <Header />
      <div className="location-section">
        <Location />
      </div>
      <div className="weather-section">
        <Weather meteoData={meteoData} setMeteoData={setMeteoData}/>
      </div>
    </div>
  )
} 
export default Home;
  