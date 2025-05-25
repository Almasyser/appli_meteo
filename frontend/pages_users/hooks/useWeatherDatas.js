import {create} from 'zustand';
const useWeatherDatas = create((set) =>({
    temperature_2m: 0,
    apparent_temperature: 0,
    precipitation_probability: 0,
    precipitation: 0,
    cloud_cover: 0,
    wind_speed_10m: 0,
    wind_direction_10m:"_____",
    is_day: null,
    is_dayBackground: "",
    weather_code: 3,
    updateTemperature_2m: (value)=>set({temperature_2m: value}),
    updateApparent_temperature: (value)=>set({apparent_temperature: value}),
    updatePrecipitation_probability: (value)=>set({precipitation_probability: value}),
    updatePrecipitation: (value)=>set({precipitation: value}),
    updateCloud_cover: (value)=>set({cloud_cover: value}),
    updateWind_speed_10m: (value)=>set({wind_speed_10m: value}),
    updateWind_direction_10m: (value)=>set({wind_direction_10m: value}),
    updateIs_day: (value)=>set({is_day: value}),
    updateWeather_code: (value)=>set({weather_code: value})
  }));
  export default useWeatherDatas;