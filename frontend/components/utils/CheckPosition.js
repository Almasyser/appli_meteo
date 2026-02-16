
import { useEffect, useState } from "react";
function CheckPosition({setUserLocation}){
  useEffect(()=>{
    GetPosition();
  },[]);
  const GetPosition=()=>{
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({latitude, longitude})
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
}
export default CheckPosition;
    