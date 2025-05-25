import { create } from "zustand";
export const useCityStore = create((set)=>({
  latitude : () => set((state)=> ({ latitude: state.latitude})),
    longitude: "6.12",
    city_code:"",
    zip_code: "",
    department_name: "",
    department_number: "",
    region_name:""
 
  

}))