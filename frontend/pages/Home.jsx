import { useState} from 'react';
import Header from "../components/header/Header";
import Location from "../components/location/Location";
import Weather from "../components/weather/Weather";
import Comments from "../components/comments/Comments";
import Footer from "../components/footer/Footer";
import NavBar from '../components/navBar/navbar';
// import CheckPosition from "../components/utils/CheckPosition";
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
      <Comments />
      <Footer />
    </div>
  )
} 
export default Home;
  