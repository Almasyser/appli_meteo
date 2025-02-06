import {create} from 'zustand';
export const useWeatherDatas = create((set) =>({
    temperature_2m:"__°C",
    apparent_temperature:"__°C",
    precipitation_probability:"___%",
    precipitation:"===mm",
    cloud_cover_low:"___",
    wind_speed_10m:"___km/h",
    wind_direction_10m:"_____",
    is_day: 0,
    updateTemperature_2m: (value)=>set({temperature_2m: value}),
    updateApparent_temperature: (value)=>set({apparent_temperature: value}),
    updatePrecipitation_probability: (value)=>set({precipitation_probability: value}),
    updatePrecipitation: (value)=>set({precipitation: value}),
    updateCloud_cover_low: (value)=>set({cloud_cover_low: value}),
    updateWind_speed_10m: (value)=>set({wind_speed_10m: value}),
    updateWind_direction_10m: (value)=>set({wind_direction_10m: value}),
    updateIs_day: (value)=>set({is_day: value})
  }))