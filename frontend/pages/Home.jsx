import { useState} from 'react';
import Header from "../components/header/Header";
import ModalLocation from "../components/location/Location";
import ModalWeather from "../components/weather/Weather";
import ModalComments from "../components/comments/Comments";
import ModalFooter from "../components/footer/Footer";
import CheckPosition from "../components/utils/CheckPosition";
import "./home.css";
function Home () {
  const [userLocation, setUserLocation]=useState(null);
  const handleClick=()=>{
    const coordonnees = <CheckPosition userLocation={userLocation} setUserLocation={setUserLocation}/>;
    // console.log(coordonnees);
    
  }
  
  return (
    <>
      <div className="body">
        <Header />
        <div className="location-section">
          <ModalLocation />
        </div>
        <>
          <div className="weather-section">
            <ModalWeather />
          </div>
          <ModalComments />
        </>      
        <ModalFooter />
        <button onClick={handleClick}>Position</button>
      </div>
    </>
  )
} 
export default Home;
  