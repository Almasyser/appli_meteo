import { useState} from 'react';
import Header from "../components/header/Header";
import ModalLocation from "../components/location/Location";
import ModalWeather from "../components/weather/Weather";
import ModalComments from "../components/comments/Comments";
import ModalFooter from "../components/footer/Footer";
// import CheckPosition from "../components/utils/CheckPosition";
import "./home.css";
function Home () {
  const [userLocation, setUserLocation]=useState({});
  const [showPosition, setShowPosition] = useState(false);
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
        {/* <button onClick={()=>setShowPosition(!showPosition)}>Position</button>
        { showPosition && 
        <>
          <CheckPosition setUserLocation={setUserLocation}/> 
          <h4>latitude {userLocation.latitude} - longitude {userLocation.longitude}</h4>
        </>
        } */}
      </div>
    </>
  )
} 
export default Home;
  