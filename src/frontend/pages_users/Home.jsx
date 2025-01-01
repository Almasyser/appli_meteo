import "./home.css";
import Header from "./components/header/Header";
import ModalLocation from "./components/location/Location";
import ModalWeather from "./components/weather/Weather";
import ModalWind from "./components/wind/Wind";
import ModalComments from "./components/comments/Comments";
import ModalFooter from "./components/footer/Footer";
function Page14 () {
  return (
    <>
    <div className="body">
      <Header />
      <ModalLocation />
      <ModalWeather />
      <ModalWind />
      <ModalComments />
      <ModalFooter />
      
    </div>
    </>
  )
}
export default Page14;