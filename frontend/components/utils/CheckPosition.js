
import { useEffect, useState } from "react";
function CheckPosition({userLocation, setUserLocation}){
  
  useEffect(()=>{
    GetPosition();
  },[]);
  const GetPosition=()=>{
    if (navigator.geolocation){
      console.log("YES");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("### ",{latitude, longitude})
        },
        (error) =>{console.error("erreur:", error.message);
        },
        {enableHighAccuracy: true,
          timeout: 5000,
          maximumAge:0
        }
      )} else{
        console.error("Geo localisation non supportée");
      };
    }
  userLocation && console.log("==>",userLocation);
  return userLocation;
}
export default CheckPosition;
    