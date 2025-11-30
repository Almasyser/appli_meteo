import { lazy, useState } from 'react';
import FetchApiStatic from '../components/utils/FetchApiStatic';
import useLocations from '../hooks/useLocations';
import useArray from '../hooks/useArray';
import NavBar from '../components/navBar/navbar';
import Header from "../components/header/Header";
import Location from "../components/location/Location";
import "./home.css";
const FiveDays = lazy(()=> import("../components/fiveDays/FiveDays"));
function Home () {
  const {myArray, updateMyArray} = useArray();
  let {latitude, longitude} = useLocations();
  const [isLoading, setIsLoading] = useState(false);
  if(typeof window != "undefined"){
    longitude= localStorage.getItem("longitude");
    longitude= localStorage.getItem("longitude");
  } 
  FetchApiStatic(latitude, longitude, updateMyArray, setIsLoading);
  return (
    <div className="body-container">
      <NavBar />
      <Header />
      <div className="location-section">
        <Location />
      </div>
      {!isLoading && myArray && <FiveDays />}
    </div>
  )
} 
export default Home;

