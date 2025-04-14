import "./home.css";
// import Header from "./components/header/Header";
// import ModalLocation from "./components/location/Location";
// import ModalWeather from "./components/weather/Weather";
// import ModalWind from "./components/wind/Wind";
// import ModalComments from "./components/comments/Comments";
// import ModalFooter from "./components/footer/Footer";
import { Header, ModalLocation, ModalWeather, ModalWind, ModalComments, ModalFooter } from "./components";
function Page14 () {
  return (
    <>
    <div className="body">
      <Header />
      <div className="location-section">
        <ModalLocation />
      </div>
      <div className="weather-section">
        <ModalWeather />
        <ModalWind />
      </div>
      <ModalComments />
      <ModalFooter />
    </div>
    </>
  )
} 
export default Page14;
//  