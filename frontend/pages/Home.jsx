import FetchApiStatic from '../components/utils/FetchApiStatic';
import useLocations from '../hooks/useLocations';
import useArray from '../hooks/useArray';
import NavBar from '../components/navBar/navbar';
import Header from "../components/header/Header";
import Location from "../components/location/Location";
import Weather from "../components/weather/Weather";
import "./home.css";
import { useMemo } from 'react';
function Home () {
  const {myArray, updateMyArray} = useArray();
  const {latitude, longitude} = useLocations();
  const {isLoading}= FetchApiStatic(latitude, longitude, updateMyArray);
  const weatherMemo = useMemo(()=>{
    return myArray? <Weather />:null;
  }, [myArray])
  return (
    <div className="body-container">
      <NavBar />
      <Header />
      <div className="location-section">
        <Location />
      </div>
      <div className="weather-section">
        {isLoading? <h4>Chargement...</h4>:weatherMemo}
      </div>
    </div>
  )
} 
export default Home;
  