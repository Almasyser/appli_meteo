import {create} from 'zustand';
export const useWeatherDatas = create((set) =>({
    temperature_2m:"__°C",
    apparent_temperature_2m:"__°C",
    precipitation_probability:"___%",
    precipitation:"===mm",
    cloud_cover_low:"___",
    wind_speed_10m:"___km/h",
    wind_direction_10m:"_____",
    updateTemperature_2m: (state)=>set({city_code: state}),
    updateApparent_temperature_2m: (state)=>set({city_code: state}),
    updatePrecipitation_probability: (state)=>set({city_code: state}),
    updatePrecipitation: (state)=>set({city_code: state}),
    updateCloud_cover_low: (state)=>set({city_code: state}),
    updateWind_speed_10m: (state)=>set({city_code: state}),
    updateWind_direction_10m: (state)=>set({city_code: state})
  }))