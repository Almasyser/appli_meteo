import { useEffect } from 'react';
import FetchApiStatic from '../../components/utils/FetchApiStatic';
import useLocations from '../../hooks/useLocations';
import useArray from '../../hooks/useArray';
import NavBar from '../../components/navBar/navbar';
import Header from "../../components/header/Header";
import FiveDays from '../../components/fiveDays/FiveDays';
import Location from "../../components/location/Location";
import "./home.css";
function Home () {
  const {myArray, updateMyArray} = useArray();
  const {latitude, longitude} = useLocations();
  useEffect(()=>{
    FetchApiStatic(latitude, longitude, updateMyArray);
  },[latitude, longitude, updateMyArray]);
  return (
      <div className="body-container">
          <NavBar />
          <Header />
          <div className="location-section">
            <Location />
          </div>
          <div>
            {Object.keys(myArray).length > 0? <FiveDays />: null}
          </div>
    </div>
  )
} 
export default Home;

