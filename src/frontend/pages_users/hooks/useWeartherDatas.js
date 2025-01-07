import {create} from 'zustand';
export const useWeatherDatas = create(() =>({
    latitude: "55.12",
    longitude: "45.25",
    temperature_2m:"__°C",
    apparent_temperature_2m:"__°C",
    precipitation_probability:"___%",
    precipitation:"===mm",
    cloud_cover_low:"___",
    wind_speed_10m:"___km/h",
    wind_direction_10m:"_____",
  }))