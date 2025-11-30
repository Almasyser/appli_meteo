import { useState, useEffect } from "react";
import axios from "axios";
import "./options.css";
import { fetchWeatherApi } from "openmeteo";
function Options({showOptions}) {
  const [myArchive, setMyArchive] = useState();
  const [isLoading, setIsLoading] = useState();
  const params = {
	  lat: 52.52,
	  long: 13.41,
	  start: "2025-11-14",
	  end: "2025-11-28",
  };

  useEffect(() => {
    const url =`https://archive-api.open-meteo.com/v1/archive?latitude=${params.lat}&longitude=${params.long}&start_date=${params.start}&end_date=${params.end}&hourly=temperature_2m`
    const fetchData = async () => {
      if (!params.lat || !params.long) return;
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        await setMyArchive(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  },[]);
  console.log(myArchive);
  
  
  return (
    <section className={showOptions? "options-container active":"options-container"}>
      <div>Options{isLoading}</div>

    </section>
  )
}
export default Options;
   // const url = `https://api.open-meteo.com/v1/archive?latitude=${params.latitude}&longitude=${params.longitude}&start_date=${params.start_date}&end_date=${params.end_date}&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,weather_code,surface_pressure,cloud_cover,wind_speed_10m,wind_direction_10m,uv_index&timezone=GMT`;