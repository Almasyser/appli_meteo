import { useState} from 'react';
import Header from "../components/header/Header";
import Location from "../components/location/Location";
import Weather from "../components/weather/Weather";
import NavBar from '../components/navBar/navbar';
import "./home.css";
function Home () {
  return (
    <div className="body-container">
      <NavBar />
      <Header />
      <div className="location-section">
        <Location />
      </div>
      <div className="weather-section">
        <Weather />
      </div>
    </div>
  )
} 
export default Home;
  