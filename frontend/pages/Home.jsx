import { lazy, useState } from 'react';
import FetchApiStatic from '../components/utils/FetchApiStatic';
import useLocations from '../hooks/useLocations';
import useArray from '../hooks/useArray';
import NavBar from '../components/navBar/navbar';
import Header from "../components/header/Header";
import Location from "../components/location/Location";
import "./home.css";
const Weather = lazy(()=> import("../components/weather/Weather"));
function Home () {
  const {myArray, updateMyArray} = useArray();
  const {latitude, longitude} = useLocations();
  const [isLoading, setIsLoading] = useState(false);
  FetchApiStatic(latitude, longitude, updateMyArray, setIsLoading);
  return (
      <div className="body-container">
          <NavBar />
          <Header />
          <div className="location-section">
            <Location />
          </div>
          <div className="weather-section">
            {!isLoading && myArray && <Weather />}
          </div>
    </div>
  )
} 
export default Home;

